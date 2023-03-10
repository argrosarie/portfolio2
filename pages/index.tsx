/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SplineTest from "../components/Test";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen  snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-[#5dc1b9]/80">
      <Head>
        <title>Rosario's portfolio</title>
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="experience" className="snap-start">
        <Experience />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* <section id="skills" className="snap-start">
        <Skills />
      </section> */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <section className="snap-start">
        <Footer />
      </section>
    </div>
  );
}
