import React, {  } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const RatingFilter = ({ onChange }) => {
    const [rating, setRating] = React.useState('');

    const handleChange = (event) => {
      setRating(event.target.value);
      onChange(event.target.value);
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Rating</InputLabel>
        <Select sx={{ borderRadius: 3,}}
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={rating}
          label="Rating"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1 Stars</MenuItem>
          <MenuItem value={2}>2 Stars</MenuItem>
          <MenuItem value={3}>3 Stars</MenuItem>
          <MenuItem value={4}>4 Stars</MenuItem>
          <MenuItem value={5}>5 Stars</MenuItem>
        </Select>
      </FormControl>
    );
}

export default RatingFilter;
