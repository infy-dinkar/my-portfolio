"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {DATA.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="relative h-48 bg-zinc-800/50 border-b border-white/5 group-hover:bg-zinc-800 transition-colors overflow-hidden">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="h-full flex items-center justify-center text-zinc-600 font-mono text-sm">Project Preview</div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    <div className="flex gap-2">
                                        <Link href={project.github} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors text-zinc-400">
                                            <Github className="w-4 h-4" />
                                        </Link>
                                        <Link href={project.link} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors text-zinc-400">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
