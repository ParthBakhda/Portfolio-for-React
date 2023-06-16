import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('About Me');

  const handleNavigationClick = (section) => {
    setSelectedSection(section);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'About Me':
        return (
          <div>
            <h2>About Me</h2>
            {/* "C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\IMG_0195.jpeg" Hello, my name is Parth Bakhda. I was born in India, raised in Arizona. Some of my interest include skiing, hiking, going to the gym, and binge watching tv shows. As a young child I had two full-time working-class parents, so I had to learn everything on my own, that did not stop me for achieving. In 5th grade I was in a commercial for the Diary Counsil for my outstanding attendance and grades. I like learning new skills thus, my reason for joining this coding bootcamp. I find it invigorating to apply what I have learned into creating beautiful works of art thru coding. My goal is to succeed in this course and after find a career where I can grow internally and become financially stable. */}
          </div>
          );
          case 'Portfolio':
        return (
          <div>
            <h2>Portfolio</h2>
            {/* "C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\Code Refractoring.png" https://github.com/ParthBakhda/Code-Refractor "C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\Porfolio.jpg""C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\Password Generator.jpg"https://github.com/ParthBakhda/Profolio- "C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\Password Generator.jpg"https://github.com/ParthBakhda/Generate-Password "C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\Code Quiz.jpg"https://github.com/ParthBakhda/Code-Quiz "C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\Work day.png" https://github.com/ParthBakhda/Schedule-for-work-day "C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\Weather.jpg" https://github.com/ParthBakhda/Check-the-weather-of-cities"C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\Readme Generator.jpg"  https://github.com/ParthBakhda/Readme-Generator"C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\Logo generator.jpg"  https://github.com/ParthBakhda/Logo-Generator"C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\Note taker.jpg"  https://github.com/ParthBakhda/Note-taker "C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\model view controller.png" https://github.com/ParthBakhda/Model-View-Controller"C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\regular expression in python.png"  https://github.com/ParthBakhda/Defining-the-components-of-regular-expressions-in-phython-and-understanding-them. "C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\Social network apis.png" https://github.com/ParthBakhda/Social-network-api "C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\Text editor.png" "C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Images\React portfolio.jpg" https://github.com/ParthBakhda/PWA-Text-Editor https://github.com/ParthBakhda/Portfolio-for-React */}
          </div>
        );
      case 'Contact':
        return (
          <div>
            <h2>Contact</h2>
            {/* Name:Parth Bakhda Email:Bakhdaparth@gmail.comn Please contact me if you have any questions or concerns. */}
          </div>
        );
      case 'Resume':
        return (
          <div>
            <h2>Resume</h2>
            {/* "C:\Users\bakhd\Desktop\bootcamp\Portfolio-for-React\Resume\Parth Bakhda Resume updated (1).docx"*/}
          </div>
        );
        default:
          return null;
      }
    };
  
    return (
      <div className="App">
        <header>
          <h1>Parth Bakhda's Portfolio</h1>
          <nav>
            <ul>
              <li
                className={selectedSection === 'About Me' ? 'active' : ''}
                onClick={() => handleNavigationClick('About Me')}
              >
                About Me
              </li>
              <li
                className={selectedSection === 'Portfolio' ? 'active' : ''}
                onClick={() => handleNavigationClick('Portfolio')}
              >
                Portfolio
              </li>
              <li
                className={selectedSection === 'Contact' ? 'active' : ''}
                onClick={() => handleNavigationClick('Contact')}
              >
                Contact
              </li>
              <li
                className={selectedSection === 'Resume' ? 'active' : ''}
                onClick={() => handleNavigationClick('Resume')}
              >
                Resume
              </li>
            </ul>
          </nav>
        </header>
  
        <section className="content">{renderSection()}</section>
  
        <footer>
          <ul>
            <li>
              {/* https://github.com/ParthBakhda?tab=repositories */}
              <a href="https://github.com">GitHub</a>
            </li>
          </ul>
        </footer>
      </div>
    );
  };
  
  export default App;
  