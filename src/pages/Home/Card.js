import React from 'react';

const Card = ({cart}) => {

    return (
            <div class="card w-80 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={cart.img} alt="Shoes" class="rounded-xl h-40 w-60" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{cart.name}</h2>
                    <p>Description:{cart.description}</p>
                    <p>Available Quantity:{cart.Quantity}</p>
                    <p>Minimum Quantity:{cart.minquantity}</p>
                    <p>Price:{cart.Price} $</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default Card;