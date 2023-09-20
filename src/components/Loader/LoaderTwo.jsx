import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css';

export const LoaderTwo = () => {
    return (
        <div className={css.LOADER}>
        <ThreeCircles
        height="100"
        width="100"
        color="#79AC78"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#618264"
        innerCircleColor="#D0E7D2"
        middleCircleColor="#79AC78"
        />
        </div>
    )
}