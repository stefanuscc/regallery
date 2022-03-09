import styles from './Modal.module.scss'

export const Modal = (props) => {
    const {
        className="", 
        title = "", 
        content,
        isOpen = false, 
        onClose, 
        ...attrs
    } = props

    const classNames = `${styles.modal} ${!isOpen ? styles.hidden : ''} ${className}`

    return (
        <div className={classNames} {...attrs}>
            <div className={styles.dialog}>
                { title ? 
                    (<div className="header">{ title ?? "Rename Image"}</div>) 
                : ''}
                <div className="header">{ title ?? "Rename Image"}</div>
                <div className="content">{ props.children }</div>
            </div>
        </div>
    )
}

export default Modal