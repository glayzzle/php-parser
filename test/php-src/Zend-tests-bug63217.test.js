// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63217.phpt
  it("Bug #63217 (Constant numeric strings become integers when used as ArrayAccess offset)", function () {
    expect(parser.parseCode("<?php\nclass Test implements ArrayAccess {\n    public function offsetExists($offset): bool {\n        echo \"offsetExists given \";\n        var_dump($offset);\n        return true;\n    }\n    public function offsetUnset($offset): void {\n        echo \"offsetUnset given \";\n        var_dump($offset);\n    }\n    public function offsetSet($offset, $value): void {\n        echo \"offsetSet given \";\n        var_dump($offset);\n    }\n    public function offsetGet($offset): mixed {\n        echo \"offsetGet given \";\n        var_dump($offset);\n        return null;\n    }\n}\n$test = new Test;\n/* These should all produce string(...) \"...\" output and not int(...) */\nisset($test['0']);\nisset($test['123']);\nunset($test['0']);\nunset($test['123']);\n$test['0'] = true;\n$test['123'] = true;\n$foo = $test['0'];\n$foo = $test['123'];\n/* These caused the same bug, but in opcache rather than the compiler */\nisset($test[(string)'0']);\nisset($test[(string)'123']);\nunset($test[(string)'0']);\nunset($test[(string)'123']);\n$test[(string)'0'] = true;\n$test[(string)'123'] = true;\n$foo = $test[(string)'0'];\n$foo = $test[(string)'123'];\n/**\n * @see https://github.com/php/php-src/pull/2607#issuecomment-313781748\n */\nfunction test(): string {\n    $array[\"10\"] = 42;\n    foreach ($array as $key => $value) {\n        return $key;\n    }\n}\nvar_dump(test());\n/**\n * Make sure we don't break arrays.\n */\n$array = [];\n$key = '123';\n$array[$key] = 1;\n$array['321'] = 2;\n$array['abc'] = 3;\nvar_dump($array);\n/**\n * Make sure that we haven't broken ArrayObject\n */\n$ao = new ArrayObject();\n$key = '123';\n$ao = [];\n$ao[$key] = 1;\n$ao['321'] = 2;\n$ao['abc'] = 3;\nvar_dump($ao);\n?>")).toMatchSnapshot();
  });
});
