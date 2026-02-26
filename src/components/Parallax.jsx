import '../css/parallax.css'

import { useEffect } from 'react'

export default function Parallax() {
  useEffect(() => {
    // Prevent the page from scrolling while this component is mounted
    document.body.style.overflow = 'hidden'
    // Hide footer on this page
    const footer = document.querySelector('.footer-container')
    if (footer) footer.style.display = 'none'
    // Hide header on this page
    const header = document.querySelector('.site-header')
    if (header) header.style.display = 'none'

    // Re-enable disabled elements
    return () => {
      document.body.style.overflow = 'visible'
      if (footer) footer.style.display = 'block'
      if (header) header.style.display = 'block'
    }
  }, [])
  return (
    <>
      {/* Navigation */}
      <nav className="site-nav">
        <div className="nav-container">
          <a className="nav-logo" href="/">
            unique<span className="logo-accent">in</span>black
          </a>

          <button className="nav-toggle">
            <svg className="nav-icon w-8 h-8" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Parallax container */}
      <div className="parallax-wrapper">
        <div className="parallax-group intro" id="intro">
          <h1>Parallax Gallery</h1>
        </div>
        <div className="parallax-group" id="group-1">
          <div className="parallax-layer image-layer base-layer"></div>
          <div className="parallax-layer image-layer mid-layer"></div>
        </div>
        <div className="parallax-group" id="group-2">
          <div className="parallax-layer image-layer mid-layer"></div>
          <div className="parallax-layer image-layer top-layer"></div>
        </div>
        <div className="parallax-group" id="group-3">
          <div className="parallax-layer image-layer mid-layer"></div>
          <div className="parallax-layer image-layer bottom-layer"></div>
          {/* <div className="parallax-layer outro-layer"></div> */}
        </div>
        <div className=" parallax-group outro" id="outro">
          <div className="outro-overlay">
            <h2>Parallax</h2>
          </div>
          <span className="hover-text">
            <a href="https://outlook.live.com/owa/?path=/mail/action/compose&to=hello@uniquieinblack.ch&subject=Customer%20Inquiry&body=Hello%2C%0A%0AI would like more information." target="blank">
              get in touch
            </a>
          </span>
        </div>
      </div>
    </>
  )
}
