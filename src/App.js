/* Libraries */
import { useState } from 'react'
import './App.scss'

/* Hooks */
import { useFetch } from './hooks/useFetch'

/* Components */
import Alert from './components/micro/Alert/Alert'
import List from './components/List/List'
import Gallery from './components/Gallery/Gallery'
import ModeControl from './components/Control/ModeControl/ModeControl'
import PageControl from './components/Control/PageControl/PageControl'

function App() {
  const endPoint = "https://picsum.photos/v2/list"
  const limit = 10
  const [page, setPage] = useState(1)
  const [images, loading, hasError] = useFetch(`${endPoint}?page=${encodeURIComponent(page)}&limit=${encodeURIComponent(limit)}`)
  const [mode, setMode] = useState('gallery')

  const handleModeChange = (type) => {
    setMode(type)
  }

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2 className="gallery-title">Regallery</h2>
        <div className="gallery-control">
          <PageControl page={page} max={3} onChange={setPage} className="mr-3"/>
          <ModeControl mode={mode} onChange={handleModeChange} />
        </div>
      </div>

      <div className="gallery-content">
        {hasError ? <Alert message="There was some errors on the endpoint, please be patient." className="mb-4"/> : ''}

        {(mode === 'gallery') ? <Gallery isLoading={loading} images={images}/> : <List isLoading={loading} images={images}/>}
      </div>
    </div>
  )
}

export default App;
