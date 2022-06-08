// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_050.phpt
  it("050: Name conflict and compile-time constants (ns name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nconst INI_ALL = 0;\nfunction foo($x = INI_ALL) {\n    var_dump($x);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
