import styles from './GalleryItem.module.scss'

export const GalleryItem = (props) => {
    const { image, idx, isSelected = false, onClick } = props

    return (
        <div key={image.id} className={styles.item} data-idx={idx} data-selected={isSelected}>
            <a className={ styles.ibox } href={image.url} target="_blank" rel="noreferrer">
                <img
                    src={image.thumbnail}
                    alt={image.author}
                    className={ styles.image }
                />
            </a>
            <h3 className={ styles.title }>{image.author}</h3>
            <p className={ styles.name }>
                {image.name}
                <svg className={`icon ${styles.button}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" onClick={() => onClick(image.id)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            </p>
        </div>
    )
}

export default GalleryItem