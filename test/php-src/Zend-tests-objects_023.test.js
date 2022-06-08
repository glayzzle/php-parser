// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_023.phpt
  it("Creating instances dynamically", function () {
    expect(parser.parseCode("<?php\n$arr = array(new stdClass, 'stdClass');\nnew $arr[0]();\nnew $arr[1]();\nprint \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
