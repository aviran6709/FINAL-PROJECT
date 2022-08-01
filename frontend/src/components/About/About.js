import photo from "../../image/image-min.jpg"
import React from "react";
const About = () => {
  return (
      <>

    <section className="about">
    <img className="about__img" src={photo} alt="meditation time" />
    <div className="about__content" >
      <h2 className="about__tittle">About the author</h2>
      <p className="about__text">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</p>
      <br></br>
      <p className="about__text">You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>

    </div>
    </section>
    </>
  );
};
export default About;