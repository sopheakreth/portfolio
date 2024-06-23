import AboutComponent from "../components/About";
import ContactComponent from "../components/Contact";
import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";
import ProjectComponent from "../components/Project";
import ResumeComponent from "../components/Resume";
import { LuArrowBigUpDash } from 'react-icons/lu';

const PortfolioPage = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <HeaderComponent />

      <AboutComponent />

      <ResumeComponent />

      <section className="section-sm bg-primary">
        <div className="container text-center text-sm-left">
          <div className="row align-items-center">
            <div className="col-sm offset-md-1 mb-4 mb-md-0">
              <h6 className="title text-light">Are you interested in working together ?</h6>
              <p className="m-0 text-light">My calendar's open! Feel free to reach out if you have something interesting in the works. </p>
            </div>
            <div className="col-sm offset-sm-2 offset-md-3">
              <a href="https://linktr.ee/sopheakreth" target="_blank" className="btn btn-lg my-font btn-light rounded">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

      <ProjectComponent />

      <ContactComponent />

      <FooterComponent />

      <button className="btn btn-rounded btn-outline-primary" onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <LuArrowBigUpDash size={24} />
      </button>
    </>
  );
}

export default PortfolioPage;