import styles from './Gallery.module.scss'

import GalleryItem from './Item/GalleryItem'
import GallerySkel from './Skeleton/GallerySkel'

export const Gallery = (props) => {
    const { images, isLoading, ...restProps } = props

    return (
        <div {...restProps} className={styles.grid}>
            { isLoading || images == null ? '' : images.map((image, idx) => (
                <GalleryItem image={image} idx={idx} key={image.id}></GalleryItem>
            ))}
            { isLoading || images == null ? [...Array(10)].map((e, i) => (
                <GallerySkel key={i} idx={i}></GallerySkel>
            )) : ''}
        </div>
    )
}

export default Gallery