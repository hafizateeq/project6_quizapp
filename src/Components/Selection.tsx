import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

type SelectionEvents = {
  Total_questions: number,
  Difficulty: string,
  Category: number,
  callback: (e: React.FormEvent<EventTarget>) => void,
  callbackDifficulty: (e: React.FormEvent<EventTarget>) => void,
  callbackNo: (e: React.FormEvent<EventTarget>) => void,
}

export const Selection: React.FC<SelectionEvents> = ({ Category, Difficulty, Total_questions, callback, callbackDifficulty, callbackNo }) => {

  return (
    <div className="form">
      <FormControl variant="outlined" className="formControl">
        <InputLabel id="demo-simple-select-outlined-label">Select Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={Category}
          onChange={callback}
          label="Select Category"
        >
          <MenuItem value={9}>GENERAL KNOWLEDGE</MenuItem>
          <MenuItem value={10}>BOOKS</MenuItem>
          <MenuItem value={11}>FILMS</MenuItem>
          <MenuItem value={12}>MUSIC</MenuItem>
          <MenuItem value={13}>THEATRES</MenuItem>
          <MenuItem value={14}>TELEVISION</MenuItem>
          <MenuItem value={15}>VIDEO GAMES</MenuItem>
          <MenuItem value={16}>BOARD GAMES</MenuItem>
          <MenuItem value={17}>SCIENCE AND NATURE</MenuItem>
          <MenuItem value={18}>COMPUTER SCIENCE</MenuItem>
          <MenuItem value={19}>MATHEMATICS</MenuItem>
          <MenuItem value={20}>MYTHOLOGY</MenuItem>
          <MenuItem value={21}>SPORTS</MenuItem>
          <MenuItem value={22}>GEOGRAPHY</MenuItem>
          <MenuItem value={23}>HISTORY</MenuItem>
          <MenuItem value={24}>POLITICS</MenuItem>
          <MenuItem value={25}>ART</MenuItem>
          <MenuItem value={26}>CELEBRITIES</MenuItem>
          <MenuItem value={27}>ANIMALS</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl variant="outlined" className="formControl">
        <InputLabel id="demo-simple-select-outlined-label">Select Difficulty</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={Difficulty}
          onChange={callbackDifficulty}
          label="Select Difficulty"
        >
          <MenuItem value={"easy"}>EASY</MenuItem>
          <MenuItem value={"medium"}>MEDIUM</MenuItem>
          <MenuItem value={"hard"}>HARD</MenuItem>

        </Select>
      </FormControl>
      <br />
      <FormControl variant="outlined" className="formControl">
        <InputLabel id="demo-simple-select-outlined-label">Number of Questions</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={Total_questions}
          onChange={callbackNo}
          label="Number of Questions"
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={35}>35</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={45}>45</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}
