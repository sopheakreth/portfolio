import projectImage1 from '/imgs/project1.png'
import projectImage2 from '/imgs/project2.png'
import projectImage3 from '/imgs/project3.png'
import projectImage4 from '/imgs/project4.png'
import projectImage5 from '/imgs/project5.png'
import projectImage6 from '/imgs/project6.png'
import projectImage7 from '/imgs/project7.png'

interface Project {
  image: string;
  projectName: string;
  description: string;
}

const projects: Project[] = [
  {
    image: projectImage1,
    projectName: "APIs for Mobile Banking App",
    description: "Developed APIs for Frontend and integrated APIs with vendors or service providers such as Transfer to Local Banks, Cross-border Payment, and Bill Services Payment using Java Spring Boot"
  },
  {
    image: projectImage2,
    projectName: "Payment Gateway",
    description: "Developed Web Payment Gateway and API Payment Gateway for third-party integration using Java Spring Boot and Thymeleaf"
  },
  {
    image: projectImage3,
    projectName: "Logistic Management System",
    description: "Developed and maintained functionalities for traders and agencies to request import/export products in Cambodia using Java Spring MVC and JSP"
  },
  {
    image: projectImage4,
    projectName: "Fintech Management System",
    description: "Developed an e-wallet platform to support agencies and merchants to perform payment on Wallet Mobile App using Java Spring Boot and Thymeleaf"
  },
  {
    image: projectImage5,
    projectName: "POS Management System",
    description: "Developed a point-of-sale system for retail selling, managed inventory, and generated reports using Java Spring Boot, Thymeleaf, and Jasper Report"
  },
  {
    image: projectImage6,
    projectName: "Electricity Management System",
    description: "Developed a system to manage customer's electricity bill payments using Java Spring Boot and React JS"
  },
  {
    image: projectImage7,
    projectName: "E-commerce Website",
    description: "Developed an e-commerce website for posting products and integration with payment checkout using Java Spring Boot and React JS"
  }
];

const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
};

const ProjectComponent = () => {
  return (
    <>
      <section className="section" id="project">
        <div className="container text-center">
          <p className="section-subtitle">What I Done ?</p>
          <h6 className="section-title mb-6">Project</h6>
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-sm-6 col-md-3 mb-4" key={index}>
                <a href="#" onClick={handleClick} className="portfolio-card">
                  <img src={project.image} className="portfolio-card-img" alt="" />
                  <span className="portfolio-card-overlay">
                    <span className="portfolio-card-caption">
                      <h5>{project.projectName}</h5>
                      <p className="font-weight-normal font-size-12">{project.description}</p>
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectComponent;