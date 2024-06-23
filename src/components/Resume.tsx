
import { LuBriefcase, LuGraduationCap } from 'react-icons/lu'

const experience1: string[] = [
  "Analyzed project requirements and designed prototypes",
  "Developed and enhanced the internal platform system, involved in the development of an e-commerce website using React JS, Java language, Scala language, Play framework, and Spring framework",
  "Implemented best practices within the development team (code reviews, source control, knowledge sharing, and daily standup meetings)"
];


const experience2: string[] = [
  "Designed prototypes and drawing diagram flow for business requirements",
  "Involved in building project structures using Java language, Spring Boot and designing database schema",
  "Developed backend management system and API for frontend mobile application",
  "Deployed release functionalities into the testing environment",
  "Performed User Acceptance Testing (UAT) before deploying to production",
  "Supported and investigated the customer’s issues regarding the mobile banking app"
];

const experience3: string[] = [
  "Collected and analyzed new requirements from each agency under the ministry",
  "Involved in the development and implementation of LPCO modules using Java and Spring Framework",
  "Integrated the payment gateway between NSW and local banks",
  "Implemented the import/export data from Excel and designed printing documents using Jasper Report",
  "Performed User Acceptance Testing (UAT) before deploying to production",
  "Deployed release functionalities into testing/production environments",
  "Monitored and supported users in the NSW management system"
];


const experience4: string[] = [
  "Designed and built project structures with high-quality and scalable backend system and middleware",
  "Developed, enhanced, and maintained the backend and API integration services",
  "Joint in the development and implementation of related systems",
  "Investigated and coordinated with the team to resolve issue or bugs in the development",
  "Worked with IT and related stakeholders to test new enhancement and new products to ensure products have been completed and deployed to production successfully",
  "Investigated and provided the system logs for dispute and reconciliation",
  "Supported and instructed junior developers on development tasks"
];

const experience5: string[] = [
  "Analyzed the business requirements and turn into technical implementation",
  "Defined project requirements by identifying project milestones and phases",
  "Estimated the project timeline, delegate tasks, and allocate resources",
  "Collaborated with UXUI designers, project managers, and relevant teams",
  "Communicated and integrated technologically with third-party partners or service providers",
  "Prepared and monitored checklists and related documents for subordinates’ execution",
  "Conducted testing to ensure the systems are well-developed and consistent with the objectives and requirements",
  "Provided support for the launch, post-implementation, and user training",
  "Supported users including the procedural documentation and relevant reports related system",
  "Assisted the manager in taking important decisions regarding technical solution",
  "Investigated and checked to verify the system logs for dispute and reconciliation"
];


const ResumeComponent = () => {
  return (
    <>
      <section className="section pb-5" id="resume">
        <div className="container text-center">
          <p className="section-subtitle">What Experience and Education ?</p>
          <h6 className="section-title mb-6">Resume</h6>
          <div className="blog-card">
            <div className="blog-card-body">
              <h5 className="blog-card-title"><LuBriefcase size={28} className='mr-2' /> Experience</h5>
              <div className="container mt-4">
                <div className="experience">
                  <div className="item">
                    <h5 className="company-name">Deputy Manager, Technology Development</h5>
                    <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Cambodia</div>
                    <div className="job-info">
                      <div className="h6">Jan 2024 - Present, B.I.C (Cambodia) Bank PLC.</div>
                    </div>
                    <div>
                      <ul className="fa-ul">
                        {experience5.map((task, index) => (
                          <li key={index}><p className="m-0">{task}</p></li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="item">
                    <h5 className="company-name">Senior Officer, Digital System</h5>
                    <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Cambodia</div>
                    <div className="job-info">
                      <div className="h6">Aug 2020 - Dec 2023, B.I.C (Cambodia) Bank PLC.</div>
                    </div>
                    <div>
                      <ul className="fa-ul">
                        {experience4.map((task, index) => (
                          <li key={index}><p className="m-0">{task}</p></li>
                        ))}</ul>
                    </div>
                  </div>

                  <div className="item">
                    <h5 className="company-name">Software Engineer</h5>
                    <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Cambodia</div>
                    <div className="job-info">
                      <div className="h6">Feb 2019 - Aug 2020, vCargo Cloud Pte Ltd.</div>
                    </div>
                    <div>
                      <ul className="fa-ul">
                        {experience3.map((task, index) => (
                          <li key={index}><p className="m-0">{task}</p></li>
                        ))}</ul>
                    </div>
                  </div>

                  <div className="item">
                    <h5 className="company-name">Digital Technical Assistant</h5>
                    <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Cambodia</div>
                    <div className="job-info">
                      <div className="h6">Mar 2018 - Jan 2019, Phillip Bank PLC.</div>
                    </div>
                    <div>
                      <ul className="fa-ul">
                        {experience2.map((task, index) => (
                          <li key={index}><p className="m-0">{task}</p></li>
                        ))}</ul>
                    </div>
                  </div>

                  <div className="item">
                    <h5 className="company-name">Java Developer</h5>
                    <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Cambodia</div>
                    <div className="job-info">
                      <div className="h6">Oct 2016 - Feb 2018, Nanita Tech Co., Ltd.</div>
                    </div>
                    <div>
                      <ul className="fa-ul">
                        {experience1.map((task, index) => (
                          <li key={index}><p className="m-0">{task}</p></li>
                        ))}</ul>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="blog-card-title"><LuGraduationCap size={28} className='mr-2' /> Education</h5>
              <div className="container mt-4">
                <div className="experience">
                  <div className="item">
                    <h5 className="company-name">Bachelor of Science in Information Technology</h5>
                    <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Cambodia</div>
                    <div className="job-info">
                      <div className="h6">Graduated 2117, Build Bright University, Phnom Penh</div>
                    </div>
                    <div>
                      <ul className="fa-ul">
                        <li><p className="m-0">GPA: 3.07</p></li>
                        <li><p className="m-0">Studied several technologies of software engineers and computer networks in university</p></li>
                      </ul>
                    </div>
                  </div>

                  <div className="item">
                    <h5 className="company-name">Training Software Professionals</h5>
                    <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Cambodia</div>
                    <div className="job-info">
                      <div className="h6">Apr 2016 - Aug 2016, Korea Software HRD Center</div>
                    </div>
                    <div>
                      <ul className="fa-ul">
                        <li><p className="m-0">Studied technical skills in Java SE, Java EE, Spring framework, MyBatis, Restful API, and Spring Security</p></li>
                        <li><p className="m-0">Studied project planning, project practice, and working in team</p></li>
                      </ul>
                    </div>
                  </div>

                  <div className="item">
                    <h5 className="company-name">High School Diploma</h5>
                    <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Cambodia</div>
                    <div className="job-info">
                      <div className="h6">Graduated 2013, Samdech Euv Battambang High School</div>
                    </div>
                    <div>
                      <ul className="fa-ul">
                        <li><p className="m-0">Studied general knowledge of Cambodia's education programs</p></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResumeComponent;