import profileImage from '/imgs/profile.png'
import cvFile from '/files/sopheak_reth_cv_2024.pdf'
import GoogleMapButton from './GoogleMapButton';

const skillDev: String = "HTML, CSS, Javascript, Typescript, Java SE, Java EE, Spring  framework, Spring Boot, Spring MVC, MyBatis, Hibernate, Spring Data JPA, Spring Security, OAuth, JWT, JSP, Thymeleaf, Restful API, JSON, SOAP, gRPC, IDAP, Redis, Spring Statemachine, Maven, Gradle, Kafka, React JS, Flutter, PHP, Scala, Monolithic, Microservices";
const skillTool: String = "Git, Linux, Jasper Report, Oracle Database, PosgreSQL, MySQL, MongoDB, Tomcat, Wildfly, Eclipse, Intellij Ideas, Postman, Swagger UI, Figma, Draw.io, Mermaid Chart, Google Analytics, Firebase, Telegram Bot, Docker, Jira, Scrum, Agile";
const badgeClasses = [
  'badge-primary',
  'badge-secondary',
  'badge-success',
  'badge-warning',
  'badge-info'
];

const AboutComponent = () => {

  // Split skills by comma and trim spaces
  const skillDevs = skillDev.split(',').map(skill => skill.trim());
  const skillTools = skillTool.split(',').map(skill => skill.trim());

  // Function to get a random badge class
  const getRandomBadgeClass = () => {
    const randomIndex = Math.floor(Math.random() * badgeClasses.length);
    return badgeClasses[randomIndex];
  };

  return (
    <>
      <section className="section pt-0" id="about">
        <div className="container text-center">
          <div className="about">
            <div className="about-img-holder">
              <img src={profileImage} className="about-img" alt="My Profile" />
            </div>
            <div className="about-caption">
              <p className="section-subtitle">Who Am I ?</p>
              <h2 className="section-title mb-3">About Me</h2>
              <p>
                I am a software enginner with a Bachelor of Science in Information Technology and over 6 years of experience in Java programming.
                I possess a strong skillset in  coding, integration, enhancement, and maintenance of software, allowing me to effectively translate user requirements into tangible solutions.
                Throughout my career, I've consistently delivered projects on time, exceeding expectations through successful user acceptance testing.
                Beyond technical expertise, I bring a collaborative and results-oriented approach, with strengths in problem-solving, initiative, and teamwork.
              </p>
              <dl className="row">
                <dt className="col-sm-6 col-md-3">Name:</dt>
                <dd className="col-sm-6 col-md-9">Sopheak Reth</dd>

                <dt className="col-sm-6 col-md-3">Date of Birth:</dt>
                <dd className="col-sm-6 col-md-9">02 January 1995</dd>

                <dt className="col-sm-6 col-md-3">Email:</dt>
                <dd className="col-sm-6 col-md-9">rethsopheak@gmail.com</dd>

                <dt className="col-sm-6 col-md-3">Phone:</dt>
                <dd className="col-sm-6 col-md-9">(+855) 70 616 178</dd>

                <dt className="col-sm-6 col-md-3">Address:</dt>
                <dd className="col-sm-6 col-md-9"><GoogleMapButton /></dd>
              </dl>

              <form target="_blank" method="get" action={cvFile}>
                <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <h4>Skills</h4>
          <div className="row">
            <div className="col-md-6">
              <p className="h6">Developments</p>

              {skillDevs.map((skill, index) => (
                <span key={index} className={`badge badge-pill ${getRandomBadgeClass()} mr-1`}>
                  {skill}
                </span>
              ))}
            </div>
            <div className="col-md-6">
              <p className="h6">Tools & Technologies</p>

              {skillTools.map((skill, index) => (
                <span key={index} className={`badge badge-pill ${getRandomBadgeClass()} mr-1`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;