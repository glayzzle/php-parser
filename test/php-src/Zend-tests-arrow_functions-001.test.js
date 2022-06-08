// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arrow_functions/001.phpt
  it("Basic arrow function functionality check", function () {
    expect(parser.parseCode("<?php\n$foo = fn() => 1;\nvar_dump($foo());\n$foo = fn($x) => $x;\nvar_dump($foo(2));\n$foo = fn($x, $y) => $x + $y;\nvar_dump($foo(1, 2));\n// Closing over $var\n$var = 4;\n$foo = fn() => $var;\nvar_dump($foo());\n// Not closing over $var, it's a parameter\n$foo = fn($var) => $var;\nvar_dump($foo(5));\n// Close over $var by-value, not by-reference\n$var = 5;\n$foo = fn() => ++$var;\nvar_dump($foo());\nvar_dump($var);\n// Nested arrow functions closing over variable\n$var = 6;\nvar_dump((fn() => fn() => $var)()());\nvar_dump((fn() => function() use($var) { return $var; })()());\n?>")).toMatchSnapshot();
  });
});
