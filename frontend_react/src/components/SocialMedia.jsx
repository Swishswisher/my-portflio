import React from 'react';
import { BsTwitter } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa'; BsInstagram for instagram
import {motion} from 'framer-motion';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter style={{ cursor: 'pointer'}}/>
      </div>
      {/* <div>
        <BsInstagram />
      </div>
      <div>
        <FaFacebookF />
      </div> */}
    </div>
    
  )
}

export default SocialMedia;