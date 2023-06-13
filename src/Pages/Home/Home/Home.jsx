import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";
import SummerOut from "../SummerOut/SummerOut";
import PopularInstructor from "./AllClass/PopularInstructor/PopularInstructor";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <SummerOut></SummerOut>
        </div>
    );
};

export default Home;