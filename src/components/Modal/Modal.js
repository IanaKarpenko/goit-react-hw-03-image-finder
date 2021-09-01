import styles from './Modal.module.scss';
import { Component } from 'react';
import PropTypes from 'prop-types';


export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        return '';
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        return '';
    }

    handleKeyDown = (evt) => {
    if (evt.code === 'Escape') {
      this.props.click();
    }
  };

    render() {
        const { image, click } = this.props;
        return (
            <div className={styles.Overlay} onClick={click}>
                <div className={styles.Modal}>
                    <img src={image} alt="" className={styles.image} />
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
}


