// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/strict_001.phpt
  it("using resource as array offset", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__FILE__, 'r');\n$array = array(1,2,3,4,5,6,7);\nvar_dump($array[$fp]);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
