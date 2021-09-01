import PropTypes from 'prop-types';
import styles from './Searchbar.module.scss';
import { Component } from 'react';


export class Searchbar extends Component {
    state = {
        search: ''
    }

    changeFilter = (evt) => {
        this.setState({ search: evt.currentTarget.value });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state.search);
    }

    render() {
        return (
        <header className="Searchbar">
            <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={ styles['SearchForm-button'] }>
                    <span className={styles['SearchForm-button-label'] }>Search</span>
                </button>

                <input
                    className={ styles['SearchForm-input'] }
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.search}
                    onChange={this.changeFilter}
                />
            </form>
        </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
