import Link from 'next/link';
import React from 'react';
import Hero from 'features/Home/Hero/';
import WhoWeAre from 'features/Home/WhoWeAre';
import WhatWeDo from 'features/Home/WhatWeDo';

export default function Index() {
 return(
  <>
    <Hero />
    <WhoWeAre />    
    <WhatWeDo />    
  </>
 )
}