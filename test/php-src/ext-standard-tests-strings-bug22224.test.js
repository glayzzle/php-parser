// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug22224.phpt
  it("Bug #22224 (implode changes object references in array)", function () {
    expect(parser.parseCode("<?php\nclass foo\n{\n    function __toString()\n    {\n        return \"Object\";\n    }\n}\n$a = new foo();\n$arr = array(0=>&$a, 1=>&$a);\nvar_dump(implode(\",\",$arr));\nvar_dump($arr)\n?>")).toMatchSnapshot();
  });
});
