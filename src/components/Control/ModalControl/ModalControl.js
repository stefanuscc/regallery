import styles from './ModalControl.module.scss'
import Button from '../../micro/Button/Button'

export const ModalControl = (props) => {
    const { className='', onSave, onCancel } = props

    return (
        <span className={`${styles.group} ${className}`}>
            <Button isIcon={false} isActive={true} onClick={onSave}>
                SAVE
            </Button>
            <Button isIcon={false} isActive={false} onClick={onCancel}>
                CANCEL
            </Button>
        </span>
    )
}

export default ModalControl