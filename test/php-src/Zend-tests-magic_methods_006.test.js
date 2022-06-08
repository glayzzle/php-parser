// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_006.phpt
  it("Testing __callstatic declaration in interface with missing the 'static' modifier", function () {
    expect(parser.parseCode("<?php\ninterface a {\n    function __callstatic($a, $b);\n}\n?>")).toMatchSnapshot();
  });
});
