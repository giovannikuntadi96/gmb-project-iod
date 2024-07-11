import React, {  } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SentimentFilter = ({ onChange }) => {
    const [sentiment, setSentiment] = React.useState('');

    const handleChange = (event) => {
      setSentiment(event.target.value);
      onChange(event.target.value);
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Sentiment</InputLabel>
        <Select sx={{ borderRadius: 3,}}
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={sentiment}
          label="Sentiment"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'negative'}>Negative</MenuItem>
          <MenuItem value={'positive'}>Positive</MenuItem>
          <MenuItem value={'neutral'}>Neutral</MenuItem>
        </Select>
      </FormControl>
    );
}

export default SentimentFilter;
