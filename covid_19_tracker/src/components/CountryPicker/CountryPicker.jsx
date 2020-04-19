import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetchCountries();
            const countryNames = response.countries.map(cntry => cntry.name);
            setCountries(countryNames);
        }
        fetchAPI();
    }, []);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={e => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {
                    countries.map(country => <option key={country} value={ country }>{ country }</option>)
                }
            </NativeSelect>
        </FormControl>

    )
}

export default CountryPicker;