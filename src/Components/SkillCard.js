import React from 'react';
import {useState} from 'react';

import Progress from './progressbar';
function SkillCard(props){

    return(
        <>

<div className="col-md-4 col-5 col-xxl-3 mx-auto  acard" data-aos="zoom-in">
            <div class="card2 mb-3 anima" style={{ maxWidth: "540px" }}>
              <div class="row g-0 flexer">
                <div class="col-md-4 flexer">
                  <img src={props.img} alt="skill related image" class="img-fluid skill_img" />
                </div>
                <div class="col-md-8 flexer">
                  <div class="card-body">
                    <h5 class="card-title text-center">
                        {props.title}
                    </h5>
                   
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default SkillCard;