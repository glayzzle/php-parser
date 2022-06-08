// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_006.phpt
  it("Testing nested list() with empty array", function () {
    expect(parser.parseCode("<?php\nlist($a, list($b, list(list($d)))) = array();\n?>")).toMatchSnapshot();
  });
});
