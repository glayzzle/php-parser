// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_044.phpt
  it("044: Name conflict and constants (php name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nvar_dump(INI_ALL);\n?>")).toMatchSnapshot();
  });
});
