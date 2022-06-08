// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/by_ref_separation.phpt
  it("Array must be separated if unpacking by reference", function () {
    expect(parser.parseCode("<?php\nfunction inc(&... $args) {\n    foreach ($args as &$arg) {\n        $arg++;\n    }\n}\n$arr = [1, 2];\n$arr[] = 3;\n$arr2 = $arr;\ninc(...$arr);\nvar_dump($arr);\nvar_dump($arr2);\n?>")).toMatchSnapshot();
  });
});
