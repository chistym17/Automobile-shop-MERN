import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { useLoaderData } from 'react-router-dom';

export default function AllProduct () {
const itemData=useLoaderData()
  return (
   <div className='max-w-6xl mx-auto my-10'>
 <ImageList sx={{ }}>
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






</div>
  );
}


