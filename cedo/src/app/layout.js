import localFont from "next/font/local";
// import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cedo",
  description: "Expense Tracking System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* <link rel="stylesheet" href="./globals.css" /> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} container`}>
        {children}
      </body>
    </html>
  );
}
