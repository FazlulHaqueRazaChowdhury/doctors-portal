import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='flex flex-col items-center w-full justify-center mt-[100px]'>
            <h5 className='text-secondary text-[20px] font-bold'>Contact Us</h5>
            <h1 className='text-white text-[36px] font-bol mt-[10px] mb-[41px]'>Stay connected with us</h1>
            <div className="flex flex-col  items-center justify-center h-full">
                <form className='flex flex-col gap-y-[20px] items-center justify-center'>
                    <input type="text" placeholder="Email Address" className="input lg:w-[445px] h-[48px] input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Subject" className="input lg:w-[445px] h-[48px] input-bordered w-full max-w-xs" />
                    <textarea className="textarea textarea-bordered lg:w-full h-[136px]" resizeable='false' placeholder="Your Message"></textarea>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary ease-linear duration-200 hover:bg-gradient-to-l text-white">Submit</button>
                </form>
            </div>
        </div >
    );
};

export default Contact;