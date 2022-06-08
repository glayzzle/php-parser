// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_052.phpt
  it("052: Name conflict and compile-time constants (php name in case if ns name exists)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nconst INI_ALL = 0;\nfunction foo($x = \\INI_ALL) {\n    var_dump($x);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
