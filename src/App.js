/* Libraries */
import { useState } from 'react'
import Cookies from 'universal-cookie';
import './App.scss'

/* Hooks */
import { useFetch } from './hooks/useFetch'

/* Components */
import Alert from './components/micro/Alert/Alert'
import List from './components/List/List'
import Gallery from './components/Gallery/Gallery'
import ModeControl from './components/Control/ModeControl/ModeControl'
import PageControl from './components/Control/PageControl/PageControl'
import Modal from './components/micro/Modal/Modal'
import Input from './components/micro/Input/Input'
import ModalControl from './components/Control/ModalControl/ModalControl'

function App() {
  const endPoint = "https://picsum.photos/v2/list"
  const limit = 10
  const cookies = new Cookies();
  const [page, setPage] = useState(1)
  const [images, loading, hasError, readData] = useFetch(`${endPoint}?page=${encodeURIComponent(page)}&limit=${encodeURIComponent(limit)}`)
  const [mode, setMode] = useState('gallery')
  const [selected, setSelected] = useState(null)
  const [newName, setNewName] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const handleModeChange = (type) => {
    setMode(type)
  }

  const handleModal = (isOpen) => {
    setModalOpen(isOpen)
  }

  const handleSelectImage = (id) => {
    const image = images.find(image => image.id === id)
    setSelected(image)
    setNewName(image.name)
  }
  
  const handleEdit = (id) => {
    handleSelectImage(id)
    setModalOpen(true)
  }

  const handleChangeName = (value) => {
    setNewName(value)
  }

  const handleSaveName = () => {
    cookies.set('named-' + selected.id, newName, { path: '/' });
    setModalOpen(false)
    readData()
  }

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2 className="gallery-title">Regallery</h2>
        <div className="gallery-control">
          <PageControl page={page} max={3} onChange={setPage} className=""/>
          <ModeControl mode={mode} onChange={handleModeChange} />
        </div>
      </div>

      <div className="gallery-content">
        {hasError ? <Alert message="There was some errors on the endpoint, please be patient." className="mb-4"/> : ''}

        {(mode === 'gallery') ? <Gallery selected={selected} onClick={handleEdit} isLoading={loading} images={images}/> : <List selected={selected} onClick={handleEdit} isLoading={loading} images={images}/>}
      </div>

      <Modal isOpen={modalOpen}>
        <Input type="text" className="" placeholder="Rename Image" value={ newName } onChange={(val) => handleChangeName(val) }/>
        <ModalControl onSave={handleSaveName} onCancel={() => handleModal(false)}/>
      </Modal>
    </div>
  )
}

export default App;
