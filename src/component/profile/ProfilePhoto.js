import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Mypic from '../../mypic.jpg'
const ImageAvatars =()=> {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={Mypic}
        sx={{ width: 24, height: 24 }}
      />
      <Avatar alt="Remy Sharp" src={Mypic} />
      <Avatar
        alt="Remy Sharp"
        src={Mypic}
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
  );
}
export default ImageAvatars