import React, { useEffect, useState } from "react";
import "./Main.css";
import Typewriter from "typewriter-effect";
import bgwave from "../../assets/bgwave.png";
import { Col, Row } from "antd";
import Header from "../Header/Header";

const Main = () => {
  return (
    <>
      <div className="type">
      <div>
    <h4 class = "para1">Code with purpose !!!</h4>
        <Typewriter
        options={{
          strings: [
            'We believe that code has the power to change the world. We use our skills to create software that makes a positive impact on society,Create with passion',
            'We are passionate about creating software that makes peoples lives better. We are committed to excellence and continuous improvement.',
            'Third paragraph...',
            // Add more paragraphs as needed
          ],
          autoStart: true,
          loop: true,
        }}
      />
        </div>
      </div>
      
    </>
  );
};

export default Main;


//  import React from 'react'
//  import "./Main.css";
//  import Typed from "react-typed";
//  const Main = () => {
//    return (
//      <>
//    <div className="animated-typing text-center" >
//      <Typed 
//        strings={[ 
//          "Code with purpose" ,
//          "We believe that code has the power to change the world. We use our skills to create software that makes a positive impact on society.",
//          "Create with passion",
//          "We are passionate about creating software that makes people's lives better. We are committed to excellence and continuous improvement.",
//          "Build the future with code",
//          "We believe in the power of code to change the world. We use our skills to build innovative software that makes a difference.",
//          "Solve problems with code",
//          "We create software solutions that help businesses and individuals solve their problems."
//        ]}
       
//        typeSpeed={100}
//        backSpeed={50}
//        loop
//      />
//    </div>
  

//  </>
//    )
//  }

//  export default Main



// import React from 'react'
// import TypeWriterEffect from 'react-typewriter-effect';

// const Main = () => {
//   return (
//     <div>
//     <TypeWriterEffect
//     textStyle={{
//       fontFamily: 'Red Hat Display',
//       color: '#3F3D56',
//       fontWeight: 500,
//       fontSize: '1.5em',
//     }}
//     startDelay={2000}
//     cursorColor="#3F3D56"
//     multiText={[
//       'Hey there, This is a type writer animation package',
//       'it consist of two types...',
//       'Single text display and multi text display',
//       'Fonts can be customized.',
//       'The type speed can be customized as well',
//     ]}
//     loop={true}
//     nextTextDelay={1000}
//     typeSpeed={30}
//   />
//     </div>
//   )
// }

// export default Main


















