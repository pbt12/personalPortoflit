import React from 'react'
import {FaLinkedin,FaGithubSquare,FaDribbbleSquare} from 'react-icons/fa'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target='_blank'><FaLinkedin/></a>
      <a href="https://github.com" target='_blank'><FaGithubSquare/></a>
      <a href="https://dribbble.com" target='_blank'><FaDribbbleSquare/></a>
    </div>
  )
}

export default HeaderSocial
