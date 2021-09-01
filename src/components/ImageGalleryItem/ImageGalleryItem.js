import styles from './ImageGalleryItem.module.scss';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, imgName, imgLink, click }) => {
    return (
        <li className={styles.ImageGalleryItem}>
            <img id={id} src={imgLink} alt={imgName} className={styles['ImageGalleryItem-image']} onClick={click} />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    imgName: PropTypes.string.isRequired,
    imgLink: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    click: PropTypes.func.isRequired
}