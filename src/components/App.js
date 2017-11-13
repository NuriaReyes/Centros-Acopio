import React, { Component } from 'react';
import '../assets/App.css';
import data from './centrosAcopio'
import Options from './Options'

class App extends Component {
  constructor() {
    super();

    this.changeOrigin = this.changeOrigin.bind(this)
    this.changeCentre = this.changeCentre.bind(this)
    this.showMap = this.showMap.bind(this)

    this.state = {
      origin: "28.704185,-106.140022",

      centre: "19.4231682,-99.2058139",

      source: "https://www.google.com/maps/embed/v1/directions?" +
        "key=AIzaSyCoe6vFeZtakjTszLUO0V678RcLGVFNpWY"+
        "&origin=" + "28.704185,-106.140022" +
        "&destination="+ "19.4231682,-99.2058139" +
        "&mode=driving"
    }

    this.origins = [
      {
        name : "FING, UACH",
        coord : "28.704185,-106.140022"
      },
      {
        name : "ITCH I",
        coord : "28.660285,-106.083573"
      },
      {
        name : "ITCH II",
        coord : "28.709320,-106.10410"
      },
      {
        name : "UTCH",
        coord : "28.6436777,-106.1470211"
      }
    ]

    this.centres = data.map(
      element => {
        return Object.assign({},{
          name : element.nombre,
          coord : element.lat + "," + element.lon
        })
      }
    )

  }

  showMap (event) {
    this.setState({
      source: "https://www.google.com/maps/embed/v1/directions?" +
        "key=AIzaSyCoe6vFeZtakjTszLUO0V678RcLGVFNpWY"+
        "&origin=" + this.state.origin +
        "&destination="+ this.state.centre +
        "&mode=driving"
    })
  }

  changeOrigin (event) {
    console.log(event.currentTarget.value);
    this.setState({
      origin : event.currentTarget.value
    })
  }

  changeCentre (event) {
    console.log(event.currentTarget.value);
    this.setState({
      centre : event.currentTarget.value
    })
  }

  render() {
    return (
      <div className="container">

        <div className="container col-md-offset-3">
          <h1>Obtén direcciones a centro de acopio</h1>
        </div>

        <br />
        <br />

        <div className="container col-md-offset-3">

          <h4>Origen:</h4>
          <Options name = "origins" places = {this.origins} onChange = {this.changeOrigin} />

          <h4>Destino:</h4>
          <Options name = "centres" places = {this.centres} onChange = {this.changeCentre} />

          <div className="container col-md-offset-2 col-md-8">
            <br />
            <button className="btn btn-success" onClick={this.showMap}>
              Ver indicaciones
            </button>
          </div>
        </div>

        <br />

        <div className="container col-md-offset-3">
          <iframe
            width="620"
            height="500"
            frameBorder="0"
            src={this.state.source} allowFullScreen id="map">
          </iframe>
        </div>

      </div>
    )
  }
}

export default App;
