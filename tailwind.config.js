tailwind.config = {
  theme: {
    extend: {
      colors: {
        cream: 'hsl(36 30% 96%)',
        charcoal: 'hsl(0 0% 14%)',
        white: 'hsl(0 0% 100%)',
        sage: {
          DEFAULT: 'hsl(148 22% 33%)',
          light: 'hsl(148 22% 92%)',
          dark: 'hsl(148 22% 26%)',
        },
        terracotta: {
          DEFAULT: 'hsl(12 32% 48%)',
          light: 'hsl(12 32% 93%)',
          dark: 'hsl(12 32% 38%)',
        },
        warm: {
          gray: 'hsl(30 10% 92%)',
          light: 'hsl(36 20% 97%)',
        },
        muted: {
          DEFAULT: 'hsl(0 0% 44%)',
          light: 'hsl(0 0% 60%)',
        },
        border: 'hsl(30 8% 84%)',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
};
