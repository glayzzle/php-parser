// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_basic_03.phpt
  it("Observer: Basic observability of includes", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    echo 'Foo' . PHP_EOL;\n}\nfoo();\ninclude __DIR__ . '/observer.inc';\nfoo();\n?>")).toMatchSnapshot();
  });
});
