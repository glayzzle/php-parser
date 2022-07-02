// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_method.phpt
  it("ZE2 An interface method must be abstract", function () {
    expect(parser.parseCode("<?php\ninterface if_a {\n    function err() {}\n}\n?>")).toMatchSnapshot();
  });
});
