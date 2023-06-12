import { useQuery } from "@tanstack/react-query";
import { FaCheck } from 'react-icons/fa';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const respopns = await axiosSecure.get('/users')
        return respopns.data;
    })

    const handleMakeAdmin = (user) => {
        fetch (`http://localhost:5000/users/admin/${user._id}`,{
            method:"PATCH"
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: ' admin now!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = (user) => {
        console.log(user)
        fetch (`http://localhost:5000/users/instructor/${user._id}`,{
            method:"PATCH"
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: ' instructor now!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDelete = (user) => {
        console.log(user)
    }
    return (
        <div>
            {users.length}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-2xl font-bold">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => <tr
                            key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === "admin" ? <>
                                <FaCheck></FaCheck><button>admin</button>
                                </> : <button onClick={() => handleMakeAdmin(user)} className="btn btn-secondary">Make Admin</button>}
                                {user.role === "instructor" ? <>
                                <FaCheck></FaCheck><button>instructor</button>
                                </> : <button onClick={() => handleMakeInstructor(user)} className="btn btn-secondary ml-4">Make Instructor</button>}
                                </td>
                                <td><button onClick={() => handleDelete()} className="btn btn-secondary">Delete</button></td>
                            </tr> )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;