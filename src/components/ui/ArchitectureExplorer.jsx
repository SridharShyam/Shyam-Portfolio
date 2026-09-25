import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Database, Server, Globe, Layers, Zap, ArrowRight, Activity, ShieldCheck, Code, CheckCircle, Sparkles } from 'lucide-react';

const blueprints = [
  {
    id: "retailmind",
    name: "RetailMind AI",
    badge: "Enterprise Multimodal RAG",
    tagline: "Hybrid Search + DeepSeek-R1 Vision Engine for E-Commerce",
    overview: "Serves real-time dynamic Jinja2/FastAPI interface backed by hybrid vector search (ChromaDB + BM25) and local DeepSeek-R1 Vision reasoning.",
    stats: { latency: "142ms", accuracy: "98.4%", uptime: "99.9%", status: "Active Pipeline" },
    nodes: [
      { id: "n1", name: "Client Browser", category: "Frontend", icon: Globe, details: "Jinja2 Templates & Responsive Vanilla CSS with WebSocket streaming" },
      { id: "n2", name: "FastAPI Gateway", category: "API Router", icon: Server, details: "Async REST v1 router with token bucket rate limiting and CORS policies" },
      { id: "n3", name: "Hybrid Retriever", category: "RAG Core", icon: Database, details: "Dense (ChromaDB vector embeddings) + Sparse (BM25 term matching) fusion" },
      { id: "n4", name: "DeepSeek-R1 AI", category: "Inference", icon: Cpu, details: "Local Ollama LLM execution with JSON schema validation & fallback guards" }
    ]
  },
  {
    id: "healthsentinel",
    name: "HealthSentinel AI",
    badge: "Clinical Risk Pipeline",
    tagline: "Predictive Healthcare & EHR Risk Scoring Engine",
    overview: "Processes high-dimensional patient demographic & biometric markers to deliver clinical risk stratifications and hepatology feature attributions.",
    stats: { latency: "88ms", accuracy: "94.7%", uptime: "99.95%", status: "Clinical Benchmark" },
    nodes: [
      { id: "h1", name: "EHR Ingestion", category: "Data Stream", icon: Layers, details: "HL7/FHIR record parsing with automated missing data imputation" },
      { id: "h2", name: "XGBoost Classifier", category: "Predictive ML", icon: Zap, details: "Tuned gradient boosted trees evaluating 24+ clinical biomarkers" },
      { id: "h3", name: "SHAP Explainability", category: "Interpretability", icon: Activity, details: "TreeSHAP feature importance calculation explaining per-patient risk factors" },
      { id: "h4", name: "Clinical Dashboard", category: "Decision Support", icon: ShieldCheck, details: "Real-time Power BI & Streamlit risk monitoring portal for clinicians" }
    ]
  },
  {
    id: "careersynk",
    name: "CareerSynk Engine",
    badge: "NLP Talent Matcher",
    tagline: "Automated Resume Parse & Vector Semantic Alignment",
    overview: "Parses complex multi-format resumes, extracts structured competencies, and calculates dense cosine similarity scores against job requirements.",
    stats: { latency: "210ms", accuracy: "96.1%", uptime: "99.8%", status: "Live Microservice" },
    nodes: [
      { id: "c1", name: "Doc Extractor", category: "Ingestion", icon: Layers, details: "PDF/Docx text parsing with OCR fallback for scanned applications" },
      { id: "c2", name: "NLP Transformer", category: "Embedding", icon: Code, details: "Sentence-BERT model converting skills into 768-dimensional space" },
      { id: "c3", name: "Similarity Engine", category: "Matching", icon: Cpu, details: "Scikit-Learn vector similarity with custom domain weightings" },
      { id: "c4", name: "Ranked Candidate Portal", category: "UI/UX", icon: Globe, details: "Interactive match score heatmap & gap analysis visualizer" }
    ]
  },
  {
    id: "voiceofthewild",
    name: "Voice of the Wild",
    badge: "Audio Bioacoustics",
    tagline: "End-to-End Species Audio Classification via Spectrogram CNN",
    overview: "Transforms raw bioacoustic recordings into mel-spectrogram images, classifying endangered fauna calls using deep convolutional neural networks.",
    stats: { latency: "320ms", accuracy: "93.8%", uptime: "99.7%", status: "Research Model" },
    nodes: [
      { id: "v1", name: "Raw Audio Input", category: "Signal Processing", icon: Layers, details: "WAV audio sampling with noise reduction and silent chunk filtering" },
      { id: "v2", name: "Spectrogram Generator", category: "Feature Engineering", icon: Activity, details: "Librosa Mel-Spectrogram transform exporting 224x224 RGB tensors" },
      { id: "v3", name: "CNN ResNet-50", category: "Deep Learning", icon: Cpu, details: "Fine-tuned transfer learning CNN with PyTorch backend" },
      { id: "v4", name: "Ecosystem Heatmap", category: "Analytics", icon: Globe, details: "Geospatial species population distribution map" }
    ]
  }
];

