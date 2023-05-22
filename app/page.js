"use client"; 

import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react';


export default function Home() {
  const [lampu1Status, setLampu1Status] = useState('off');
  const [lampu2Status, setLampu2Status] = useState('off');
  const [lampu3Status, setLampu3Status] = useState('off');
  const [lampu4Status, setLampu4Status] = useState('off');

  useEffect(() => {
    const saklar = () => {
      let toggle1 = document.getElementById("default-toggle1");
      let toggle2 = document.getElementById("default-toggle2");
      let toggle3 = document.getElementById("default-toggle3");
      let toggle4 = document.getElementById("default-toggle4");

      setLampu1Status(toggle1.checked ? 'on' : 'off');
      setLampu2Status(toggle2.checked ? 'on' : 'off');
      setLampu3Status(toggle3.checked ? 'on' : 'off');
      setLampu4Status(toggle4.checked ? 'on' : 'off');
    };

    document
      .getElementById("default-toggle1")
      .addEventListener("change", saklar);
    document
      .getElementById("default-toggle2")
      .addEventListener("change", saklar);
    document
      .getElementById("default-toggle3")
      .addEventListener("change", saklar);
    document
      .getElementById("default-toggle4")
      .addEventListener("change", saklar);

    return () => {
      document
        .getElementById("default-toggle1")
        .removeEventListener("change", saklar);
      document
        .getElementById("default-toggle2")
        .removeEventListener("change", saklar);
      document
        .getElementById("default-toggle3")
        .removeEventListener("change", saklar);
      document
        .getElementById("default-toggle4")
        .removeEventListener("change", saklar);
    };
  }, []);

  return (
  <>
  <div className="page-container">
    <nav className="navigation">
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">INVENTORY</a></li>
        <li><a href="#">AC CONTROLLER</a></li>
        <li><a href="#">LOG OUT</a></li>
      </ul>
    </nav>
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Switch ID</th>
            <th>Toggle</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>AC 1</td>
            <td>
            <label for="default-toggle1" class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" id="default-toggle1" class="sr-only peer"/>
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </td>
            <td><Image id="lampu1" src={lampu1Status === 'on' ? "/on.gif" : "/off.gif"} alt="lampu1" width={30} height={20}/></td>
          </tr>
          <tr>
            <td>2</td>
            <td>AC 2</td>
            <td>
            <label for="default-toggle2" class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" id="default-toggle2" class="sr-only peer"/>
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </td>
            <td><Image id="lampu2" src={lampu2Status === 'on' ? "/on.gif" : "/off.gif"} alt="lampu2" width={30} height={20}/></td>
          </tr>
          <tr>
            <td>3</td>
            <td>AC 3</td>
            <td>
                <label for="default-toggle3" class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" id="default-toggle3" class="sr-only peer"/>
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </td>
            <td><Image id="lampu3" src={lampu3Status === 'on' ? "/on.gif" : "/off.gif"} alt="lampu3" width={30} height={20}/></td>
          </tr>
          <tr>
            <td>4</td>
            <td>AC 4</td>
            <td>
                <label for="default-toggle4" class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" id="default-toggle4" class="sr-only peer"/>
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </td>
            <td><Image id="lampu4" src={lampu4Status === 'on' ? "/on.gif" : "/off.gif"} alt="lampu4" width={30} height={20}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>    
  </>
  )
}