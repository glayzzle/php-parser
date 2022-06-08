// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug64106.phpt
  it("Bug #64106: Segfault on SplFixedArray[][x] = y when extended", function () {
    expect(parser.parseCode("<?php\nclass MyFixedArray extends SplFixedArray {\n    public function offsetGet($offset): mixed { var_dump($offset);  return null; }\n}\n$array = new MyFixedArray(10);\n$array[][1] = 10;\n?>")).toMatchSnapshot();
  });
});
