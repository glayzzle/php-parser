// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/003.phpt
  it("Test basic nullsafe property fetching", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $bar = 'bar';\n    function qux() {\n        return 'qux';\n    }\n}\n$null = null;\n$foo = new Foo();\nvar_dump(null?->bar);\nvar_dump(null?->baz);\nvar_dump(null?->qux());\nvar_dump(null?->quux());\nvar_dump($foo?->bar);\nvar_dump($foo?->baz);\nvar_dump($foo?->qux());\ntry {\n    var_dump($foo?->quux());\n} catch (Throwable $e) {\n    var_dump($e->getMessage());\n}\nvar_dump((new Foo)?->bar);\nvar_dump((new Foo)?->baz);\nvar_dump((new Foo)?->qux());\ntry {\n    var_dump((new Foo)?->quux());\n} catch (Throwable $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
