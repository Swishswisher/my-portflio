import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper'

import './About.scss';
import { urlFor, client } from '../../client';

//const abouts = [
  //{ title: 'Web Development', description: 'I am a good developer', imgUrl: images.about01},
  //{ title: 'Web Design', description: 'I am a good designer', imgUrl: images.about02},
  //{ title: 'Web UI/UX', description: 'I am a good UI/UX designer', imgUrl: images.about03},
  //{ title: 'Web animations', description: 'I am a good web animater', imgUrl: images.about04},
//]; //for the about down below

const About = () => {
  //first const is about how to map abouts from the cms
  const [abouts, setAbouts] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    
    client.fetch(query)
      .then((data) => {setAbouts(data)})
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span> Good Dev</span> <br/>means<span> Good business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1}}
            transition={{duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt="about.title" /> {/*image src chaanged becoz we changed to using sanity to update stuff*/} 
            <h2 className="bold-text" style={{marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{marginTop: 10 }}>{about.description}</p>

          </motion.div>          
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  "app__whitebg"
  ); //the second about is where we want to scroll to ... go to the AppWrap js file to understand