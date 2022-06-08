// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_error_03.phpt
  it("Observer: non-fatal errors do not fire end handlers prematurely", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    return $this_does_not_exit; // E_WARNING\n}\nfunction main()\n{\n    foo();\n    echo 'After error.' . PHP_EOL;\n}\nmain();\necho 'Done.' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
