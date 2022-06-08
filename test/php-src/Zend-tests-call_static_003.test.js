// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_static_003.phpt
  it("Testing method name case", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __call($a, $b) {\n        print \"nonstatic\\n\";\n        var_dump($a);\n    }\n    static public function __callStatic($a, $b) {\n        print \"static\\n\";\n        var_dump($a);\n    }\n    public function test() {\n        $this->fOoBaR();\n        self::foOBAr();\n        $this::fOOBAr();\n    }\n}\n$a = new Foo;\n$a->test();\n$a::bAr();\nfoo::BAZ();\n?>")).toMatchSnapshot();
  });
});
