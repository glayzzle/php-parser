// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_opline_01.phpt
  it("Observer: Ensure opline exists on the execute_data", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    echo 'Foo' . PHP_EOL;\n}\nfoo();\ninclude __DIR__ . '/observer.inc';\necho array_sum([1,2,3]) . PHP_EOL;\nfoo();\n?>")).toMatchSnapshot();
  });
});
