/* eslint-disable no-undef */
import dotenv from 'dotenv';

dotenv.config();

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const JOURNEY_DB = process.env.NOTION_JOURNEY_DB_ID;
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

const journeyData = [
  { order: 1, year: "2023 (Foundation Phase)", name: "The Foundation", description: "Wrote my first lines of code and immediately gravitated towards data structures, probabilistic models, and the mechanics of machine learning.", icon: "Lightbulb", isFuture: false },
  { order: 2, year: "2024 (Skill Building Phase)", name: "AI & Data Science Immersion", description: "Mastered foundational Data Science and AI concepts, focusing on Python, Pandas, and Scikit-Learn to build functional predictive models.", icon: "BookOpen", isFuture: false },
  { order: 3, year: "2024 (Mid – Practical Exposure)", name: "Inplant Training – CIRF", description: "Gained hands-on experience in exploratory data analysis, data science workflows, and real-world datasets.", icon: "TrendingUp", isFuture: false },
  { order: 4, year: "Feb 2025", name: "Student Immersion (SEC × UTP, Malaysia)", description: "Selected for an international student immersion programme in collaboration with UTP, Malaysia, gaining global exposure and collaborative experience.", icon: "Globe", isFuture: false },
  { order: 5, year: "Oct 2025 (Growth & Recognition)", name: "Finalist — TNStartify 3.0", description: "Recognized as a finalist for developing innovative solutions in TNStartify 3.0.", icon: "Award", isFuture: false },
  { order: 6, year: "Oct 2025 - Present", name: "Innovation Vertical Chair — YUVA Club", description: "Leading innovation initiatives, organizing projects, and driving a culture of problem-solving within YUVA Club.", icon: "Users", isFuture: false },
  { order: 7, year: "Aug 2025 - Dec 2025", name: "QuodeSchool Engineering Trainee", description: "Built foundational software engineering competencies, transitioning from theoretical data science to production-ready code architecture.", icon: "Code", isFuture: false },
  { order: 8, year: "Jan 2026 - Jun 2026", name: "AI Forward Intern — QuodeWorks", description: "Contributing to advanced AI initiatives and real-world machine learning solutions.", icon: "Rocket", isFuture: false },
  { order: 9, year: "Beyond 2026", name: "The Horizon", description: "Exploring the next frontiers of AI and building systems that matter.", icon: "Sparkles", isFuture: true }
];

const skillsData = [
  { name: "Python", language: "Python", score: 0.95, bytes: 250000, color: "bg-blue-500" },
  { name: "React", language: "JavaScript", score: 0.88, bytes: 180000, color: "bg-cyan-400" },
  { name: "Machine Learning", language: "Jupyter Notebook", score: 0.90, bytes: 320000, color: "bg-pink-500" },
  { name: "SQL", language: "SQL", score: 0.85, bytes: 120000, color: "bg-purple-500" },
  { name: "Tailwind CSS", language: "CSS", score: 0.92, bytes: 90000, color: "bg-sky-400" },
  { name: "Git Workflow", language: "Shell", score: 0.80, bytes: 40000, color: "bg-orange-500" }
];

async function main() {
  console.log('Seeding Notion databases...');
  
  // 1. Update DB Schemas
  console.log('Updating Journey Schema...');
  await fetchNotion(`/databases/${JOURNEY_DB}`, 'PATCH', {
    properties: {
      "Year": { "rich_text": {} },
      "Description": { "rich_text": {} },
      "Icon": { "rich_text": {} },
      "IsFuture": { "checkbox": {} },
      "Order": { "number": { "format": "number" } }
    }
  });

  console.log('Updating Skills Schema...');
  await fetchNotion(`/databases/${SKILLS_DB}`, 'PATCH', {
    properties: {
      "Language": { "rich_text": {} },
      "Score": { "number": { "format": "number" } },
      "Bytes": { "number": { "format": "number" } },
      "Color": { "rich_text": {} }
    }
  });

  // 2. Insert Journey Data
  console.log('Inserting Journey Data...');
  for (const item of journeyData) {
    await fetchNotion('/pages', 'POST', {
      parent: { database_id: JOURNEY_DB },
      properties: {
        "Name": { title: [{ text: { content: item.name } }] },
        "Year": { rich_text: [{ text: { content: item.year } }] },
        "Description": { rich_text: [{ text: { content: item.description } }] },
        "Icon": { rich_text: [{ text: { content: item.icon } }] },
        "IsFuture": { checkbox: item.isFuture },
        "Order": { number: item.order }
      }
    });
  }

  // 3. Insert Skills Data
  console.log('Inserting Skills Data...');
  for (const item of skillsData) {
    await fetchNotion('/pages', 'POST', {
      parent: { database_id: SKILLS_DB },
      properties: {
        "Name": { title: [{ text: { content: item.name } }] },
        "Language": { rich_text: [{ text: { content: item.language } }] },
        "Score": { number: item.score },
        "Bytes": { number: item.bytes },
        "Color": { rich_text: [{ text: { content: item.color } }] }
      }
    });
  }

  console.log('Seeding complete!');
}

main().catch(console.error);
