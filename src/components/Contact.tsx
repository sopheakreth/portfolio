import { LuLink } from 'react-icons/lu';

const ContactComponent = () => {
  const handleAlert = () => {
    alert('This feature is under maintenance. Please try again later or go to Linktree for direct contact: https://linktr.ee/sopheakreth');
  };
  return (
    <>
      <section className="section" id="contact">
        <div className="container text-center">
          <p className="section-subtitle">How can you communicate?</p>
          <h6 className="section-title">Contact Me</h6>
          <a href="https://linktr.ee/sopheakreth" target="_blank" className="btn my-font btn-secondary rounded mb-5">
            <LuLink /> Go to Linktree
          </a>
          <form action="#" className="contact-form col-md-10 col-lg-8 m-auto">
            <div className="form-row">
              <div className="form-group col-sm-6">
                <input type="text" size={50} className="form-control" placeholder="Your Name"
                  required />
              </div>
              <div className="form-group col-sm-6">
                <input type="email" className="form-control" placeholder="Enter Email"
                  required />
              </div>
              <div className="form-group col-sm-12">
                <textarea name="comment" id="comment" rows={6} className="form-control" placeholder="Write Something"
                ></textarea>
              </div>
              <div className="form-group col-sm-12 mt-3">
                {/* <input type="submit" value="Send Message" className="btn btn-outline-primary rounded" /> */}
                <button className="btn btn-outline-primary rounded" onClick={handleAlert}>Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactComponent;