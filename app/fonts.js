import { Geist_Mono, Montserrat_Alternates } from "next/font/google";

export const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["900"],
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["700", "900"],
});
