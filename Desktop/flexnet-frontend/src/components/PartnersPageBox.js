import React from "react";
import { StyleClass } from "primereact/styleclass";
import { Link } from "react-router-dom";

export default function PartnersPageBox() {
  return (
    <div className="container contact-page-parent mx-auto px-6 py-10">
      <div className="surface-0">
        <div className="text-900 font-bold text-6xl mb-4 text-center">
          Become Partner
        </div>
        <div className="text-700 text-xl mb-6 text-center line-height-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          numquam eligendi quos.
        </div>

        <div className="grid">
          <div className="col-12 lg:col-6">
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 h-full flex flex-column"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">
                  Solution Partners
                </div>
                <div className="text-600">Partner description</div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <div className="flex align-items-center">
                  <span className="font-bold text-2xl text-900">XYZ</span>
                  <span className="ml-2 font-medium text-600"></span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Arcu vitae elementum</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Dui faucibus in ornare</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Morbi tincidunt augue</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Duis ultricies lacus sed</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                <button className=" partners-button shadow-lg">
                  <Link to="/contact">Contact</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 lg:col-6">
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 flex flex-column"
                style={{ borderRadius: "6px" }}
              >
                <div className="text-900 font-medium text-xl mb-2">
                  Reseller Partners
                </div>
                <div className="text-600">Partner description</div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <div className="flex align-items-center">
                  <span className="font-bold text-2xl text-900">XYZ</span>
                  <span className="ml-2 font-medium text-600"></span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Arcu vitae elementum</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Dui faucibus in ornare</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Morbi tincidunt augue</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Duis ultricies lacus sed</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Imperdiet proin</span>
                  </li>
                  <li className="flex align-items-center mb-3">
                    <i className="pi pi-check-circle text-green-500 mr-2"></i>
                    <span>Nisi scelerisque</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />

                <button className="partners-button  shadow-lg">
                  <Link to="/contact">Contact</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
