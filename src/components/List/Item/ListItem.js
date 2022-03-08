import styles from './ListItem.module.scss'

export const ListItem = (props) => {
    const { image, idx } = props

    return (
        <li key={image.id} data-idx={idx}>
            <div className={styles.item}>
                <div className={styles.container}>
                    <div className={styles.ibox}>
                        <img className={styles.image} src={image.thumbnail} alt="" />
                    </div>
                </div>
                <div className={styles.attributes}>
                    <div>
                        <p className={styles.title}>Author</p>
                        <p className={styles.name}>
                            <span className="truncate">{image.author}</span>
                        </p>
                    </div>
                    <div>
                        <p className={styles.title}>Resolutions</p>
                        <p className={styles.name}>
                            <span className="truncate">{image.width} x {image.height}</span>
                        </p>
                    </div>
                    <div>
                        <p className={styles.title}>Image Name</p>
                        <p className={styles.name}>
                            Image #{image.id}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ListItem