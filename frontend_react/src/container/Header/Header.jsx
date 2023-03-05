import React from 'react';
import { AppWrap } from '../../wrapper';

import './Header.scss';

const Header = () => {

  // const [texts, setTexts] = useState([])

  // useEffect(() => {
  //   const timeoutIds = []

  //   [ "Hello 👋🏾 and welcome", 
  //     "I am Akim", 
  //     "A Freelance Web Developer", 
  //     "Let's work together and create something beautiful", 
  //     "Scroll for more information"].forEach((text, i) => {
  //       const timeoutId = setTimeout(() => {
  //         setTexts((prev) => [...prev, text])
  //       }, 1000 * i)

  //       timeoutIds.push(timeoutId)
  //   })

  //   return () => {
  //     timeoutIds.forEach((id) => clearTimeout(id))
  //   }
  // }, [])


  return (
    // <div className="app__header app__flex">
    //     <div className="app__header-badge">
    //       <div className="tag-cmp app__flex">
    //         {texts.map((text) => {
    //           return (
    //             <p key={text} className="p-text">{text}</p>
    //           )
    //         })}
    //       </div>
    //     </div>
    // </div>

    <div className="app__header app__flex">
        <div className="app__header-badge">
          <div className="tag-cmp app__flex">
            <p className="p-text">Hello 👋🏾 and welcome</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">I am Akim</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">A Freelance Web Developer</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Let's work together and create something beautiful</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Scroll for more information</p>
          </div>
        </div>
    </div>
  )
}

export default AppWrap(Header, 'home'); //the id of home was removed from the top div because we dont need it and the id is used in AppWrap already