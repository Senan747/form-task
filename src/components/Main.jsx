import React, { useState } from "react";

function MultipleChoiceForm() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [days, setDays] = useState([]);
  const [favLanguage, setFavLanguage] = useState("");

  const handleFavLanguage = (event) => {
    const optionValue = event.target.value;

    setFavLanguage(optionValue);
  };

  const handleDays = (event) => {
    const optionValue = event.target.value;

    if (days.includes(optionValue)) {
      setDays(days.filter((day) => day !== optionValue));
    } else {
      setDays([...days, optionValue]);
    }
  };

  const handleLanguages = (event) => {
    const optionValue = event.target.value;

    if (languages.includes(optionValue)) {
      setLanguages(languages.filter((language) => language !== optionValue));
    } else {
      setLanguages([...languages, optionValue]);
    }
  };

  const handleSubmit = (event) => {
    selectedOptions.push(languages, days, favLanguage);
    event.preventDefault();
    console.log("Selected Options:", selectedOptions);
    setSelectedOptions([]);
    setDays([]);
    setFavLanguage("");
    setLanguages([]);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Which ones are Programming language?</label>
        <div>
          <label>
            <input
              type="radio"
              value="JS"
              checked={languages.includes("JS")}
              onChange={handleLanguages}
            />
            JS
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Python"
              checked={languages.includes("Python")}
              onChange={handleLanguages}
            />
            Python
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Elephant"
              checked={languages.includes("Elephant")}
              onChange={handleLanguages}
            />
            Elephant
          </label>
        </div>
      </form>
      {/* Second Group */}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Which ones are days of a week?</label>
        <div>
          <label>
            <input
              type="radio"
              value="Monday"
              checked={days.includes("Monday")}
              onChange={handleDays}
            />
            Monday
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Sunday"
              checked={days.includes("Sunday")}
              onChange={handleDays}
            />
            Sunday
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Weekend"
              checked={days.includes("Weekend")}
              onChange={handleDays}
            />
            Weekend
          </label>
        </div>
      </form>

      {/* Last Group */}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">What is your favourite language?</label>
        <div>
          <label>
            <input
              type="radio"
              value="JS"
              checked={favLanguage === "JS"}
              onChange={handleFavLanguage}
            />
            JS
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Java"
              checked={favLanguage === "Java"}
              onChange={handleFavLanguage}
            />
            Java
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="C#"
              checked={favLanguage === "C#"}
              onChange={handleFavLanguage}
            />
            C#
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultipleChoiceForm;
