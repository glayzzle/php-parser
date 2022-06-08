// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/014.phpt
  it("Test nullsafe in binary op", function () {
    expect(parser.parseCode("<?php\nfunction try_and_dump($fn) {\n    try {\n        var_dump($fn());\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\nclass Foo {\n    public function bar() {\n        echo \"bar\\n\";\n    }\n}\n$foo = new Foo();\n$null = null;\ntry_and_dump(fn() => $null?->null() + $null?->null());\ntry_and_dump(fn() => $foo?->bar() + $null?->null());\ntry_and_dump(fn() => $null?->null() + $foo?->bar());\ntry_and_dump(fn() => $foo->bar() + $null?->null());\ntry_and_dump(fn() => $null?->null() + $foo->bar());\ntry_and_dump(fn() => $null?->null() + $null->null());\ntry_and_dump(fn() => $null->null() + $null?->null());\ntry_and_dump(fn() => ($foo?->bar() + $foo?->bar())?->baz());\n?>")).toMatchSnapshot();
  });
});
