// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30080.phpt
  it("Bug #30080 (Passing array or non array of objects)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n  function __construct($arrayobj) {\n    var_dump($arrayobj);\n  }\n}\nnew foo(array(new stdClass));\n?>")).toMatchSnapshot();
  });
});
