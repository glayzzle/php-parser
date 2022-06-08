// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_basic_01.phpt
  it("Observer: Basic observability of userland functions", function () {
    expect(parser.parseCode("<?php\nfunction bar()\n{\n    echo 'Bar' . PHP_EOL;\n    var_dump(array_sum([1,2,3]));\n}\nfunction foo()\n{\n    echo 'Foo' . PHP_EOL;\n    bar();\n}\nfoo();\nfoo();\nfoo();\necho 'DONE' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
