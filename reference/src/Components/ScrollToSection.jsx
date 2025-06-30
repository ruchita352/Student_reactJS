import React, { useRef } from 'react';

function ScrollToSection() {
  const sectionRef = useRef();

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={scrollToSection}>Scroll Down</button>
      <div style={{ height: '900px' }}></div>
      <div ref={sectionRef} style={{ height: '200px', background: 'lightblue' }}>
        Target Section
      </div>
    </div>
  );
}

export default ScrollToSection