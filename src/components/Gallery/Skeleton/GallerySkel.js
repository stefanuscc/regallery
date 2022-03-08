import styles from './GallerySkel.module.scss'

export const GallerySkel = (props) => {
    const { idx } = props

    return (
        <div className={ styles.skeleton } key={idx}>
            <div className={ styles.image }></div>
            <div className={ styles.title }></div>
            <div className={ styles.name }></div>
        </div>
    )
}

export default GallerySkel