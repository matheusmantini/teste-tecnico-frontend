import Head from "next/head";
import { Header } from "./Header";
import { Poppins } from "next/font/google";
import { iLayoutProps } from "@/types";
import MenuMobile from "./MenuMobile";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Layout = ({ children }: iLayoutProps) => {
  return (
      <div className={`${poppins.variable} font-sans`}>
        <Head>
          <title>Github Repos</title>
          <meta name="description" content="Website description" />
        </Head>

        <Header />
        {children}
        <MenuMobile />
      </div>    
  );
};

export default Layout;
