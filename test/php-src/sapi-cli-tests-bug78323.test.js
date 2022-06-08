// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug78323.phpt
  it("Bug #78323 Test exit code and error message for invalid parameters", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n// There are 3 types of option errors:\n// 1 : in flags\n// 2 option not found\n// 3 no argument for option\n// colon in flags\nob_start();\npassthru(\"$php -a:Z 2>&1\", $exitCode);\n$output = ob_get_contents();\nob_end_clean();\n$lines = preg_split('/\\R/', $output);\necho $lines[0], \"\\n\",\n     $lines[1], \"\\n\",\n     \"Done: $exitCode\\n\\n\";\n// option not found\nob_start();\npassthru(\"$php -Z 2>&1\", $exitCode);\n$output = ob_get_contents();\nob_end_clean();\n$lines = preg_split('/\\R/', $output);\necho $lines[0], \"\\n\",\n     $lines[1], \"\\n\",\n     \"Done: $exitCode\\n\\n\";\n// no argument for option\nob_start();\npassthru(\"$php --memory-limit=1G 2>&1\", $exitCode);\n$output = ob_get_contents();\nob_end_clean();\n$lines = preg_split('/\\R/', $output);\necho $lines[0], \"\\n\",\n     $lines[1], \"\\n\",\n     \"Done: $exitCode\\n\\n\";\n// Successful execution\nob_start();\npassthru(\"$php -dmemory-limit=1G -v\", $exitCode);\n$output = ob_get_contents();\nob_end_clean();\n$lines = preg_split('/\\R/', $output);\necho $lines[0], \"\\n\",\n     \"Done: $exitCode\\n\";\n?>")).toMatchSnapshot();
  });
});
