// import logo from './logo.jpg';
import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Email from './Components/Email';
import { Box } from '@chakra-ui/react';
// import { Productcard } from './Components/procectCard';
// import { Projects } from './Components/Projects';
// import GitHubcal from './Components/GitHubcal';
function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
}, []);
  return (
    <div className="App" bg={'black'}   style={{fontFamily:"sans-serif"}} >
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "black",
                    },
                },
                fpsLimit: 80,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 100,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                            area: 0,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        
<Home/>

        
    </div>
  );
}

export default App;
