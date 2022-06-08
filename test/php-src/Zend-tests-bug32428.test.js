// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug32428.phpt
  it("Bug #32428 (The @ warning error suppression operator is broken)", function () {
    expect(parser.parseCode("<?php\n  $data = @$not_exists;\n  $data = @($not_exists);\n  $data = @!$not_exists;\n  $data = !@$not_exists;\n  $data = @($not_exists+1);\n  echo \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
