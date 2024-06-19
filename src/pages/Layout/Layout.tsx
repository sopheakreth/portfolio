import { Link, Outlet } from "react-router-dom";
import { getRootPath } from "../../utils/configProperties";
import { Home } from 'iconsax-react';
import { User } from 'iconsax-react';
import { DocumentText } from 'iconsax-react';
import { Award } from 'iconsax-react';
import { Personalcard } from 'iconsax-react';
import bg1 from '../../assets/images/bg-1.png';
import bg2 from '../../assets/images/bg-2.png';
import bg3 from '../../assets/images/bg-3.png';
import bg4 from '../../assets/images/bg-4.png';
import bg5 from '../../assets/images/bg-5.png';

const Layout = (props: { bgValue: string }) => {
  var rootPath = getRootPath();
  var backgroundImage = bg1;
  if (props.bgValue == '1') {
    backgroundImage = bg1;
  } else if (props.bgValue == '2') {
    backgroundImage = bg2;
  } else if (props.bgValue == '3') {
    backgroundImage = bg3;
  } else if (props.bgValue == '4') {
    backgroundImage = bg4;
  } else if (props.bgValue == '5') {
    backgroundImage = bg5;
  }
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="container-bg">
      <div className="container container-body">
        <div className="row">
          <div className="col-md-2 body-menu d-flex justify-content-center">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to={rootPath + '/'}>
                  <div className="menu-circle active rounded-circle">
                    <Home />
                    <div className="icon-label">Home</div>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={rootPath + '/about'}>
                  <div className="menu-circle rounded-circle">
                    <User />
                    <div className="icon-label">About</div>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={rootPath + '/resume'}>
                  <div className="menu-circle rounded-circle">
                    <DocumentText />
                    <div className="icon-label">Resume</div>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={rootPath + '/project'}>
                  <div className="menu-circle rounded-circle">
                    <Award />
                    <div className="icon-label">Project</div>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={rootPath + '/contact'}>
                  <div className="menu-circle rounded-circle">
                    <Personalcard />
                    <div className="icon-label">Contact</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-9 body-content">
            <div style={{ backgroundColor: '#168CF9', height: '5px' }}></div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
