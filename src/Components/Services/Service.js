import React from "react";
import "./Service.css";
import arprojects from '../../assets/arprojects.svg'
import trackingapps from '../../assets/trackingapps.svg'
import mobileappdevelopment from '../../assets/mobileappdevelopent.svg'
import webdevelopment from '../../assets/webdevelopment.svg'
import graphicaldesigning from '../../assets/graphicaldesigning.svg'
import qualityassurance from '../../assets/qualityassurance.svg'
const Service = () => {
  return (
    
    <section className="we-offer-area text-center bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading text-center">
             <p>OUR <span> SERVICES </span></p>
              <h4>The Services We Offer Are ...</h4>
            </div>
          </div>
        </div>
        <div className="row our-offer-items less-carousel">
          <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
            <div className="hover-area">
             <img src={trackingapps}/>
            </div>
           
              <h4 >Tracking Apps</h4>
              <p>
              Keep track of anything in a free app with Jotform’s Tracker App Templates.
              Whether you’re tracking tasks, habits, visitor sign ins, or other information,
              do it on your smartphone, tablet, or computer with no need for messy paperwork.
              Start by selecting a tracker app template below and customizing it with our drag-and-drop
              app builder in seconds. You can then download your app
              onto your device — or share it with others — to start tracking information instantly.
              Upgrade from messy paperwork and track stuff online with a free, fully-customizable Tracker App.
              </p>
              
            </div>
          </div>

          <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
            <div className="hover-area">
            <img src={mobileappdevelopment}/>
            </div>
            
              <h4>Mobile App Development</h4>
              <p>
              We specialize in providing cutting-edge mobile app development services that help businesses
               thrive in the digital landscape. Our team of skilled developers and designers is passionate 
               about creating innovative and user-friendly mobile applications tailored to meet your unique
                business requirements.We excel in building custom mobile applications from scratch, leveraging
                 the latest technologies and industry best practices. Whether you need a native iOS or Android app
                  or a cross-platform solution, our experts will work closely with you to understand 

                  
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
            <div className="hover-area">
            <img src={webdevelopment}/>
            </div>
            
              <h4>Web Development</h4>
              <p>
              We specialize in creating custom web solutions tailored to meet your unique
               business requirements. Our experienced developers leverage the latest technologies
                and  to build robust and scalable websites. you need
                  e-commerce platform, or web application, we can transform your
                  vision into a fully functional and feature-rich online presence.In today's mobile-driven
                   world, having a responsive website is essential. Our web developers ensure that your website 
                   looks and functions flawlessly across different devices, screen sizes, and browsers.
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
            <div className="hover-area">
            <img src={arprojects} />
            </div>
             

              <h4>AR Porjects</h4>
              <p>
              We have expertise in developing AR applications for both iOS and Android platforms.
              Our skilled developers leverage AR frameworks and technologies such as ARKit (iOS)
              and ARCore (Android) to create rich and engaging AR experiences. Whether you need an 
              AR gaming app, product visualization tool, or interactive educational app, we can bring 
              your AR ideas to life.Our experienced team of AR developers is
              passionate about pushing the boundaries of mobile development. We work closely with you to
              understand your objectives and deliver AR solutions that align with your vision and business goals.


              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
            <div className="hover-area">
            <img src={graphicaldesigning}/>
            </div>
            
              <h4>UI/UX Design</h4>
              <p>
              Our UI/UX design services combine creativity, user research, and industry best practices to craft
               visually stunning and intuitive interfaces that captivate users and drive engagement. We prioritize
                the seamless fusion of aesthetics and functionality to deliver exceptional user experiences across
                 web and mobile platforms.
              We believe that a well-designed user interface is crucial for the success of any mobile app.
               Our talented UI/UX designers combine aesthetics with functionality to create visually appealing 
               and intuitive interfaces that enhance user engagement and satisfaction. 
              </p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 equal-height">
            <div className="item">
            <div className="hover-area">
            <img src={qualityassurance}/>
            </div>
          
              <h4>QA & Software Testing</h4>
              <p>
              We recognize the critical importance of quality assurance and software testing in 
              ensuring the reliability, functionality, and performance of your digital products.
               Our QA and software testing services are designed to identify and eliminate any defects or issues, 
               ensuring that your software meets the highest standards of quality and provides a seamless user
                experience. Our experienced QA professionals work closely with your team to understand the software
                  functionality Based on this analysis, we create a comprehensive
                   test plan that encompasses all necessary testing activities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;





// import React from 'react'
// import './Service.css'
// const Service = () => {
//   return (
//     <div>
    
    
//     <div class="main flex">
//        <h1>Animated Card</h1>
//        <section class="flex">
//          <article class="flex">
//            <h2>Heading</h2>
//            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat consectetur delectus eligendi quasi esse commodi in quod, nesciunt laboriosam quae voluptatibus enim voluptatem saepe nulla cum, culpa ipsa repellendus at.</p>
//             <button class="btn">Buy Now</button>
//             <div class="bgColor"></div>
//          </article> 
//          <article class="flex">
//            <h2>Heading</h2>
//            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat consectetur delectus eligendi quasi esse commodi in quod, nesciunt laboriosam quae voluptatibus enim voluptatem saepe nulla cum, culpa ipsa repellendus at.</p>
//             <button class="btn">Buy Now</button>
//             <div class="bgColor"></div>
//          </article>
//          <article class="flex">
//            <h2>Heading</h2>
//            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat consectetur delectus eligendi quasi esse commodi in quod, nesciunt laboriosam quae voluptatibus enim voluptatem saepe nulla cum, culpa ipsa repellendus at.</p>
//             <button class="btn">Buy Now</button>
//             <div class="bgColor"></div>
//          </article>
//        </section>
//     </div>
   
            
//     <footer>
//        <p class="myCopy">All designed by<span>Fillipe Pascoall</span></p>
//     </footer>
   
//     </div>
//   )
// }

// export default Service