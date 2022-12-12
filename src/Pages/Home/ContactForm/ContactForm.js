import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton';

const ContactForm = () => {
    return (
        <section className='text-center py-16'
            style={{
                background: `url(${appointment})`
            }}
        >

            <h5 className='text-primary text-xl'>Contact Us</h5>
            <p className='text-white text-3xl pt-2 pb-10 '>Stay Connected With us</p>

            <div className='flex flex-col items-center gap-4'>
                <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-sm" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-sm" />
                <textarea className="textarea w-full max-w-sm h-32" placeholder="Your Message"></textarea>
            </div>



            <div className='pt-9'>
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-32"> <input type="submit" value="Submit" /></button>
            </div>

        </section >
    );
};

export default ContactForm;