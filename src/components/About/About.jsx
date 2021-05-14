import React from 'react'

import marina from '../../images/marina.jpeg'

const About = () => (
  <div className="about">
    <h2 className="about__title">Hours</h2>
    <h3 className="about__text">Mon-Fri: 8am - 7pm</h3>
    <h3 className="about__text">Sat-Sun: 7am - 9pm</h3>
    <h2 className="about__title">About Us</h2>
    <h3 className="about__text">
      Located in beautiful Massarappaconsanononakeequa, New York, we have
      everything you need for a great adventure!
    </h3>
    <img src={marina} alt="marina" className="about__image" />
    <h3 className="about__text">
      A romantic sunset cruise. A deep-sea fishing trip. A gathering with the
      girlfriends for a sailing adventure. With miles of glorious coastline and
      easy access to the Atlantic Ocean, relaxing lakes and thrilling rivers,
      New York was made for boating.
    </h3>
  </div>
)

export default About
