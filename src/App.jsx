import { useState } from 'react'
import Header from './components/Header'
import ImageList from './components/ImageList'
import useFetchGiphy from './utilities/useFetchGiphy'
import constants from './utilities/constants'

function App() {
  const [pagination, setPagination] = useState(0)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(constants.TRENDING)
  const {data, loading, error} = useFetchGiphy({category, pagination, query})

  const handleButtonClick = () => {
    setPagination(pagination+1)
  }

  const handleSearchClick = (searchTerm) => {
    searchTerm = searchTerm.trim()
    if(!searchTerm) return
    setPagination(0)
    setCategory(constants.SEARCH)
    setQuery(searchTerm)
  }
  return (
    <div className='container'>
      <Header handleSearchClick={handleSearchClick} />
      <ImageList data={data?.data} pagination={pagination} loading={loading} />
      {error && <p>Something went wrong, please try again later.</p>}
      {data?.data && <button className="load-more" onClick={handleButtonClick}>Load More</button>}
    </div>
  )
}

export default App
