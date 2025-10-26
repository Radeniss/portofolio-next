// components/SkillCard.jsx
import { Code, Globe, Palette } from 'lucide-react'; 
import AnimatedContent from './AnimatedContent'; // Pastikan import ini ada

/**
 * Komponen untuk menampilkan kartu skill individual.
 * ...
 */
export default function SkillCard({ icon: Icon, name, desc, index }) {


    return (
        <AnimatedContent
            distance={50} // Jarak geser yang lebih kecil lebih baik untuk item grid
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0.0}
            animateOpacity
            scale={1.0} // Tidak perlu skala jika hanya geser/fade
            threshold={0.3} // Akan memicu ketika 30% kartu terlihat
            // ✨ PENTING: Gunakan index untuk membuat delay berurutan (staggered)
            delay={index * 0.15} 
        >
            <div
                // Hapus key={name} dari sini karena key sudah ada di map parent
                className="card group hover:transform hover:scale-105 transition-all duration-300
                           bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg"
                // Hapus style={{ animationDelay: `${index * 0.1}s` }} karena AnimatedContent yang menanganinya
            >
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                    <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-300 mb-3">
                    {name}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                    {desc}
                </p>
            </div>
        </AnimatedContent>
    );
}