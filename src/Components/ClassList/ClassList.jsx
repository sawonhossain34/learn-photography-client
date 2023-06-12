import Swal from "sweetalert2";
import useAuthProvider from "../../Hooks/useAuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useClass from "../../Hooks/useClass";


const ClassList = ({ cla }) => {
    const {_id, image, name, price, available_seats,instructor_name } = cla;
    const { user } = useAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useClass();


    const handleAddClass = (cla) => {
        console.log(cla);
        if (user && user.email) {
            const classList = {classId: _id,name,image,available_seats,price,email:user.email,instructor_name}
            fetch('http://localhost:5000/selected',{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(classList)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'selected on the list',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else{
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{ from: location }})
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>price :${price}</p>
                <p>Avaulable seats :{available_seats}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddClass(cla)} className="btn btn-secondary">select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassList;