'use client';

import React from 'react';
import {
   FirstSection,
   SecondSection,
   ThirdSection,
} from './(components)/home-sections';
import ScrollIndicator from './(components)/home-sections/components/arrow/arrow';
import { OverlapImage } from './(components)/home-sections/components/overlapImg/overlap-img';

const HomePage = () => {
   return (
      <div className="h-full">
         <ScrollIndicator />
         <FirstSection />
         <OverlapImage />
         <SecondSection />
         <ThirdSection />
      </div>
   );
};

export default HomePage;
