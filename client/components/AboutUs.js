import React from 'react';
import Chris from '../images/Chris.jpeg';
import Lucie from '../images/Lucie.jpg';

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
    </div>
    <div>
      <div className='row'>
        <div className='col s12'>
          <h5>About The Developers</h5><br />
          <div className='parent'>
            <div className='developer1'>
              <img className='image' src='https://openclipart.org/image/2400px/svg_to_png/386/Gerald-G-Man-Face-4-World-Label.png' style={{width:185, align:'center', float: 'right', borderRadius:10}}/>
              <br />
              <h5 className='dev_name'>Nate Stuart</h5>
            </div>
            <div>
              <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla euismod posuere. Fusce dui mauris, aliquet ve.</p>
            </div>
          </div>
          <div className='parent'>
            <div className='developer1'>
              <img className='image' src={Chris}style={{width: '190px', align:'center', float: 'right', borderRadius:10}}/>
              <br /> 
              <h5 className='dev_name'>Chris Zimmerman</h5>
            </div>
            <div>
              <p className='paragraph'>Chris has always been fascinated with technology and enjoyed the creative process of Computer Programming. He's an Entrepreneur at hear and is always ready to embark on a new adventure. Chris loves to spend his time exploring the outdoors with his wife and two kids. He is extremely outgoing, loves meeting new people, and exploring new places.</p>
          </div>
          </div>  <div className='parent'>
            <div className='developer1'>
              <img className='image' src='http://www.clipartkid.com/images/8/boy-face-cartoon-3-clip-art-at-clker-com-vector-clip-art-online-jkEhzY-clipart.png' style={{width:165, align:'center', float: 'right', borderRadius:10}}/>
              <br />
              <h5 className='dev_name'>Tyler Davis</h5>
            </div>
            <div>
              <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla euismod posuere. Fusce dui mauris, aliquet ve.</p>
          </div>
          </div>  
          <div className='parent'>
            <div className='developer1'>
              <img className='image' src={Lucie} style={{width:157, align:'center', float: 'right', borderRadius:10}}/>
              <br />
              <h5 className='dev_name'>Lucie Becz</h5>
            </div>
            <div>
              <p className='paragraph'>Lucie has always been interested in programming but was too busy living with sled dogs on a glacier in Alaska and traveling in the meantime. This last fall she finally decided it was time to buckle down for a bit, and chose to go to DevPoint Labs. Coding has become something she really enjoys and is excited to see where it takes her.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)


export default AboutUs;
