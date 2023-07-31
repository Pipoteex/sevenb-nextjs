/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                popRight: "url('../components/about/images/popRight.svg')",
                popLeft: "url('../components/about/images/popLeft.svg')",
            },
            fontFamily: {
                roboto: ["var(--font-roboto)"],
                robotoMono: ["var(--font-robotoMono)"],
                sans: ["var(--font-sans)"],
            },
            colors: {
                first: "#222539",
                second: "#FFFFFF",
                third: "#2FB087",
                five: "#A6A6A6",
            },
        },
    },
    plugins: [],
};
