// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/dynamic_call.phpt
  it("It's possible to invoke a generator dynamically", function () {
    expect(parser.parseCode("<?php\nfunction gen($foo, $bar) {\n    yield $foo;\n    yield $bar;\n}\n$gen = call_user_func('gen', 'bar', 'foo');\nforeach ($gen as $value) {\n    var_dump($value);\n}\n?>")).toMatchSnapshot();
  });
});
