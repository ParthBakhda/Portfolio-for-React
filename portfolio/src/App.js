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