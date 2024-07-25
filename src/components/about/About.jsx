import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"


const About = () => {
   
  
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>RentUp real esatate amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          </div>



          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>


<div className="all">
        <div className="bbb">

        <div className="bana">
        <img src="Screenshot 2024-07-24 110048.png" alt=" " height={100}width={100} className="kkkkk"></img>
       <div className="ggggggg">
      <h3 className="lllllllll">Ayaanle Ahmed Adow</h3>
      <h4  className="dddddddd"> Programmer</h4>
      </div>
       <button className="ssssssss">Join</button>

     </div>
     </div>
















     <div className="bbbbbbbbbbbbbb">

<div className="bana">
<img src="Screenshot 2024-07-24 110048.png" alt=" " height={100}width={100} className="kkkkk"></img>
<div className="ggggggg">
<h3 className="lllllllll">Ayaanle Ahmed Adow</h3>
<h4  className="dddddddd"> Programmer</h4>
</div>
<button className="ssssssss">Join</button>

</div>
</div>



<div className="ttttttttt">

<div className="bana">
<img src="Screenshot 2024-07-24 110048.png" alt=" " height={100}width={100} className="kkkkk"></img>
<div className="ggggggg">
<h3 className="lllllllll">Ayaanle Ahmed Adow</h3>
<h4  className="dddddddd"> Programmer</h4>
</div>
<button className="ssssssss">Join</button>

</div>
</div>
</div>









<div className="menu">
<div className="bbbbbbbbbbbbbb">

<div className="bana">
<img src="Screenshot 2024-07-24 110048.png" alt=" " height={100}width={100} className="kkkkk"></img>
<div className="ggggggg">
<h3 className="lllllllll">Ayaanle Ahmed Adow</h3>
<h4  className="dddddddd"> Programmer</h4>
</div>
<button onClick={HandleClick} className="ssssssss">Join</button>

</div>
</div>








<div className="bbbbbbbbbbbbbb">

<div className="bana">
<img src="Screenshot 2024-07-24 110048.png" alt=" " height={100}width={100} className="kkkkk"></img>
<div className="ggggggg">
<h3 className="lllllllll">Ayaanle Ahmed Adow</h3>
<h4  className="dddddddd"> Programmer</h4>
</div>
<button className="ssssssss">Join</button>

</div>
</div>
</div>
      </section>














      
    </>
  )
}

export default About
