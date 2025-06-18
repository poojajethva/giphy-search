import { useState } from "react";
import Header from "./components/Header";
import ImageList from "./components/ImageList";
import useFetchGiphy from "./hooks/useFetchGiphy";
import constants from "./utilities/constants";

function App() {
  const [pagination, setPagination] = useState(0);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(constants.TRENDING);

  const { data, loading, error } = useFetchGiphy({
    category,
    pagination,
    query,
  });

  const handleButtonClick = () => {
    setPagination(pagination + 1);
  };

  const handleSearchClick = (searchTerm) => {
    if (!searchTerm || query === searchTerm) return;
    setPagination(0);
    setCategory(constants.SEARCH);
    setQuery(searchTerm);
  };

  const showImages = data?.data?.length > 0;
  const isInitial = pagination === 0;

  return (
    <>
      <Header handleSearchClick={handleSearchClick} />

      {error && isInitial && <p className="container info-text">{error}</p>}

      {!loading && isInitial && !error && !showImages && (
        <p className="container info-text">No giphy found.</p>
      )}

      {showImages && (
        <>
          <ImageList
            data={data.data}
            pagination={pagination}
            loading={loading}
            totalCount={data?.pagination?.total_count}
            handleButtonClick={handleButtonClick}
          />
        </>
      )}
    </>
  );
}

export default App;
