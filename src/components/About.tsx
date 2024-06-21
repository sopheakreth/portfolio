import profileImage from '/imgs/profile.png'

const AboutComponent = () => {
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
                I am a software enginner with a Bachelor of Science in Information Technology and over 6 years of experience in Java programming.  I possess a strong skillset in  coding, integration, enhancement, and maintenance of software, allowing me to effectively translate user requirements into tangible solutions.  Throughout my career, I've consistently delivered projects on time, exceeding expectations through successful user acceptance testing.  Beyond technical expertise, I bring a collaborative and results-oriented approach, with strengths in problem-solving, initiative, and teamwork.
              </p>
              <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;