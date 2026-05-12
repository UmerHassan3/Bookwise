'use client'
import BlurText from "./BlurText";
import React from 'react'

const BlurTextRender = () => {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div className="flex flex-col p-4 mx-4 items-center md:items-start justify-center space-y-2">

            {/* LINE 1 */}
            <BlurText
                text="Library"
                delay={100}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
            />

            {/* LINE 2 (HIGHLIGHT) */}
            <BlurText
                text="Management"
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
               className="text-4xl md:text-6xl font-extrabold text-blue-500 tracking-tight leading-tight"
            />

            {/* LINE 3 */}
            <BlurText
                text="System"
                delay={300}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
            />

            
        </div>
    )
}

export default BlurTextRender