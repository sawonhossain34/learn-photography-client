import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit,reset } = useForm();
    const image_hosting_url =`https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image',data.image[0])

        fetch(image_hosting_url,{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imgRespons => {
            if(imgRespons.success){
                const image = imgRespons.data.display_url;
                const{name,instructor_name,available_seats,email,price} = data;
                const newClass = {name,instructor_name,available_seats,email,price:parseFloat(price),image:image};
                console.log(newClass);
                axiosSecure.post('/class',newClass)
                .then(data => {
                    console.log('after add new class',data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })

            }
        })
      };
    return (
        <div className="w-full mx-8">
            <SectionTitle subHeading='New' heading='Add Class'></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-4 ">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file"  {...register("image", { required: true, maxLength: 80 })} className="file-input file-input-bordered w-full " />
                </div>
                <div className="flex gap-3 ">
                    <div className="form-control w-full my-3 ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input type="text" placeholder="Class Name"  {...register("name", { required: true, maxLength: 80 })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full my-3 ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text" placeholder="Instructor Name"  {...register("instructor_name", { required: true, maxLength: 80 })} className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full my-3 ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email*</span>
                        </label>
                        <input type="text" placeholder="Instructor Email"  {...register("email", { required: true, maxLength: 80 })} className="input input-bordered w-full " />
                    </div>
                <div className="flex  gap-4">
                <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="$Price"  {...register("price", { required: true, maxLength: 80 })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats*</span>
                        </label>
                        <input type="number" placeholder="Available Seats"  {...register("available_seats", { required: true, maxLength: 80 })} className="input input-bordered w-full " />
                    </div>
                </div>

                <input className="btn btn-secondary  my-3" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;