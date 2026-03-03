"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-mono tracking-tight whitespace-nowrap">
                        Skills and Tools
                    </h2>
                    <div className="h-[2px] bg-blue-600 flex-grow opacity-60 mt-1 max-w-lg"></div>
                </motion.div>

                {/* Accordion container */}
                <div className="flex flex-col gap-4">
                    {DATA.skills.map((skillGroup, index) => (
                        <SkillAccordion key={skillGroup.id} skillGroup={skillGroup} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillAccordion({ skillGroup, index }) {
    const delay = index * 0.1;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
        >
            <details className="group bg-white rounded-lg overflow-hidden shadow-md border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none text-slate-900 font-bold font-mono text-base md:text-lg hover:bg-blue-50 transition-colors">
                    <span>{skillGroup.id}. {skillGroup.title}</span>
                    <span className="transition duration-300 group-open:-rotate-180 text-blue-600">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </span>
                </summary>
                <div className="bg-blue-600 p-6 md:p-8 relative overflow-hidden group-open:animate-fadeIn">
                    <div className="relative z-10 md:w-2/3">
                        {/* Skills Pill list */}
                        <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                            {skillGroup.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-1.5 text-xs md:text-sm font-bold text-blue-700 bg-white rounded-full shadow-sm hover:bg-red-500 hover:text-white transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        {/* Description Text */}
                        <p className="text-white font-mono text-sm md:text-base opacity-95 leading-relaxed">
                            {skillGroup.description}
                        </p>
                    </div>

                    {/* Decorative Star/Sparkle Graphic */}
                    <div className="absolute right-0 bottom-0 top-0 w-1/3 min-w-[200px] pointer-events-none hidden md:flex items-end justify-end">
                        <div className="bg-white w-48 h-32 rounded-tl-[40px] transform flex items-center justify-center relative shadow-xl border-l-[6px] border-blue-100">
                            {/* Red Star */}
                            <svg className="w-20 h-20 text-red-500 absolute -top-10 -left-6 transform rotate-[-10deg]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                            </svg>
                            {/* Small Blue Star */}
                            <svg className="w-8 h-8 text-blue-300 absolute top-2 right-6 transform rotate-[15deg]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                            </svg>
                            {/* Small Red Star */}
                            <svg className="w-10 h-10 text-red-300 absolute -bottom-4 left-16 transform rotate-[5deg]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </details>
        </motion.div>
    );
}
