import React, { useEffect, useState } from "react";

function Automation() {
  // create constant time and set initial value to user's local time
  const [time, setTime] = useState(new Date());
  
  // create an interval to refresh and reset time
  // every 3 seconds, the user's local time is refreshed and time is updated and saved
  useEffect(() => {
    setInterval(() => setTime(new Date()), 3000);
  }, []);

  // create a constant to get only the hour from user's local datetime
  const hour = time.getHours();

  // create message that is shown to user
  // useState not used for message because if statements would cause an infinite loop for setMessage
  const message = "";

  // if before noon, tell user good morning
  if (hour < 12) {
    const message = "Good Morning!";
    return message;

    // if after noon
  } else if (hour >= 12) {
    //if between noon and 5pm local time, tell user good afternoon
    if (hour < 17) {
      const message = "Good Afternoon!";
      return message;

      // if after noon but before midnight local time, tell user good evening
    } else if (hour >= 17) {
      const message = "Good Evening!";
      return message;
    }
  }
  // log message shown to user
  //console.log(message);

  // return message for rendering in app
  return <div id="automation">{message}</div>;
}
export default Automation;
