import React from "react";

const Empdata = ({ employee }) => {
  let currDate = new Date();
  let newDate = currDate.getDate();
  let newDate1 = newDate < 10 ? `0${newDate}` : `${newDate}`; //if newDate < 10 ให้ใส่0 else newDate
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "10",
    "October",
    "November",
    "December",
  ];

  let currentMonth = month[currDate.getMonth()];
  let currentYear = currDate.getFullYear();

  // console.log("YEAR : ", currentYear);
  // console.log(currentMonth);

  let actualDate = `${currentYear}-${currentMonth}-${newDate1}`;
  console.log(actualDate)


  return employee.map(({ id, name, dob, age, gender, image }) => {
    let empDOB = dob;
    if (empDOB === actualDate) {
      return (
        <div key={id} className="person">
          <img src={image} alt={name} />
          <div className="emp_details">
            <h4>{name}</h4>
            <p>Gender: {gender}</p>
            <p>{dob}</p>
            <h4>Age: {age}</h4>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });
};

export default Empdata;
