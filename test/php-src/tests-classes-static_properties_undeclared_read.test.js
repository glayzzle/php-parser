// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/static_properties_undeclared_read.phpt
  it("Reading a non-existent static property", function () {
    expect(parser.parseCode("<?php\nClass C {}\necho C::$p;\n?>")).toMatchSnapshot();
  });
});
