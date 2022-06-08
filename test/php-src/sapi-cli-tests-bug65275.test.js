// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug65275.phpt
  it("Bug #65275: Calling exit() in a shutdown function does not change the exit value in CLI", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\nexec($php . ' ' . __DIR__ . '/bug65275.inc', $output, $exit_status);\nvar_dump($exit_status);\n?>")).toMatchSnapshot();
  });
});
