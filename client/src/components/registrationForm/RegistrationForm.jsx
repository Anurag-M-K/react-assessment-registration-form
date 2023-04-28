import React from "react";
import { useForm } from "react-hook-form";
import { addUserDetails } from "../../api/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegistrationForm() {
  //yup validation configuring
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    dob: yup.string().required("Please enter your date of birth"),
    sex: yup.string().required("Please enter your sex"),
    mobile: yup
      .string()
      .matches(/^[6-9]\d{9}$/, "Mobile number is not valid")
      .required(),
    emergencyNo: yup
      .string()
      .matches(/^[6-9]\d{9}$/, "Emergency contact number is not valid")
      .required(),
    idType: yup.string(),
    govID: yup.string().nullable().required("Please enter your government ID"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      sex: "",
      idType: "",
      govID: "",
    },
  });



  //submiting data to server
  const onSubmit = async (data) => {
    console.log("data ", data);
    try {
      const res = await addUserDetails(data);
      console.log(res.data)
      if(res.response===true){
        toast.success("Your data submitted")
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" sm:mx-28 sm:my-20    ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" bg-[#F7F7F7] drop-shadow-xl  md:pe-10 rounded ">
          {/* personal details section */}
          <div className="px-5 pt-4">
            <h1 className="mb-3 font-bold underline">Personal Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7">
              <div className="col-span-3 grid">
                <div className="sm:flex  ">
                  <div className="me-5">
                    <label className="font-semibold" htmlFor="Name">
                      Name <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="md:w-4/5 w-full sm:me-5">
                    <input
                      {...register("name")}
                      placeholder="Enter Name"
                      type="text"
                      className="dark:text bg-transparent me-3 mt-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:my-0 sm:mt-0 md:my-0"
                    />
                    <p className="text-red-500">{errors.name?.message}</p>
                  </div>
                </div>
                <div className="my-5 md:my-0 sm:flex">
                  <div className="me-5">
                    <label className="font-medium" htmlFor="Mobile">
                      Mobile
                    </label>
                  </div>
                  <div className="md:w-3/5">
                    <input
                      {...register("mobile")}
                      placeholder="Enter Mobile"
                      type="tel"
                      className="dark:text bg-transparent me-3 mt-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:my-0 sm:mt-0 md:my-0"
                    />
                    <p className="text-red-500">{errors.mobile?.message}</p>
                  </div>
                </div>
              </div>

              <div className="col-span-4 lg:ms-5">
                <div className="flex flex-col sm:col-span-4 sm:flex-row">
                  <div className="mb-3 pe-5 sm:my-0 sm:mb-0">
                    <label className="font-medium" htmlFor="dob">
                      Date of Birth or Age
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-auto sm:w-80">
                    <input
                      {...register("dob")}
                      placeholder="DD/MM/YYYY or Age in Years"
                      type="text"
                      className="dark:text bg-transparent me-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:my-5 md:my-0"
                    />
                    <p className="text-red-500">{errors.dob?.message}</p>
                  </div>
                  <div className="my-3  sm:mt-5 sm:my-5  sm:px-10 md:my-0">
                    <label className="font-medium" htmlFor="Sex">
                      Sex<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <select
                      id="sex"
                      {...register("sex", { required: true })}
                      className="dark:text bg-transparent   me-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:my-5 md:my-0"
                    >
                      <option disabled value="">
                        Enter Sex
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <p className="text-red-500">{errors.sex?.message}</p>
                  </div>
                </div>

                <di v className="my-5 md:my-2 grid grid-cols-6">
                  <div className="col-span-6 mb-3 sm:col-span-1 sm:my-0">
                    <label className="font-medium" htmlFor="govid">
                      Govt Issued ID
                    </label>
                  </div>
                  <div className="col-span-2 me-3 ps-0 sm:col-span-1 sm:me-0">
                    <select
                      id="idType"
                      {...register("idType", { required: true })}
                      className="dark:text md:ms-3  bg-transparent me-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:my-0"
                    >
                      <option disabled value="">
                        ID Type
                      </option>
                      <option value="Adhar">Adhar</option>
                      <option value="PAN">PAN</option>
                    </select>
                  </div>
                  <div className="col-span-4 lg:ms-0  ps-0 sm:ps-5">
                    <input
                      {...register("govID")}
                      placeholder="Enter Govt ID"
                      type="text"
                      className="bg-transparent dark:text me-3 w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:my-0"
                    />
                    <p className="text-red-500">{errors.govID?.message}</p>
                  </div>
                </di>
              </div>
            </div>
          </div>
          {/* personal details section end  */}

          {/* contact section start */}

          <div className="px-5">
            <h1 className="underline font-bold">Contact Details</h1>
            <div className="grid grid-cols-1 mt-4 lg:grid-cols-7 md:grid-cols-2 sm:grid-cols-2 gap-y-5 sm:gap-y-0">
              <div className="col-span-3 sm:mt-0">
                <div className="md:flex sm:flex-row">
                  <div className="me-5 my-5  sm:w-44 md:my-0">
                    <label className="font-medium" htmlFor="Guardian Details">
                      Guardian Details
                    </label>
                  </div>
                  <div className=" md:flex self-start  sm:w-full lg:my-0 md:w-full mlgd:me-5">
                    <select
                      id="guardianCountry"
                      className="dark:text bg-transparent  block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 lg:me-3 md:my-0 sm:my-5 my-5"
                      {...register("guardianCountry", { required: true })}
                    >
                      <option value="value">Enter Label</option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Uncle">Uncle</option>
                      <option value="Aunty">Aunty</option>
                    </select>

                    <input
                      {...register("guardianName")}
                      type="text"
                      placeholder="Enter Guardian Name"
                      className="dark:text block w-full bg-transparent  rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:me-3 md:me-0 lg:me-5 "
                    />
                  </div>
                  <div></div>
                </div>
              </div>

              {/* <!-- - right side start  -->  */}
              <div className="col-span-4 lg:ms-5  ">
                <div className="sm:flex">
                  <div className="sm:my-5  mb-4 lg:my-0 pe-5 ">
                    <label className="font-medium" htmlFor="Email">
                      Email
                    </label>
                  </div>
                  <div className="sm:w-2/4 w-full sm:my-5 lg:my-0">
                    <input
                      {...register("email")}
                      type="text"
                      placeholder="Enter Email"
                      className="dark:text block w-full   bg-transparent  rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 me-3"
                    />
                  </div>
                  <div className="sm:px-5 w-2/4 lg:w-f my-5 sm:my-5 lg:ms-4  lg:my-0 block">
                    <label className="block font-medium" htmlFor="EmergencyNo">
                      Emergency Contact Number
                    </label>
                  </div>
                  <div className="sm:w-3/5 sm:px-0 sm:my-5 lg:my-0">
                    <input
                      {...register("emergencyNo")}
                      type="text"
                      placeholder="Enter Emergency No"
                      className="dark:text block w-full bg-transparent rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 me-3"
                    />
                    <p className="text-red-500">
                      {errors.emergencyNo?.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* contact section end */}

          {/* Address details start */}

          <div className="px-5">
            <h1 className="underline font-bold mb-3 mt-3 sm:mt-0">
              Address Details
            </h1>
            <div className="grid md:grid-cols-7 grid-cols-1 sm:grid-cols-2 ">
              {/* <!-- left side start -->  */}
              <div className="col-span-3 grid  ">
                <div className=" flex   ">
                  <div className="me-5">
                    <label className="font-medium" htmlFor="Address">
                      Address
                    </label>
                  </div>
                  <div className="w-4/5 me-5">
                    <input
                      {...register("address")}
                      type="text"
                      placeholder="Enter Address"
                      className="dark:text block bg-transparent w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 "
                    />
                  </div>
                </div>
                <div className="flex md:my-0  my-5">
                  <div className="me-5">
                    <label className="font-medium" htmlFor="Country">
                      Country
                    </label>
                  </div>
                  <div className="sm:w-3/5 w-full">
                    <select
                      id="country"
                      className="dark:text block bg-transparent w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      {...register("country", { required: true })}
                    >
                      <option disabled value="">
                        Choose a country
                      </option>
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
              <div className="col-span-4  lg:ms-5 ">
                <div className="flex">
                  <div className="flex pe-5 ">
                    <label className="font-medium" htmlFor="state">
                      State
                    </label>
                  </div>
                  <div className="w-3/5">
                    <select
                      id="states"
                      {...register("states", { required: true })}
                      className="dark:text block w-full bg-transparent rounded border-gray-300 border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    >
                      <option value="">Enter State</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Tamilnadu">Tamilnadu</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                    </select>
                  </div>
                  <div className="px-5">
                    <label className="font-medium" htmlFor="City">
                      City
                    </label>
                  </div>
                  <div className="w-4/5">
                    <select
                      id="city"
                      {...register("city")}
                      className="dark:text bg-transparent block w-full  md:w-11/12 rounded border-gray-300 border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
                <div className="flex md:my-2 my-5">
                  <div className="">
                    <label className="font-medium" htmlFor="pincode">
                      Pincode
                    </label>
                  </div>
                  <div className="ps-5">
                    <input
                      {...register("pincode")}
                      type="text"
                      placeholder="Enter pincode"
                      className="dark:text block bg-transparent w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 "
                    />
                  </div>
                </div>
              </div>
              {/* <!-- right side end --> */}
            </div>
          </div>
          {/* Address details end */}

          {/* other details start */}
          <div class="px-5">
            <h3 class="font-bold underline pb-3">Other Details</h3>
            <div class="grid-col-2 grid gap-y-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-12 gap-x-2">
              <div>
                <label className="font-medium" htmlFor="occupation">
                  Occupation
                </label>
              </div>
              <div class="col-span-2">
                <input
                  {...register("occupation")}
                  type="text"
                  placeholder="Enter occupation"
                  class="dark:text bg-transparent block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
              </div>
              <div class="mt-3  md:text-center sm:mt-0">
                <label className="font-medium" htmlFor="Religion">
                  Religion
                </label>
              </div>
              <div class="col-span-2 ">
                <select
                  id="religion"
                  {...register("religion", { required: true })}
                  class="dark:text block bg-transparent w-full md:w-full xl:w-3/4  lg:w-full rounded border-gray-300 border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="">Enter Religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Buddhism">Buddhism</option>
                  <option value="Christianity">Christianity</option>
                  <option value="Islam">Islam</option>
                </select>
              </div>
              <div class="mt-3 2xl:whitespace-nowrap  inline-block    sm:mt-0">
                <label className="font-medium" htmlFor="Marital Status">
                  Marital Status
                </label>
              </div>
              <div class="col-span-2  sm:ms-0 md:ms-0 lg:ms-0  ">
                <select
                  id="maritalStatus"
                  {...register("maritalStatus", { required: true })}
                  class="dark:text bg-transparent block w-full rounded border-gray-300 border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="">Enter Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Committed">Committed</option>
                </select>
              </div>
              <div class="mt-3 md:text-center  col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 sm:mt-0">
                <label className="font-medium" htmlFor="Blood Group">
                  Blood Group
                </label>
              </div>
              <div class="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2">
                <select
                  id="bloodGroup"
                  {...register("bloodGroup", { required: true })}
                  class="dark:text block w-full bg-transparent rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option>Group</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="O+VE">O+VE</option>
                  <option value="O-VE">O-VE</option>
                </select>
              </div>
              <div class="mt-3 sm:mt-0">
                <label className="font-medium" htmlFor="Nationality">
                  Nationality
                </label>
              </div>
              <div class="col-span-2">
                <input
                  {...register("nationality")}
                  placeholder="Nationality"
                  type="search"
                  className="dark:text block bg-transparent w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
              </div>
            </div>
            <div class="flex items-center justify-end pt-3 pb-5">
              <button
                type="button"
                onClick={() => reset()}
                class="sm:me-16   py-2 w-full hover:bg-red-500 ease-in-out duration-500 hover:text-white rounded border-red-200  border-2 px-5 sm:py-2 text-[14px] tracking-widest font-medium uppercase text-red-600 sm:w-28"
              >
                cancel <small class="underline">(esc)</small>
              </button>
              <button
                type="submit"
                class="ms-4  py-2 w-full drop-shadow-2xl rounded hover:bg-green-600 duration-300 ease-in-out bg-[#247817] px-5 sm:py-2 text-[14px] font-normal uppercase tracking-widest text-white shadow-lg  sm:w-28"
              >
                submit
                <small class="tracking-widest underline"> (&#8984; S)</small>
              </button>
            </div>
          </div>
          {/* other details section end */}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default RegistrationForm;
