/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const JOURNEY_DB = process.env.NOTION_JOURNEY_DB_ID;
const SKILLS_DB = process.env.NOTION_SKILLS_DB_ID;
const NOTION_VERSION = '2022-06-28';

async function fetchNotionDatabase(databaseId) {
  const url = `https://api.notion.com/v1/databases/${databaseId}/query`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Failed to fetch DB ${databaseId}: ${response.status} - ${errorText}`);
    return [];
  }

  const data = await response.json();
  return data.results;
}

const extractText = (property) => {
  if (!property) return '';
  if (property.type === 'title') return property.title.map(t => t.plain_text).join('');
  if (property.type === 'rich_text') return property.rich_text.map(t => t.plain_text).join('');
  return '';
};

const extractNumber = (property) => {
  if (!property || property.type !== 'number') return 0;
  return property.number;
};

const extractCheckbox = (property) => {
  if (!property || property.type !== 'checkbox') return false;
  return property.checkbox;
};

async function main() {
  console.log('Fetching data from Notion...');

  try {
    const rawJourney = await fetchNotionDatabase(JOURNEY_DB);
    const rawSkills = await fetchNotionDatabase(SKILLS_DB);

    const journey = rawJourney.map(page => {
      const p = page.properties;
      return {
        year: extractText(p.Year),
        title: extractText(p.Title || p.Name),
        description: extractText(p.Description),
        iconString: extractText(p.Icon) || 'Star',
        isFuture: extractCheckbox(p.IsFuture)
      };
    });

    journey.sort((a, b) => {
       const orderA = rawJourney.find(r => extractText(r.properties.Title || r.properties.Name) === a.title)?.properties?.Order?.number || 0;
       const orderB = rawJourney.find(r => extractText(r.properties.Title || r.properties.Name) === b.title)?.properties?.Order?.number || 0;
       return orderA - orderB;
    });

    const skills = rawSkills.map(page => {
      const p = page.properties;
      return {
        domain: extractText(p.Name || p.Domain),
        iconString: extractText(p.Icon) || 'Cpu',
        importance: extractNumber(p.Importance) || 0.8,
        githubLanguages: extractText(p.GithubLanguages).split(',').map(s => s.trim()).filter(Boolean),
        description: extractText(p.Description),
        items: extractText(p.Items).split(',').map(s => s.trim()).filter(Boolean),
        impactMetrics: [
          { label: extractText(p.Metric1_Label), value: extractText(p.Metric1_Value) },
          { label: extractText(p.Metric2_Label), value: extractText(p.Metric2_Value) }
        ].filter(m => m.label && m.value)
      };
    });

    const outputData = { journey, skills };
    const outputPath = path.join(__dirname, '../src/data/notion-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    
    console.log(`Successfully wrote Notion data to ${outputPath}`);
  } catch (err) {
    console.error('Error in Notion build pipeline:', err);
    process.exit(1);
  }
}

main();
