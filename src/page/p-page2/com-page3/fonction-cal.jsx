const handlePrevMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };
  function generateCalendar(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    let calendar = [];
    let index = 0;

    // Create empty boxes for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendar.push(<div key={index}></div>);
      index++;
    }

    // Create boxes for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      // Determine if the day button should be disabled
      const isDisabled = isDateDisabled(year, month, day);
      // Determine if the day is today
      const isToday = isDayToday(year, month, day);

      calendar.push(
        <div
          key={index}
          className={`text-center py-2 border cursor-pointer ${
            isDisabled ? "opacity-50 " : "hover:bg-gray-200"
          } ${isToday ? "border-blue-800 border-[2px]" : ""}`}
          onClick={() => {
            showModal(day);
          }}
        >
          {day}
        </div>
      );
      index++;
    }

    return calendar;
  }
  function isDayToday(year, month, day) {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  }
  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (!value) {
      setTypeRdvError(true);
    } else {
      setTypeRdvError(false);
      let data = { ...rdv };
      data.TypeRdv = value;
      setRdv(data);
    }
  };
  const handleChangeMinute = (e) => {
    const value = e.target.value;
    if (value < 0 || value > 60) {
      setMinuteError(true);
    } else {
      setMinuteError(false);
      setMinute(value);
    }
  };
  const handleChangeHeure = (e) => {
    const value = e.target.value;
    let data = { ...rdv };
    data.TypeRdv = value;
    setRdv(data);
    if (value < 0 || value > 23) {
      setHeureError(true);
    } else {
      setHeureError(false);
      setHeure(value);
    }
  };
  const showModal = (day) => {
    setCurrentDay(day);
    console.log(day);
    const selectedDate = new Date(currentYear, currentMonth, day);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let formattedDate = selectedDate.toLocaleDateString(undefined, options);
    // Capitalize the first letter of the day
    formattedDate = capitalizeFirstLetter(formattedDate);
    setDateString(formattedDate);
  };
  function isDateDisabled(year, month, day) {
    const currentDate = new Date();
    const selectedDate = new Date(year, month, day);
    return selectedDate < currentDate;
  }
  function getHourOrMinute(timeString, type) {
    // Si timeString n'est pas vide, procédez au split
    const [hour, minute] = timeString.split("h")[1].split("min");

    if (type === 1) {
      return hour; // Retourner l'heure sans modifier l'état
    } else if (type === 2) {
      return minute; // Retourner les minutes sans modifier l'état
    } else {
      return "";
    }
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const handleDelete = (id) => {
    const filteredRdvs = rdvs.filter((element) => {
      return element.IdA !== id;
    });
    setRdvs(filteredRdvs);
  };


  export { 
    handlePrevMonth, 
    handleNextMonth, 
    generateCalendar, 
    isDayToday, 
    isDateDisabled, 
    getHourOrMinute, 
    capitalizeFirstLetter, 
    handleDelete 
  };