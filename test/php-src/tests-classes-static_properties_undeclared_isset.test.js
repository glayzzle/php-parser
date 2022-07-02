// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/static_properties_undeclared_isset.phpt
  it("Issetting a non-existent static property", function () {
    expect(parser.parseCode("<?php\nClass C {}\nvar_dump(isset(C::$p));\n?>")).toMatchSnapshot();
  });
});
