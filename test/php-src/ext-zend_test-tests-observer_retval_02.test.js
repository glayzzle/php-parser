// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_retval_02.phpt
  it("Observer: Unused retvals from generators are still observable", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    yield 'I should be observable';\n    yield 'Me too!';\n}\n$gen = foo();\n$gen->current();\n$gen->next();\n$gen->current();\necho 'Done' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
