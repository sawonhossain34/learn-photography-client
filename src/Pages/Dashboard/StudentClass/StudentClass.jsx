import { Link } from "react-router-dom";
import useClass from "../../../Hooks/useClass";
import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";

// import useClass from "../../../Hooks/useClass";


 const StudentClass = () => {
     const [selected,refetch] = useClass();
     console.log(selected);
     const total = selected?.reduce((acc, item) => acc + item.price, 0);

     const handleDelete = (id) => {
         Swal.fire({
             title: 'Are you sure?',
             text: "You won't be able to revert this!",
             icon: 'warning',
            showCancelButton: true,
             confirmButtonColor: '#3085d6',
             cancelButtonColor: '#d33',
             confirmButtonText: 'Yes, delete it!'
         })
            .then((result) => {
                 if (result.isConfirmed) {
                     fetch(`http://localhost:5000/selected/${id}`, {
                         method: 'DELETE'
                    })
                        .then(res => res.json())
                         .then(data => {
                             console.log(data);
                             if (data.deletedCount > 0) {
                                 refetch();
                                 Swal.fire(
                                     'Deleted!',
                                     'Your file has been deleted.',
                                     'success'
                                 )
                             }
                         })
                 }
             })
     }
     return (
         <div>
             <h2 className="text-4xl text-center py-10 text-pink-500 font-bold">Selected Page</h2>

            <div className="flex justify-between">
                <h2 className="text-3xl">Total class : {selected.length}</h2>
                 <h2 className="text-3xl">Total price : ${total}</h2> 

                 {/* <Link to='/dashboard/payment'><button className="btn btn-secondary">PAY</button></Link>  */}
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                     <thead>
                        <tr className="font-extrabold text-2xl">
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price </th>
                            <th>Options</th>
                            <th>Payment</th>
                        </tr>
                    </thead> 
                    <tbody>
                        
                         {
                            selected.map((tRow, i) => <tr
                                key={tRow._id}

                            >
                                <td>
                                    {i + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={tRow.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {tRow.name}
                                </td>
                                <td>${tRow.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(tRow._id)} className="btn btn-outline btn-error">
                                        <FaTrash />
                                    </button>

                                    <button className="btn btn-outline btn-success  ml-5">Enroll</button>

                                </td>
                                <td>
                                <Link to='/dashboard/payment'><button className="btn btn-secondary">PAY</button></Link> 
                                </td>
                            </tr>)
                        } 


                    </tbody>

                </table>
            </div>

        </div>

    );
};

export default StudentClass;



// const StudentClass = () => {
//     const [selected] = useClass();
//     console.log(selected);
//     return (
//         <div>
//             length :{selected.length}
//         </div>
//     );
// };

// export default StudentClass;