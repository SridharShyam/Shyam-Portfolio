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

const skillDomainsData = [
  {
      domain: "Machine Learning",
      icon: "Cpu",
      importance: 0.92,
      githubLanguages: "Jupyter Notebook, Python",
      description: "Designing predictive models, classification systems, and decision engines to solve complex business problems.",
      items: "Python, Scikit-Learn, Statistical Analysis, Feature Engineering, Time Series, ARIMA, XGBoost, SMOTE",
      m1Label: "Predictive Models Built", m1Value: "5+",
      m2Label: "Peak AUC-ROC Achieved", m2Value: "0.81"
  },
  {
      domain: "Data Engineering",
      icon: "Database",
      importance: 0.85,
      githubLanguages: "Python, SQL",
      description: "Wrangling messy, unstructured data into clean pipelines and optimizing queries for high-throughput analysis.",
      items: "Pandas, NumPy, SQL, MongoDB",
      m1Label: "Records Analyzed", m1Value: "10k+",
      m2Label: "Pipelines Automated", m2Value: "3"
  },
  {
      domain: "Backend Architecture",
      icon: "Server",
      importance: 0.88,
      githubLanguages: "Python, Java, C",
      description: "Building resilient, high-performance APIs and microservices to serve machine learning models at scale.",
      items: "FastAPI, Python, Java, C, Git",
      m1Label: "REST APIs Deployed", m1Value: "2",
      m2Label: "System Availability", m2Value: "99.9%"
  },
  {
      domain: "Data Visualization",
      icon: "PieChart",
      importance: 0.80,
      githubLanguages: "Jupyter Notebook, HTML",
      description: "Translating raw algorithmic outputs into intuitive, actionable intelligence dashboards for stakeholders.",
      items: "Matplotlib, Seaborn, Power BI, Jupyter Notebook, Google Colab, DAX",
      m1Label: "Dashboards Created", m1Value: "4",
      m2Label: "Stakeholder Reports", m2Value: "10+"
  },
  {
      domain: "Cloud & MLOps",
      icon: "Cloud",
      importance: 0.75,
      githubLanguages: "Python, Shell, Dockerfile",
      description: "Deploying and scaling machine learning pipelines in cloud environments, ensuring uptime and continuous integration.",
      items: "Git/GitHub, FastAPI, Optuna",
      m1Label: "Deployments Managed", m1Value: "5",
      m2Label: "Hyperparam Trials", m2Value: "100+"
  },
  {
      domain: "App Development",
      icon: "Code",
      importance: 0.70,
      githubLanguages: "JavaScript, HTML, CSS, TypeScript",
      description: "Building responsive frontend interfaces and seamless full-stack integrations to bring data insights directly to users.",
      items: "React, Tailwind CSS, UI/UX",
      m1Label: "Web Apps Shipped", m1Value: "3",
      m2Label: "Lighthouse Score", m2Value: "95+"
  }
];

async function main() {
  console.log('Seeding Skills Domain data into Notion...');
  
  console.log('Updating Skills Schema...');
  await fetchNotion(`/databases/${SKILLS_DB}`, 'PATCH', {
    properties: {
      "Icon": { "rich_text": {} },
      "Importance": { "number": { "format": "number" } },
      "GithubLanguages": { "rich_text": {} },
      "Description": { "rich_text": {} },
      "Items": { "rich_text": {} },
      "Metric1_Label": { "rich_text": {} },
      "Metric1_Value": { "rich_text": {} },
      "Metric2_Label": { "rich_text": {} },
      "Metric2_Value": { "rich_text": {} }
    }
  });

  console.log('Inserting Skills Data...');
  for (const item of skillDomainsData) {
    await fetchNotion('/pages', 'POST', {
      parent: { database_id: SKILLS_DB },
      properties: {
        "Name": { title: [{ text: { content: item.domain } }] },
        "Icon": { rich_text: [{ text: { content: item.icon } }] },
        "Importance": { number: item.importance },
        "GithubLanguages": { rich_text: [{ text: { content: item.githubLanguages } }] },
        "Description": { rich_text: [{ text: { content: item.description } }] },
        "Items": { rich_text: [{ text: { content: item.items } }] },
        "Metric1_Label": { rich_text: [{ text: { content: item.m1Label } }] },
        "Metric1_Value": { rich_text: [{ text: { content: item.m1Value } }] },
        "Metric2_Label": { rich_text: [{ text: { content: item.m2Label } }] },
        "Metric2_Value": { rich_text: [{ text: { content: item.m2Value } }] }
      }
    });
  }

  console.log('Seeding complete!');
}

main().catch(console.error);
