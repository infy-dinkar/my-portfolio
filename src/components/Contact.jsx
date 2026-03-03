"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Loader2, Send, MapPin, Phone, Mail } from "lucide-react";
import { DATA } from "@/lib/data";

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Something went wrong");
            }

            toast.success("Message sent successfully!");
            reset();
        } catch (error) {
            console.error(error);
            toast.error(error.message || "Failed to send message. Please try again.");
        }
    };

    return (
        <section id="contact" className="py-20 relative bg-white border-t border-slate-200">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Get in <span className="text-blue-600">Touch</span>
                    </h2>
                    <p className="text-slate-500">Have a project in mind or want to collaborate? Feel free to reach out.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold text-slate-900">Contact Information</h3>

                        <a href={`mailto:${DATA.email}`} className="flex items-start gap-4 group cursor-pointer">
                            <div className="p-3 bg-blue-50 border border-blue-100 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="block">
                                <h4 className="font-medium text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Email</h4>
                                <span className="text-lg text-slate-700 font-medium block">{DATA.email}</span>
                                <span className="text-xs text-red-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity block">Click to open Gmail</span>
                            </span>
                        </a>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-50 border border-blue-100 rounded-full text-blue-600">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-medium text-slate-900 mb-1">Phone</h4>
                                <p className="text-slate-500">{DATA.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-red-50 border border-red-100 rounded-full text-red-500">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-medium text-slate-900 mb-1">Location</h4>
                                <p className="text-slate-500">{DATA.location}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-md"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Name</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-slate-900 placeholder-slate-400"
                                    placeholder="Your Name"
                                />
                                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Email</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-slate-900 placeholder-slate-400"
                                    placeholder="your@email.com"
                                />
                                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-2">Message</label>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-slate-900 placeholder-slate-400 resize-none"
                                    placeholder="Your message..."
                                />
                                {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-red-500 hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 duration-200"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
