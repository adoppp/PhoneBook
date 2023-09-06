import css from './Total.module.css';

export const Total = ({ contacts }) => {
    return (
        <span className={css.span}>Total contacts: <span className={css.number}>{contacts.length}</span></span>
    )
}