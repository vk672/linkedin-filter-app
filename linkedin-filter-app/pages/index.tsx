import Head from "next/head";
import FilterSection from "@/components/FilterSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>LinkedIn Filter Tool</title>
        <meta name="description" content="LinkedIn Talent Filter with RapidAPI and OpenAI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">LinkedIn Filter Tool</h1>
        <FilterSection />
      </main>
    </>
  );
}
