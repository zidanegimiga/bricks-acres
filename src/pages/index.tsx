import React from 'react';
import Hero from 'features/Home/Hero/';
import WhoWeAre from 'features/Home/WhoWeAre';
import WhatWeDo from 'features/Home/WhatWeDo';
import WhoWeServe from 'features/Home/WhoWeServe';
import SignUpForm from 'features/Home/SignUpForm';

export default function Index() {
 return(
  <>
    <Hero />
    <WhoWeAre />    
    <WhatWeDo />
    <WhoWeServe />
    <SignUpForm />
  </>
 )
}