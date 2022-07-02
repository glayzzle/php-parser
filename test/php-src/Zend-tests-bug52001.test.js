// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52001.phpt
  it("Bug #52001 (Memory allocation problems after using variable variables)", function () {
    expect(parser.parseCode("<?php\na(0,$$var);\n$temp1=1;\n$temp2=2;\nvar_dump($temp1);\nfunction a($b,$c) {}\n?>")).toMatchSnapshot();
  });
});
