import './App.css'

function App() {

  return (
    <>
      <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
        <div className="container">
            <a className="logo" href="#">Portfolio</a>         
            <ul className="nav">
                <li className="item">
                    <a className="link" href="#home">Home</a>
                </li>
                <li className="item">
                    <a className="link" href="#about">About</a>
                </li>
                <li className="item">
                    <a className="link" href="#portfolio">Portfolio</a>
                </li>
                <li className="item">
                    <a className="link" href="#testmonial">Testmonial</a>
                </li>
                <li className="item">
                    <a className="link" href="#blog">Blog</a>
                </li>
                <li className="item">
                    <a className="link" href="#contact">Contact</a>
                </li>
                <li className="item ml-md-3">
                    <a href="components.html" className="btn btn-primary">Components</a>
                </li>
            </ul>
            <a href="#" id="nav-toggle" className="hamburger hamburger--elastic">
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
            </a>
        </div>          
    </nav>

    <header id="home" className="header">
        <div className="overlay"></div>
        <div className="header-content container">
            <h1 className="header-title">
                <span className="up">HI!</span>
                <span className="down">I am Sopheak Reth</span>
            </h1>
            <p className="header-subtitle">SOFTWARE ENGINNER</p>            

            <button className="btn btn-primary">Visit My Works</button>
        </div>              
    </header>

    <section className="section pt-0" id="about">
        <div className="container text-center">
            <div className="about">
                <div className="about-img-holder">
                    <img src="/imgs/man.png" className="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                </div>
                <div className="about-caption">
                    <p className="section-subtitle">Who Am I ?</p>
                    <h2 className="section-title mb-3">About Me</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste 
                        <br />culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!              
                    </p>
                    <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
                </div>              
            </div>
        </div>
    </section>
    </>
  )
}

export default App
