// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug72622.phpt
  it("Bug #72622 (array_walk + array_replace_recursive create references from nothing)", function () {
    expect(parser.parseCode("<?php\nfunction walk (array $arr) {\n    array_walk($arr, function (&$val, $name) {\n    });\n    return $arr;\n}\n$arr3 = ['foo' => 'foo'];\n$arr4 = walk(['foo' => 'bar']);\n$arr5 = array_replace_recursive($arr3, $arr4);\n$arr5['foo'] = 'baz';\nvar_dump($arr3, $arr4, $arr5);\n?>")).toMatchSnapshot();
  });
});
