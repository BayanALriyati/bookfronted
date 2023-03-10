import React from 'react'
import LeftSide from '../../components/LeftSide/LeftSide'
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails'
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture'
import './MyProfile.css'

export default function MyProfile() {
  return (
    <>
        
<div className="bookshelves-container">
  <ProfilePicture/>
  <ProfileDetails/>
</div>


    </>
  )
}
