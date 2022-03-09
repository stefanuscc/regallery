import styles from './ModeControl.module.scss'

import { useCallback } from 'react'
import Button from '../../micro/Button/Button'

export const ModeControl = (props) => {
    const { mode = 'gallery', className='', onChange } = props

    // Handle change display mode (grid or list)
    const handleChange = useCallback((type) => {
        onChange(type)
    }, [onChange])

    return (
        <span className={`${styles.group} ${className}`}>
            <Button isIcon={true} isActive={mode === 'gallery'} onClick={() => { handleChange('gallery') }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="icon">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            </Button>
            <Button isIcon={true} isActive={mode === 'list'} onClick={() => { handleChange('list') }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="icon">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </Button>
        </span>
    )
}

export default ModeControl