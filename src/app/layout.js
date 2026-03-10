import "./globals.css";

export const metadata = {
  title: "Vaibhav Vemani — Developer, Builder, Gamer",
  description:
    "Portfolio of Vaibhav Vemani — Software Engineer, ML Developer, and motorsports enthusiast based in Bangalore, India. Building cool stuff from web apps to machine learning agents.",
  keywords: [
    "Vaibhav Vemani",
    "Software Developer",
    "ML Developer",
    "Portfolio",
    "Bangalore",
    "India",
  ],
  authors: [{ name: "Vaibhav Vemani" }],
  openGraph: {
    title: "Vaibhav Vemani — Developer, Builder, Gamer",
    description:
      "Software Engineer & ML Developer based in Bangalore, India.",
    type: "website",
    url: "https://vaibhavvemani.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
