import React from 'react'
import { useParams } from "react-router-dom";

const Sublime = () => {
    const { parent = "" } = useParams();

  return (
    <div className='bgContainerParent'>
      <h3>Right now you are in {parent} </h3>
      <img alt="boy" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/random-joke-img.png" className="boyImage" />
    </div>
  )
}

export default Sublime
