// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_set_state.phpt
  it("Testing __set_state() declaration with wrong modifier", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __set_state($array)\n    {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
