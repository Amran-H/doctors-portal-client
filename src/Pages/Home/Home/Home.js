import React from 'react';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import InforCards from '../InforCards/InforCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InforCards></InforCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;