"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { ArrowRight, Github, Linkedin, Mail, Youtube, Users, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-white">
            {/* Background gradients */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-200/50 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-200/40 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-block px-4 py-2 rounded-full border border-blue-200 bg-blue-50 backdrop-blur-sm text-sm font-medium text-blue-600">
                        👋 Welcome to my portfolio
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
                        Hi, I&apos;m <br />
                        <span className="text-red-500 inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                            {DATA.name}
                        </span>
                    </h1>

                    <div className="h-10 text-2xl md:text-3xl font-medium text-slate-500">
                        {DATA.title}
                    </div>

                    <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                        {DATA.about}
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-red-500 transition-colors flex items-center gap-2 group shadow-lg hover:shadow-red-200"
                        >
                            Contact Me
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex gap-3">
                            <a
                                href={DATA.social.github}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 border border-blue-200 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-slate-600"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href={DATA.social.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 border border-blue-200 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-slate-600"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#contact"
                                className="p-3 border border-blue-200 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition-all text-slate-600"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* YouTube Channel Card */}
                    <motion.a
                        href={DATA.youtubeChannel.url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-start gap-4 p-4 rounded-2xl border border-red-100 bg-red-50 hover:bg-red-500 group transition-all duration-300 hover:shadow-lg hover:shadow-red-100 hover:border-red-300 max-w-lg cursor-pointer"
                    >
                        <div className="p-2.5 bg-red-500 group-hover:bg-white rounded-xl flex-shrink-0 transition-colors">
                            <Youtube className="w-6 h-6 text-white group-hover:text-red-500 transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-slate-900 group-hover:text-white transition-colors text-sm">
                                    {DATA.youtubeChannel.name}
                                </span>
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-500 text-white group-hover:bg-white group-hover:text-red-500 transition-colors">
                                    Co-Founder &amp; Mentor
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 group-hover:text-red-100 transition-colors leading-relaxed mb-2 line-clamp-2">
                                {DATA.youtubeChannel.description}
                            </p>
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1 text-xs font-semibold text-slate-600 group-hover:text-white transition-colors">
                                    <Users className="w-3.5 h-3.5" />
                                    {DATA.youtubeChannel.subscribers} subscribers
                                </span>
                                <span className="flex items-center gap-1 text-xs font-semibold text-slate-600 group-hover:text-white transition-colors">
                                    <PlayCircle className="w-3.5 h-3.5" />
                                    {DATA.youtubeChannel.videos} videos
                                </span>
                            </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white flex-shrink-0 self-center group-hover:translate-x-1 transition-all" />
                    </motion.a>
                </motion.div>

                {/* Right side - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/60 to-red-200/40 rounded-full blur-2xl opacity-70" />
                        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-200 hover:border-red-400 transition-colors mx-auto duration-500 shadow-2xl">
                            <Image
                                src="/profile.jpg"
                                alt={DATA.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
