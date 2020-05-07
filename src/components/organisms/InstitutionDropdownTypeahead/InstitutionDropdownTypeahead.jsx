import React, { useEffect, useState } from "react";
import DropdownTypeahead from "../../molecules/DropdownTypeahead/DropdownTypeahead";

function InstitutionDropdownTypeahead() {
  const [autocompleteValue, setAutocompleteValue] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (autocompleteValue.trim().length === 3) {
      setResults([
        {
          id: 1,
          name: 'Hello',
        },
        {
          id: 2,
          name: 'Ho no',
        },
      ])
    }
    if (autocompleteValue.trim().length === 4) {
      setResults([])
    }
    if (autocompleteValue.trim().length > 4) {
      setResults([
        {
          id: 4,
          name: 'Hoi',
        },
        {
          id: 6,
          name: 'Hono',
        },
        {
          id: 10,
          name: 'Hoooono',
        },
      ])
    }
  }, [autocompleteValue, setResults]);

  return (
    <DropdownTypeahead
      onSearch={setAutocompleteValue}
      onClear={() => setAutocompleteValue("")}
      results={results}
      resultComponent={({ result }) => <div>{result.name}</div>}
    />
  );
}

export default InstitutionDropdownTypeahead;
