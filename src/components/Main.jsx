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

  const handleDrawLangueages = (e) => {
    const optionValue = e.target.value;

    if (languages.includes(optionValue)) {
      setLanguages(languages.filter((lang) => lang !== optionValue));
    }
  };

  const handleDrawDays = (e) => {
    const optionValue = e.target.value;
    if (days.includes(optionValue)) {
      setDays(days.filter((day) => day !== optionValue));
    }
  };

  const handelDrawFavLanguage = (e) => {
    const optionValue = e.target.value;
    if (favLanguage === optionValue) {
      setFavLanguage("");
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Which ones are Programming languages?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="JS"
                checked={languages.includes("JS")}
                onChange={handleLanguages}
                onClick={(e) => handleDrawLangueages(e)}
              />
              JavaScript
            </label>
            <label>
              <input
                type="radio"
                value="Python"
                checked={languages.includes("Python")}
                onChange={handleLanguages}
                onClick={(e) => handleDrawLangueages(e)}
              />
              Python
            </label>
            <label>
              <input
                type="radio"
                value="Elephant"
                checked={languages.includes("Elephant")}
                onChange={handleLanguages}
                onClick={(e) => handleDrawLangueages(e)}
              />
              Elephant
            </label>
          </div>
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Which ones are days of a week?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="Monday"
                checked={days.includes("Monday")}
                onChange={handleDays}
                onClick={(e) => handleDrawDays(e)}
              />
              Monday
            </label>
            <label>
              <input
                type="radio"
                value="Sunday"
                checked={days.includes("Sunday")}
                onChange={handleDays}
                onClick={(e) => handleDrawDays(e)}
              />
              Sunday
            </label>
            <label>
              <input
                type="radio"
                value="Weekend"
                checked={days.includes("Weekend")}
                onChange={handleDays}
                onClick={(e) => handleDrawDays(e)}
              />
              Weekend
            </label>
          </div>
        </div>
      </form>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>What is your favourite language?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="JS"
                checked={favLanguage === "JS"}
                onChange={handleFavLanguage}
                onClick={(e) => handelDrawFavLanguage(e)}
              />
              JavaScript
            </label>
            <label>
              <input
                type="radio"
                value="Java"
                checked={favLanguage === "Java"}
                onChange={handleFavLanguage}
                onClick={(e) => handelDrawFavLanguage(e)}
              />
              Java
            </label>
            <label>
              <input
                type="radio"
                value="C#"
                checked={favLanguage === "C#"}
                onChange={handleFavLanguage}
                onClick={(e) => handelDrawFavLanguage(e)}
              />
              C#
            </label>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MultipleChoiceForm;
