import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faBuilding, faPhone, faShip, faBox } from "@fortawesome/free-solid-svg-icons";

const GetAQuote = () => {
  const [selectedOption, setSelectedOption] = useState("shipping");
  const [selectedContainerType, setSelectedContainerType] = useState("");

  // Handle container type selection
  const handleContainerTypeChange = (event) => {
    setSelectedContainerType(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 pt-32">
      <div className="flex items-center justify-center pb-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg md:max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Request a Quote</h2>

          <div className="mb-6 text-center">
            <button
              className={`mr-4 py-2 px-4 rounded-full ${
                selectedOption === "shipping" ? "bg-blue-200 text-blue-700" : "bg-white text-gray-700"
              } border border-gray-300 shadow-sm`}
              onClick={() => setSelectedOption("shipping")}
            >
              <FontAwesomeIcon icon={faShip} className="mr-2" />
              Shipping
            </button>
            <button
              className={`py-2 px-4 rounded-full ${
                selectedOption === "warehouse" ? "bg-blue-200 text-blue-700" : "bg-white text-gray-700"
              } border border-gray-300 shadow-sm`}
              onClick={() => setSelectedOption("warehouse")}
            >
              <FontAwesomeIcon icon={faBox} className="mr-2" />
              Packaging
            </button>
          </div>

          <form action="https://getform.io/f/bpjmqqzb" method="POST">
            {selectedOption === "shipping" && (
              <>
                {/* Shipping Attributes */}
                <h3 className="text-lg font-semibold mt-6 text-blue-600">Shipping details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Transportation by */}
                  <div className="col-span-2">
                    <label htmlFor="transportationBy" className="block text-sm font-medium text-gray-700">
                      Transportation by
                    </label>
                    <select name="Transpotation by : "
  id="transportationBy"
  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  style={{ maxHeight: '150px', overflowY: 'auto' }} // Added scroll bar
>
  <optgroup  label="Automatic" className="text-lg font-semibold text-blue-600 bg-gray-100">
    <option  className="text-gray-700 hover:bg-indigo-50">All transport</option>
  </optgroup>
  <optgroup label="Sea" className="text-lg font-semibold text-blue-600 bg-gray-100">
    <option className="text-gray-700 hover:bg-blue-50">Full container load (FCL)</option>
    <option className="text-gray-700 hover:bg-blue-50">Less container load (LCL)</option>
    <option className="text-gray-700 hover:bg-blue-50">Bulk</option>
  </optgroup>
  <optgroup label="Rail" className="text-lg font-semibold text-blue-600 bg-gray-100">
    <option className="text-gray-700 hover:bg-green-50">Full wagon load (FwL)</option>
    <option className="text-gray-700 hover:bg-green-50">Less wagon load (LwL)</option>
  </optgroup>
  <optgroup label="Air" className="text-lg font-semibold text-blue-600 bg-gray-100">
    <option className="text-gray-700 hover:bg-red-50">Standard cargo</option>
    <option className="text-gray-700 hover:bg-red-50">ULD Container</option>
  </optgroup>
</select>

                  </div>

                  {/* Container type */}
                  <div className="col-span-2">
                    <label htmlFor="containerType" className="block text-sm font-medium text-gray-700">
                      Container type
                    </label>
                    <select
                    name="Container type : "
                      id="containerType"
                      value={selectedContainerType}
                      onChange={handleContainerTypeChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      style={{ maxHeight: '150px', overflowY: 'auto' }} // Added scroll bar
                    >
                      <option value="" disabled>Select container type</option>
                      <option value="20' Standard">20' Standard</option>
                      <option value="40' Standard">40' Standard</option>
                      <option value="40' High Cube">40' High Cube</option>
                      <option value="45' High Cube">45' High Cube</option>
                      <option value="20' Refrigerated">20' Refrigerated</option>
                      <option value="40' Refrigerated">40' Refrigerated</option>
                      <option value="20' Open Top">20' Open Top</option>
                      <option value="40' Open Top">40' Open Top</option>
                      <option value="20' Flatrack">20' Flatrack</option>
                      <option value="40' Flatrack">40' Flatrack</option>
                      <option value="20' Flatrack Collapsible">20' Flatrack Collapsible</option>
                      <option value="40' Flatrack Collapsible">40' Flatrack Collapsible</option>
                      <option value="20' High Club">20' High Club</option>
                      <option value="20' Pallet Wide">20' Pallet Wide</option>
                      <option value="20' High Club Pallet Wide">20' High Club Pallet Wide</option>
                      <option value="45' High Club Pallet Wide">45' High Club Pallet Wide</option>
                      <option value="10' Standard">10' Standard</option>
                      <option value="20' Bulk">20' Bulk</option>
                      <option value="20' Platform">20' Platform</option>
                      <option value="40' Platform">40' Platform</option>
                      <option value="48' High Club">48' High Club</option>
                      <option value="53' High Club">53' High Club</option>
                    </select>
                  </div>

                  {/* Container quantity */}
                  <div>
                    <label htmlFor="containerQuantity" className="block text-sm font-medium text-gray-700">
                      Container quantity
                    </label>
                    <input
                    name="Contaier Quality : "
                      type="text"
                      id="containerQuantity"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  {/* Weight */}
                  <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                      Weight
                    </label>
                    <input name="Weight :"
                      type="text"
                      id="weight"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  {/* From */}
                  <div>
                    <label htmlFor="from" className="block text-sm font-medium text-gray-700">
                      From
                    </label>
                    <input name="From : "
                      type="text"
                      id="from"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  {/* To */}
                  <div>
                    <label htmlFor="to" className="block text-sm font-medium text-gray-700">
                      To
                    </label>
                    <input name="To : "
                      type="text"
                      id="to"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  {/* Additional Information */}
                  <div className="col-span-2">
                    <label htmlFor="additionalInformation" className="block text-sm font-medium text-gray-700">
                      Additional Information
                    </label>
                    <textarea name="Additional Information"
                      id="additionalInformation"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </>
            )}

            {selectedOption === "warehouse" && (
              <>
                {/* Packaging Attributes */}
                <h3 className="text-lg font-semibold mt-6 text-blue-600">Packaging details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Type of Goods */}
                  <div className="col-span-2">
                    <label htmlFor="typeOfGoods" className="block text-sm font-medium text-gray-700">
                      Type of Goods
                    </label>
                    <select name="Type of Goods : "
                      id="typeOfGoods"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      style={{ maxHeight: '150px', overflowY: 'auto' }} // Added scroll bar
                    >
                      <optgroup label="Automatic" className="font-semibold text-blue-500">
                        <option>All types</option>
                      </optgroup>
                      <optgroup label="Perishables" className="font-semibold text-blue-500">
                        <option>Fresh Fruits</option>
                        <option>Vegetables</option>
                        <option>Meat</option>
                      </optgroup>
                      <optgroup label="Non-Perishables" className="font-semibold text-blue-500">
                        <option>Grains</option>
                        <option>Electronics</option>
                        <option>Clothing</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Package Quantity */}
                  <div>
                    <label htmlFor="packageQuantity" className="block text-sm font-medium text-gray-700">
                      Package Quantity
                    </label>
                    <input name="Package Quantity : "
                      type="text"
                      id="packageQuantity"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  {/* Package Dimensions */}
                  <div className="col-span-2">
                    <label htmlFor="packageDimensions" className="block text-sm font-medium text-gray-700">
                      Package Dimensions (LxWxH)
                    </label>
                    <input name="Package Dimensions : "
                      type="text"
                      id="packageDimensions"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  {/* Weight */}
                  <div>
                    <label htmlFor="packageWeight" className="block text-sm font-medium text-gray-700">
                      Package Weight
                    </label>
                    <input name="Package Weight : "
                      type="text"
                      id="packageWeight"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  {/* From */}
                  <div>
                    <label htmlFor="warehouseFrom" className="block text-sm font-medium text-gray-700">
                      From
                    </label>
                    <input name="From : "
                      type="text"
                      id="warehouseFrom"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  {/* To */}
                  <div>
                    <label htmlFor="warehouseTo" className="block text-sm font-medium text-gray-700">
                      To
                    </label>
                    <input name="To : "
                      type="text"
                      id="warehouseTo"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  {/* Additional Information */}
                  <div className="col-span-2">
                    <label htmlFor="additionalInformationWarehouse" className="block text-sm font-medium text-gray-700">
                      Additional Information
                    </label>
                    <textarea name="Additional Information : "
                      id="additionalInformationWarehouse"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </>
            )}

            {/* Contact Information */}
            <h3 className="text-lg font-semibold mt-6 text-blue-600">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faUser} className="text-gray-400" />
                  </div>
                  <input name="Name : "
                    type="text"
                    id="name"
                    className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                  </div>
                  <input name="Email : "
                    type="email"
                    id="email"
                    className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faBuilding} className="text-gray-400" />
                  </div>
                  <input name="Company : "
                    type="text"
                    id="company"
                    className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
                  </div>
                  <input name="Phone : "
                    type="tel"
                    id="phone"
                    className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto py-2 px-4 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
