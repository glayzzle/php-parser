// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug64264.phpt
  it("Bug #64264 (SPLFixedArray toArray problem)", function () {
    expect(parser.parseCode("<?php\nclass MyFixedArray extends \\SplFixedArray {\n    protected $foo;\n    protected $bar;\n}\n$myFixedArr = new MyFixedArray(1);\n$myFixedArr[0] = 'foo';\n$myFixedArr->setSize(2);\n$myFixedArr[1] = 'bar';\n$myFixedArr->setSize(5);\n$array = $myFixedArr->toArray();\n$array[2] = \"ERROR\";\n$array[3] = \"ERROR\";\n$array[4] = \"ERROR\";\nunset($array[4]);\n$myFixedArr->setSize(2);\nprint_r($myFixedArr->toArray());\n?>")).toMatchSnapshot();
  });
});
