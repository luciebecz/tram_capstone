import React from 'react';

const AboutUs = () => (
  <div className='row body_width about_page'>
    <div className='col s12'>
      <h1 className='center home_title'><b className='tram_title'>T R A M</b></h1><hr /><br />
      <h5>Why We Built T R A M</h5>
        <p className='about_tram'>Salt Lake City is infamous for its inversion each winter. 
          Ski Resorts and signs on the freeway are always yelling at us to "Carpool! Clean the Air!". 
          But neither provide a source for people to find others to carpool with. 
          So we took this issue, added our love of the mountains, and built T R A M. 
          An app that provides the connection for like minded individuals to come together. 
          With T R A M, any user with a car can create a ride that other users can join. 
          The driver picks the destination, whether it be to one of the Ski Resorts in the Cottonwood Canyons, 
          or to a trailhead to hangout in the backcountry. Our goal is to bring people together and hopefully
          do our part in keeping Utah's air clean.</p>
    </div>
    <div>
      <div className='row'>
        <div className='col s12'>
          <h5>About The Developers</h5>
          <div className='parent'>
            <div className='developer1'>
              <img className='image' src='https://openclipart.org/image/2400px/svg_to_png/386/Gerald-G-Man-Face-4-World-Label.png' style={{width:155}}/>
              <br />
              <h5 className='dev_name'>Nate Stuart</h5>
            </div>
            <div className='paragraph'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla euismod posuere. Fusce dui mauris, aliquet ve.</p>
            </div>
          </div>
          <div className='parent'>
            <div className='developer1'>
              <img className='image' src='https://img.clipartfest.com/ffd12ca1c06f96b15886d8c18679b1be_cartoon-person-face-lol-animated-face-man-clipart_600-539.png' style={{width:165}}/>
              <br />
              <h5 className='dev_name'>Chris Zimmerman</h5>
            </div>
            <div className='paragraph'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla euismod posuere. Fusce dui mauris, aliquet ve.</p>
          </div>
          </div>  <div className='parent'>
            <div className='developer1'>
              <img className='image' src='http://www.clipartkid.com/images/8/boy-face-cartoon-3-clip-art-at-clker-com-vector-clip-art-online-jkEhzY-clipart.png' style={{width:165}}/>
              <br />
              <h5 className='dev_name'>Tyler Davis</h5>
            </div>
            <div className='paragraph'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla euismod posuere. Fusce dui mauris, aliquet ve.</p>
          </div>
          </div>  
          <div className='parent'>
            <div className='developer1'>
              <img className='image' src='http://vector.me/files/images/1/4/142251/people_lady_woman_face_person_cartoon_bodypart_worldlabel_theresaknott_smiling_ladyface.jpg' style={{width:165}}/>
              <br />
              <h5 className='dev_name'>Lucie Becz</h5>
            </div>
            <div className='paragraph'>
              <p>Lucie has spent the last few years handling sled dogs on a glacier in alaska and traveling in the meantime. This past fall she finally decided it was time to go back to school and jump head first into web development. She chose this career due to the freedom it can bring with working remotely, but turned out that she really enjoys coding! </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)


export default AboutUs;
