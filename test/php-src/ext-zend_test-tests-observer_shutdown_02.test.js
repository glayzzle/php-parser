// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_shutdown_02.phpt
  it("Observer: Function calls from a __destruct during shutdown are observable", function () {
    expect(parser.parseCode("<?php\nclass MyClass\n{\n    public function __destruct()\n    {\n        echo 'Shutdown: ' . foo() . PHP_EOL;\n    }\n}\nfunction bar($arg) {\n    return $arg;\n}\nfunction foo() {\n    bar(41);\n    return bar(42);\n}\n$mc = new MyClass();\necho 'Done: ' . bar(40) . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
