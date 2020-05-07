import React, { useEffect, useState } from "react";
import DropdownTypeahead from "../../molecules/DropdownTypeahead/DropdownTypeahead";
import SelectableInstitution from '../../molecules/SelectableInstitution/SelectableInstitution';

function InstitutionDropdownTypeahead() {
  const [autocompleteValue, setAutocompleteValue] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (autocompleteValue.trim().length === 3) {
      return setResults([
        {
          id: 1,
          name: 'Hoi',
          countryName: 'Oui oui',
        },
        {
          id: 2,
          name: 'Moi',
        },
      ])
    }
    if (autocompleteValue.trim().length === 4) {
      return setResults([])
    }
    if (autocompleteValue.trim().length > 4) {
      return setResults([
        {
          id: 4,
          name: 'Holaa',
          countryName: 'Nope',
        },
        {
          id: 6,
          name: 'Honooo',
        },
        {
          id: 10,
          name: 'Hooyes',
        },
      ])
    }
    return setResults([]);
  }, [autocompleteValue, setResults]);

  return (
    <DropdownTypeahead
      onSearch={setAutocompleteValue}
      searchQuery={autocompleteValue}
      onClear={() => setAutocompleteValue("")}
      onSelect={(result) => setAutocompleteValue(result.name)}
      results={results}
      resultComponent={SelectableInstitution}
    />
  );
}

export default InstitutionDropdownTypeahead;
