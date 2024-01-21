import { Saira, Saira_Stencil_One } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-saira",
});
const sairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-saira-stencil-one",
});

export { saira, sairaStencilOne };
