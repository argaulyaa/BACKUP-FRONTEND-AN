import "./globals.css";

export const metadata = {
  title: "Adaptive Network Laboratory",
  description: "Telkom University - Adaptive Network Laboratory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}