import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
// import { loadFull } from 'tsparticles';
import { useCallback, useMemo } from 'react';

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      particles: {
        move: {
          enable: true,
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={options}></Particles>;
};

export default ParticlesComponent;
