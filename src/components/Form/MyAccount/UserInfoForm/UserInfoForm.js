import React, { useState } from "react";
import "./UserInfoForm.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function UserInfoForm() {
  const [startDate, setStartDate] = useState(new Date());

  return (

      <section className="form-row">
          <section className="col-75">
              <section className="form-container">
                  <form>
                      <section className="form-row">
                          <section className="col-75">
                              <h2>Persoonlijke gegevens</h2>
                              <p>Naam: </p>
                              <input type="text" name="firstname" placeholder="Voornaam"/>
                              <input type="text" name="lastname" placeholder="Achternaam"/>
                          </section>
                      </section>
                      <section className="col-75">
                          <p className="dateofbirth-label">Geboortedatum:</p>
                          <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                          />
                          <section className="gender-section">
                              <p className="gender-label">Geslacht: </p>
                              <select name="gender" id="gender">
                                  <option value="male">Man</option>
                                  <option value="female">Vrouw</option>
                                  <option value="other-gender">Anders</option>
                              </select>
                          </section>
                      </section>

                  </form>
              </section>
          </section>
      </section>






    // <>
    //   <form className="userinfo-form">
    //     <section className="personal-info">
    //       <span className="name-label">Naam: </span>
    //       <fieldset>
    //         <input
    //           type="text"
    //           className="my-account-input"
    //           id="firstName"
    //           placeholder="Voornaam"
    //         />
    //       </fieldset>
    //       <fieldset>
    //         <input
    //           type="text"
    //           className="my-account-input my-account-input-insertion"
    //           id="insertion"
    //           placeholder="Tussenvoegsel"
    //         />
    //       </fieldset>
    //       <fieldset>
    //         <input
    //           type="text"
    //           className="my-account-input"
    //           id="lastName"
    //           placeholder="Achternaam"
    //         />
    //       </fieldset>
    //     </section>

    //     <section className="secondary-info">
    //       <fieldset>
    //         <label htmlFor="date-of-birth" className="dob-label">
    //           Geboortedatum
    //           <DatePicker
    //             selected={startDate}
    //             onChange={(date) => setStartDate(date)}
    //           />
    //         </label>
    //       </fieldset>
    //     </section>
    //   </form>
    // </>
  );
}

export default UserInfoForm;
