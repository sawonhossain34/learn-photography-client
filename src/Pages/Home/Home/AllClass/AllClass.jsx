import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useClasses from "../../../../Hooks/useClasses";
import ClassList from "../../../../Components/ClassList/ClassList";


const AllClass = () => {
    const [classes] = useClasses();
    console.log(classes);
    return (
        <div className="my-10">

            <SectionTitle
                subHeading={"our"}
                heading={"Popular Classes"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
                {
                    classes?.map(cla => <ClassList
                        cla={cla}
                        key={cla._id}
                    ></ClassList>)
                }
            </div>
        </div>
    );
};

export default AllClass;