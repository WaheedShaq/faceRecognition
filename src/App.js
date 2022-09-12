import './App.css';
import Particles from './Component/Particles/Particles';
import Logo from './Component/Logo/Logo';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import Rank from './Component/Rank/Rank';
import Navigation from './Component/Navigation/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Logo />
      <ImageLinkForm />
      <Rank />
      <Particles />
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
