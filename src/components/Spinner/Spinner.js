import styles from './Spinner.module.scss';
import Loader from "react-loader-spinner";

export const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <Loader type="ThreeDots" color="#72757c" height={80} width={80} />
        </div>
    )
}