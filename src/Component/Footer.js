import React from 'react'

const Footer = () => (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        zIndex: 100,
        backgroundColor: "Black",
        color:"white",
        width: "100vw",
        opacity: 0.7    ,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:'Poppins'
      }}
    >
      Copyright {new Date().getFullYear()}
    </div>
  );

export default Footer
