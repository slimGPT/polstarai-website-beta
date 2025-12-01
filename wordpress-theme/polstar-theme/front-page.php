<?php
/**
 * Template Name: Front Page
 * The main homepage template
 */

get_header();
?>

<main id="main-content">
    
    <!-- Hero Section -->
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-visible">
        <!-- Section-specific constellation -->
        <div data-constellation-background="medium" class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true"></div>
        
        <!-- Subtle starfield background -->
        <div data-star-background="medium" class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true"></div>
        
        <!-- Dark Overlay for Readability -->
        <div class="absolute inset-0 bg-black/40 z-0"></div>
        
        <!-- Content -->
        <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 gap-8 lg:gap-12 items-start lg:items-center">
                    <div class="text-left">
                        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 lg:mb-4 leading-tight fade-in-up">
                            <span class="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                                Purpose-built agents powered by a unified intelligence layer
                            </span>
                        </h1>
                        
                        <p class="text-base sm:text-lg lg:text-xl text-cyan-300 italic mb-6 lg:mb-8 font-normal tracking-wide opacity-90 fade-in-up" style="animation-delay: 0.2s;">
                            One agent. One painful problem. One ideal customer.
                        </p>
                        
                        <div class="flex flex-col sm:flex-row items-center sm:items-center gap-4 fade-in-up" style="animation-delay: 0.5s;">
                            <button
                                onclick="scrollToSection('ai-constellation')"
                                class="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-200 text-lg overflow-hidden hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap flex-shrink-0"
                            >
                                <span class="relative z-10">Explore Our Agents</span>
                                <span class="absolute inset-0 bg-white/10 scale-0 group-active:scale-100 transition-transform duration-300 opacity-0 group-active:opacity-100 rounded-lg"></span>
                            </button>
                            <!-- ElevenLabs Widget placeholder -->
                            <div class="hero-widget-column">
                                <!-- Add ElevenLabs widget here if needed -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Divider -->
    <div class="opacity-20 my-0">
        <div class="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
    </div>

    <?php
    // Include sections using template parts or direct PHP includes
    // For now, we'll create template parts for each section
    
    // Problem Section
    get_template_part('template-parts/section', 'problem');
    
    // Section Divider
    echo '<div class="opacity-20 my-0"><div class="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div></div>';
    
    // Vertical AI Delivers Section
    get_template_part('template-parts/section', 'vertical-ai');
    
    // Section Divider
    echo '<div class="opacity-20 my-0"><div class="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div></div>';
    
    // About Us Section
    get_template_part('template-parts/section', 'about-us');
    
    // Section Divider
    echo '<div class="opacity-20 my-0"><div class="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div></div>';
    
    // Behavioral Architecture Section
    get_template_part('template-parts/section', 'behavioral-architecture');
    
    // Section Divider
    echo '<div class="opacity-20 my-0"><div class="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div></div>';
    
    // RAG Section
    get_template_part('template-parts/section', 'rag');
    
    // Section Divider
    echo '<div class="opacity-20 my-0"><div class="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div></div>';
    
    // AI Constellation Section
    get_template_part('template-parts/section', 'ai-constellation');
    
    // Section Divider
    echo '<div class="opacity-20 my-0"><div class="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div></div>';
    
    // Why Polstar Section
    get_template_part('template-parts/section', 'why-polstar');
    
    // Section Divider
    echo '<div class="opacity-20 my-0"><div class="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div></div>';
    
    // Partners Section
    get_template_part('template-parts/section', 'partners');
    
    // Section Divider
    echo '<div class="opacity-20 my-0"><div class="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div></div>';
    
    // Contact Section
    get_template_part('template-parts/section', 'contact');
    ?>

</main>

<?php get_footer(); ?>

