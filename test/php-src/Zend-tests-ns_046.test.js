// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_046.phpt
  it("046: Run-time name conflict and constants (ns name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nconst INI_ALL = 0;\nvar_dump(constant(\"test\\\\ns1\\\\INI_ALL\"));\n?>")).toMatchSnapshot();
  });
});
