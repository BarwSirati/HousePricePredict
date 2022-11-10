import React from "react";

type Population = {
  formData: {
    income: number;
    age: number;
    rooms: number;
    bedroom: number;
    population: number;
  };
  setFormData: Function;
};
const Population: React.FunctionComponent<Population> = ({
  formData,
  setFormData,
}): JSX.Element => {
  return (
    <div className="flex">
      <input
        type="number"
        placeholder="จำนวนประชากรในพื้นที่"
        className="input-form"
        value={formData.population == 0 ? "" : formData.population}
        onChange={(event) =>
          setFormData({ ...formData, population: event.target.value })
        }
        required
      />
    </div>
  );
};

export default Population;
