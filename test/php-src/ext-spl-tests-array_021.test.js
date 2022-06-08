// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_021.phpt
  it("SPL: ArrayObject::seek() and exceptions", function () {
    expect(parser.parseCode("<?php\nclass foo extends ArrayObject\n{\n    public function seek($key)\n    {\n        echo __METHOD__ . \"($key)\\n\";\n        throw new Exception(\"hi\");\n    }\n}\n$test = new foo(array(1,2,3));\ntry\n{\n    $test->seek('bar');\n}\ncatch (Exception $e)\n{\n    echo \"got exception\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
