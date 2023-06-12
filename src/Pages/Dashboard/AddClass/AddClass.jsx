import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const AddClass = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
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
                        <input type="text" placeholder="Class Name"  {...register("class", { required: true, maxLength: 80 })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full my-3 ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text" placeholder="Instructor Name"  {...register("instructor", { required: true, maxLength: 80 })} className="input input-bordered w-full " />
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
                        <input type="number" placeholder="Available Seats"  {...register("seats", { required: true, maxLength: 80 })} className="input input-bordered w-full " />
                    </div>
                </div>

                <input className="btn btn-secondary  my-3" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;