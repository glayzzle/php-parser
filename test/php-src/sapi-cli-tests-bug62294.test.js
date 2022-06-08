// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug62294.phpt
  it("Bug #62294: register_shutdown_function() does not handle exit code correctly", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\nexec($php . ' -n ' . __DIR__ . '/bug62294.inc', $output, $exit_status);\nvar_dump($exit_status);\n?>")).toMatchSnapshot();
  });
});
