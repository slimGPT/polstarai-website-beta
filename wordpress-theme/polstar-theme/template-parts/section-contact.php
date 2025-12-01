<?php
/**
 * Contact Section Template Part
 */
?>

<section id="contact" class="relative py-6 lg:py-8 bg-black overflow-hidden">
    <div data-star-background="low" class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true"></div>
    <div data-constellation-background="medium" class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-6xl mx-auto">
            <!-- Section Separator -->
            <div class="mb-6">
                <div class="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
            </div>
            
            <div class="mb-6 lg:mb-8 fade-up-blur">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 text-left">
                    Connect With Us
                </h2>
                <p class="text-base sm:text-lg text-white/70">
                    Let's build your intelligent agent.
                </p>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                <!-- Left Side - Text -->
                <div class="flex flex-col justify-center fade-up" style="animation-delay: 0.3s;">
                    <p class="text-base text-white/90 leading-relaxed mb-4">
                        Whether you're exploring your first AI agent or scaling existing operations, we'd love to hear from you.
                    </p>
                    <p class="text-base text-white/90 leading-relaxed">
                        Tell us about your context, and we'll help you identify the right agent or custom solution.
                    </p>
                </div>
                
                <!-- Right Side - Form -->
                <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 lg:p-8 scale-in" style="animation-delay: 0.4s;">
                    <form id="polstar-contact-form" class="space-y-6">
                        <div>
                            <label for="contact-name" class="block text-sm font-medium text-white/90 mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                required
                                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                placeholder="Your name"
                            />
                        </div>
                        
                        <div>
                            <label for="contact-email" class="block text-sm font-medium text-white/90 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                required
                                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        
                        <div>
                            <label for="contact-organization" class="block text-sm font-medium text-white/90 mb-2">
                                Organization *
                            </label>
                            <input
                                type="text"
                                id="contact-organization"
                                name="organization"
                                required
                                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                placeholder="Your organization"
                            />
                        </div>
                        
                        <div>
                            <label for="contact-role" class="block text-sm font-medium text-white/90 mb-2">
                                Role (optional)
                            </label>
                            <input
                                type="text"
                                id="contact-role"
                                name="role"
                                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                placeholder="Your role"
                            />
                        </div>
                        
                        <div>
                            <label for="contact-message" class="block text-sm font-medium text-white/90 mb-2">
                                Message / What problem are you trying to solve? *
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                required
                                rows="5"
                                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                                placeholder="Tell us about your needs..."
                            ></textarea>
                        </div>
                        
                        <button
                            type="submit"
                            class="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg shadow-blue-500/30"
                        >
                            Book a Demo
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

