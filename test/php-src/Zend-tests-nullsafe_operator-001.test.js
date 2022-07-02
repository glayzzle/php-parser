// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/001.phpt
  it("Test basic nullsafe method calls", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function null() {\n        var_dump('Foo::null()');\n        return null;\n    }\n    function self() {\n        var_dump('Foo::self()');\n        return $this;\n    }\n}\nvar_dump(null?->bar());\nvar_dump(null?->bar(var_dump('Not executed')));\nvar_dump(null?->bar()->baz());\nvar_dump(null?->bar()->baz(var_dump('Not executed')));\nvar_dump(null?->bar()->baz);\nvar_dump(null?->bar()::$baz);\nvar_dump(null?->bar()::baz());\n$foo = new Foo();\nvar_dump($foo->null()?->bar());\nvar_dump($foo->null()?->bar(var_dump('Not executed')));\nvar_dump($foo->null()?->bar()->baz());\nvar_dump($foo->null()?->bar()->baz(var_dump('Not executed')));\nvar_dump($foo->null()?->bar()->baz);\nvar_dump($foo->null()?->bar()::$baz);\nvar_dump($foo->null()?->bar()::baz());\n$foo = new Foo();\nvar_dump($foo?->self(var_dump('Executed'))->null()?->bar());\nvar_dump($foo?->self(var_dump('Executed'))->null()?->bar(var_dump('Not executed')));\nvar_dump($foo?->self(var_dump('Executed'))->null()?->bar()->baz());\nvar_dump($foo?->self(var_dump('Executed'))->null()?->bar()->baz(var_dump('Not executed')));\nvar_dump($foo?->self(var_dump('Executed'))->null()?->bar()->baz);\nvar_dump($foo?->self(var_dump('Executed'))->null()?->bar()::$baz);\nvar_dump($foo?->self(var_dump('Executed'))->null()?->bar()::baz());\nvar_dump($foo->self(null?->bar())->null());\ntry {\n    var_dump($foo?->self()[null?->bar()]);\n} catch (Throwable $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
