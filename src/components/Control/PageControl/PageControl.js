import styles from './PageControl.module.scss'

import { useCallback } from 'react'
import Button from '../../micro/Button/Button'

export const PageControl = (props) => {
    const {page, max, className, onChange} = props

    // Handle next page, page over than max will not count
    const handleNext = useCallback(() => {
        let newPage = page + 1 > max ? max : page + 1
        onChange(newPage)
    }, [page, max, onChange])

    // Handle prev page, page bellow than 1 will not count
    const handlePrev = useCallback(() => {
        let newPage = page - 1 < 1 ? 1 : page - 1
        onChange(newPage)
    }, [page, onChange])

    // Handle change page
    const handlePage = useCallback((newPage) => {
        onChange(newPage)
    }, [onChange])

    return (
        <span className={`${styles.group} ${className}`}>
            <Button isIcon={true} onClick={handlePrev} className="">
                <span className="sr-only">Previous</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </Button>
            { [...Array(max)].map((el, idx) => (
                
                <Button 
                    key={idx}
                    isActive={page === idx + 1}
                    className=""
                    disabled={page === idx + 1}
                    onClick={ () => handlePage(idx + 1) }
                >
                    <span className="sr-only">Page {idx + 1}</span>
                    {idx + 1}
                </Button>
            ))}
            <Button isIcon={true} onClick={handleNext} className="">
                <span className="sr-only">Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </Button>
        </span>
    )
}

export default PageControl
