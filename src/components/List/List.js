import styles from './List.module.scss'

import ListSkel from './Skeleton/ListSkel'
import ListItem from './Item/ListItem'

export const List = (props) => {
    const { images, isLoading } = props

    return (
        <div className={styles.list}>
            <ul>   
                { isLoading || images == null ? [...Array(10)].map((e, i) => (
                    <ListSkel key={i} idx={i}/>
                )) : ''}
                { isLoading || images == null ? '' : images.map((image, idx) => (
                    <ListItem key={image.id} image={image} idx={idx}/>
                ))}
            </ul>
        </div>
    )
}

export default List