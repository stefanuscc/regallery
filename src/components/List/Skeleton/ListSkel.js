import styles from './ListSkel.module.scss'

export const ListSkel = (props) => {
    const { idx } = props

    return (
        <li className={styles.skelleton} key={idx}>
            <div className={styles.image}></div>
            <div className={styles.attributes}>
                <div>
                    <p className={styles.title}></p>
                    <p className={styles.name}></p>
                </div>
                <div>
                    <p className={styles.title}></p>
                    <p className={styles.name}></p>
                </div>
                <div>
                    <p className={styles.title}></p>
                    <p className={styles.name}></p>
                </div>
            </div>
        </li>
    )
}

export default ListSkel