import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
