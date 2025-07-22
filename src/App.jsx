import './App.css';
import { useState } from 'react';
import StoriesGrid from './components/storiesGrid';
import StoryPopup from './components/StoryPopup';
import ContactForm from './components/ContactForm';

const dummyStories = [
  {
    id: 1,
    image: '/images/image2.jpg',
    caption: 'Sunset in the hills',
    postedBy: 'You',
    likes: 12,
    comments: [
      { id: 1, user: 'Alice', text: 'Love this!' },
      { id: 2, user: 'Bob', text: 'Beautiful view!' }
    ]
  },
  {
    id: 2,
    image: '/images/image3.jpg',
    caption: 'Forest light',
    postedBy: 'You',
    likes: 9,
    comments: [
      { id: 1, user: 'Dev', text: 'So peaceful.' }
    ]
  },
  {
    id: 3,
    image: '/images/image4.jpg',
    caption: 'Morning dew',
    postedBy: 'You',
    likes: 4,
    comments: []
  },
  // ... Add more dummy data as needed
];

function App() {
  const [activeStory, setActiveStory] = useState(null);

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

      <section id="stories" className="stories">
        <StoriesGrid stories={dummyStories} onTileClick={setActiveStory} />
        {activeStory && (
          <StoryPopup story={activeStory} onClose={() => setActiveStory(null)} />
        )}
      </section>

      <section id="contact" className="contact">
        <ContactForm />
      </section>

      <footer className="footer">
        &copy; 2025 Stories Around Me. All rights reserved.
      </footer>
    </>
  );
}

export default App;
