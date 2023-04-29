import React, { useEffect, useState } from 'react';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { getUsersDetails } from '../../api/api';
import { toast } from 'react-toastify';

const UsersDataTable = () => {
  const [dataTable, setDataTable] = useState(null);
  const [users, setUsers] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  useEffect(() => {
    if (dataLoaded && dataTable === null) {
      setDataTable($('#example').DataTable());
    }
  }, [dataLoaded, dataTable]);



  useEffect(() => {
    try {
      async function fetchData() {
        const res = await getUsersDetails();
        setUsers(res);
        setDataLoaded(true);
      }
      fetchData();
    } catch (error) {
      toast.error("Something went wrong , Please try again later!!!")
    }
  }, []);

  return (
    <div className='p-28'>
      <table id="example" className="table hover display   order-column  bg-gray-100 row-border stripe">
        <thead className='bg-[#cdf2c2]'>
          <tr className=''>
            <th className='border-b hidden text-center '>SNO</th>
            <th className='border-b text-center '>Name</th>
            <th >Age/Sex</th>
            <th className=' text-center'>Mobile</th>
            <th className=' text-center '>Address</th>
            <th className=' text-center'>Govt ID</th>
            <th className=' text-center'>Guardian Details</th>
            <th className=' text-center'>Nationality</th>
          </tr>
        </thead>
        <tbody className='border'>
  {users?.map((user, index=0) => (
  
    <tr key={index} className='stripe'>
      <td className='border-b hidden display '>{index +1}</td>
      <td >{user.name}</td>
      <td>{user.dob}/{user.sex}</td>
      <td>{user.mobile}</td>
      <td>{user.address}</td>
      <td>{user.pincode}</td>
      <td>{user.guardianName}</td>
      <td>{user.nationality}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default UsersDataTable;
