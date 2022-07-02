// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70288.phpt
  it("Bug #70288 (Apache crash related to ZEND_SEND_REF)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __get($name) {\n        return new Stdclass();\n    }\n}\nfunction test(&$obj) {\n    var_dump($obj);\n}\n$a = new A;\ntest($a->dummy);\n?>")).toMatchSnapshot();
  });
});
