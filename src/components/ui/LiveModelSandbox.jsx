import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Cpu, Activity, Play, CheckCircle2, RefreshCw, BarChart2, ShieldAlert } from 'lucide-react';

const LiveModelSandbox = () => {
    const [activeModel, setActiveModel] = useState('cirrhosis');

    // Model 1 State: Cirrhosis Clinical Vitals
    const [age, setAge] = useState(52);
    const [bilirubin, setBilirubin] = useState(3.2); // mg/dL
    const [albumin, setAlbumin] = useState(3.1);     // g/dL
    const [platelets, setPlatelets] = useState(140);  // k/mL

    // Model 2 State: Demographic Classification
    const [height, setHeight] = useState(172); // cm
    const [weight, setWeight] = useState(68);  // kg
    const [demoAge, setDemoAge] = useState(24);

    // Calculate Cirrhosis Risk Score using logistic sigmoid proxy formula calibrated on dataset benchmarks
    const cirrhosisResults = useMemo(() => {
        // Higher bilirubin (+), lower albumin (-), lower platelets (-), higher age (+) increase risk
        const z = -2.2 + (bilirubin * 0.75) - (albumin * 0.8) - (platelets * 0.012) + (age * 0.04);
        const probStage4 = 1 / (1 + Math.exp(-z));
        const pctStage4 = Math.round(probStage4 * 100);

        let riskTier = 'LOW RISK';
        let tierColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
        if (pctStage4 > 65) {
            riskTier = 'HIGH RISK (STAGE 4)';
            tierColor = 'text-red-400 bg-red-500/10 border-red-500/30';
        } else if (pctStage4 > 35) {
            riskTier = 'MODERATE RISK (STAGE 2/3)';
            tierColor = 'text-amber-400 bg-amber-500/10 border-amber-500/30';
        }

        return { pctStage4, riskTier, tierColor, zScore: z.toFixed(2) };
    }, [age, bilirubin, albumin, platelets]);

    // Calculate Demographic Classification Probability
    const demoResults = useMemo(() => {
        const z = -12.5 + (height * 0.09) + (weight * 0.04) - (demoAge * 0.01);
        const probMale = 1 / (1 + Math.exp(-z));
        const pctMale = Math.round(probMale * 100);
        const pctFemale = 100 - pctMale;

        return { pctMale, pctFemale, zScore: z.toFixed(2) };
    }, [height, weight, demoAge]);

    return (
        <section id="sandbox" className="py-20 bg-background relative overflow-hidden border-t border-border">
            {/* Blueprint Grid */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border text-cyan-400 font-mono text-xs mb-3 rounded-lg">
                        <Cpu size={14} className="text-cyan-400" />
                        <span>[UNIQUE FEATURE #1 // LIVE MODEL PREDICTION PLAYGROUND]</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-heading tracking-tight">
                        Interactive Live <span className="text-cyan-400">Model Sandbox</span>
                    </h2>
                    <p className="text-muted max-w-3xl text-sm md:text-base leading-relaxed mt-2 font-sans">
                        Test model predictions in real time. Adjust clinical biomarkers or physical attributes to see how algorithmic probability vectors and feature weights compute live outputs.
                    </p>
                </motion.div>

                {/* Model Selector Tabs */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                    <button
                        onClick={() => setActiveModel('cirrhosis')}
                        className={`px-4 py-2.5 rounded-xl font-mono text-xs transition-all flex items-center gap-2 cursor-pointer ${
                            activeModel === 'cirrhosis'
                                ? 'bg-primary text-background font-bold shadow-md'
                                : 'bg-surface hover:bg-surface/80 border border-border text-muted'
                        }`}
                    >
                        <Activity size={15} />
                        <span>Cirrhosis Clinical Biomarker Classifier</span>
                    </button>

                    <button
                        onClick={() => setActiveModel('demographics')}
                        className={`px-4 py-2.5 rounded-xl font-mono text-xs transition-all flex items-center gap-2 cursor-pointer ${
                            activeModel === 'demographics'
                                ? 'bg-primary text-background font-bold shadow-md'
                                : 'bg-surface hover:bg-surface/80 border border-border text-muted'
                        }`}
                    >
                        <Sliders size={15} />
                        <span>Demographic Physical Attribute Predictor</span>
                    </button>
                </div>

                {/* Model Sandbox Workbench Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Feature Controls (Spans 6 Columns) */}
                    <div className="lg:col-span-6 p-6 rounded-2xl bg-surface border border-border space-y-6">
                        <div className="flex items-center justify-between pb-3 border-b border-border font-mono text-xs text-muted">
                            <span className="font-bold text-heading flex items-center gap-2">
                                <Sliders size={14} className="text-cyan-400" />
                                FEATURE PARAMETER INPUTS
                            </span>
                            <span>REAL-TIME INFERENCE</span>
                        </div>

                        {activeModel === 'cirrhosis' ? (
                            <div className="space-y-5">
                                {/* Age Input */}
                                <div>
                                    <div className="flex justify-between text-xs font-mono mb-1.5">
                                        <span className="text-muted">Patient Age:</span>
                                        <span className="text-heading font-bold">{age} Years</span>
                                    </div>
                                    <input 
                                        type="range" min="20" max="80" value={age} 
                                        onChange={(e) => setAge(Number(e.target.value))}
                                        className="w-full accent-cyan-400 cursor-pointer"
                                    />
                                </div>

                                {/* Bilirubin Input */}
                                <div>
                                    <div className="flex justify-between text-xs font-mono mb-1.5">
                                        <span className="text-muted">Serum Bilirubin (mg/dL):</span>
                                        <span className="text-heading font-bold">{bilirubin} mg/dL</span>
                                    </div>
                                    <input 
                                        type="range" min="0.3" max="15.0" step="0.1" value={bilirubin} 
                                        onChange={(e) => setBilirubin(Number(e.target.value))}
                                        className="w-full accent-cyan-400 cursor-pointer"
                                    />
                                </div>

                                {/* Albumin Input */}
                                <div>
                                    <div className="flex justify-between text-xs font-mono mb-1.5">
                                        <span className="text-muted">Serum Albumin (g/dL):</span>
                                        <span className="text-heading font-bold">{albumin} g/dL</span>
                                    </div>
                                    <input 
                                        type="range" min="1.5" max="5.0" step="0.1" value={albumin} 
                                        onChange={(e) => setAlbumin(Number(e.target.value))}
                                        className="w-full accent-cyan-400 cursor-pointer"
                                    />
                                </div>

                                {/* Platelets Input */}
                                <div>
                                    <div className="flex justify-between text-xs font-mono mb-1.5">
                                        <span className="text-muted">Platelet Count (k/mL):</span>
                                        <span className="text-heading font-bold">{platelets} k/mL</span>
                                    </div>
                                    <input 
                                        type="range" min="50" max="450" value={platelets} 
                                        onChange={(e) => setPlatelets(Number(e.target.value))}
                                        className="w-full accent-cyan-400 cursor-pointer"
                                    />
                                </div>

                                <button
                                    onClick={() => { setAge(52); setBilirubin(3.2); setAlbumin(3.1); setPlatelets(140); }}
                                    className="text-xs font-mono text-muted hover:text-heading flex items-center gap-1.5 pt-2"
                                >
                                    <RefreshCw size={12} />
                                    <span>Reset to Default Clinical Vitals</span>
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-5">
                                {/* Height Input */}
                                <div>
                                    <div className="flex justify-between text-xs font-mono mb-1.5">
                                        <span className="text-muted">Height (cm):</span>
                                        <span className="text-heading font-bold">{height} cm</span>
                                    </div>
                                    <input 
                                        type="range" min="140" max="200" value={height} 
                                        onChange={(e) => setHeight(Number(e.target.value))}
                                        className="w-full accent-cyan-400 cursor-pointer"
                                    />
                                </div>

                                {/* Weight Input */}
                                <div>
                                    <div className="flex justify-between text-xs font-mono mb-1.5">
                                        <span className="text-muted">Weight (kg):</span>
                                        <span className="text-heading font-bold">{weight} kg</span>
                                    </div>
                                    <input 
                                        type="range" min="40" max="120" value={weight} 
                                        onChange={(e) => setWeight(Number(e.target.value))}
                                        className="w-full accent-cyan-400 cursor-pointer"
                                    />
                                </div>

                                {/* Age Input */}
                                <div>
                                    <div className="flex justify-between text-xs font-mono mb-1.5">
                                        <span className="text-muted">Age:</span>
                                        <span className="text-heading font-bold">{demoAge} Years</span>
                                    </div>
                                    <input 
                                        type="range" min="15" max="75" value={demoAge} 
                                        onChange={(e) => setDemoAge(Number(e.target.value))}
                                        className="w-full accent-cyan-400 cursor-pointer"
                                    />
                                </div>

                                <button
                                    onClick={() => { setHeight(172); setWeight(68); setDemoAge(24); }}
                                    className="text-xs font-mono text-muted hover:text-heading flex items-center gap-1.5 pt-2"
                                >
                                    <RefreshCw size={12} />
                                    <span>Reset Attributes</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Calculated Model Output (Spans 6 Columns) */}
                    <div className="lg:col-span-6 p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between h-full space-y-6">
                        <div>
                            <div className="flex items-center justify-between pb-3 border-b border-border font-mono text-xs text-muted">
                                <span className="font-bold text-heading flex items-center gap-2">
                                    <BarChart2 size={14} className="text-cyan-400" />
                                    MODEL OUTPUT TELEMETRY
                                </span>
                                <span className="text-emerald-400 font-bold flex items-center gap-1">
                                    <CheckCircle2 size={12} /> INFERENCE OK
                                </span>
                            </div>

                            {activeModel === 'cirrhosis' ? (
                                <div className="mt-6 space-y-6">
                                    {/* Risk Tier Badge */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono text-muted uppercase">CLASSIFIED RISK TIER:</span>
                                        <span className={`text-xs font-mono font-bold px-3 py-1 rounded-lg border ${cirrhosisResults.tierColor}`}>
                                            {cirrhosisResults.riskTier}
                                        </span>
                                    </div>

                                    {/* Calculated Probability Gauge */}
                                    <div>
                                        <div className="flex justify-between text-xs font-mono mb-2">
                                            <span className="text-muted">STAGE 4 PROGRESSION PROBABILITY:</span>
                                            <span className="text-2xl font-bold font-mono text-heading">{cirrhosisResults.pctStage4}%</span>
                                        </div>
                                        <div className="w-full h-3 rounded-full bg-background border border-border overflow-hidden">
                                            <div 
                                                className={`h-full transition-all duration-300 ${
                                                    cirrhosisResults.pctStage4 > 65 ? 'bg-red-500' : cirrhosisResults.pctStage4 > 35 ? 'bg-amber-400' : 'bg-emerald-400'
                                                }`}
                                                style={{ width: `${cirrhosisResults.pctStage4}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Feature Importance Indicators */}
                                    <div className="p-4 rounded-xl bg-background border border-border space-y-2 font-mono text-xs">
                                        <span className="text-[10px] text-muted uppercase block font-bold">TOP CONTRIBUTING BIOMARKERS</span>
                                        <div className="flex justify-between text-muted">
                                            <span>Bilirubin Vector:</span>
                                            <span className="text-heading font-bold">+{ (bilirubin * 0.75).toFixed(2) }</span>
                                        </div>
                                        <div className="flex justify-between text-muted">
                                            <span>Albumin Vector:</span>
                                            <span className="text-heading font-bold">-{ (albumin * 0.8).toFixed(2) }</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-6 space-y-6">
                                    {/* Predicted Class Distribution */}
                                    <div>
                                        <div className="flex justify-between text-xs font-mono mb-2">
                                            <span className="text-muted">PREDICTED CLUSTER DISTRIBUTION:</span>
                                            <span className="text-lg font-bold font-mono text-heading">
                                                {demoResults.pctMale >= 50 ? `Class A (${demoResults.pctMale}%)` : `Class B (${demoResults.pctFemale}%)`}
                                            </span>
                                        </div>
                                        <div className="w-full h-3 rounded-full bg-background border border-border overflow-hidden flex">
                                            <div 
                                                className="h-full bg-cyan-400 transition-all duration-300"
                                                style={{ width: `${demoResults.pctMale}%` }}
                                            />
                                            <div 
                                                className="h-full bg-purple-400 transition-all duration-300"
                                                style={{ width: `${demoResults.pctFemale}%` }}
                                            />
                                        </div>
                                        <div className="flex justify-between text-[11px] font-mono text-muted mt-1.5">
                                            <span className="text-cyan-400 font-bold">Segment A: {demoResults.pctMale}%</span>
                                            <span className="text-purple-400 font-bold">Segment B: {demoResults.pctFemale}%</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Model Specs Strip */}
                        <div className="pt-4 border-t border-border font-mono text-[11px] text-muted flex justify-between">
                            <span>ALGORITHM: LOGISTIC REGRESSION</span>
                            <span>LATENCY: &lt; 2ms</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default LiveModelSandbox;
