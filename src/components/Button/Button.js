import styles from './Button.module.scss';

export const Button = ({ currentPage, onSubmit }) => {
    //console.log(`current page ${currentPage}`);
    const newTop = document.documentElement.scrollHeight;
    if (currentPage > 2) {
        window.setTimeout((top) => {
            //console.log(`this is p ${top}`);
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }, 200, newTop);
    }
    return (
        <div className={styles.buttonContainer}>
            <button type='button' className={styles.Button} onClick={onSubmit}>Load more</button>
        </div>
    );
}