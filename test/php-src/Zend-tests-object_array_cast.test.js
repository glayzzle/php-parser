// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_array_cast.phpt
  it("(object) (array) and (array) (object) casts", function () {
    expect(parser.parseCode("<?php\n$arr = [1, 2, 3];\nvar_dump((object) (array) $arr);\nvar_dump($arr);\n$obj = (object) [1, 2, 3];\nvar_dump((array) (object) $obj);\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
