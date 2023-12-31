import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ClassList from "../../../Components/ClassList/ClassList";
import useClasses from "../../../Hooks/useClasses";
import { Link } from "react-router-dom";



const PopularClasses = () => {
    const [classes] = useClasses();

    return (
        <div className="my-10">

            <SectionTitle
                subHeading={"our"}
                heading={"Popular Classes"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                {
                    classes?.slice(0, 6).map(cla => <ClassList
                        cla={cla}
                        key={cla._id}
                    ></ClassList>)
                }
            </div>
            <button className="btn btn-secondary"><Link to='/allclass'>All Classes</Link></button>


        </div>
    );
};

export default PopularClasses;