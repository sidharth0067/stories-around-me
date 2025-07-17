import './App.css';
function App() {
  return (
    <>
      <nav className="navbar">
        <a className="navItems" href="#home">Home</a>
        <a className="navItems" href="#about">About</a>
        <a className="navItems" href="#stories">Stories</a>
        <a className="navItems" href="#contact">Contact</a>
        <div className='loginButton'>
        <button className='login'>Login</button>
        </div>
      </nav>



      <section
        className="hero" id='home'
        style={{backgroundImage: `url(/images/image2.jpg)`}}
        >
        <div className="overlay">
          <h1 className="mainHeading">Stories Around Me</h1>
          <h2 className='line1'>share the insights around you</h2>
        </div>
      </section>

          <section className="about" id="about">
      <h2 className="aboutTitle">About Me</h2>
      <div className="aboutBox">
        <img src="/images/profile.jpg" alt="My Pic" className="profilePic" />
        
        <div className="infoBox">👨‍💻 Full Stack Developer</div>
        <div className="infoBox">🚀 MERN Stack | Java | Python</div>
        <div className="infoBox">📸 I love photography & design</div>
        <div className="infoBox">🧠 Constant learner</div>
      </div>
    </section>


      <section id="stories" className="Stories">Stories goes here</section>

      <section id="contact" className="contact">Contact goes here</section>

      <footer className="footer">
        &copy; 2025 Stories Around Me. All rights reserved.
      </footer>

    </>
  );
}

export default App;