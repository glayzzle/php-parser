// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_023.phpt
  it("Testing class extending to ArrayObject and serialize", function () {
    expect(parser.parseCode("<?php\nclass Name extends ArrayObject\n{\n    public $var = 'a';\n    protected $bar = 'b';\n    private $foo = 'c';\n}\n$a = new Name();\nvar_dump($a);\nvar_dump($a->var);\n$a = unserialize(serialize($a));\nvar_dump($a);\nvar_dump($a->var);\nclass Bla extends ArrayObject\n{\n    public $var = 'aaa';\n    protected $bar = 'bbb';\n    private $foo = 'ccc';\n}\n$a = new Bla();\nvar_dump($a);\nvar_dump($a->var);\n$a = unserialize(serialize($a));\nvar_dump($a);\nvar_dump($a->var);\n?>")).toMatchSnapshot();
  });
});
