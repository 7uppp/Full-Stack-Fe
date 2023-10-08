import React, { useState, useEffect } from 'react';
import '../css/RadialEffect.css';

interface Effect {
    id: number;
    x: number;
    y: number;
}

const RadialEffectComponent: React.FC = () => {
    const [effects, setEffects] = useState<Effect[]>([]);

    const addEffect = (event: MouseEvent) => {
        const x = event.clientX;
        const y = event.clientY;

        const newEffect: Effect = {
            id: Date.now(),
            x: x - 50,
            y: y - 50
        };

        setEffects(prev => [...prev, newEffect]);

        setTimeout(() => {
            setEffects(prev => prev.filter(e => e.id !== newEffect.id));
        }, 1000);
    };

    useEffect(() => {
        // add listener
        document.addEventListener('click', addEffect);

        return () => {
            // clean up
            document.removeEventListener('click', addEffect);
        };
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {effects.map(effect => (
                <div
                    key={effect.id}
                    className="radial"
                    style={{
                        left: effect.x,
                        top: effect.y
                    }}
                ></div>
            ))}
        </div>
    );
}

export default RadialEffectComponent;
