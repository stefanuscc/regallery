import styles from './Button.module.scss'

export const Button = (props) => {
    const {type = 'button', isIcon=false, isActive=false, className="", onClick, ...attrs} = props
    const classNames = `${styles.button} ${isIcon ? styles.icon : ''} ${isActive ? styles.active : ''} ${className}`

    return (
        <button {...attrs} type={type} className={classNames} onClick={(event) => { onClick(event) }}></button>
    )
}

export default Button