import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';


const SendParcel = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [parcelType, setParcelType] = useState('document');
    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)];
    //explore useMemo useCallback
    const senderRegion = useWatch({ control, name: 'senderRegion' });
    const receiverRegion = useWatch({ control, name: 'receiverRegion' });

    const districtsByRegion = region => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }

    const onSubmit = (data) => {
        const isDocument = parcelType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight);

        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
                cost = minCharge + extraCharge;
            }
        }
        console.log(cost);

        Swal.fire({
            title: "Agree with the Cost?",
            text: `You will be charged ${cost} taka!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I agree!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/parcels', data).then(res => {
                    console.log('After saving parcel', res.data);
                    Swal.fire({
                        title: "Booking Confirmed!",
                        text: "Your parcel has been booked successfully.",
                        icon: "success"
                    });
                });
            }
        });
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
                                <input {...register('senderName', { required: true })} 
                                defaultValue={user.displayName}
                                placeholder="Sender Name" className={inputClass} />
                                {errors.senderName && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Sender Email</label>
                                <input {...register('senderEmail', { required: true })} 
                                defaultValue={user?.email}
                                placeholder="Sender Email" className={inputClass} />
                                {errors.senderAddress && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Sender Phone No</label>
                                <input {...register('senderPhone', { required: true })} placeholder="Sender Phone No" className={inputClass} />
                                {errors.senderPhone && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Sender Region</label>
                                <div className="relative">
                                    <select {...register('senderRegion', { required: true })} className={selectClass}>
                                        <option value="">Select Sender Region</option>
                                        {
                                            regions.map((r, i) => <option key={i} value={r}> {r} </option>)
                                        }
                                    </select>
                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                                </div>
                                {errors.senderRegion && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Sender District</label>
                                <div className="relative">
                                    <select {...register('senderDistrict', { required: true })} className={selectClass}>
                                        <option value="">Select Sender District</option>
                                        {
                                            districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}> {r} </option>)
                                        }
                                    </select>
                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                                </div>
                                {errors.senderDistrict && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>


                            <div>
                                <label className={labelClass}>Address</label>
                                <input {...register('senderAddress', { required: true })} placeholder="Address" className={inputClass} />
                                {errors.senderAddress && <p className="text-red-500 text-xs mt-1">Required</p>}
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
                                <label className={labelClass}>Receiver Email</label>
                                <input {...register('receiverEmail', { required: true })} placeholder="Receiver Email" className={inputClass} />
                                {errors.receiverAddress && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            <div>
                                <label className={labelClass}>Receiver Contact No</label>
                                <input {...register('receiverPhone', { required: true })} placeholder="Sender Contact No" className={inputClass} />
                                {errors.receiverPhone && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            {/* receiver region */}
                            <div>
                                <label className={labelClass}>Receiver Region</label>
                                <div className="relative">
                                    <select {...register('receiverRegion', { required: true })} className={selectClass}>
                                        <option value="">Select Receiver Region</option>
                                        {
                                            regions.map((r, i) => <option key={i} value={r}> {r} </option>)
                                        }
                                    </select>
                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                                </div>
                                {errors.receiverRegion && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>

                            {/* receiver district */}
                            <div>
                                <label className={labelClass}>Receiver District</label>
                                <div className="relative">
                                    <select {...register('receiverDistrict', { required: true })} className={selectClass}>
                                        <option value="">Select Receiver District</option>
                                        {
                                            districtsByRegion(receiverRegion).map((d, i) => <option key={i} value={d}> {d} </option>)
                                        }
                                    </select>
                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
                                </div>
                                {errors.receiverDistrict && <p className="text-red-500 text-xs mt-1">Required</p>}
                            </div>



                            <div>
                                <label className={labelClass}>Receiver Address</label>
                                <input {...register('receiverAddress', { required: true })} placeholder="Address" className={inputClass} />
                                {errors.receiverAddress && <p className="text-red-500 text-xs mt-1">Required</p>}
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
