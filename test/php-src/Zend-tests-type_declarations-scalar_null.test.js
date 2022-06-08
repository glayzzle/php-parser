// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_null.phpt
  it("Scalar type nullability", function () {
    expect(parser.parseCode("<?php\n$functions = [\n    'int' => function (int $i) { return $i; },\n    'float' => function (float $f) { return $f; },\n    'string' => function (string $s) { return $s; },\n    'bool' => function (bool $b) { return $b; },\n    'int nullable' => function (int $i = NULL) { return $i; },\n    'float nullable' => function (float $f = NULL) { return $f; },\n    'string nullable' => function (string $s = NULL) { return $s; },\n    'bool nullable' => function (bool $b = NULL) { return $b; }\n];\nforeach ($functions as $type => $function) {\n    echo \"Testing $type:\", PHP_EOL;\n    try {\n        var_dump($function(null));\n    } catch (TypeError $e) {\n        echo \"*** Caught \" . $e->getMessage() . PHP_EOL;\n    }\n}\necho PHP_EOL . \"Done\";\n?>")).toMatchSnapshot();
  });
});
