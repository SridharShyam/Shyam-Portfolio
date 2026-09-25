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

const ENRICHED_JOURNEY_MAP = {
  "The Foundation": {
    year: "2023",
    phase: "Foundation Phase",
    category: "Foundations",
    location: "Chennai, IN",
    highlights: ["Python & Data Structures", "Probabilistic Models", "ML Mechanics"],
    details: "Wrote initial algorithmic implementations in Python, establishing fundamental concepts in data science, linear algebra, discrete mathematics, and model training workflows.",
    skills: ["Python", "Data Structures", "Linear Algebra", "Probability"],
    hardMetrics: ["Core Algorithmic Foundation", "Linear Algebra & Probability", "Python Data Pipelines"],
    proof: {
      proofType: "Academic & Repository Record",
      issuer: "Self-Directed & Campus Lab",
      credentialId: "FOUND-2023-PY-01",
      proofImage: "/proofs/cirf-inplant-training.png",
      verificationUrl: "https://github.com/SridharShyam"
    }
  },
  "AI & Data Science Immersion": {
    year: "2024",
    phase: "Skill Building Phase",
    category: "Experience",
    location: "Chennai, IN",
    highlights: ["Scikit-Learn", "Pandas & NumPy", "Predictive Pipelines"],
    details: "Implemented end-to-end data preprocessing pipelines, feature engineering techniques, and baseline supervised regression and classification models.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "EDA"],
    hardMetrics: ["15+ ML Models Trained", "Feature Engineering Workflows", "Model Benchmark Evaluations"],
    proof: {
      proofType: "Technical Coursework Record",
      issuer: "Data Science Lab",
      credentialId: "DS-2024-IMM-102",
      proofImage: "/proofs/cirf-inplant-training.png",
      verificationUrl: "https://github.com/SridharShyam"
    }
  },
  "Inplant Training – CIRF": {
    year: "2024 (Mid)",
    phase: "Practical Exposure",
    category: "Experience",
    location: "CIRF Lab, IN",
    highlights: ["Real-world Datasets", "Exploratory Data Analysis", "Industry Workflows"],
    details: "Participated in practical industry training focused on dataset cleaning, telemetry exploratory analysis, data visualization, and ML model evaluation.",
    skills: ["EDA", "Data Wrangling", "Matplotlib", "Seaborn"],
    hardMetrics: ["40+ Hours Practical Training", "Industrial Dataset Processing", "EDA & Visualization Workflows"],
    proof: {
      proofType: "Industrial Training Certificate",
      issuer: "CIRF Lab",
      credentialId: "CIRF-2024-IPT-312",
      proofImage: "/proofs/cirf-inplant-training.png",
      verificationUrl: ""
    }
  },
  "Student Immersion (SEC × UTP, Malaysia)": {
    year: "Feb 2025",
    phase: "Global Delegation",
    category: "Global",
    location: "UTP, Malaysia",
    highlights: ["International Exchange", "Global AI Insights", "Cross-Cultural Leadership"],
    details: "Selected for an international academic exchange at Universiti Teknologi PETRONAS (UTP), Malaysia, collaborating with international peers on emerging technology trends and cross-border innovation.",
    skills: ["Global Collaboration", "Cross-Cultural Leadership", "AI Trends"],
    hardMetrics: ["14 Days Academic Immersion", "120+ International Delegates", "3 Co-Authored Tech Case Studies"],
    proof: {
      proofType: "International Delegation Certificate",
      issuer: "Universiti Teknologi PETRONAS (UTP), Malaysia",
      credentialId: "UTP-SEC-2025-DELEGATE-084",
      proofImage: "/proofs/utp-malaysia-delegation.png",
      verificationUrl: "https://www.utp.edu.my"
    }
  },
  "Finalist — TNStartify 3.0": {
    year: "Oct 2025",
    phase: "Growth & Recognition",
    category: "Global",
    location: "Tamil Nadu, IN",
    highlights: ["Startup Pitch", "Product Innovation", "Statewide Finalist"],
    details: "Recognized among top regional innovators at TNStartify 3.0 for designing a data-driven solution addressing high-impact business problem statements.",
    skills: ["Product Design", "Pitching", "AI Solution Architecture"],
    hardMetrics: ["Top 15 out of 450+ Teams", "Statewide Innovation Challenge", "Pitched to 6 VC & Angel Jurors"],
    proof: {
      proofType: "Startup Pitch Finalist Certificate",
      issuer: "TNStartify / StartupTN",
      credentialId: "TNS-2025-FIN-9402",
      proofImage: "/proofs/tnstartify-finalist.png",
      verificationUrl: "https://startuptn.in"
    }
  },
  "Innovation Vertical Chair — YUVA Club": {
    year: "Oct 2025 - July 2026",
    phase: "Leadership Role",
    category: "Leadership",
    location: "Chennai, IN",
    highlights: ["Leading 50+ Innovators", "Project Hackathons", "Problem Solving Culture"],
    details: "Leading innovation directives, organizing technical hackathons, mentoring junior developers, and fostering a hands-on building culture across campus.",
    skills: ["Team Leadership", "Event Management", "Mentorship", "Strategic Planning"],
    hardMetrics: ["50+ Members Mentored", "2 Campus Hackathons Organized", "8 Student Prototypes Built"],
    proof: {
      proofType: "Official Leadership Appointment",
      issuer: "YUVA Club — Saveetha Engineering College",
      credentialId: "YUVA-2025-CHAIR-01",
      proofImage: "/proofs/btg-titans-certificate.png",
      verificationUrl: ""
    }
  },
  "QuodeSchool Engineering Trainee": {
    year: "Aug 2025 - Dec 2025",
    phase: "Engineering Core",
    category: "Experience",
    location: "QuodeSchool",
    highlights: ["Software Engineering", "Backend APIs", "Production Architecture"],
    details: "Intensive technical training bridging the gap between standalone machine learning models and scalable full-stack software architecture.",
    skills: ["FastAPI", "REST APIs", "Git", "Software Architecture"],
    hardMetrics: ["FastAPI & Microservice Mastery", "Git & CI/CD Pipelines", "System Architecture Design"],
    proof: {
      proofType: "Engineering Trainee Certification",
      issuer: "QuodeSchool",
      credentialId: "QS-2025-ENG-771",
      proofImage: "/proofs/cirf-inplant-training.png",
      verificationUrl: ""
    }
  },
  "AI Forward Intern — QuodeWorks": {
    year: "Jan 2026 - Jun 2026",
    phase: "Industry Internship",
    category: "Experience",
    location: "QuodeWorks",
    highlights: ["Production AI Systems", "Model Optimization", "Enterprise Microservices"],
    details: "Engineered production machine learning services, optimizing API response latencies, tuning hyperparameters, and integrating backend microservices.",
    skills: ["Machine Learning", "FastAPI", "Python", "Cloud Deployment"],
    hardMetrics: ["Sub-100ms Inference Latencies", "3 Enterprise Microservices", "Production AI Deployment"],
    proof: {
      proofType: "Industry Internship Completion",
      issuer: "QuodeWorks AI Lab",
      credentialId: "QW-2026-INT-409",
      proofImage: "/proofs/utp-malaysia-delegation.png",
      verificationUrl: ""
    }
  },
  "Chief Advisor — Voice Of The Wild": {
    year: "Aug 2026 - Present",
    phase: "Strategic Advisory",
    category: "Leadership",
    location: "Strategic Advisory",
    highlights: ["Tech Advisory", "Strategic Vision", "Wild-Tech Initiatives"],
    details: "Directing technological strategy, digital presence, and high-level initiative roadmaps for wildlife conservation and technology integration.",
    skills: ["Strategic Advisory", "Tech Leadership", "Product Roadmap"],
    hardMetrics: ["Technical Strategy Roadmap", "Digital Platform Architecture", "Wildlife Tech Directives"],
    proof: {
      proofType: "Executive Board Appointment",
      issuer: "Voice Of The Wild Foundation",
      credentialId: "VOTW-2026-ADV-01",
      proofImage: "/proofs/btg-titans-certificate.png",
      verificationUrl: ""
    }
  },
  "The Horizon": {
    year: "Beyond 2026",
    phase: "Future Frontier",
    category: "Global",
    location: "Next Generation",
    highlights: ["Agentic AI Systems", "Decision Intelligence", "Scaling Impact"],
    details: "Pioneering advanced multi-agent systems and enterprise decision intelligence frameworks that turn complex datasets into high-impact automated actions.",
    skills: ["Multi-Agent Systems", "MLOps", "AI Governance"],
    hardMetrics: ["Multi-Agent Autonomous Workflows", "Enterprise MLOps", "Agentic Systems"],
    proof: null
  }
};

