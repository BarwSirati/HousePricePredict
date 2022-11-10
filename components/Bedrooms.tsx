import React from "react";

type Bedroom = {
  formData: {
    income: number;
    age: number;
    rooms: number;
    bedroom: number;
    population: number;
  };
  setFormData: Function;
};
const Bedroom: React.FunctionComponent<Bedroom> = ({
  formData,
  setFormData,
}): JSX.Element => {
  return (
    <div className="flex">
      <input
        type="number"
        placeholder="จำนวนห้องนอนโดยเฉลี่ยในพื้นที่เดียวกัน"
        className="input-form"
        value={formData.bedroom == 0 ? "" : formData.bedroom}
        onChange={(event) =>
          setFormData({ ...formData, bedroom: event.target.value })
        }
        required
      />
    </div>
  );
};

export default Bedroom;
