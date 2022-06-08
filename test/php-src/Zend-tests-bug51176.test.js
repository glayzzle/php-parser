// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug51176.phpt
  it("Bug #51176 (Static calling in non-static method behaves like $this->)", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function start()\n    {\n        self::bar();\n        static::bar();\n        Foo::bar();\n    }\n    public function __call($n, $a)\n    {\n        echo \"instance\\n\";\n    }\n    public static function __callStatic($n, $a)\n    {\n        echo \"static\\n\";\n    }\n}\n$foo = new Foo();\n$foo->start();\n?>")).toMatchSnapshot();
  });
});
