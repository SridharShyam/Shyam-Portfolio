/* eslint-disable no-undef */
import dotenv from 'dotenv';

dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const SKILLS_DB = process.env.NOTION_SKILLS_DB_ID;
const NOTION_VERSION = '2022-06-28';

async function fetchNotion(endpoint, method, body = null) {
  const options = {
    method,
    headers: {
      'Authorization': `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(`https://api.notion.com/v1${endpoint}`, options);
  if (!res.ok) {
    throw new Error(`Notion API error: ${res.status} ${await res.text()}`);
  }
  return res.json();
}

async function wipeAndReseed() {
  console.log('Fetching all rows from Skills DB...');
  const res = await fetchNotion(`/databases/${SKILLS_DB}/query`, 'POST');
  const rows = res.results;

  console.log(`Found ${rows.length} rows. Deleting them...`);
  for (const row of rows) {
    await fetchNotion(`/pages/${row.id}`, 'PATCH', { archived: true });
  }
  console.log('Wiped! Now run node scripts/seed-notion-skills.js to reseed.');
}

wipeAndReseed().catch(console.error);
