import React from "react";

type Income = {
  formData: {
    income: number;
    age: number;
    rooms: number;
    bedroom: number;
    population: number;
  };
  setFormData: Function;
};
const Income: React.FunctionComponent<Income> = ({
  formData,
  setFormData,
}): JSX.Element => {
  return (
    <div className="flex">
      <input
        type="number"
        placeholder="รายได้เฉลี่ยในพื้นที่ที่บ้านอยู่"
        className="input-form"
        value={formData.income == 0 ? "" : formData.income}
        onChange={(event) =>
          setFormData({ ...formData, income: event.target.value })
        }
        required
      />
    </div>
  );
};

export default Income;
