import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InforCard from './InforCard';

const InforCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 om everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary '
        },
        {
            id: 2,
            name: 'Visit Our Location',
            description: 'Open 9.00 am to 5.00 om everyday',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00 om everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary '
        },
    ]

    return (
        <div className='grid mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card => <InforCard
                    key={card.id}
                    card={card}
                ></InforCard>)
            }
        </div>
    );
};

export default InforCards;