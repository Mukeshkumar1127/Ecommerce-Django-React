import React from 'react';

const Header = () => {
  return (
    <header
      className="py-5"
      style={{
        position: 'relative',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Blurred Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/ayurvedic-chyawanprash-is-powerful-immunity-booster-natural-health-supplement-served-antique-bowl-with-ingredients-moody-background-selective-focus_466689-18656.jpg?w=900")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(0.0px)', // Apply blur directly to the background image
          transform: 'scale(1.1)', // Slightly scale up to prevent edges from showing
          zIndex: 1,
        }}
      ></div>

      {/* Dark Overlay for Better Readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 2,
        }}
      ></div>

      {/* Content */}
      <div className="container px-4 px-lg-5 my-5" style={{ position: 'relative', zIndex: 3 }}>
        <div className="text-center text-white">
          <h1 className="display-4 fw-bold">Welcome to Ayurvedic Products</h1>
          <p className="lead fw-normal text-white-75 mb-4">
            Explore Natural Remedies to Heal, Rejuvenate, and Rebalance Your Life
          </p>
          <a href="#shop" className="btn btn-light btn-lg rounded-pill px-4 py-2">
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
