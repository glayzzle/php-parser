// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug80663.phpt
  it("Bug #80663 (Recursive SplFixedArray::setSize() may cause double-free)", function () {
    expect(parser.parseCode("<?php\nclass InvalidDestructor {\n    public function __destruct() {\n        $GLOBALS['obj']->setSize(0);\n    }\n}\n$obj = new SplFixedArray(1000);\n$obj[0] = new InvalidDestructor();\n$obj->setSize(0);\n?>")).toMatchSnapshot();
  });
});
