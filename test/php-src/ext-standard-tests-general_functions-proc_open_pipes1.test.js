// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_open_pipes1.phpt
  it("proc_open() with > 16 pipes", function () {
    expect(parser.parseCode("<?php\nfor ($i = 3; $i<= 30; $i++) {\n    $spec[$i] = array('pipe', 'w');\n}\n$php = getenv(\"TEST_PHP_EXECUTABLE\");\n$callee = __DIR__ . \"/proc_open_pipes_sleep.inc\";\nproc_open(\"$php -n $callee\", $spec, $pipes);\nvar_dump(count($spec));\nvar_dump($pipes);\n?>")).toMatchSnapshot();
  });
});
