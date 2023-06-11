import useClass from "../../../Hooks/useClass";


const StudentClass = () => {
    const [selected] = useClass();
    const total = selected.reduce((acc , item) => acc + item.price , 0 )

    return (
        <div>
            <div>
            <h2>student class</h2>
        </div>
        <div>
            <h2 className="text-3xl">Total class : {selected.length}</h2>
            <h2 className="text-3xl">Total price : {total}</h2>
        </div>
        
        </div>

    );
};

export default StudentClass;