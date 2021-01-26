import * as React from "react";
import { useUIDSeed } from "@twilio-paste/core/uid-library";
import { Box } from "@twilio-paste/core/box";
import { Input, Label } from "@twilio-paste/core";
import { Select, Option } from "@twilio-paste/core/select";
import { Button } from "@twilio-paste/core/button";
import { Link } from "react-router-dom";
import { Combobox } from "@twilio-paste/combobox";
import { Anchor } from "@twilio-paste/core/anchor";
import { SearchIcon } from "@twilio-paste/icons/esm/SearchIcon";

export const CompanyAddress = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [inputValue1, setInputValue1] = React.useState("");
  const [inputValue2, setInputValue2] = React.useState("");
  const [inputValue3, setInputValue3] = React.useState("");
  const [inputValue4, setInputValue4] = React.useState("");
  const [inputValue5, setInputValue5] = React.useState("");

  const [selectValue, setSelectValue] = React.useState("");

  const countries = ["United States", "Canada", "United Kingdom", "Japan"];
  const country_list = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia & Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre & Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts & Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks & Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];

  const inputID = useUIDSeed();
  const [inputItems, setInputItems] = React.useState(country_list);
  return (
    <Box as="form" maxWidth="size40">
      <Box marginBottom="space50">
        <Combobox
          autocomplete
          items={inputItems}
          labelText="First, select the country"
          helpText="Choose the country your main address is located."
          insertAfter={
            <SearchIcon decorative={true} size="sizeIcon20" title="search" />
          }
          onInputValueChange={({ inputValue }) => {
            if (inputValue !== undefined) {
              setInputItems(
                country_list.filter((item) =>
                  item.toLowerCase().startsWith(inputValue.toLowerCase())
                )
              );
            }
          }}
        />
      </Box>
      <Box marginBottom="space50">
        <Label htmlFor={inputID("input1")}>
          Who should we address your invoice to? (optional)
        </Label>
        <Input
          id={inputID("input1")}
          onChange={(e) => setInputValue1(e.currentTarget.value)}
          type="text"
          value={inputValue1}
        />
      </Box>
      <Box marginBottom="space50">
        <Label htmlFor={inputID("input2")}>Address line 1</Label>
        <Input
          id={inputID("input2")}
          onChange={(e) => setInputValue2(e.currentTarget.value)}
          type="text"
          value={inputValue2}
          required
        />
      </Box>
      <Box marginBottom="space50">
        <Label htmlFor={inputID("input3")}>Address line 2 (optional)</Label>
        <Input
          id={inputID("input3")}
          onChange={(e) => setInputValue3(e.currentTarget.value)}
          type="text"
          value={inputValue3}
        />
      </Box>
      <Box marginBottom="space50" maxWidth="33%">
        <Label htmlFor={inputID("input4")}>City</Label>
        <Input
          id={inputID("input4")}
          onChange={(e) => setInputValue4(e.currentTarget.value)}
          type="text"
          value={inputValue4}
          required
        />
      </Box>
      <Box marginBottom="space50" maxWidth="33%">
        <Label htmlFor={inputID("input5")}>State</Label>
        <Input
          id={inputID("input5")}
          onChange={(e) => setInputValue5(e.currentTarget.value)}
          type="text"
          value={inputValue5}
          required
        />
      </Box>
      <Box marginBottom="space50" maxWidth="33%">
        <Label htmlFor={inputID("input")}>Zip code</Label>
        <Input
          id={inputID("input")}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          type="text"
          value={inputValue}
          required
        />
      </Box>
      <Link to="/tax">
        <Button variant="primary">Continue</Button>
      </Link>
    </Box>
  );
};
