import imgProfile from '../../assets/images/profile3.png';
import { LuFacebook } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";

const HomePage = () => {
  return (
    <div>
      <div className='pt-4 ps-5' style={{ position: 'absolute' }}>
        <h1 style={{ color: '#E04545' }}>Sopheak Reth</h1>
        <br />
        <h2>Hi,</h2>
        <h2 style={{ opacity: 0.9 }}>I’m a Software Engineer</h2>
        <h3 style={{ opacity: 0.8 }}>I’m a Backend Developer</h3>
        <h4 style={{ opacity: 0.7 }}>I’m a Java Developer</h4>
        <h5 style={{ opacity: 0.6 }}>I’m a Web Developer</h5>
        <div style={{ width: '400px' }} className='mt-5'>
          <nav className="nav">
            <a className="nav-link p-0 pe-2" target="_blank" href="https://www.facebook.com/sopheak.reth">
              <div className='rounded-circle social-circle'>
                <LuFacebook size={18} />
              </div>
            </a>
            <a className="nav-link p-0 pe-2" target="_blank" href="https://www.linkedin.com/in/sopheak-reth">
              <div className='rounded-circle social-circle'>
                <LuLinkedin size={18} />
              </div>
            </a>
            <a className="nav-link p-0 pe-2" target="_blank" href="https://github.com/sopheakreth">
              <div className='rounded-circle social-circle'>
                <LuGithub size={18} />
              </div>
            </a>
          </nav>
          <button className='btn btn-outline-secondary rounded-5 mt-3 fw-bold'>Download CV</button>
        </div>
      </div>
      <div style={{ float: 'right' }}>
        <img src={imgProfile}
          style={{ bottom: 0, float: 'right', height: '495px' }}
          alt="" />
      </div>
    </div>
  );
};

export default HomePage;