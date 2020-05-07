import React from "react";
import InstitutionDropdownTypeahead from "../../components/organisms/InstitutionDropdownTypeahead/InstitutionDropdownTypeahead";

export default {
  title: "InstitutionDropdownTypeahead",
  component: InstitutionDropdownTypeahead,
};

export const TextInstitutionDropdownTypeahead = () => {
  return (
    <div style={{ width: 400 }}>
      <InstitutionDropdownTypeahead />
    </div>
  );
};
