"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative bg-white border-t border-slate-100">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Experience & <span className="text-blue-600">Education</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900">
                            <GraduationCap className="text-blue-600" /> Education
                        </h3>
                        <div className="space-y-8 border-l-2 border-blue-200 ml-3 pl-8 py-2">
                            {DATA.education.map((edu, index) => (
                                <ExperienceItem
                                    key={index}
                                    title={edu.degree}
                                    subtitle={edu.institution}
                                    date={edu.year}
                                    description={edu.score ? `Score: ${edu.score}` : ""}
                                    delay={index * 0.1}
                                    accent="blue"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Work */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900">
                            <Briefcase className="text-red-500" /> Work Experience
                        </h3>
                        <div className="space-y-8 border-l-2 border-red-200 ml-3 pl-8 py-2">
                            {DATA.experience.map((exp, index) => (
                                <ExperienceItem
                                    key={index}
                                    title={exp.role}
                                    subtitle={exp.company}
                                    date={exp.period}
                                    description={exp.description}
                                    delay={index * 0.1}
                                    accent="red"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceItem({ title, subtitle, date, description, delay, accent = "blue" }) {
    const dotColor = accent === "red" ? "bg-red-500 border-red-200" : "bg-blue-600 border-blue-200";
    const cardBorder = accent === "red" ? "border-red-200 hover:border-red-500" : "border-blue-200 hover:border-blue-600";
    const dateColor = accent === "red" ? "text-red-500" : "text-blue-600";

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="relative"
        >
            <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full ${dotColor} border-2`} />
            <div className={`bg-white p-6 rounded-xl border-2 ${cardBorder} transition-colors shadow-md hover:shadow-lg`}>
                <span className={`text-sm ${dateColor} mb-2 block font-mono font-bold`}>{date}</span>
                <h4 className="text-lg font-black mb-1 text-slate-900">{title}</h4>
                <p className="text-slate-600 font-bold text-sm mb-2">{subtitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{description}</p>
            </div>
        </motion.div>
    );
}
