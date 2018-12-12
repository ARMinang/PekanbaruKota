import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const SimpleAppBar = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Perhitungan Jasa Konstruksi
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default SimpleAppBar
