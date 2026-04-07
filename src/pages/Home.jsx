import NavBar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default Home;
