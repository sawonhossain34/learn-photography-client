

const ClassList = ({ cla }) => {
    // console.log(classes);
    const { image, name, price, available_seats, } = cla;


    const handleAddClass = cla => {
        console.log(cla);
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