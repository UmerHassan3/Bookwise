'use client'
import React from 'react'
import ScrollVelocity from './ScrollVelocity';

const ScrollVelocityRender = () => {
    return (
        <div>
            <ScrollVelocity
                texts={['A modern system to manage books, users, and borrowing with ease.']}
                velocity={100}
                className="custom-scroll-text"
                numCopies={6}
                damping={50}
                stiffness={400}
            /></div>
    )
}

export default ScrollVelocityRender