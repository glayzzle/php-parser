// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_eval_01.phpt
  it("Observer: Basic eval observability", function () {
    expect(parser.parseCode("<?php\necho eval(\"return 'Foo eval' . PHP_EOL;\");\necho 'DONE' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
