import React from "react";

type Age = {
  formData: {
    income: number;
    age: number;
    rooms: number;
    bedroom: number;
    population: number;
  };
  setFormData: Function;
};
const Age: React.FunctionComponent<Age> = ({
  formData,
  setFormData,
}): JSX.Element => {
  return (
    <div className="flex">
      <input
        type="number"
        placeholder="อายุบ้านโดยเฉลี่ยในพื้นที่เดียวกัน"
        className="input-form"
        value={formData.age == 0 ? "" : formData.age}
        onChange={(event) =>
          setFormData({ ...formData, age: event.target.value })
        }
        required
      />
    </div>
  );
};

export default Age;
