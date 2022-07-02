// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_051.phpt
  it("051: Name conflict and compile-time constants (php name)", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nfunction foo($x = INI_ALL) {\n    var_dump($x);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
