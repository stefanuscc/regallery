import { useCallback } from 'react'
import styles from './Input.module.scss'

export const Input = (props) => {
    const {
        className="",
        value, 
        onChange,
        ...attrs
    } = props

    const classNames = `${styles.field} ${className}`
    const handleChange = useCallback((event) => {
        onChange(event.target.value)
    }, [onChange])

    return (
        <input {...attrs} className={classNames} value={value} onChange={handleChange}/>
    )
}

export default Input