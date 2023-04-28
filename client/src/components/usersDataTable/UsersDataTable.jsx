import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { getUsersDetails } from '../../api/api';

const UserList = () => {
  const [dataTable, setDataTable] = useState(null);
  const [users, setUsers] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  useEffect(() => {
    if (dataLoaded && dataTable === null) {
      setDataTable($('#example').DataTable());
    }
  }, [dataLoaded, dataTable]);



  useEffect(() => {
    async function fetchData() {
      const res = await getUsersDetails();
      setUsers(res);
      setDataLoaded(true);
    }
    fetchData();
  }, []);

  return (
    <div className='p-28'>
      <table id="example" className="table table-striped">
        <thead className='bg-[#cdf2c2]'>
          <tr>
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
  
    <tr key={index} className={index % 2 === 0 ? "gray" : "whites" }>
      <td className='border-b hidden '>{index +1}</td>
      <td className={ index % 2 === 0 ? ' border border-y-gray-400' : ' border border-white '}>{user.name}</td>
      <td className={ index % 2 === 0 ? ' border border-y-gray-400' : ' border border-white '}>{user.dob}/{user.sex}</td>
      <td className={ index % 2 === 0 ? ' border border-y-gray-400' : ' border border-white '}>{user.mobile}</td>
      <td className={ index % 2 === 0 ? ' border border-y-gray-400' : ' border border-white '}>{user.address}</td>
      <td className={ index % 2 === 0 ? ' border border-y-gray-400' : ' border border-white '}>{user.pincode}</td>
      <td className={ index % 2 === 0 ? ' border border-y-gray-400' : ' border border-white '}>{user.guardianName}</td>
      <td className={ index % 2 === 0 ? ' border border-y-gray-400' : ' border border-white '}>{user.nationality}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default UserList;
