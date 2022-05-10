import React from 'react';
import Testimonial from './Testimonial';
import img from '../../assets/images/people1.png'
import img1 from '../../assets/images/people2.png'
import img2 from '../../assets/images/people3.png'
const Testimonials = () => {
    const data = [
        { img: img, name: 'Winson Herry', rev: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', loc: 'California' },
        { img: img1, name: 'Winson Herry', rev: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', loc: 'California' },
        { img: img2, name: 'Winson Herry', rev: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', loc: 'California' }
    ]
    return (
        <div className='my-[156px]'>

            <div className="container mx-auto" id='qoute'>
                <h5 className='text-[20px] text-secondary font-bold'>Testimonial</h5>
                <h2 className='text-accent text-[36px]'>What Our Patients Says</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-[150px]">
                    {
                        data.map(test => <Testimonial test={test} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;