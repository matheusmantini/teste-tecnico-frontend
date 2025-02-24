import Head from "next/head";
import { Header } from "./Header";
import { Poppins } from "next/font/google";
import { iLayoutProps } from "@/types";
import MenuMobile from "./MenuMobile";
import { LayoutProvider } from "@/context/LayoutContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Layout = ({ children }: iLayoutProps) => {
  return (
    <LayoutProvider>
      <div className={`${poppins.variable} font-sans`}>
        <Head>
          <title>Github Repos</title>
          <meta name="description" content="Website description" />
        </Head>

        <Header />
        {children}
        <MenuMobile />
      </div>{" "}
    </LayoutProvider>
  );
};

export default Layout;
