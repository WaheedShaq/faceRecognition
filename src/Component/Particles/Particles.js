import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
// import { loadFull } from 'tsparticles';
import { useCallback, useMemo } from 'react';

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
      particles: {
        links: {
          enable: true,
          distance: 100,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 2 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine);
  }, []);

  return (
    <Particles
      className='particles'
      init={particlesInit}
      options={options}
    ></Particles>
  );
};

export default ParticlesComponent;
