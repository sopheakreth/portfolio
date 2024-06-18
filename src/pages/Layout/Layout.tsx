import { Outlet } from "react-router-dom";
import bg1 from '../../assets/images/bg-1.png';
import { Home } from 'iconsax-react';
import { User } from 'iconsax-react';
import { DocumentText } from 'iconsax-react';
import { Award } from 'iconsax-react';
import { Personalcard } from 'iconsax-react';

const Layout = () => {
  return (
    <div style={{ backgroundImage: `url(${bg1})` }} className="container-bg">
      <div className="container container-body">
        <div className="row">
          <div className="col-md-2 body-menu d-flex justify-content-center">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="menu-circle rounded-circle">
                    <Home />
                    <div className="icon-label">Home</div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="menu-circle rounded-circle">
                    <User />
                    <div className="icon-label">About</div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="menu-circle rounded-circle">
                    <DocumentText />
                    <div className="icon-label">Resume</div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="menu-circle rounded-circle">
                    <Award />
                    <div className="icon-label">Project</div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="menu-circle rounded-circle">
                    <Personalcard />
                    <div className="icon-label">Contact</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-9 body-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
  // <div style={{ backgroundImage: `url(${bg1})` }}
  //     className="container-full"
  //   ></div>
  // return (
  //   <div>
  //     <main>
  //       <div
  //         style={{ backgroundColor: "#e0f0ff" }}
  //         className="page-wrapper"
  //         id="main-wrapper"
  //         data-layout="vertical"
  //         data-navbarbg="skin6"
  //         data-sidebartype="full"
  //         data-sidebar-position="fixed"
  //         data-header-position="fixed"
  //       >
  //         <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
  //         <div className="row m-2 align-items-end" style={{position: 'absolute',top: '0', right: '0', zIndex : '9999'}}> <LanguageSwitcher/></div>
  //           <div className="d-flex align-items-center justify-content-center w-100">
  //             <div className="row justify-content-center w-100">
  //               <div className="col-md-10 col-lg-10 col-xxl-6">
  //                 <div className="card p-4 shadow-none mb-5 rounded-4 border-0">
  //                   <div className="row">
  //                     <Outlet />
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </main>
  //     <div className="row m-2 align-items-end" style={{position: 'fixed',bottom: '0', right: '0', zIndex : '9999'}}> <AppVersion/></div>
  //   </div>
  // );
};

export default Layout;
