import React from 'react';
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <div className='home'>
      <div className='home__container center'>
        <div className='home__slider'>
          <h1 className='home__sliderTitle'>Projects</h1>
          <div className='home__silderContent'>
            <div className='home__sliderItem'>
              <div className='home__sliderItemTitle'>
                <FontAwesomeIcon
                  className='home__sliderItemIcon'
                  icon={['fab', 'angular']}
                />
                <h2>Titulo</h2>
              </div>
              <div className='home__sliderItemDesc'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='home__sliderItemButton'>
                <a href=''>See more</a>
              </div>
            </div>
            <div className='home__sliderItem'>
              <div className='home__sliderItemTitle'>
                <FontAwesomeIcon
                  className='home__sliderItemIcon'
                  icon={['fab', 'angular']}
                />
                <h2>Titulo</h2>
              </div>
              <div className='home__sliderItemDesc'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='home__sliderItemButton'>
                <a href=''>See more</a>
              </div>
            </div>
          </div>
          <div className='home__sliderPointers'>
            <div className='line'></div>
            <div className='pointers'>
              <div id='firstPointer'></div>
              <div className='active' id='secondPointer'></div>
              <div id='thirdPointer'></div>
            </div>
          </div>
        </div>
        <div className='home__hello'>
          <h1 className='home__helloText'>
            Hello,
            <br />
            I'm
            <br />
            Guilherme
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
