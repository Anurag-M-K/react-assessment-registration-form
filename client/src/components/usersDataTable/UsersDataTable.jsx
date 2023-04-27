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
  let bgChanger = 0;
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
        <thead className='bg-[#9be09f]'>
          <tr>
            <th className='border-b text-center '>Name</th>
            <th v>Age/Sex</th>
            <th className=' text-center'>Mobile</th>
            <th className=' text-center '>Address</th>
            <th className=' text-center'>Govt ID</th>
            <th className=' text-center'>Guardian Details</th>
            <th className=' text-center'>Nationality</th>
          </tr>
        </thead>
        <tbody className='border'>
          {users?.map((user, id) => (
          
            <tr key={id} className={id%2 === 0 ? "white" : "gray"}>
              <td className='border-b'>{user.name}</td>
              <td className='border-b'>{user.dob}/{user.sex}</td>
              <td className='border-b'>{user.mobile}</td>
              <td className='border-b'>{user.address}</td>
              <td className='border-b'>{user.pincode}</td>
              <td className='border-b'>{user.guardianName}</td>
              <td className='border-b'>{user.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
