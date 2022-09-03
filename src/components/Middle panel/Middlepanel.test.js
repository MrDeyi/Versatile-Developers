import {render, screen } from "@testing-library/react";
import Middlepanel from "./Middlepanel.js";

const sum = require('../../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});