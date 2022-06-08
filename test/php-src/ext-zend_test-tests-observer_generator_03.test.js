// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_generator_03.phpt
  it("Observer: Generator with 'yield from'", function () {
    expect(parser.parseCode("<?php\nfunction barResults() {\n    for ($i = 10; $i < 13; $i++) {\n        yield $i;\n    }\n}\nfunction fooResults() {\n    yield 0;\n    yield 1;\n    yield from barResults();\n    yield 42;\n}\nfunction doSomething() {\n    $generator = fooResults();\n    foreach ($generator as $value) {\n        echo $value . PHP_EOL;\n    }\n    return 'Done';\n}\necho doSomething() . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
