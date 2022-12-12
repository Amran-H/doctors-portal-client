import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
import Service from './Service';
import PrimaryButton from '../../../Components/PrimaryButton';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-primary uppercase text-xl font-bold'>Our Services</h3>
                <h2 className='
                text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>


            <div>
                <div className="hero lg:p-16">
                    <div className="hero-content flex-col lg:flex-row }">
                        <img alt='' src={treatment} className=" rounded-lg lg:w-1/2  shadow-2xl " />
                        <div className='lg:ml-16'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;