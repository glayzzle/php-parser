// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/static_properties_undeclared_inc.phpt
  it("Incrementing a non-existent static property", function () {
    expect(parser.parseCode("<?php\nClass C {}\nC::$p++;\n?>")).toMatchSnapshot();
  });
});
