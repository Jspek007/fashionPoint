import React, { useState } from "react";
import "./UserInfoForm.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import nl from "date-fns/locale/nl";

function UserInfoForm() {
    const [startDate, setStartDate] = useState(new Date());

    return (

        <section className="form-row">
            <section className="col-75">
                <section className="form-container">
                    <form>
                        <section className="form-row">
                            <section className="col-75">
                                <p>Naam: </p>
                                <input type="text" name="firstname" placeholder="Voornaam" />
                                <input type="text" name="lastname" placeholder="Achternaam" />
                            </section>
                        </section>

                        <section className="form-row">
                            <section className="col-75 personal-info">
                                <section className="dateofbirth-form">
                                    <p className="dateofbirth-label">Geboortedatum:</p>
                                    <section className="form-date-picker">
                                        <DatePicker
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        locale={nl}
                                        dateFormat="dd/MM/yyyy"
                                        maxDate={startDate}
                                    />
                                    </section>
                                </section>
                                <section className="gender-section">
                                    <p className="gender-label">Geslacht: </p>
                                    <select name="gender" id="gender" className="gender-select">
                                        <option value="male">Man</option>
                                        <option value="female">Vrouw</option>
                                        <option value="other-gender">Anders</option>
                                    </select>
                                </section>
                            </section>
                        </section>

                        <section className="street-info-container">
                            <section className="street-info">
                                <section className="street-section">
                                <p>Straat en huisnummer:  </p>
                                <input className="street-input" type="text" name="street" placeholder="Straatnaam en huisnummer"/>
                                </section>
                            </section>
                        </section>

                        <section className="form-row">
                            <section className="col-75 living-area-info">
                            <section className="postal-info">
                                <section className="postalcode-input">
                                    <p>Postcode: </p>
                                    <input type="text" name="postalcode" placeholder="Postcode" />
                                </section>
                                </section>
                                <section className="city-info">
                                    <section className="city-input">
                                        <p>Plaatsnaam: </p>
                                        <input type="text" name="city" placeholder="Plaatsnaam" />
                                    </section>
                                </section>
                            </section>
                            </section>

                    </form>
                </section>
            </section>
        </section>
    );
}

export default UserInfoForm;
