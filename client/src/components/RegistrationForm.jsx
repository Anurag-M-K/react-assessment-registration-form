import React from 'react'

function RegistrationForm() {
  return (
    <div className=" sm:p-28 md:py-10   ">
    <div style={{backgroundColor:"mintcream"}} className=" drop-shadow-lg  md:pe-10 rounded ">
        {/* personal details section */}
        <div class="px-5 pt-4">
      <h1 class="mb-3 font-bold underline">Personal Details</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7">
        <div class="col-span-3 grid">
          <div class="sm:flex  ">
            <div class="me-5">
              <label for="A">Name <span className="text-red-500">*</span></label>
            </div>
            <div class="md:w-4/5 w-full sm:me-5">
              <input
                placeholder="Enter Name"
                type="text"
                class="dark:text  me-3 mt-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:my-0 sm:mt-0 md:my-0"
              />
            </div>
          </div>
          <div class="my-5 sm:flex">
            <div class="me-5">
              <label for="">Mobile</label>
            </div>
            <div class="md:w-3/5">
              <input
                placeholder="Enter Mobile"
                type="text"
                class="dark:text me-3 mt-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:my-0 sm:mt-0 md:my-0"
              />
            </div>
          </div>
        </div>

        <div class="col-span-4">
          <div class="flex flex-col sm:col-span-4 sm:flex-row">
            <div class="mb-3 pe-5 sm:my-0 sm:mb-0">
              <label for="">Date of Birth or Age<span className="text-red-500">*</span></label>
            </div>
            <div class="w-auto sm:w-80">
              <input
                placeholder="DD/MM/YYYY or Age in Years"
                type="text"
                class="dark:text me-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:my-5 md:my-0"
              />
            </div>
            <div class="my-3  sm:mt-5 sm:my-5  sm:px-10 md:my-0">
              <label for="">Sex<span className="text-red-500">*</span></label>
            </div>
            <div class="w-1/2">
              <select
                id="countries"
                class="dark:text me-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:my-5 md:my-0"
              >
                <option selected>Enter Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div class="my-5 grid grid-cols-6">
            <div class="col-span-6 mb-3 sm:col-span-1 sm:my-0">
              <label for="">Govt Issued Id</label>
            </div>
            <div class="col-span-2 me-3 ps-0 sm:col-span-1 sm:me-0">
              <select
                id="countries"
                class="dark:text me-3 block w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:my-0"
              >
                <option selected>ID Type</option>
                <option value="In">Adhar</option>
                <option value="US">Voter ID</option>
                <option value="US">License</option>
              </select>
            </div>
            <div class="col-span-4 w-full ps-0 sm:ps-5">
              <input
                placeholder="Enter Govt ID"
                type="text"
                class="dark:text me-3 w-full rounded border-2 border-gray-300 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:my-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
{/* personal details section end  */}

{/* contact section start */}
<div class="px-5">
      <h1 class="underline font-bold">Contact details</h1>
      <div class="grid grid-cols-1 mt-5 lg:grid-cols-7 md:grid-cols-2 sm:grid-cols-2 gap-y-5 sm:gap-y-0">
        <div class="col-span-3 sm:mt-0">
          <div class="md:flex sm:flex-row">
            <div class="me-5 my-5  sm:w-44 md:my-0">
              <label for="A">Guardian Details</label>
            </div>
            <div class=" md:flex self-start  sm:w-full lg:my-0 md:w-full me-5">
              <select
                id="countries"
                class="dark:text block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 me-3 md:my-0 sm:my-5 my-5"
              >
                <option selected>Enter Label</option>
                <option value="In">India</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <input
                type="text"
                placeholder="Enter Guardian Name"
                class="dark:text block w-full  rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:me-3 md:me-0"
              />
            </div>
            <div></div>
          </div>
        </div>

        {/* <!-- - right side start  --> */}
        <div class="col-span-4 ">
          <div class="sm:flex">
            <div class="sm:my-5 my-4 lg:my-0 pe-5">
              <label for="">Email</label>
            </div>
            <div class="sm:w-1/4 w-full sm:my-5 lg:my-0">
              <input
                type="text"
                placeholder="Enter Email"
                class="dark:text block w-full  rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 me-3"
              />
            </div>
            <div class="sm:px-5 my-5 sm:my-5 lg:my-0">
              <label for="">Emergency contact number</label>
            </div>
            <div class="sm:w-3/5 sm:px-5 sm:my-5 lg:my-0">
              <input
                type="text"
                placeholder="Enter Emergency No"
                class="dark:text block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 me-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
{/* contact section end */}

{/* Address details start */}

<div class="px-5">
      <h1 class="underline font-bold mb-3">Address details</h1>
      <div class="grid md:grid-cols-7 grid-cols-1 sm:grid-cols-2 ">
        {/* <!-- left side start -->  */}
        <div class="col-span-3 grid  ">
          <div class=" flex   ">
            <div class="me-5">
              <label for="A">Address</label>
            </div>
            <div class="w-4/5 me-5">
              <input
                type="text"
                placeholder="Enter Address"
                class="dark:text block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 "
              />
            </div>
          </div>
          <div class="flex my-5 ">
            <div class="me-5">
              <label for="">Country</label>
            </div>
            <div class="sm:w-3/5 w-full">
              <select
                id="countries"
                class="dark:text block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="In">India</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
        {/* <!-- left side end -->  */}

        {/* <!-- right side start -->  */}
        <div class="col-span-4  ">
          <div class="flex">
            <div class="flex pe-5 ">
              <label for="">state</label>
            </div>
            <div class="w-3/5">
              <select
                id="countries"
                class="dark:text block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option selected>Enter state</option>
                <option value="In">Kerala</option>
                <option value="US">Tamilnadu</option>
                <option value="CA">Karnataka</option>
                <option value="FR">Goa</option>
                <option value="DE">Gujarat</option>
              </select>
            </div>
            <div class="px-5">
              <label for="">City</label>
            </div>
            <div class="w-4/5">
              <select
                id="countries"
                class="dark:text block w-full rounded border-gray-300   border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                <option selected>Enter city/town/village</option>
                <option value="In">India</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div class="flex my-5">
            <div class="">
              <label for="">pincode</label>
            </div>
            <div class="ps-5">
              <input
                type="text"
                placeholder="Enter pincode"
                class="dark:text block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 "
              />
            </div>
          </div>
        </div>
        {/* <!-- right side end --> */}
      </div>
    </div>{/* Address details end */}


    {/* other details section start */}
    <div class="px-5">
    <h3 class="font-bold underline pb-3">Other details</h3>
    <div class="grid-col-2 grid gap-y-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-12 gap-x-5">
      <div>
        <label for="">occupation</label>
      </div>
      <div class="col-span-2">
        <input
          type="text"
          placeholder="Enter occupation"
          class="dark:text block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>
      <div class="mt-3 sm:mt-0">
        <label for="">Religion</label>
      </div>
      <div class="col-span-2">
        <select
          id="countries"
          class="dark:text block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option>Enter Religion</option>
          <option value="hi">Hindu</option>
          <option value="bu">Buddhism</option>
          <option value="ch">Christianity</option>
          <option value="isl">Islam</option>
        </select>
      </div>
      <div class="mt-3 sm:mt-0">
        <label for="">Marital Status</label>
      </div>
      <div class="col-span-2 ">
        <select
          id="countries"
          class="dark:text block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option>Enter Marital Status</option>
          <option value="hi">Single</option>
          <option value="bu">Married</option>
          <option value="ch">Committed</option>
        </select>
      </div>
      <div class="mt-3 sm:mt-0">
        <label for="">Blood Group</label>
      </div>
      <div class="col-span-2">
        <select
          id="countries"
          class="dark:text block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option>Group</option>
          <option value="hi">A+</option>
          <option value="bu">B+</option>
          <option value="ch">O+VE</option>
          <option value="isl">O-VE</option>
        </select>
      </div>
      <div class="mt-3 sm:mt-0">
        <label for="">Nationality</label>
      </div>
      <div class="col-span-2">
        <select
          id="countries"
          class="dark:text block w-full rounded border-gray-300  border-2 bg-gray-50 p-1 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option selected>Choose a country</option>
          <option value="In">India</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>
    <div class="flex items-center justify-end pt-8 pb-5">

      <button class="sm:me-4 py-2 w-full rounded border-red-200  border-2 px-5 sm:py-1 text-[11px] font-medium uppercase text-red-600 sm:w-24">
        cancel <small class="underline">(esc)</small>
      </button>
      <button class="ms-4  py-2 w-full drop-shadow-2xl rounded bg-[#247817] px-5 sm:py-1 text-[11px] font-normal uppercase tracking-widest text-white shadow-lg  sm:w-24">
        submit <small class="tracking-widest underline">(&#8984; S)</small>
      </button>
    </div>
  </div>
    {/* other details section end */}
    </div>
  </div>
  )
}

export default RegistrationForm