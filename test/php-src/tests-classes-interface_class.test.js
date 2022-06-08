// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_class.phpt
  it("ZE2 A class can only implement interfaces", function () {
    expect(parser.parseCode("<?php\nclass base {\n}\nclass derived implements base {\n}\n?>")).toMatchSnapshot();
  });
});
