<?php
// This file is for reference. Tailwind CSS configuration is typically handled
// by a Node.js build process (e.g., PostCSS) which compiles CSS classes.
// PHP itself doesn't directly use this config, but the generated HTML will
// contain the classes defined by Tailwind.

return [
    'darkMode' => ['class'],
    'content' => [
        // These paths would refer to your PHP template files
        // e.g., './*.php', './includes/*.php', './pages/*.php',
    ],
    'theme' => [
        'extend' => [
            'colors' => [
                // Custom luxury palette
                'nxg-dark' => '#0A0A0A', // Near black for background
                'nxg-light' => '#F5F5F5', // Off-white for light elements/text on dark
                'nxg-gold' => '#B8860B', // Deep gold accent
                'nxg-gray' => '#333333', // Dark gray for secondary text/borders
            ],
            'fontFamily' => [
                'sans' => ['Inter', 'sans-serif'], // Example sans-serif font
                'serif' => ['Playfair Display', 'serif'], // Example serif font for luxury
            ],
        ],
    ],
    'plugins' => [],
];
