import React, { useState } from "react";
import { AppBar, Toolbar, Typography, InputBase, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import { Link, useNavigate } from 'react-router-dom'
import '../Search.css'

function NavBar(){

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        if (search.trim()){
            navigate(`/results?search=${encodeURIComponent(search)}`)
            setSearch('')
        }
    }

    return(
        <AppBar  sx={{
            background: 'linear-gradient(90deg, #646cff 0%, #81D8D0 100%)', opacity: 0.8, borderRadius: '40px'}} position="sticky">
            <Toolbar>
                <Typography className='home' variant ="h5" component="div">
                    <Link to="/" style={{ color: 'white'}}>Home</Link>
                </Typography>

                <Typography className='nowPlaying' variant ="h5" component="div">
                    <Link to="/results" style={{ color: 'floralwhite'}}>Now Playing</Link>
                </Typography>

                <form className='search-form' onSubmit={handleSearch}>
                <InputBase
                    className='search-input'
                    placeholder="Lookup Movie"
                    inputProps={{ 'aria-lable': 'search' }}
                    style={{ color: 'white' }}
                    value={search}
                    onChange={(e)=>setSearch((e.target.value))}
                    />
                <IconButton className="search" type="submit">
                    <SearchIcon />
                </IconButton>
                </form>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar