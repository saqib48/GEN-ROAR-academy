import Image from "next/image";
import "../app/globals.css";
import Header from "@/components/Organisms/Header";
import Banner from "@/components/Organisms/Banner";
import Skill from "@/components/Organisms/Skill";
import About from "@/components/Organisms/About";
import Courses from "@/components/Organisms/Courses";
import Instructors from "@/components/Organisms/Instructors";
import Footer from "@/components/Organisms/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div>
        <Header />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Skill />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Courses />
      </div>
      <div>
        <Instructors />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
