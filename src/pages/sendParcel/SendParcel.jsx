import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const DISTRICTS = [
    'Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Kishoreganj', 'Madaripur',
    'Manikganj', 'Munshiganj', 'Narayanganj', 'Narsingdi', 'Rajbari', 'Shariatpur',
    'Tangail', 'Bagerhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Khulna',
    'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira', 'Bogra', 'Chapai Nawabganj',
    'Joypurhat', 'Naogaon', 'Natore', 'Pabna', 'Rajshahi', 'Sirajganj',
    'Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh',
    'Rangpur', 'Thakurgaon', 'Brahmanbaria', 'Chandpur', 'Comilla', 'Cox\'s Bazar',
    'Feni', 'Khagrachhari', 'Lakshmipur', 'Noakhali', 'Rangamati', 'Chittagong',
    'Habiganj', 'Moulvibazar', 'Sunamganj', 'Sylhet', 'Barisal', 'Barguna',
    'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur', 'Jamalpur', 'Mymensingh',
    'Netrokona', 'Sherpur',
];

const SendParcel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [parcelType, setParcelType] = useState('document');

    const onSubmit = (data) => {
        console.log({ parcelType, ...data });
    };

    const inputClass = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#CAEB45] transition placeholder:text-gray-400';
    const labelClass = 'block text-base text-gray-800 mb-1';
    const selectClass = 'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#CAEB45] transition bg-white text-gray-500 appearance-none';

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-10">

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#03373D] mb-6">Send A Parcel</h1>

                {/* Subtitle */}
                <h2 className="text-base md:text-2xl font-extrabold text-[#03373D] mb-4">Enter your parcel details</h2>

                {/* Divider */}
                <hr className="border-gray-300 mb-5" />

                {/* Parcel Type Radio */}
                <div className="flex gap-4 mb-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="parcelType"
                            value="document"
                            checked={parcelType === 'document'}
                            onChange={() => setParcelType('document')}
                            className="accent-[#CAEB45] w-4 h-4"
                        />
                        <span className="text-sm md:text-base font-semibold text-gray-700">Document</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="parcelType"
                            value="not-document"
                            checked={parcelType === 'not-document'}
                            onChange={() => setParcelType('not-document')}
                            className="accent-[#CAEB45] w-4 h-4"
                        />
                        <span className="text-sm md:text-base font-semibold text-gray-700">Not-Document</span>
                    </label>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                    {/* Parcel Name + Weight */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className={labelClass}>Parcel Name</label>
                            <input
                                {...register('parcelName', { required: true })}
                                placeholder="Parcel Name"
                                className={inputClass}
                            />
                            {errors.parcelName && <p className="text-red-500 text-xs mt-1">Parcel name is required</p>}
                        </div>
                        <div>
                            <label className={labelClass}>Parcel Weight (KG)</label>
                            <input
                                {...register('parcelWeight')}
                                placeholder="Parcel Weight (KG)"
                                type="number"
                                step="0.1"
                                min="0"
                                className={inputClass}
                            />
                            {errors.parcelWeight && <p className="text-red-500 text-xs mt-1">Weight is required</p>}
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* Sender + Receiver side by side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Sender Details */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm md:text-lg font-extrabold text-[#03373D]">Sender Details</h3>

                            <div>
                                <label className={labelClass}>Sender Name</label>
                                <input {...register('senderName', { required: true })} placeholder="Sender Name" className={inputClass} />
                                {errors.senderName && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Address</label>
                                <input {...register('senderAddress', { required: true })} placeholder="Address" className={inputClass} />
                                {errors.senderAddress && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Sender Phone No</label>
                                <input {...register('senderPhone', { required: true })} placeholder="Sender Phone No" className={inputClass} />
                                {errors.senderPhone && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Your District</label>
                                <div className="relative">
                                    <select {...register('senderDistrict', { required: true })} className={selectClass}>
                                        <option value="">Select your District</option>
                                        {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                                    </select>
                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                                </div>
                                {errors.senderDistrict && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Pickup Instruction</label>
                                <textarea {...register('pickupInstruction')} placeholder="Pickup Instruction" rows={4} className={`${inputClass} resize-none`} />
                            </div>
                        </div>

                        {/* Receiver Details */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm md:text-lg font-extrabold text-[#03373D]">Receiver Details</h3>

                            <div>
                                <label className={labelClass}>Receiver Name</label>
                                <input {...register('receiverName', { required: true })} placeholder="Sender Name" className={inputClass} />
                                {errors.receiverName && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Receiver Address</label>
                                <input {...register('receiverAddress', { required: true })} placeholder="Address" className={inputClass} />
                                {errors.receiverAddress && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Receiver Contact No</label>
                                <input {...register('receiverPhone', { required: true })} placeholder="Sender Contact No" className={inputClass} />
                                {errors.receiverPhone && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Receiver District</label>
                                <div className="relative">
                                    <select {...register('receiverDistrict', { required: true })} className={selectClass}>
                                        <option value="">Select your District</option>
                                        {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
                                    </select>
                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                                </div>
                                {errors.receiverDistrict && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Delivery Instruction</label>
                                <textarea {...register('deliveryInstruction')} placeholder="Delivery Instruction" rows={4} className={`${inputClass} resize-none`} />
                            </div>
                        </div>
                    </div>

                    {/* Pickup note + Submit */}
                    <p className="text-base text-gray-800 mt-1">* PickUp Time 10am–7pm Approx.</p>

                    <div>
                        <button
                            type="submit"
                            className="bg-[#CAEB45] text-gray-900 font-bold px-8 py-3 rounded-lg hover:bg-[#b8d93a] transition text-sm"
                        >
                            Proceed to Confirm Booking
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SendParcel;
