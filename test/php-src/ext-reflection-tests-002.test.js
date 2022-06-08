// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/002.phpt
  it("Reflection properties are read only", function () {
    expect(parser.parseCode("<?php\nclass ReflectionMethodEx extends ReflectionMethod\n{\n    public $foo = \"xyz\";\n    function __construct($c,$m)\n    {\n        echo __METHOD__ . \"\\n\";\n        parent::__construct($c,$m);\n    }\n}\n$r = new ReflectionMethodEx('ReflectionMethodEx','getName');\nvar_dump($r->class);\nvar_dump($r->name);\nvar_dump($r->foo);\n@var_dump($r->bar);\ntry\n{\n    $r->class = 'bullshit';\n}\ncatch(ReflectionException $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\ntry\n{\n$r->name = 'bullshit';\n}\ncatch(ReflectionException $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\n$r->foo = 'bar';\n$r->bar = 'baz';\nvar_dump($r->class);\nvar_dump($r->name);\nvar_dump($r->foo);\nvar_dump($r->bar);\n?>")).toMatchSnapshot();
  });
});
