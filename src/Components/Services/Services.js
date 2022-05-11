import React from 'react';
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import white from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';
const Services = () => {
    const data = [
        { title: 'Fluoride Treatment', desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', icon: flouride },
        { title: 'Cavity Filling', desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', icon: cavity },
        { title: 'Teeth Whitening', desc: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', icon: white },
    ]
    return (
        <div className='mt-[165px]'>
            <div className='container mx-auto'>
                <div className="text-center">
                    <h3 className="text-secondary text-[20px] font-bold">OUR SERVICES</h3>
                    <h2 className="text-accent text-[36px] mt-[7px] mb-[70px]">Services We Provide</h2>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 justify-center items-center gap-x-[20px] gap-y-[30px]">
                    {
                        data.map(service => <ServiceCard service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;