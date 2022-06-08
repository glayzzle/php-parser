// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_043.phpt
  it("043: Name conflict and constants (ns name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nconst INI_ALL = 0;\nvar_dump(INI_ALL);\n?>")).toMatchSnapshot();
  });
});
