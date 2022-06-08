// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33257.phpt
  it("Bug #33257 (array_splice() inconsistent when passed function instead of variable)", function () {
    expect(parser.parseCode("<?php\nclass X {\n  protected static $arr = array(\"a\", \"b\", \"c\");\n  public static function getArr() {\n    return self::$arr;\n  }\n}\n//$arr1 = X::getArr();\narray_splice(X::getArr(), 1, 1);\nprint_r(X::getArr());\n?>")).toMatchSnapshot();
  });
});
