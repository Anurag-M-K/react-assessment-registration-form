import React from 'react';
import { useForm } from 'react-hook-form';
import { addUserDetails } from '../api/api';

function RegistrationForm() {

  const { register , handleSubmit } = useForm();

  //sending data to server 
  const onSubmit =async (data) =>{
    try {
      const res = await addUserDetails(data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=" sm:p-28 md:py-10   ">
        <form onSubmit={handleSubmit(onSubmit)} >
    <div className=" bg-[#F7F7F7] drop-shadow-lg  md:pe-10 rounded ">
        {/* personal details section */}
        <div className="px-5 pt-4">
         
      <h1 className="mb-3 font-bold underline">Personal Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7">
        <div className="col-span-3 grid">
          <div className="sm:flex  ">
            <div className="me-5">
              <label htmlFor="Name">Name <span className="text-red-500">*</span></label>
            </div>
            <div className="md:w-4/5 w-full sm:me-5">
              <input
              {...register("name")}
                placeholder="Enter Name"
                type="text"
                className="dark:text bg-transparent me-3 mt-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:my-0 sm:mt-0 md:my-0"
              />
            </div>
          </div>
          <div className="my-5 sm:flex">
            <div className="me-5">
              <label htmlFor="Mobile">Mobile</label>
            </div>
            <div className="md:w-3/5">
              <input
                 {...register("mobile")}
                placeholder="Enter Mobile"
                type="number"
                className="dark:text bg-transparent me-3 mt-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:my-0 sm:mt-0 md:my-0"
              />
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="flex flex-col sm:col-span-4 sm:flex-row">
            <div className="mb-3 pe-5 sm:my-0 sm:mb-0">
              <label htmlFor="dob">Date of Birth or Age<span className="text-red-500">*</span></label>
            </div>
            <div className="w-auto sm:w-80">
              <input
                 {...register("dob")}
                placeholder="DD/MM/YYYY or Age in Years"
                type="text"
                className="dark:text bg-transparent me-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:my-5 md:my-0"
              />
            </div>
            <div className="my-3  sm:mt-5 sm:my-5  sm:px-10 md:my-0">
              <label htmlFor="Sex">Sex<span className="text-red-500">*</span></label>
            </div>
            <div className="w-1/2">
   
      <select
        id="sex"
        {...register("sex", { required: true })}
        className="dark:text bg-transparent   me-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:my-5 md:my-0"
  
      >
        <option disabled value="">Enter Sex</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
  
            </div>
          </div>

          <div className="my-5 grid grid-cols-6">
            <div className="col-span-6 mb-3 sm:col-span-1 sm:my-0">
              <label htmlFor="govid">Govt Issued Id</label>
            </div>
            <div className="col-span-2 me-3 ps-0 sm:col-span-1 sm:me-0">

      <select
        id="idType"
        className="dark:text bg-transparent me-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:my-0"
        {...register("idType", { required: true })}
      >
        <option  value="value">ID Type</option>
        <option value="Adhar">Adhar</option>
        <option value="Voter ID">Voter ID</option>
        <option value="License">License</option>
      </select>

            </div>
            <div className="col-span-4 w-full ps-0 sm:ps-5">
              <input
                 {...register("govID")}
                placeholder="Enter Govt ID"
                type="text"
                className="bg-transparent dark:text me-3 w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:my-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
{/* personal details section end  */}

{/* contact section start */}
<div className="px-5">
      <h1 className="underline font-bold">Contact details</h1>
      <div className="grid grid-cols-1 mt-5 lg:grid-cols-7 md:grid-cols-2 sm:grid-cols-2 gap-y-5 sm:gap-y-0">
        <div className="col-span-3 sm:mt-0">
          <div className="md:flex sm:flex-row">
            <div className="me-5 my-5  sm:w-44 md:my-0">
              <label htmlFor="Guardian Details">Guardian Details</label>
            </div>
            <div className=" md:flex self-start  sm:w-full lg:my-0 md:w-full me-5">

      <select
        id="guardianCountry"
        className="dark:text bg-transparent block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 me-3 md:my-0 sm:my-5 my-5"
        {...register("guardianCountry", { required: true })}
      >
        <option  value="value">Enter Label</option>
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="France">France</option>
        <option value="Germany">Germany</option>
      </select>
 
              <input
                 {...register("guardianName")}
                type="text"
                placeholder="Enter Guardian Name"
                className="dark:text block w-full bg-transparent  rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:me-3 md:me-0"
              />
            </div>
            <div></div>
          </div>
        </div>

        {/* <!-- - right side start  --> */}
        <div className="col-span-4 ">
          <div className="sm:flex">
            <div className="sm:my-5 my-4 lg:my-0 pe-5">
              <label htmlFor="Email">Email</label>
            </div>
            <div className="sm:w-1/4 w-full sm:my-5 lg:my-0">
              <input
                 {...register("email")}
                type="text"
                placeholder="Enter Email"
                className="dark:text block w-full bg-transparent  rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 me-3"
              />
            </div>
            <div className="sm:px-5 my-5 sm:my-5 lg:my-0">
              <label htmlFor="EmergencyNo">Emergency contact number</label>
            </div>
            <div className="sm:w-3/5 sm:px-5 sm:my-5 lg:my-0">
              <input
                 {...register("emergencyNo")}
                type="text"
                placeholder="Enter Emergency No"
                className="dark:text block w-full bg-transparent rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 me-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
{/* contact section end */}

{/* Address details start */}

<div className="px-5">
      <h1 className="underline font-bold mb-3">Address details</h1>
      <div className="grid md:grid-cols-7 grid-cols-1 sm:grid-cols-2 ">
        {/* <!-- left side start -->  */}
        <div className="col-span-3 grid  ">
          <div className=" flex   ">
            <div className="me-5">
              <label htmlFor="Address">Address</label>
            </div>
            <div className="w-4/5 me-5">
              <input
                 {...register("address")}
                type="text"
                placeholder="Enter Address"
                className="dark:text block bg-transparent w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 "
              />
            </div>
          </div>
          <div className="flex my-5 ">
            <div className="me-5">
              <label htmlFor="Country">Country</label>
            </div>
            <div className="sm:w-3/5 w-full">

      <select
        id="country"
        className="dark:text block bg-transparent w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        {...register("country", { required: true })}
      >
        <option disabled value="">Choose a country</option>
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="France">France</option>
        <option value="Germany">Germany</option>
      </select>
 
            </div>
          </div>
        </div>
        {/* <!-- left side end -->  */}

        {/* <!-- right side start -->  */}
        <div className="col-span-4  ">
          <div className="flex">
            <div className="flex pe-5 ">
              <label htmlFor="state">state</label>
            </div>
            <div className="w-3/5">
     
          <select
            id="states"
            {...register("states", { required: true })}
            className="dark:text block w-full bg-transparent rounded border-gray-300 border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option value="">Enter state</option>
            <option value="Kerala">Kerala</option>
            <option value="Tamilnadu">Tamilnadu</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
          </select>
      
            </div>
            <div className="px-5">
              <label htmlFor="City">City</label>
            </div>
            <div className="w-4/5">
            <select
        id="city"
        {...register("city")}
        className="dark:text bg-transparent block w-full rounded border-gray-300 border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option value="value">Enter city/town/village</option>
        <option value="India">India</option>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="France">France</option>
        <option value="Germany">Germany</option>
      </select>
            </div>
          </div>
          <div className="flex my-5">
            <div className="">
              <label htmlFor="pincode">pincode</label>
            </div>
            <div className="ps-5">
              <input
                 {...register("pincode")}
                type="text"
                placeholder="Enter pincode"
                className="dark:text block bg-transparent w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 "
              />
            </div>
          </div>
        </div>
        {/* <!-- right side end --> */}
      </div>
    </div>{/* Address details end */}


    {/* other details section start */}
    <div className="px-5">
    <h3 className="font-bold underline pb-3">Other details</h3>
    <div className="grid-col-2 grid gap-y-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-12 gap-x-5">
      <div>
        <label htmlFor="occupation">occupation</label>
      </div>
      <div className="col-span-2">
        <input
           {...register("occupation")}
          type="text"
          placeholder="Enter occupation"
          className="dark:text bg-transparent block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>
      <div className="mt-3 sm:mt-0">
        <label htmlFor="Religion">Religion</label>
      </div>
      <div className="col-span-2">
      <select
        id="religion"
        {...register('religion', { required: true })}
        className="dark:text block bg-transparent w-full rounded border-gray-300 border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option value="">Enter Religion</option>
        <option value="Hindu">Hindu</option>
        <option value="Buddhism">Buddhism</option>
        <option value="Christianity">Christianity</option>
        <option value="Islam">Islam</option>
      </select>
      </div>
      <div className="mt-3 sm:mt-0">
        <label htmlFor="Marital Status">Marital Status</label>
      </div>
      <div className="col-span-2 ">
      <select
        id="maritalStatus"
        {...register("maritalStatus", { required: true })}
        className="dark:text bg-transparent block w-full rounded border-gray-300 border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option value="">Enter Marital Status</option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Committed">Committed</option>
      </select>
      </div>
      <div className="mt-3 sm:mt-0">
        <label htmlFor="Blood Group">Blood Group</label>
      </div>
      <div className="col-span-2">
          <select
            id="bloodGroup"
            {...register("bloodGroup", { required: true })}
            className="dark:text block w-full bg-transparent rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option>Group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+VE">O+VE</option>
            <option value="O-VE">O-VE</option>
          </select>
      </div>
      <div className="mt-3 sm:mt-0">
        <label htmlFor="Nationality">Nationality</label>
      </div>
      <div className="col-span-2">
        <select
          id="nationality"
          {...register("nationality", { required: true })}
          className="dark:text block bg-transparent w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option value="value">Choose a country</option>
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
        </select>
      </div>
    </div>
    <div className="flex items-center justify-end pt-8 pb-5">

      <button type='submit' className="sm:me-4 py-2 w-full hover:bg-red-500 ease-in-out duration-500 hover:text-white rounded border-red-200  border-2 px-5 sm:py-1 text-[11px] font-medium uppercase text-red-600 sm:w-24">
        cancel <small className="underline">(esc)</small>
      </button>
      <button  type='submit' className="ms-4  py-2 w-full drop-shadow-2xl rounded hover:bg-green-600 duration-300 ease-in-out bg-[#247817] px-5 sm:py-1 text-[11px] font-normal uppercase tracking-widest text-white shadow-lg  sm:w-24">
        submit <small className="tracking-widest underline">(&#8984; S)</small>
      </button>
    </div>
  </div>
    {/* other details section end */}
    </div>
    </form>
  </div>
  
  )
}

export default RegistrationForm   