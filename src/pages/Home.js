import React, { Component }  from 'react';


import HeroSection from '../componements/HeroSection';
import ImproveSkills from '../componements/ImproveSkills';
import QouteSection from '../componements/QuoteSection';
import ChiefsSection from '../componements/ChiefsSection';


export default function Home(){

    return(

       <div>
        <HeroSection/>
        <ImproveSkills />
         <QouteSection />
         <ChiefsSection />

       </div>
    )
}