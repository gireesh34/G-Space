import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Exp from "@/components/main/Exp";

export default function Home() {
  return (
    <main className='h-full W-full'>
      <div className='flex flex-col gap-20'>
        <Hero />
        <Skills />
        <Exp />
        <Encryption />
        <Projects />
      </div>  
    </main>
  );
}
