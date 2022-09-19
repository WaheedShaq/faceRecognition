import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Particles from './Component/Particles/Particles';
import FaceRecognition from './Component/FaceRecognition/FaceRecognition';
import Logo from './Component/Logo/Logo';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import Rank from './Component/Rank/Rank';
import Navigation from './Component/Navigation/Navigation';

const app = new Clarifai.App({
  apiKey: '12966d35553c4b5e9c655258a2520105',
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    };
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      function (err) {}
    );
  };
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Logo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <Rank />
        <Particles />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
