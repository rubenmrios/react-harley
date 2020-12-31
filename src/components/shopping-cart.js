import React from "react";

import cart from "../assets/img/cart.png";

const Cart = ({ carrito, agregarProducto }) => {
  //eliminar producto del carrito
  const eliminarProducto = (id) => {
    const motorcycles = carrito.filter((motorcycle) => motorcycle.id !== id);
    agregarProducto(motorcycles);
  };

  return (
    <div className="row">
      <div className="col-12">
        <button
          type="button"
          className="btn btn-cart"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img className="cart" src={cart} alt="" />
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  You Shopping Cart
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {carrito.length === 0 ? (
                <div className="modal-body">
                  <h5 className="modal-title" id="exampleModalLabel">
                    No hay elementos en el carrito
                  </h5>
                </div>
              ) : (
                carrito.map((motorcycle) => (
                  <div className="modal-body">
                    <h5 className="modal-title" id="exampleModalLabel">
                      {motorcycle.id}
                    </h5>
                    <h5 className="modal-title" id="exampleModalLabel">
                      {motorcycle.name}
                    </h5>
                    <button
                      type="button"
                      onClick={() => eliminarProducto(motorcycle.id)}
                      className="btn btn-primary"
                    >
                      Delete product
                    </button>
                  </div>
                ))
              )}

              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
