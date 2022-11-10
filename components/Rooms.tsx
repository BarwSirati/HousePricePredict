import React from "react";

type Room = {
  formData: {
    income: number;
    age: number;
    rooms: number;
    bedroom: number;
    population: number;
  };
  setFormData: Function;
};
const Room: React.FunctionComponent<Room> = ({
  formData,
  setFormData,
}): JSX.Element => {
  return (
    <div className="flex">
      <input
        type="number"
        placeholder="จำนวนห้องโดยเฉลี่ยในพื้นที่เดียวกัน"
        className="input-form"
        value={formData.rooms == 0 ? "" : formData.rooms}
        onChange={(event) =>
          setFormData({ ...formData, rooms: event.target.value })
        }
        required
      />
    </div>
  );
};

export default Room;
