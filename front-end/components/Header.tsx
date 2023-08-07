import Link from "next/link";
import DarkModeToggleButton from "./Dark-mode-toggle-button";
import Script from "next/script";
import Head from "next/head";

interface HeadProps {
    title: string;
    description?: string;
    overrideTitle?: boolean;
    structuredData?: string;
  }

export default function Header({
    title,
    description,
    overrideTitle = false,
    structuredData = '',
  }: HeadProps){

    const htmlTitle = overrideTitle
      ? title
      : `${title} — SMOGNS · Web Developer`;
  
    return (
        <>  
            <Head>
                <title>{htmlTitle}</title>
                <meta name="description" content="오늘도 빡코딩!" />
                <link rel="icon" href="/favicon.ico" />
            </Head> 
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={"/"} legacyBehavior>
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="main-title font-[GoryeongStrawberry]">SMONGS BLOG</span>
                        </a>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                        <Link href={"/projects"} legacyBehavior>
                            <a className="mr-5 hover:text-stone-900 dark:hover:text-gray-500 font-[GoryeongStrawberry]">프로젝트</a>
                        </Link>
                        <Link href={"/blog"} legacyBehavior>
                            <a className="mr-5 hover:text-stone-900 dark:hover:text-gray-500">블로그</a>
                        </Link>
                    
                        <Link href={"/write"} legacyBehavior>
                            <a className="mr-5 hover:text-stone-900 dark:hover:text-gray-500">글 작성</a>
                        </Link>
                    </nav>
                    <DarkModeToggleButton />
                </div>
            </header>
        </>
    )
}