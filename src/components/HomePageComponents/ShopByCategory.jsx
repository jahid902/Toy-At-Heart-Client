import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ToyCard from "./ToyCard";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState("Lego City");
  const [limitedToy, setLimitedToy] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/toysCategory/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setLimitedToy(data));
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-6 md:my-12">
      <div className="text-center space-y-3 mb-4 md:mb-12">
        <h1 className="text-5xl font-bold text-orange-400">
          Shop By Category !!
        </h1>
        <p className="text-lg ">
          Step into a world where your desires unfold with every click, where
          possibilities stretch as far as your imagination can reach. Welcome to
          the enchanting realm of Welcome to the enchanting realm of{" "}
          <span className="font-semibold text-orange-500">"Toy At Heart".</span>
        </p>
      </div>

      <div className="flex justify-center bg-slate-300 p-8 rounded-md">
        <Tabs>
          <div className="flex justify-center mb-4">
            <h1 className="text-3xl font-bold text-orange-600 bg-slate-200 p-2 rounded-lg">Lego Toys</h1>
          </div>
          <TabList className="flex justify-center gap-12 mb-4">
            <Tab
              onClick={() => handleTabClick("Lego City")}
              className="cursor-pointer text-xl font-bold text-orange-600 bg-slate-200 hover:bg-slate-600 hover:text-white duration-300 p-2 rounded-lg"
            >
              Lego City
            </Tab>
            <Tab
              onClick={() => handleTabClick("Lego Cars")}
              className="cursor-pointer text-xl font-bold text-orange-600 bg-slate-200 hover:bg-slate-600 hover:text-white duration-300 p-2 rounded-lg"
            >
              Lego Car
            </Tab>
            <Tab
              onClick={() => handleTabClick("Lego Star Wars")}
              className="cursor-pointer text-xl font-bold text-orange-600  bg-slate-200 hover:bg-slate-600 hover:text-white duration-300 p-2 rounded-lg"
            >
              Lego Star Wars
            </Tab>
          </TabList>

          <TabPanel>
            <div className="flex gap-16 items-center justify-center">
              {limitedToy.map((singleToy) => (
                <ToyCard singleToy={singleToy} key={singleToy._id}></ToyCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-16 items-center justify-center">
              {limitedToy.map((singleToy) => (
                <ToyCard singleToy={singleToy} key={singleToy._id}></ToyCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-16 items-center justify-center">
              {limitedToy.map((singleToy) => (
                <ToyCard singleToy={singleToy} key={singleToy._id}></ToyCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
