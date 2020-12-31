import React, {useState} from 'react';
import Banner from './components/banner'
import Buttons from './components/buttons'
import ViewMore from './components/view-more'
import ImagesMotorcycles from './components/img-motorcycle'
import List from './components/list-harley'
import Cart from './components/shopping-cart'

// images
import harley_iron from './assets/img/iron-883.jpg';
import harley_forty from './assets/img/forty-eight.jpg';
import harley_fat from './assets/img/Fat-Boy.jpg';
import harley_superlow from './assets/img/superlow-1200t.jpg';

import './App.css';

function App() {

  // list motorcycle
  const[motorcycles, setMotorcycle] = useState([
    {id:1, name:"iron 883",image:harley_iron, description:"Estilo Harley-Davidson auténtico de extremo a extremo, aderezado de potencia. El motor Evolution® de 883 cc montado de forma elástica ofrece fuerza y suavidad para devorar miles de kilómetros y que tú tan solo te tengas que preocupar de disfrutar de la libertad por avenidas y callejones."},
    {id:2, name:"forty-eight", image:harley_forty,description:"Un icónico V-Twin reconocido por su masivo par a bajo régimen y un sonido que te llena el alma. Las ligeras culatas y cilindros en aluminio mejoran la eficacia de la refrigeración por aire."},
    {id:3, name:"fat-boy",image:harley_fat, description:"Un motor potente y suave, con una respuesta del acelerador firme y un rugido puro que llena el alma. "},
    {id:4, name:"superlow® 1200T",image:harley_superlow, description:"Su bajo asiento estilo bucket, las suspensiones de mayor recorrido y el manillar de fácil alcance crean una confortable posición de pilotaje para un amplio abanico de pilotos. Es ergonómica y ayuda a fomentar la confianza en todos los aspectos de tu viaje, desde levantarla del caballete lateral hasta manejarla tanto en recta como en curvas."},
  ])

//state shopping cart

  const [carrito,agregarProducto] = useState([])

  return (
    <div className="container-fluid">
    <Banner/>
    <Buttons/>
    <ViewMore model='iron 883'/>
    <ImagesMotorcycles />
    
    {
      motorcycles.map(motorcycle=>(
        <List
        key={motorcycle.id}
        motorcycle={motorcycle}
        motorcycles={motorcycles}
        carrito={carrito}
        setMotorcycle={setMotorcycle}
        agregarProducto={agregarProducto}
        />
      ))
    }
    <Cart 
    carrito={carrito}
    agregarProducto={agregarProducto}
    />
    </div>
  );
}

export default App;
