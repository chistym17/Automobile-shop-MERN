import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import productPage from './productPage';
import { useState } from 'react';
import axios from 'axios';
export default function AllProduct() {
  const [itemData, setitemData] = useState([])
  const [currentpage, setcurrentpage] = React.useState(0)

  React.useEffect(() => {
    axios.get(`http://localhost:5000/allproducts?page=${currentpage}`)
      .then(res => setitemData(res.data))
  }, [currentpage])

  const pageNumber = productPage(30)
  const pages = [...Array(pageNumber).keys()]
  const handlePrevious = () => {
    if (currentpage > 0) setcurrentpage(currentpage - 1)

  }

  const handleNext = () => {
    if (currentpage < pageNumber) setcurrentpage(currentpage + 1)

  }


  return (
    <div className='max-w-6xl mx-auto my-10'>
      <ImageList sx={{}}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div"></ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item._id}>
            <img
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.image}?w=248&fit=crop&auto=format`}
              alt={item.brandName}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.brandName}
            // subtitle={item.author}

            />
          </ImageListItem>
        ))}
      </ImageList>

      <div className='mt-10 text-center mb-5'>
        <button className='px-4 py-2 mr-2 bg-gray-400' onClick={handlePrevious}>Previous</button>

        {pages.map(page =>

          <button className={`px-3 py-1 ${page === currentpage ? 'bg-blue-500' : 'bg-gray-300'} ml-2`}
            key={page}
            onClick={() => setcurrentpage(page)}>{page}
          </button>

        )}
        <button className='px-4 py-2 ml-2 bg-gray-400' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

