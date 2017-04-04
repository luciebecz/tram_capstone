import React from 'react';
import Chris from '../images/Chris.jpeg';
import Lucie from '../images/Lucie.jpg';
import Tyler from '../images/Tyler.jpg';
import Nate from '../images/Nate.jpg';


const AboutUs = () => (
  <div className='row body_width about_page'>
    <div className='col s12'>
      <h1 className='center about_title'><b className='tram_title'>T R A M</b></h1><hr /><br />
      <h5>Why We Built T R A M</h5>
        <p className='about_tram'>Salt Lake City is infamous for its inversion each winter. 
          Ski Resorts and signs on the freeway are always yelling at us to "Carpool! Clean the Air!". 
          But neither provide a source for people to find others to carpool with. 
          So we took this issue, added our love of the mountains, and built T R A M. 
          An app that provides the connection for like minded individuals to come together. 
          With T R A M, any user with a car can create a ride that other users can join. 
          The driver picks the destination, whether it be to one of the Ski Resorts in the Cottonwood Canyons, 
          or to a trailhead to hangout in the backcountry. Our goal is to bring people together and hopefully
          do our part in keeping Utah's air clean.</p><br />
    </div><hr /><br /><br />
    <div>
      <div>
        <div>
          <h4 className='center'>About The Developers</h4><br /><br />
            <div className='developer1  center'>
              <img className='image' src={Nate} style={{width:270, borderRadius:10}}/>
              <h5 className='dev_name'><b>Nathan Stuart</b></h5><hr />            
              <br />
              <div className='center paragraph'>
                <p className='center paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla euismod posuere. Fusce dui mauris, aliquet ve.</p>
              </div>
            </div>
            <div className='developer1  center'>
              <img className='image' src={Chris} style={{width:305, borderRadius:10}}/> 
              <h5 className='dev_name'><b>Chris Zimmerman</b></h5> <hr />              
              <br />
              <div className='paragraph'>
                <p className='paragraph'>Chris has always been fascinated with technology and enjoyed the creative process of Computer Programming. He's an Entrepreneur at heart and is always ready to embark on a new adventure. Chris loves to spend his time exploring the outdoors with his wife and two kids. He is extremely outgoing, loves meeting new people, and exploring new places.</p>
              </div>
            </div>
            <div className='developer1  center'>
              <img className='image' src={Tyler} style={{width:350, borderRadius:10}}/>
              <h5 className='dev_name'><b>Tyler Davis</b></h5><hr />
              <br />
              <div className='paragraph'>
                <p className='paragraph'>A former ASCP laboratory scientist, Tyler now enters the world of programming by day, conducts unethical experiments by night.</p>
              </div>
            </div>
 
            <div className='developer1  center'>
              <img className='image' src={Lucie} style={{width:265, borderRadius:10}}/>
              <h5 className='dev_name'><b>Lucie Becz</b></h5><hr />
              <br />
              <div className='paragraph'>  
                <p className='paragraph'>Lucie has always been interested in programming but was too busy living with sled dogs on a glacier in Alaska and traveling in the meantime. This last fall she finally decided it was time to buckle down for a bit, and chose to go to DevPoint Labs. Coding has become something she really enjoys and is excited to see where it takes her.</p>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>
)


export default AboutUs;
