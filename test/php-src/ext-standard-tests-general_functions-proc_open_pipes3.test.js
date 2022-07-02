// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_open_pipes3.phpt
  it("proc_open() with invalid pipes", function () {
    expect(parser.parseCode("<?php\nfor ($i = 3; $i<= 5; $i++) {\n    $spec[$i] = array('pipe', 'w');\n}\n$php = getenv(\"TEST_PHP_EXECUTABLE\");\n$callee = __DIR__ . \"/proc_open_pipes_sleep.inc\";\n$spec[$i] = array('pi');\nproc_open(\"$php -n $callee\", $spec, $pipes);\n$spec[$i] = 1;\ntry {\n    proc_open(\"$php -n $callee\", $spec, $pipes);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n$spec[$i] = array('pipe', \"test\");\nproc_open(\"$php -n $callee\", $spec, $pipes);\nvar_dump($pipes);\n$spec[$i] = array('file', \"test\", \"z\");\nproc_open(\"$php -n $callee\", $spec, $pipes);\nvar_dump($pipes);\necho \"END\\n\";\n?>")).toMatchSnapshot();
  });
});
