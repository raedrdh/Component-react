import React from "react";
import './style.css'
import ImageAvatars from './component/profile/ProfilePhoto';
import CustomizedDialogs from './component/profile/FullName';
import LabelBottomNavigation from './component/profile/Address';

const App = () => (
 <div className = 'box'>
<div><ImageAvatars/></div>
 <div><CustomizedDialogs/></div>
 <div><LabelBottomNavigation/></div>
 
</div>
);
export default App;