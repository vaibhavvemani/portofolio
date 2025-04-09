import "./globals.css";

export const metadata = {
  title: "Vaibhav Vemani",
  description: "Vaibhavs Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
