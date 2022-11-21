import React, { useState, Fragment } from "react";
import { Income, Age, Room, Bedroom, Population } from "../components";
import { GrLinkNext, GrPrevious } from "react-icons/gr";
import { IoMdSave } from "react-icons/io";
import { FaMoneyBillAlt } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FiRefreshCcw } from "react-icons/fi";
const Home = () => {
  const [page, setPage] = useState(0);
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(0);
  const [formData, setFormData] = useState({
    income: 0,
    age: 0,
    rooms: 0,
    bedroom: 0,
    population: 0,
  });
  const title = [
    "รายได้เฉลี่ยในพื้นที่ที่บ้านอยู่",
    "อายุบ้านโดยเฉลี่ยในพื้นที่เดียวกัน",
    "จำนวนห้องโดยเฉลี่ยในพื้นที่เดียวกัน",
    "จำนวนห้องนอนโดยเฉลี่ยในพื้นที่เดียวกัน",
    "จำนวนประชากรในพื้นที่",
  ];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Income formData={formData} setFormData={setFormData} />;
      case 1:
        return <Age formData={formData} setFormData={setFormData} />;
      case 2:
        return <Room formData={formData} setFormData={setFormData} />;
      case 3:
        return <Bedroom formData={formData} setFormData={setFormData} />;
      case 4:
        return <Population formData={formData} setFormData={setFormData} />;
      default:
    }
  };
  const predict = () => {
    const price: number =
      -2635072.90093305 +
      21.65220576 * formData.income +
      164666.4807218 * formData.age +
      119624.01223206 * formData.rooms +
      2440.37761102 * formData.bedroom +
      15.27031343 * formData.population;
    setPrice(price);
    setShow(true);
  };
  const reset = () => {
    setPage(0);
    setPrice(0);
    setFormData({
      income: 0,
      age: 0,
      rooms: 0,
      bedroom: 0,
      population: 0,
    });
    setShow(false);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 space-y-8 z-20">
      {show ? (
        <Fragment>
          <div className="flex flex-row w-full max-w-lg overflow-hidden shadow rounded-2xl">
            <div className="flex flex-col flex-auto p-8 bg-gray-100 divide-y divide-black text-center">
              <div className="pb-2 text-lg md:text-xl font-bold text-black space-y-3">
                <div className="flex justify-center">
                  <FaMoneyBillAlt className="text-3xl" />
                  &nbsp;ราคาที่ทำนายได้
                </div>
                <div className="pt-4 space-y-2 text-lg font-bold">
                  $ {price}
                </div>
                <button
                  className="btn bg-yellow-500 border-none hover:bg-yellow-400 hover:border-yellow-500 focus:border-yellow-500"
                  onClick={() => {
                    reset();
                  }}
                >
                  <FiRefreshCcw />
                </button>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div>
            <ul className="steps">
              <li className="step step-success transition-all"></li>
              <li
                className={`step  transition-all ${
                  page == 1 || page == 2 || page == 3 || page == 4
                    ? "step-success"
                    : ""
                }`}
              ></li>
              <li
                className={`step  transition-all ${
                  page == 2 || page == 3 || page == 4 ? "step-success" : ""
                }`}
              ></li>
              <li
                className={`step  transition-all ${
                  page == 3 || page == 4 ? "step-success" : ""
                }`}
              ></li>
              <li
                className={`step  transition-all ${
                  page == 4 ? "step-success" : ""
                }`}
              ></li>
            </ul>
          </div>
          <div className="flex flex-row w-full max-w-lg overflow-hidden shadow rounded-2xl">
            <div className="flex flex-col flex-auto p-8 bg-gray-100 divide-y divide-black text-center">
              <div className="pb-3 text-lg md:text-xl font-bold text-black">
                {title[page]}
              </div>
              <div className="pt-4 space-y-2 text-lg font-medium ">
                {PageDisplay()}
                <div className="flex">
                  <button
                    onClick={() => {
                      setPage((currPage) => currPage - 1);
                    }}
                    className={`btn-error btn mr-auto font-bold text-lg ${
                      page == 0 ? "hidden" : ""
                    }`}
                  >
                    <GrPrevious />
                  </button>
                  <button
                    onClick={() => {
                      if (page === title.length - 1) {
                        predict();
                      } else {
                        setPage((currPage) => currPage + 1);
                      }
                    }}
                    className={`${
                      page === title.length - 1 ? "btn-warning" : "btn-success"
                    } btn ml-auto font-bold text-lg`}
                  >
                    {page === title.length - 1 ? <IoMdSave /> : <GrLinkNext />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://github.com/sanfong/HouseLinReg/blob/main/USAHouseLinearRegression.ipynb"
            target="blank"
          >
            <div className="flex font-bold">
              <VscGithubInverted className="text-2xl text-white" />
              &nbsp;Powered By Sanfong
            </div>
          </a>
        </Fragment>
      )}
    </div>
  );
};

export default Home;
