

import React from 'react';
import profilePic from '../assets/officepic.jpg';

function Profile() {
  return (
    <div id="profile" className="text-center">
      <img src={profilePic} alt="Nibin" className="rounded-circle" width="150" />
      <h1>Nibin M R</h1>
      <p>MERN Stack Developer (Fresher)</p>
      <p>
        I am a passionate and dedicated web developer specializing in the MERN stack (MongoDB, Express, React, Node.js). 
        With a strong foundation in front-end and back-end development, I am eager to start my career by building 
        innovative web applications. I am committed to continuous learning and growth, aiming to leverage my skills 
        to create impactful digital experiences.
      </p>
    </div>
  );
}

export default Profile;
