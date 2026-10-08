import { Inter, Geist, Geist_Mono, Lusitana } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export { geistSans, geistMono, inter, lusitana };
