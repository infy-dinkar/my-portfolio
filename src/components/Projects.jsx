"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative bg-slate-50 border-t border-slate-200 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-mono tracking-tight whitespace-nowrap">
                        Projects
                    </h2>
                    <div className="h-[2px] bg-red-500 flex-grow opacity-60 mt-1 max-w-lg"></div>
                </motion.div>
                <div className="flex flex-col gap-6">
                    {DATA.projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }) {
    const formattedIndex = index.toString().padStart(2, '0');

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row w-full bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
        >
            {/* Left Image Section - Blue background */}
            <div className="md:w-5/12 bg-blue-600 p-8 md:p-12 flex items-center justify-center relative min-h-[300px]">
                <div className="relative w-full aspect-square max-w-[320px]">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-2xl shadow-2xl transition-transform duration-700 hover:scale-105"
                    />
                </div>
                {/* Decorative Arrow Button */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
            </div>

            {/* Right Content Section */}
            <div className="md:w-7/12 p-8 md:p-14 flex flex-col justify-center bg-white">
                <span className="text-red-500 font-bold font-mono text-lg md:text-xl mb-2 block">
                    Project {formattedIndex}
                </span>

                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-mono tracking-tight leading-none">
                    {project.title}
                </h3>

                {project.tagline && (
                    <p className="text-blue-600 font-mono text-sm md:text-base mb-4 font-semibold">
                        {project.tagline}
                    </p>
                )}

                <p className="text-slate-500 font-mono text-sm leading-relaxed mb-8 max-w-2xl">
                    {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map(t => (
                        <span
                            key={t}
                            className="px-5 py-2 text-xs md:text-sm bg-blue-50 text-blue-700 font-bold rounded-full cursor-default hover:bg-red-500 hover:text-white transition-colors border border-blue-100"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-8 mt-auto">
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            className="flex items-center gap-2 text-blue-600 font-bold font-mono text-sm hover:text-red-500 transition-colors group"
                        >
                            View on GitHub
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    )}
                    {project.link !== "#" && (
                        <Link
                            href={project.link}
                            target="_blank"
                            className="flex items-center gap-1 text-red-500 font-bold font-mono text-sm hover:text-blue-600 transition-colors group"
                        >
                            Live Demo
                            <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
