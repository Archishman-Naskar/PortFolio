1) We have Created Vite react app -> npm create vite@latest
2) Configured Tailwind
    **Note it is  vite project we do not have to use - 
        npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
        as we use it because when we wr working with normal html file there is no way that the TailWind clsses will be converted to CSS automatically
        But, while working with Vite and tailWind the PostCss(it is in bot Vite and TailWind) thing in the behind fixes this thing autiomatically.
        Also added coumstom font and colours by adding (adding in side extend) and overriding existing(adding directly inside theme) in tailwind.config.js
3) Imported fonts
4) NavBarMain ->pos Fixed, and flex and by mx-auto, left & translate pro alligned at the middle
  -> NavBar Link,Logo,Btn Inside a div(which is flex)
  ->that div is inside NavBarMain
5) Add name to logo
->Creating Button
6) Install Ract Icon npm install react-icons --save
7) the logo you want ot use search in the website and there you wiil get import statement
   and code to use it
8) Creating Gradient in BackGround
    ->bg-gradient-to-r from-darkCyan to-grey hover:scale-110 transition-all duration-500
      That Tailwind line is combining background gradient and a hover animation:
      bg-gradient-to-r → Creates a gradient background from left to right (r = right).
      from-darkCyan → The gradient starts with the color darkCyan.
      to-grey → The gradient ends with the color grey.
      hover:scale-110 → When you hover over the element, it scales up to 110% of its size (like a zoom-in effect).
9) Added custom Shadow in tailwind.config.js and applied to button
-> Now we are creating the links Section
10) Created a list inside NavBarLink and using standard method rendered it in the place and did   neccessary styling.
11) Adding appering and disappering line line below every text.
     if we want that someting happen to class c2 which is inside class c1 while we hover on c1 we do in CSS c1-c2-hover{} but here to do the same to the parent calss we add clssName="group"
     and in the childclass we add className="group-hover:(whatever you want)"
12) Now we are making it responsive
    1) Adding hambarger menu button in NavBarMain
    2) Adding classes to it to so that it appers and diappears according to screen size
    3) In the tailwindConfig.js adding coumstom screen sizes
    4) Warpped NavBarLink into div added 
    className={ `${menuOpen ? "sm:block" : "sm:hidden" } lg:block`}(note the syntax) to make it appear and disapper on the click of hambergarmenu
    5) Now we have changed the appearence of NavBarLink from static to responsive for diff screen sizes,
    ** we have made it's background blur backdrop-blur-lg 
          but for this to work back-ground colour must not be solid
          here we have sm:bg-cyan/30 so for small screen blurness is visible but
          for large screen there is blur proprty present but it is not visible as lg:bg-black is solid back-ground colour
                                        ****NavBar Finishes Here****

                                            ****Hero Section****
1) Created Hero Main,Text,Pic,Gradient .jsx
2) Text,Pic are inside Main
3) Inside Text There was Nothing Special Just wrote text and Made it responsive
4) Inside Pic 1)  profile pic is just pu it there
              2)  The thing rvolving behind it is revolving
              3)  It is there by using absolute on the div containing it and relative on the main container of the of the pic
              4) Animations : animate-pulse : elements inside goes to 50% opacity and comes back
                              [spin_20s_linear_infinite] : spin 360 degree in 20s and constant speed, infinite number of times
                              ***The revolving thing was making the size of the container and whole page change continiously so we added fixed h & w to it and also to main container of Pic also
                              add overflow-hidden to the main container so that if while rotatin it the haxagon overflows the container then for the overflow hidden it will not affect the page size
                              and will not resize it
                                           ****Hero Section****

                                          ****SubHero Section****
                                        NOTHING AS SUCH TO LEARN HERE
                                          ****SubHero Section****
                                          
                                          ****AboutMe Section****
                                        NOTHING AS SUCH TO LEARN HERE
                                          ****AboutMe Section****

                                           ****Skills Section****
                                          
1) Here we have used translate and the position (relative,absolute) to me the skills pop out on hovering
  **Note when we hover on the skills it grows upward , avtually the whole bolck would have moved because of translate but we have set the orange back ground to be absolute even for that it would not have been sticked at the end , only because the parent container AllSkills is made absolute so as it's child the each of the childe also gets sticked to a position and the translate only seems like growing upward
  **Also , so that the dinamically growing sizes don not affect it's neighbour we used property transfrom also. 
                                           ****Skills Section****
                                         
                                         ****Experience Section****
                                         Nothing to learn in between 
      -> In the project section there was flex-reverse-row and flex-reverse-col are also a thing.
      -> In the project section we also learnt that "jsutify-self"(when for a child of flex we want to apply diff allignment on the child than the other childen) also works with flex box.
      -> In the contact me section created coustom react icon using ChatGpt.
#Creating the form working using EmailJs
-> Used use ref here , but i used e.target
->  Used useState to make all the field in the from clear after from submission it is react way ,
->  we could do tha same using this.reset() inside the sendemail function as inside html element this changes to the very html element(but it would be DOM manipulation would rerender the whole page probably and it is the very thing we avoide in react),
->also, could have done it using <button type="reset"></button>(html way)
->Added , successMessage (doing this also using useState)

#Adding Scrolling Effect Upon Click On The Link
->Install react scroll library npm i react-scroll
-> import {Link} from 'react-scroll'
->{
            Links.map((item,index)=>{
              return(
                <li key={index}>
                  <Link 
                    to={item.section}//when creating Main file of Each section we gave an id to it the 
                    item.section bassically contains the id to the container ,thus it the scrolling effect gets linked
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-130}  
                    className="hover:text-white transition-all duration-500 cursor-pointer">
                    {item.link}
                  </Link>
                </li>
              )
            })
          }
##Implementing Framer Motion
Not so difficult just created a fiction varient,js rst is syntax
 ****At the last it was verydifficult to handle the heropic but by editing the previous responsive styling which was given coustom sizes we removed it and added new responsive styling with sizes that goes screen size . The main problem we had nothing as such when sreen size is less than sm .The problem is resolve with new responsive code where the size of the pic is not hard coded but according the size of the container****
                                  
import React from 'react'
import { PiHexagonBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from '../../framerMotion/varients';

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex justify-center items-center w-full max-w-sm sm:max-w-md md:max-w-lg aspect-square overflow-hidden"
    >
      {/* Main Image */}
      <img
        src="https://i.pinimg.com/736x/93/06/5e/93065e53a0ba979174d6de26387c4751.jpg"
        alt="SunGod"
        className="w-4/5 h-4/5 object-cover rounded-full"
      />

      {/* Hexagon Background */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonBold className="w-full h-full text-yellow-300 blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  )
}

export default HeroPic
