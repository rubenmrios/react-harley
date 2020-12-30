import harley from '../assets/img/harley.png';


const List = ({motorcycle,carrito,agregarProducto,motorcycles}) => {
// Agrega moto al carrito
const selectMotorcycle = id =>{
  // creo array nuevo con el objeto
  const motorcycle=motorcycles.filter(motorcycle=>motorcycle.id === id)[0]
    console.log('comprar', motorcycle)
    agregarProducto([...carrito,motorcycle])

}
    return (
      <div className="row">
        <div className="col-6 d-flex-center">
         <img className="list-img" src={motorcycle.image} alt=""/>
        </div>
        <div className="col-6">
        <div className=" banner view-more">
          <h1>{motorcycle.name}</h1>
          <h4>{motorcycle.description}</h4>
         <button className="btn btn-danger" onClick={()=>selectMotorcycle(motorcycle.id)}>Buy</button>
        </div>
         </div>
      </div>
    );
  };
  
  export default List;
  
