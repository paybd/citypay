import localFont from "next/font/local";
import "./globals.css";

const BanglaBold = localFont({
  src: "./fonts/uni_bangla_bold.ttf",
  variable: "--font-bangla-bold",
  weight: "500",
});
const BanglaSemiBold = localFont({
  src: "./fonts/uni_bangla_semibold.ttf",
  variable: "--font-bangla-semibold",
  weight: "300",
});

export const metadata = {
  title: "Global Remittance Service LTD",
  description: "Fast & Secure Remittance Channel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${BanglaBold.variable} ${BanglaSemiBold.variable} bg-slate-100 p-8  bg-transparent-50 bg-cover bg-no-repeat`}
      
      >
        {children}
      </body>
    </html>
  );
}
