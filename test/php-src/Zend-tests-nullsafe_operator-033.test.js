// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/033.phpt
  it("Test nullsafe operator in encaps vars", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $bar = 'bar';\n    function qux() {\n        return 'qux';\n    }\n}\n$null = null;\n$foo = new Foo();\nvar_dump(\"{$null?->foo}\");\nvar_dump(\"{$null?->bar()}\");\nvar_dump(\"$null?->foo\");\nvar_dump(\"$null?->bar()\");\nvar_dump(\"{$foo?->bar}\");\nvar_dump(\"{$foo?->baz}\");\nvar_dump(\"{$foo?->qux()}\");\ntry {\n    var_dump(\"{$foo?->quux()}\");\n} catch (Throwable $e) {\n    var_dump($e->getMessage());\n}\nvar_dump(\"$foo?->bar\");\nvar_dump(\"$foo?->baz\");\nvar_dump(\"$foo?->qux()\");\ntry {\n    var_dump(\"$foo?->quux()\");\n} catch (Throwable $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
