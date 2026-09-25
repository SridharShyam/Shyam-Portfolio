import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

const iconMap = {
    success: <CheckCircle2 className="text-emerald-500" size={20} />,
    error: <AlertCircle className="text-red-500" size={20} />,
    info: <Info className="text-primary" size={20} />
};

const bgMap = {
    success: 'bg-emerald-500/15 border-emerald-500/30',
    error: 'bg-red-500/15 border-red-500/30',
    info: 'bg-primary/15 border-primary/30'
};

const Toast = () => {
    const { toasts, removeToast } = useToast();

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl shadow-xl min-w-[300px] bg-surface/90 ${bgMap[toast.type] || bgMap.info}`}
                    >
                        {iconMap[toast.type] || iconMap.info}
                        <p className="text-sm font-medium text-heading flex-1">{toast.message}</p>
                        <button 
                            onClick={() => removeToast(toast.id)}
                            className="text-muted hover:text-heading transition-colors cursor-pointer"
                        >
                            <X size={16} />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Toast;
