import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ClassList from "../../Shared/ClassList/ClassList";
import useClasses from "../../../Hooks/useClasses";



const PopularClasses = () => {
    const [classes] = useClasses();
    const seats = classes?.sort((a, b) => b.available_seats - a.available_seats);
    
    return (
        <div className="my-10">

            <SectionTitle
                subHeading={"our"}
                heading={"Popular Classes"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                {
                    seats?.slice(0, 6).map(cla => <ClassList
                        cla={cla}
                        key={cla._id}
                    ></ClassList>)
                }
            </div>
            <button className="btn btn-secondary">All Classes</button>


        </div>
    );
};

export default PopularClasses;