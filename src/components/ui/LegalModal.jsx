import { X, ShieldCheck, FileText } from 'lucide-react';

export const LegalModal = ({ isOpen, onClose, type }) => {
    if (!isOpen) return null;

    const isPrivacy = type === 'privacy';
    const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
        >
            <div 
                className="bg-card border border-border w-full max-w-2xl rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                    <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            {isPrivacy ? <ShieldCheck size={20} /> : <FileText size={20} />}
                        </div>
                        <h2 id="legal-modal-title" className="text-xl font-bold font-heading text-heading">
                            {title}
                        </h2>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 rounded-lg text-muted hover:text-heading hover:bg-elevated transition-colors"
                        aria-label="Close"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="text-sm text-text space-y-4 leading-relaxed font-normal">
                    {isPrivacy ? (
                        <>
                            <p>
                                <strong>Last updated:</strong> November 2026
                            </p>
                            <p>
                                Welcome to Shyametrics. I respect your privacy and am committed to protecting any personal information you share when using this portfolio website.
                            </p>
                            <h3 className="font-semibold text-heading pt-2">1. Information Collection</h3>
                            <p>
                                When submitting the contact form, you voluntarily provide your name, email address, inquiry motive, and project context. This data is processed securely through Formspree strictly for direct communication and client consultation.
                            </p>
                            <h3 className="font-semibold text-heading pt-2">2. Local Storage & Preferences</h3>
                            <p>
                                This website uses local storage exclusively to persist your display preferences (such as Light/Dark mode). No tracking cookies or third-party marketing beacons are utilized.
                            </p>
                            <h3 className="font-semibold text-heading pt-2">3. Data Sharing & Retention</h3>
                            <p>
                                Your information is never sold, leased, or distributed to third parties. Inquiry correspondence is retained only as long as necessary to fulfill professional communication.
                            </p>
                            <h3 className="font-semibold text-heading pt-2">4. Contact</h3>
                            <p>
                                If you have questions regarding this policy or wish to delete your contact correspondence, reach out directly at <a href="mailto:shyamsridhar935@gmail.com" className="text-primary hover:underline">shyamsridhar935@gmail.com</a>.
                            </p>
                        </>
                    ) : (
                        <>
                            <p>
                                <strong>Last updated:</strong> November 2026
                            </p>
                            <p>
                                Welcome to Shyametrics. By accessing or browsing this portfolio, you agree to these Terms of Service.
                            </p>
                            <h3 className="font-semibold text-heading pt-2">1. Intellectual Property</h3>
                            <p>
                                All architectural concepts, portfolio text, interactive systems, case studies, and proprietary decision models showcased herein are authored by Sridhar Shyam, unless open-source repositories are explicitly credited.
                            </p>
                            <h3 className="font-semibold text-heading pt-2">2. Open Source & Repositories</h3>
                            <p>
                                Code hosted on linked public GitHub repositories is governed by their respective repository licenses (e.g., MIT, Apache 2.0).
                            </p>
                            <h3 className="font-semibold text-heading pt-2">3. Disclaimers</h3>
                            <p>
                                The software architectures and demonstration projects displayed on this site are provided for professional evaluation and technical demonstration purposes.
                            </p>
                            <h3 className="font-semibold text-heading pt-2">4. Governing Law</h3>
                            <p>
                                Any inquiries regarding intellectual property or terms may be addressed to <a href="mailto:shyamsridhar935@gmail.com" className="text-primary hover:underline">shyamsridhar935@gmail.com</a>.
                            </p>
                        </>
                    )}
                </div>

                <div className="mt-8 pt-4 border-t border-border flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-lg bg-elevated hover:bg-surface border border-border text-heading text-sm font-semibold transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
