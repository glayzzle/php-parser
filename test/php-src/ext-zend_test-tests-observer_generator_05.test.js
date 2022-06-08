// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_generator_05.phpt
  it("Observer: Generator with uncaught exception", function () {
    expect(parser.parseCode("<?php\nfunction fooResults() {\n    yield 0;\n    yield 1;\n    throw new RuntimeException('Oops!');\n}\nfunction doSomething() {\n    $generator = fooResults();\n    foreach ($generator as $value) {\n        echo $value . PHP_EOL;\n    }\n    return 'You should not see this';\n}\necho doSomething() . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
