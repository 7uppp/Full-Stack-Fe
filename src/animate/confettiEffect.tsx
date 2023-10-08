// Confetti.tsx
import React, { useEffect, useRef } from 'react';
import '../css/confettiEffect.scss'

const ConfettiEffect: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!wrapperRef.current) return;

        for(let i = 0; i < 30; i++) {
            const randomRotation = Math.floor(Math.random() * 360);
            const randomScale = Math.random();
            const randomWidth = Math.floor(Math.random() * 500); // Assuming modal max-width is 500px
            const randomHeight = Math.floor(Math.random() * 400); // An arbitrary number, can adjust based on modal content height
            const randomAnimationDelay = Math.floor(Math.random() * 15);
            const colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            const confetti = document.createElement('div');
            confetti.className = "confetti";  // Updated from styles.confetti to "confetti"
            confetti.style.top = `${randomHeight}px`;
            confetti.style.left = `${randomWidth}px`;
            confetti.style.backgroundColor = randomColor;
            confetti.style.opacity = `${randomScale}`;
            confetti.style.transform = `skew(15deg) rotate(${randomRotation}deg)`;
            confetti.style.animationDelay = `${randomAnimationDelay}s`;

            wrapperRef.current.appendChild(confetti);
        }
    }, []);

    return <div ref={wrapperRef} />;
}

export default ConfettiEffect;