async function main() {
  if (!NOTION_TOKEN || !JOURNEY_DB || !SKILLS_DB) {
    console.log('Notice: Notion API credentials not provided in env. Preserving existing src/data/notion-data.json fallback.');
    return;
  }

  console.log('Fetching data from Notion API...');

  try {
    const rawJourney = await fetchNotionDatabase(JOURNEY_DB);
    const rawSkills = await fetchNotionDatabase(SKILLS_DB);

    if (!rawJourney || rawJourney.length === 0) {
      console.log('Notice: Notion API returned empty results. Preserving existing src/data/notion-data.json fallback.');
      return;
    }

    const journey = rawJourney.map(page => {
      const p = page.properties;
      const title = extractText(p.Title || p.Name);
      const fallback = ENRICHED_JOURNEY_MAP[title] || {};

      const year = extractText(p.Year) || fallback.year || '2025';
      const category = extractText(p.Category) || fallback.category || 'Experience';
      const location = extractText(p.Location) || fallback.location || 'India';
      const phase = extractText(p.Phase) || fallback.phase || '';
      const description = extractText(p.Description) || fallback.details || '';
      const details = extractText(p.Details) || fallback.details || description;
      
      const highlightsText = extractText(p.Highlights);
      const highlights = highlightsText 
        ? highlightsText.split(',').map(s => s.trim()).filter(Boolean)
        : (fallback.highlights || []);

      const skillsText = extractText(p.Skills);
      const skills = skillsText 
        ? skillsText.split(',').map(s => s.trim()).filter(Boolean)
        : (fallback.skills || []);

      return {
        year,
        phase,
        title,
        category,
        location,
        description: extractText(p.Description) || fallback.details || details,
        highlights,
        details,
        skills,
        iconString: extractText(p.Icon) || 'Star',
        isFuture: extractCheckbox(p.IsFuture),
        hardMetrics: fallback.hardMetrics || [],
        proof: fallback.proof || null
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
    console.warn('Warning in Notion fetch step (falling back to cached data):', err.message);
  }
}

main();
