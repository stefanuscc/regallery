import styles from './ListItem.module.scss'

export const ListItem = (props) => {
    const { image, idx, isSelected = false, onClick } = props

    return (
        <li key={image.id} data-idx={idx} data-selected={isSelected}>
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
                            {image.name}
                        </p>
                    </div>
                </div>
                <svg className={styles.button} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" onClick={() => onClick(image.id)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            </div>
        </li>
    )
}

export default ListItem