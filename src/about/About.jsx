import React from 'react';
import HeroSectionAbout from "./HeroSectionAbout";
import AboutCompanyOverview from './AboutCompanyOverview';
import TeamCultureSection from './TeamCultureSection';
import MissionVisionSection from './MissionVisionSection';

export default function About() {
    return (
        <>
            <HeroSectionAbout />
            <AboutCompanyOverview/>
            <TeamCultureSection/>
            <MissionVisionSection/>
        </>
    );
}