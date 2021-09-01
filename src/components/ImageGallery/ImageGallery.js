import styles from './ImageGallery.module.scss';
import { ImageGalleryItem } from '../ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, imageClick }) => {

    return (
        <ul className={styles.ImageGallery}>
            {images.map(image => (
                <ImageGalleryItem key={image.id} id={image.id} imgName={image.previewURL} imgLink={image.previewURL} click={imageClick} />
            ))}
        </ul>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        previewURL: PropTypes.string.isRequired,
        imageClick: PropTypes.func
    }))
}