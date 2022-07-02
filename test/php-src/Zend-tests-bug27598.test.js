// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug27598.phpt
  it("Bug #27598 (list() array key assignment causes HUGE memory leak)", function () {
    expect(parser.parseCode("<?php\nlist($out[0]) = array(1);\nvar_dump($out);\n?>")).toMatchSnapshot();
  });
});
