module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Scans all files in the 'pages' directory
    './components/**/*.{js,ts,jsx,tsx}', // Scans all files in the 'components' directory
    './styles/**/*.{js,ts,jsx,tsx}', // Scans all files in the 'styles' directory (if you use a separate styles folder)
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/images/your-background.jpg')", // Add custom background image
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Tailwind CSS plugin for better form styling
    require('@tailwindcss/typography'), // Tailwind CSS plugin for better typography control
    require('@tailwindcss/aspect-ratio'), // Aspect-ratio plugin for controlling element ratios
  ],
};
