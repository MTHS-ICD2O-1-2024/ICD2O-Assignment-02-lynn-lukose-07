// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a square.
 */
function calculateAreaOfSquare () {
  // input
  const lengthOfSide = parseInt(document.getElementById('length-of-side').value)

  // process
  const areaOfSquare = (lengthOfSide) * 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfSquare + ' cm²'
}
