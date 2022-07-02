// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug24436.phpt
  it("Bug #24436 (isset()/empty() produce errors with non-existent variables in classes)", function () {
    expect(parser.parseCode("<?php\nclass test {\n        function __construct() {\n                if (empty($this->test[0][0])) { print \"test1\\n\";}\n                if (!isset($this->test[0][0])) { print \"test2\\n\";}\n                if (empty($this->test)) { print \"test1\\n\";}\n                if (!isset($this->test)) { print \"test2\\n\";}\n        }\n}\n$test1 = new test();\n?>")).toMatchSnapshot();
  });
});
