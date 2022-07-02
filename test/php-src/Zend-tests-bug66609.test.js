// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug66609.phpt
  it("Bug #66609 (php crashes with __get() and ++ operator in some cases)", function () {
    expect(parser.parseCode("<?php\n$bar = new Bar;\n$foo = new Foo;\nclass Bar {\n    public function __get($x) {\n        global $foo;\n        return $foo->foo;\n    }\n}\nclass Foo {\n    public function __get($x) {\n        global $bar;\n        return $bar->bar;\n    }\n}\n$foo->blah += 1; //crash\n++$foo->blah;    //crash\n$foo->blah++;    //crash\n$foo->blah--;    //crash\n--$foo->blah;    //crash\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
