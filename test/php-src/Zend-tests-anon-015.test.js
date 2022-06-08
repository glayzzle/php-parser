// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/015.phpt
  it("static variables in methods inherited from parent class", function () {
    expect(parser.parseCode("<?php\nclass C {\n    function foo ($y = null) {\n        static $x = null;\n        if (!is_null($y)) {\n            $x = [$y];\n        }\n        return $x;\n    }\n}\n$c = new C();\n$c->foo(42);\n$d = new class extends C {};\nvar_dump($d->foo());\nvar_dump($d->foo(24));\nvar_dump($c->foo());\n?>")).toMatchSnapshot();
  });
});