const ArchitectureExplorer = () => {
  const [activeBlueprint, setActiveBlueprint] = useState(blueprints[0]);
  const [activeNode, setActiveNode] = useState(blueprints[0].nodes[0]);

  const handleSelectBlueprint = (bp) => {
    setActiveBlueprint(bp);
    setActiveNode(bp.nodes[0]);
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-12 p-6 md:p-8 rounded-3xl bg-surface/60 border border-border shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Background blueprint grid texture */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles size={14} /> Interactive Blueprint Explorer
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-text">
            System Architecture Node-Graph
          </h3>
          <p className="text-muted text-sm md:text-base mt-1">
            Click any architecture or component node to inspect data flow pipelines and engine specifications.
          </p>
        </div>

        {/* Blueprint selector pills */}
        <div className="flex flex-wrap gap-2">
          {blueprints.map((bp) => {
            const isSelected = activeBlueprint.id === bp.id;
            return (
              <button
                key={bp.id}
                onClick={() => handleSelectBlueprint(bp)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-primary text-background shadow-lg shadow-primary/30 scale-105 font-bold"
                    : "bg-surface/80 border border-border text-muted hover:text-text hover:border-primary/40"
                }`}
              >
                {bp.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Blueprint Meta Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 rounded-2xl bg-background/50 border border-border">
        <div>
          <span className="text-xs text-muted block uppercase font-medium">Pipeline Status</span>
          <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5">
            <CheckCircle size={14} /> {activeBlueprint.stats.status}
          </span>
        </div>
        <div>
          <span className="text-xs text-muted block uppercase font-medium">Avg Latency</span>
          <span className="text-sm font-semibold text-primary mt-0.5 block">{activeBlueprint.stats.latency}</span>
        </div>
        <div>
          <span className="text-xs text-muted block uppercase font-medium">Metric Score</span>
          <span className="text-sm font-semibold text-secondary mt-0.5 block">{activeBlueprint.stats.accuracy}</span>
        </div>
        <div>
          <span className="text-xs text-muted block uppercase font-medium">Target Uptime</span>
          <span className="text-sm font-semibold text-amber-400 mt-0.5 block">{activeBlueprint.stats.uptime}</span>
        </div>
      </div>

      {/* Node Graph Flow */}
      <div className="mb-8 relative z-10">
        <h4 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
          Data Flow Pipeline ({activeBlueprint.name})
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {activeBlueprint.nodes.map((node, index) => {
            const Icon = node.icon;
            const isSelected = activeNode.id === node.id;
            return (
              <motion.div
                key={node.id}
                whileHover={{ y: -4 }}
                onClick={() => setActiveNode(node)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                  isSelected
                    ? "bg-primary/10 border-primary shadow-xl shadow-primary/10 ring-2 ring-primary/30"
                    : "bg-surface/70 border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl ${isSelected ? "bg-primary text-background" : "bg-background border border-border text-primary"}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-background border border-border text-muted">
                    STEP 0{index + 1}
                  </span>
                </div>
                <h5 className="font-bold text-text text-base">{node.name}</h5>
                <span className="text-xs font-medium text-primary/80 mt-1 block">{node.category}</span>

                {/* Arrow connector indicator for non-last nodes on desktop */}
                {index < activeBlueprint.nodes.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-surface border border-border items-center justify-center text-primary shadow">
                    <ArrowRight size={12} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="p-6 rounded-2xl bg-background/80 border border-primary/20 shadow-inner relative z-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/20 text-primary border border-primary/30">
                {React.createElement(activeNode.icon, { size: 22 })}
              </div>
              <div>
                <span className="text-xs text-muted uppercase font-mono tracking-wider">{activeNode.category}</span>
                <h5 className="text-lg font-bold text-text">{activeNode.name} Specification</h5>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Node Active
            </span>
          </div>

          <p className="text-muted text-sm md:text-base leading-relaxed">
            {activeNode.details}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ArchitectureExplorer;
