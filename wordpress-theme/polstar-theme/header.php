<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class('polstar-theme'); ?>>
<?php wp_body_open(); ?>

<div class="min-h-screen relative">
    <!-- Main Space Background (MANDATORY) -->
    <div id="space-background" class="fixed inset-0 overflow-hidden pointer-events-none z-0" style="min-height: 100vh; height: 100%; width: 100%;"></div>
    
    <!-- Scroll-based star movement (MANDATORY) -->
    <div id="scroll-stars" class="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true"></div>
    
    <!-- Cursor trail effect (Optional) -->
    <div id="cursor-trail" class="fixed inset-0 pointer-events-none z-50" aria-hidden="true"></div>

    <!-- Main Header -->
    <header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
        <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between w-full h-20 lg:h-24">
                <!-- LEFT: Logo -->
                <div class="flex items-center gap-2 cursor-pointer group flex-shrink-0" onclick="scrollToSection('hero')">
                    <div class="relative flex items-center">
                        <img 
                            src="<?php echo get_template_directory_uri(); ?>/assets/images/logomain.png" 
                            alt="PolstarAI" 
                            class="h-12 sm:h-14 md:h-16 lg:h-[4.8rem] w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 drop-shadow-lg filter"
                            style="filter: drop-shadow(0 2px 8px rgba(59, 130, 246, 0.18)); image-rendering: high-quality;"
                            loading="eager"
                        />
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-400/18 via-cyan-400/18 to-yellow-400/18 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150"></div>
                    </div>
                </div>

                <!-- CENTER: Desktop Navigation Links -->
                <nav class="hidden lg:flex items-center justify-center flex-1 mx-8">
                    <div class="flex items-center gap-8">
                        <button onclick="scrollToSection('about-us')" class="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 relative group">
                            About
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button onclick="scrollToSection('why-polstar')" class="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 relative group">
                            Why PolstarAI
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button onclick="scrollToSection('ai-constellation')" class="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 relative group">
                            Our Agents
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button onclick="scrollToSection('behavioral-architecture')" class="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 relative group">
                            The Platform
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <button onclick="scrollToSection('contact')" class="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 relative group">
                            Contact
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </button>
                    </div>
                </nav>

                <!-- RIGHT: Mobile Menu Button -->
                <div class="flex items-center gap-4 flex-shrink-0">
                    <button id="mobile-menu-toggle" class="lg:hidden text-white p-2" aria-label="Toggle menu">
                        <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="lg:hidden hidden py-4 border-t border-white/10">
                <div class="flex flex-col gap-4">
                    <button onclick="scrollToSection('about-us')" class="text-left text-white/90 hover:text-white transition-colors py-2">About</button>
                    <button onclick="scrollToSection('why-polstar')" class="text-left text-white/90 hover:text-white transition-colors py-2">Why PolstarAI</button>
                    <button onclick="scrollToSection('ai-constellation')" class="text-left text-white/90 hover:text-white transition-colors py-2">Our Agents</button>
                    <button onclick="scrollToSection('behavioral-architecture')" class="text-left text-white/90 hover:text-white transition-colors py-2">The Platform</button>
                    <button onclick="scrollToSection('contact')" class="text-left text-white/90 hover:text-white transition-colors py-2">Contact</button>
                </div>
            </div>
        </nav>
    </header>

    <script>
        // Header scroll effect
        (function() {
            const header = document.getElementById('main-header');
            let lastScroll = 0;

            window.addEventListener('scroll', function() {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 20) {
                    header.classList.remove('bg-transparent');
                    header.classList.add('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
                } else {
                    header.classList.add('bg-transparent');
                    header.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
                }
                
                lastScroll = currentScroll;
            });

            // Mobile menu toggle
            const menuToggle = document.getElementById('mobile-menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');

            if (menuToggle && mobileMenu) {
                menuToggle.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                    menuIcon.classList.toggle('hidden');
                    closeIcon.classList.toggle('hidden');
                });
            }

            // Smooth scroll function
            window.scrollToSection = function(id) {
                const element = document.getElementById(id);
                if (element) {
                    const headerHeight = 96;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        menuIcon.classList.remove('hidden');
                        closeIcon.classList.add('hidden');
                    }
                }
            };
        })();
    </script>

