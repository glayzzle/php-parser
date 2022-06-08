// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/wrong_inlining_002.phpt
  it("$this not in object context", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    private function getConst() {\n        return 42;\n    }\n    public function test() {\n        var_dump($this->getConst());\n    }\n}\nFoo::test();\n?>")).toMatchSnapshot();
  });
});
