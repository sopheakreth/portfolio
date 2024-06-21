import { LuFacebook, LuLinkedin, LuGithub } from 'react-icons/lu';


const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="container">
        <footer className="footer">
          <p className="mb-0">Copyright &copy; {currentYear}</p>
          <div className="social-links text-right m-auto ml-sm-auto">
            <a href="https://www.facebook.com/sopheak.reth" className="link" target='_blank'>
              <LuFacebook size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sopheak-reth" className="link" target='_blank'>
              <LuLinkedin size={24} />
            </a>
            <a href="https://github.com/sopheakreth" className="link" target='_blank'>
              <LuGithub size={24} />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FooterComponent;