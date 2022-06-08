// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arrow_functions/006.phpt
  it("Arrow functions syntax variations", function () {
    expect(parser.parseCode("<?php\n// By-reference argument and return\n$var = 1;\n$id = fn&(&$x) => $x;\n$ref =& $id($var);\n$ref++;\nvar_dump($var);\n// int argument and return type\n$var = 10;\n$int_fn = fn(int $x): int => $x;\nvar_dump($int_fn($var));\ntry {\n    $int_fn(\"foo\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$varargs = fn(?int... $args): array => $args;\nvar_dump($varargs(20, null, 30));\ntry {\n    $varargs(40, \"foo\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
