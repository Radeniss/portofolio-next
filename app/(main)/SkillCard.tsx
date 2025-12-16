// components/SkillCard.jsx
import { Code, Globe, Palette } from 'lucide-react'; 
import AnimatedContent from './AnimatedContent';
import GlareHover from '../../components/GlareHover';


export default function SkillCard({ icon: Icon, name, desc, index }) {


    return (
        <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0.0}
            animateOpacity
            scale={1.0}
            threshold={0.3}
            delay={index * 0.15} 
        >
            <GlareHover
                        glareColor="#ffffff" 
                        glareOpacity={0.3}  
                        glareAngle={-45}    
                        glareSize={300}     
                        transitionDuration={1000}
                        playOnce={false}
                        background='none'
                    >
            <div
                className="card group hover:transform hover:scale-105 transition-all duration-300
                           bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg"
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
            </GlareHover>
        </AnimatedContent>
    );
}