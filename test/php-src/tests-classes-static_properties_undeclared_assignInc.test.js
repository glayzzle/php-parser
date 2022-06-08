// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/static_properties_undeclared_assignInc.phpt
  it("Assigning & incrementing a non-existent static property", function () {
    expect(parser.parseCode("<?php\nClass C {}\nC::$p += 1;\n?>")).toMatchSnapshot();
  });
});
