// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_047.phpt
  it("047: Run-time name conflict and constants (php name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nconst INI_ALL = 0;\nvar_dump(constant(\"INI_ALL\"));\n?>")).toMatchSnapshot();
  });
});
