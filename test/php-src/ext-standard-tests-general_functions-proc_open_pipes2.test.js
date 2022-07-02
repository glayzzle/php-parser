// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_open_pipes2.phpt
  it("proc_open() with no pipes", function () {
    expect(parser.parseCode("<?php\n$spec = array();\n$php = getenv(\"TEST_PHP_EXECUTABLE\");\n$callee = __DIR__ . \"/proc_open_pipes_sleep.inc\";\nproc_open(\"$php -n $callee\", $spec, $pipes);\nvar_dump(count($spec));\nvar_dump($pipes);\n?>")).toMatchSnapshot();
  });
});
