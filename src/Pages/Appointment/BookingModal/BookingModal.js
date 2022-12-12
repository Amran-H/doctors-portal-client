import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    //treatment is appointment options just different name
    const { name, slots, price } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;


        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone,
            price

        }
        //TODO: send data to the server
        //and once data is saved then close the modal 
        // and display success toast 
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed!');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-5'>
                        <input type="text" value={date} className="input input-bordered w-full font-semibold" disabled />

                        <select
                            name='slot'
                            className="select select-bordered w-full bg-base-200 font-semibold">

                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >
                                    {slot}
                                </option>)
                            }
                        </select>

                        <input
                            name='name'
                            type="text" readOnly defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full " />
                        <input
                            name='email'
                            type="email" readOnly defaultValue={user?.email} placeholder="Email Address" disabled className="input input-bordered w-full " />
                        <input
                            name='phone'
                            type="text" placeholder="Phone Number" className="input input-bordered w-full " />

                        <input className='btn btn-accent w-full ' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>s
        </>
    );
};

export default BookingModal;