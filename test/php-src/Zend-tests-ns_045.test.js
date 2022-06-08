// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_045.phpt
  it("045: Name conflict and constants (php name in case if ns name exists)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nconst INI_ALL = 0;\nvar_dump(\\INI_ALL);\n?>")).toMatchSnapshot();
  });
});
