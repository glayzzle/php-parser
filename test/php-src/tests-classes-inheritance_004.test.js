// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/inheritance_004.phpt
  it("ZE2 method inheritance without interfaces", function () {
    expect(parser.parseCode("<?php\nclass A\n{\nfunction f() {}\n}\nclass B extends A\n{\n    function f($x) {}\n}\n?>")).toMatchSnapshot();
  });
});
