import styles from './List.module.scss'

import ListSkel from './Skeleton/ListSkel'
import ListItem from './Item/ListItem'

export const List = (props) => {
    const { images, selected, onClick, isLoading } = props

    return (
        <div className={styles.list}>
            <ul>   
                { isLoading || images == null ? [...Array(10)].map((e, i) => (
                    <ListSkel key={i} idx={i}/>
                )) : ''}
                { isLoading || images == null ? '' : images.map((image, idx) => (
                    <ListItem isSelected={selected === image.id} image={image} idx={idx} key={image.id} onClick={onClick}/>
                ))}
            </ul>
        </div>
    )
}

export default List