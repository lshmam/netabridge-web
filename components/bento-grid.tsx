"use client"

import { BlurReveal } from "@/components/BlurReveal"
import { Eye, Clock, Users, Shield, Globe2, TrendingUp, Search, Zap } from "lucide-react"

export function BentoGrid() {
    return (
        <div className="mx-auto max-w-6xl py-8 md:py-12 px-4 md:px-16 lg:px-32 xl:px-48">
            <BlurReveal delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-sm font-medium mb-12">
                    <span>🔑</span>
                    Unlock Your Network
                </div>
            </BlurReveal>

            {/* Bento Grid - Enhanced with Visual Elements */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-3 max-w-6xl mx-auto">
                {/* Large Card 1 - Make Opportunity Visible (Top Left, 2 cols x 2 rows) */}
                <div className="lg:col-span-2 lg:row-span-2 group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-emerald-50 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-emerald-100/50">
                    {/* Background graphic */}
                    <div className="absolute top-4 right-4 opacity-10">
                        <Eye className="w-32 h-32 text-emerald-600" />
                    </div>

                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-medium uppercase tracking-wider text-emerald-700">VISIBILITY</span>
                        <Eye className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="mt-auto relative z-10">
                        <h3 className="font-medium mb-2 text-xl lg:text-2xl text-emerald-900">
                            Make Opportunity Visible
                        </h3>
                        <p className="leading-relaxed text-base text-emerald-700">
                            Your connections already hold supply, demand, and capability. This platform brings that information to the surface — when timing matters most.
                        </p>
                    </div>
                </div>

                {/* Small Card 2 - Act at the Right Moment */}
                <div className="group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-neutral-100 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-neutral-50">
                    {/* Icon graphic */}
                    <div className="absolute -bottom-2 -right-2 opacity-10">
                        <Clock className="w-24 h-24 text-neutral-600" />
                    </div>

                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">TIMING</span>
                        <Clock className="w-5 h-5 text-neutral-600" />
                    </div>
                    <div className="mt-auto relative z-10">
                        <h3 className="font-medium mb-2 text-lg text-black">
                            Act at the Right Moment
                        </h3>
                        <p className="leading-relaxed text-sm text-neutral-600">
                            Live orders and real-time signals ensure you see demand and availability as they emerge.
                        </p>
                    </div>
                </div>

                {/* Small Card 3 - Search People, Not Just Listings */}
                <div className="group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-neutral-100 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-neutral-50">
                    {/* Icon graphic */}
                    <div className="absolute -bottom-2 -right-2 opacity-10">
                        <Users className="w-24 h-24 text-neutral-600" />
                    </div>

                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">SEARCH</span>
                        <Search className="w-5 h-5 text-neutral-600" />
                    </div>
                    <div className="mt-auto relative z-10">
                        <h3 className="font-medium mb-2 text-lg text-black">
                            Search People, Not Just Listings
                        </h3>
                        <p className="leading-relaxed text-sm text-neutral-600">
                            Find who can deliver, who is looking, and who has done it before.
                        </p>
                    </div>
                </div>

                {/* Large Card 4 - Confidence Through Transparency (Right, 2 cols x 2 rows) */}
                <div className="lg:col-span-2 lg:row-span-2 group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-blue-50 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-blue-100/50">
                    {/* Chart-like graphic */}
                    <div className="absolute top-6 right-6 opacity-20">
                        <div className="flex items-end gap-1 h-24">
                            <div className="w-3 bg-blue-400 rounded-t" style={{ height: '40%' }}></div>
                            <div className="w-3 bg-blue-500 rounded-t" style={{ height: '70%' }}></div>
                            <div className="w-3 bg-blue-600 rounded-t" style={{ height: '90%' }}></div>
                            <div className="w-3 bg-blue-700 rounded-t" style={{ height: '60%' }}></div>
                            <div className="w-3 bg-blue-500 rounded-t" style={{ height: '85%' }}></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-medium uppercase tracking-wider text-blue-700">TRUST</span>
                        <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="mt-auto relative z-10">
                        <h3 className="font-medium mb-2 text-xl lg:text-2xl text-blue-900">
                            Confidence Through Transparency
                        </h3>
                        <p className="leading-relaxed text-base text-blue-700">
                            See activity, reliability, and participation across your network. Make decisions backed by real performance, not guesswork.
                        </p>
                    </div>
                </div>

                {/* Small Card 5 - Work Globally Without Friction */}
                <div className="group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-neutral-100 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-neutral-50">
                    {/* Globe icon graphic */}
                    <div className="absolute -bottom-2 -right-2 opacity-10">
                        <Globe2 className="w-24 h-24 text-neutral-600" />
                    </div>

                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">GLOBAL</span>
                        <Globe2 className="w-5 h-5 text-neutral-600" />
                    </div>
                    <div className="mt-auto relative z-10">
                        <h3 className="font-medium mb-2 text-lg text-black">
                            Work Globally Without Friction
                        </h3>
                        <p className="leading-relaxed text-sm text-neutral-600">
                            Conversations and negotiations translate instantly while preserving accuracy.
                        </p>
                    </div>
                </div>

                {/* Small Card 6 - Momentum That Compounds */}
                <div className="group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-neutral-100 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-neutral-50">
                    {/* Trending icon graphic */}
                    <div className="absolute -bottom-2 -right-2 opacity-10">
                        <TrendingUp className="w-24 h-24 text-neutral-600" />
                    </div>

                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">MOMENTUM</span>
                        <Zap className="w-5 h-5 text-neutral-600" />
                    </div>
                    <div className="mt-auto relative z-10">
                        <h3 className="font-medium mb-2 text-lg text-black">
                            Momentum That Compounds
                        </h3>
                        <p className="leading-relaxed text-sm text-neutral-600">
                            Visible contributions encourage responsiveness, consistency, and trust.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
