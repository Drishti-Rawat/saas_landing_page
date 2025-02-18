
import "./globals.css";



export const metadata = {
  title: "xoro - SaaS Landing Page",
  description: "xoro - SaaS Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
