import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 170,
    border: "2px solid black",
    borderRadius: 25,
    backgroundColor: "rgba(233, 233, 233, 0.8)"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    fontSize: "25px"
  },
  selectInfo: {
    margin: theme.spacing(1),
    fontSize: "16px"
  },
  filterStats: {
    textAlign: "right"
  }
}));
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
function FilterStats({ filterMonth, setFilterMonth }) {
  const classes = useStyles();

  const handleChange = event => {
    const monthIndex = event.target.value;
    setFilterMonth([monthIndex, months[monthIndex]]);
  };

  return (
    <div className={classes.filterStats}>
      <FormControl className={classes.formControl}>
        <Select
          value={filterMonth[0]}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="" disabled>
            Months
          </MenuItem>
          {months.map((month, i) => (
            <MenuItem value={i}>{month}</MenuItem>
          ))}
        </Select>
        <FormHelperText className={classes.selectInfo}>
          Choose a Month
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default FilterStats;
