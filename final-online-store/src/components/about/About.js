import './About.css';
import fmember from '../../assets/Cap.jpg';
import smember from '../../assets/Nurda.png';
import tmember from '../../assets/Almabekov.jpg';
import logo from '../../assets/logo_light.png';

function About() {
  return (
    <div class="main">
      <h1 class="us">About US</h1>
      <div class="abProj">
        <p class="project">Group Project on JS Framework React - Online Store "Code Store"</p>
        <img src={logo} class="logo"></img>
        <p> Project Development Start Date - 22/12/2021 {'=>'} Finish Date - 27/12/2021 </p>
        <p>In the future, we may want to implement this project and scale it to a full-fledged project, in which case we can say that this stage is a prototype of our future website.</p>
        <p>Created by a group of students</p>
      </div>

      <h1 style={{marginTop: '3.5rem'}} class="team">Our Team</h1>
      <div class="members">
        <div class="container">
          <div> 
            <p>Alemarov Almas (Captain)</p>
            <p>Role: Senior Frontend React Developer</p>
          </div>
          <img src={fmember} alt="" width="15%"/>
        </div>

        <div class="container">
          <div>
            <p>Melisov Nurdaulet</p>
          <p>Role: Middle Frontend React Developer</p>
          </div>
          <img src={smember} alt="" width="15%"/>
        </div>
        
        <div class="container">
          <div>
            <p>Almabekov Amir</p>
            <p>Role: Middle Frontend React Developer </p>
          </div>
          <img src={tmember} alt="" width="15%"/>
        </div>
      </div>
    </div>
  );
}

export default About;