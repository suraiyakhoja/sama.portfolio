module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Tailwind should process files in src
    ],
    theme: {
      extend: {
        fontFamily: {
          custom: ['""Darker Grotesque"'],
          custom2: ['"La Belle Aurore"'],
        },        
      },
    },
    plugins: [],
  }
  