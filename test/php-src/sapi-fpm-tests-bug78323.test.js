// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug78323.phpt
  it("FPM: Bug #78323 Test exit code for invalid parameters", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$php = \\FPM\\Tester::findExecutable();\n// no argument for option\nob_start();\npassthru(\"$php --memory-limit=1G 2>&1\", $exitCode);\n$output = ob_get_contents();\nob_end_clean();\n$lines = preg_split('/\\R/', $output);\necho $lines[0], \"\\n\",\n     \"Done: $exitCode\\n\\n\";\n// Successful execution\nob_start();\npassthru(\"$php -dmemory-limit=1G -v\", $exitCode);\n$output = ob_get_contents();\nob_end_clean();\n$lines = preg_split('/\\R/', $output);\necho $lines[0], \"\\n\",\n     \"Done: $exitCode\\n\";\n?>")).toMatchSnapshot();
  });
});
