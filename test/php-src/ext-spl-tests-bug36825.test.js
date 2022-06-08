// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug36825.phpt
  it("Bug #36825 (Exceptions thrown in ArrayObject::offsetGet cause segfault)", function () {
    expect(parser.parseCode("<?php\nclass foo extends ArrayObject\n{\n    public function offsetGet($key): mixed\n    {\n        echo __METHOD__ . \"($key)\\n\";\n        throw new Exception(\"hi\");\n    }\n}\n$test = new foo();\ntry\n{\n    var_dump($test['bar']);\n}\ncatch (Exception $e)\n{\n    echo \"got exception\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
