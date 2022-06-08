// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug71013.phpt
  it("Bug #71013 (Incorrect exception handler with yield from)", function () {
    expect(parser.parseCode("<?php\nclass FooBar implements Iterator {\n    function __construct()   { echo \"Constructing new FooBar\\n\"; }\n    function __destruct()    { echo \"Destructing FooBar\\n\"; }\n    function current (): mixed      { throw new Exception; }\n    function key (): int          { return 0; }\n    function next (): void         {}\n    function rewind (): void       {}\n    function valid (): bool        { return true; }\n}\nfunction foo() {\n    try {\n        $f = new FooBar;\n        yield from $f;\n    } catch (Exception $e) {\n        echo \"[foo()] Caught Exception\\n\";\n    }\n}\nfunction bar() {\n    echo \"Starting bar()\\n\";\n    $x = foo();\n    try {\n        var_dump($x->current());\n    } catch (Exception $e) {\n        echo \"[bar()] Caught Exception\\n\";\n    }\n    echo \"Unsetting \\$x\\n\";\n    unset($x);\n    echo \"Finishing bar()\\n\";\n}\nbar();\n?>")).toMatchSnapshot();
  });
});
