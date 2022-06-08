// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60978.phpt
  it("Bug #60978 (exit code incorrect)", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\nexec($php . ' -n -r \"exit(2);\"', $output, $exit_code);\necho $exit_code;\n?>")).toMatchSnapshot();
  });
});
