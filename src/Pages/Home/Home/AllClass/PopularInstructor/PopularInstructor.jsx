import { Link } from "react-router-dom";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import useClasses from "../../../../../Hooks/useClasses";
import InstructorList from "../../../../../Components/InstructorList/InstructorList";


const PopularInstructor = () => {
    const [classes] = useClasses();
    console.log(classes);
    return (
        <div className="my-10">

        <SectionTitle
            subHeading={"our"}
            heading={"Popular Instructor"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
            {
                classes?.slice(0, 6).map(instructor => <InstructorList
                    instructor={instructor}
                    key={instructor._id}
                ></InstructorList>)
            }
        </div>
        <button className="btn btn-secondary"><Link to='/allinstructor'>All Instructor</Link></button>


    </div>
    );
};

export default PopularInstructor;