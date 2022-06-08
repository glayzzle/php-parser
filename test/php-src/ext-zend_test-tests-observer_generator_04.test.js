// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_generator_04.phpt
  it("Observer: Generator with manual traversal", function () {
    expect(parser.parseCode("<?php\nfunction fooResults() {\n    echo 'Starting generator' . PHP_EOL;\n    $i = 0;\n    while (true) {\n        if (yield $i++) break;\n    }\n}\nfunction doSomething() {\n    $generator = fooResults();\n    while($generator->current() !== NULL) {\n        echo $generator->current() . PHP_EOL;\n        if ($generator->current() === 5) {\n            $generator->send('Boop');\n        }\n        $generator->next();\n    }\n    return 'Done';\n}\necho doSomething() . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
