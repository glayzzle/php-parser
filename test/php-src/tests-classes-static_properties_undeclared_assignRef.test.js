// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/static_properties_undeclared_assignRef.phpt
  it("Assigning a non-existent static property by reference", function () {
    expect(parser.parseCode("<?php\nClass C {}\n$a = 'foo';\nC::$p =& $a;\n?>")).toMatchSnapshot();
  });
});
