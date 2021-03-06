import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileButton() {
  return (
    <Link to="/profile">
      <IconButton aria-label="profile">
        <AccountCircle fontSize="large" />
      </IconButton>
    </Link>
  )
}
