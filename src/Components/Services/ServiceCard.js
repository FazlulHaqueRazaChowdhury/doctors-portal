import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, desc, icon } = service;
    return (

        <div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto p-5">
                <figure><img src={icon} alt="Shoes" /></figure>
                <div class="card-body text-center">
                    <h2 class="card-title text-accent mx-auto text-center">{title}</h2>
                    <p>{desc}</p>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;