import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      
      <BottomNavigationAction
        label="44670586"
        value="44670586"
        icon={<ContactPhoneIcon/>}
      />
      <BottomNavigationAction
        label="Street Hached Lala KSAR 2121"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="raed.rdh1994@gmail.com" value="raed.rdh1994@gmail.com" icon={<AlternateEmailIcon/>} />
    </BottomNavigation>
  );
}