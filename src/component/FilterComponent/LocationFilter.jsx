import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import data from '../../data';

const LocationFilter = ({ onChange }) => {
    const [location, setLocation] = useState('');
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Ekstrak daftar lokasi yang unik dari data
        const uniqueLocations = [...new Set(data.map(item => item.location))];
        setLocations(uniqueLocations);
    }, []);

    const handleChange = (event) => {
      setLocation(event.target.value);
      onChange(event.target.value);
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Location</InputLabel>
        <Select sx={{ borderRadius: 3,}}
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={location}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {locations.map((loc) => (
            <MenuItem key={loc} value={loc}>{loc}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
}

export default LocationFilter;
