// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/multibyte/multibyte_encoding_002.phpt
  it("Zend Multibyte and UTF-8 BOM", function () {
    expect(parser.parseCode("﻿<?php\nprint \"Hello World\\n\";\n?>")).toMatchSnapshot();
  });
});
