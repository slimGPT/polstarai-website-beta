    <footer class="relative py-8 lg:py-12 bg-black border-t border-white/10">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div class="text-white/60 text-sm">
                    © <?php echo date('Y'); ?> PolstarAI. All rights reserved.
                </div>
                
                <div class="flex items-center gap-6">
                    <a href="<?php echo get_privacy_policy_url(); ?>" class="text-white/60 hover:text-white transition-colors text-sm">
                        Privacy
                    </a>
                    <a href="#" class="text-white/60 hover:text-white transition-colors text-sm">
                        Terms
                    </a>
                    <a
                        href="#"
                        class="text-white/60 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</div> <!-- End min-h-screen relative -->

<?php wp_footer(); ?>
</body>
</html>

