import styles from './GalleryItem.module.scss'

export const GalleryItem = (props) => {
    const { image, idx } = props

    return (
        <div key={image.id} className={styles.item} data-idx={idx}>
            <a className={ styles.ibox } href={image.url} target="_blank" rel="noreferrer">
                <img
                    src={image.thumbnail}
                    alt={image.author}
                    className={ styles.image }
                />
            </a>
            <h3 className={ styles.title }>{image.author}</h3>
            <p className={ styles.name }>Image #{image.id}</p>
        </div>
    )
}

export default GalleryItem