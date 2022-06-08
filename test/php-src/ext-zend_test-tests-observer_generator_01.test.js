// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_generator_01.phpt
  it("Observer: Basic generator observability", function () {
    expect(parser.parseCode("<?php\nfunction getResults() {\n    for ($i = 10; $i < 13; $i++) {\n        yield $i;\n    }\n}\nfunction doSomething() {\n    $generator = getResults();\n    foreach ($generator as $value) {\n        echo $value . PHP_EOL;\n    }\n    return 'Done';\n}\necho doSomething() . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
