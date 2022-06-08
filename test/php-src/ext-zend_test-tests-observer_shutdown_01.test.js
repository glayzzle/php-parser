// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_shutdown_01.phpt
  it("Observer: Function calls from a shutdown handler are observable", function () {
    expect(parser.parseCode("<?php\nregister_shutdown_function(function () {\n    echo 'Shutdown: ' . foo() . PHP_EOL;\n});\nfunction bar($arg) {\n    return $arg;\n}\nfunction foo() {\n    bar(41);\n    return bar(42);\n}\necho 'Done: ' . bar(40) . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
