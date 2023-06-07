

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center mx-auto  w-3/12  my-6 ">
            <p className="text-pink-500 text-2xl font-bold my-2">{subHeading}</p>
            <h2 className="text-4xl font-extrabold py-3 border-dashed border-pink-500 border-y-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;