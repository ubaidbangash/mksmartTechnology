// import React from "react";
// import "./Section.css";
// import bgpattern from "../../assets/bgpattern.png";



// const Section = () => {
//   return (
    

//     <div className="section-area mt-5">
//     <div className="site-heading text-center">
//     <h2>
//         <span> Build your dream website today </span>
//     </h2>
//     <h4>But nothing the copy said could convince her and so it didn’t take  long until a few insidious Copy Writers ambushed her.</h4>
//     <div className="bg-pattern-effect">
//         <img src={bgpattern} />
//       </div>
//   </div>
      
//     </div>
//   );
// };

// export default Section;


import React from 'react'
import './Section.css'
const Section = () => {
  return (
    <header class="header">
    <div class="logo-box">
       
    </div>
    <div class="text-box">
        <h1 class="heading-primary">
            <span class="heading-primary-main">Build your dream website today </span>
            <span class="heading-primary-sub">Guild webpage</span>
        </h1>
        <a href="#" class="btn btn-white">Discover more</a>
    </div>
</header>
  )
}

export default Section
