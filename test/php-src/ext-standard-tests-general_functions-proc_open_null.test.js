// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_open_null.phpt
  it("Null pipes in proc_open()", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$cmd = [$php, '-r', 'echo \"Test\"; fprintf(STDERR, \"Error\");'];\n$proc = proc_open($cmd, [1 => ['null'], 2 => ['pipe', 'w']], $pipes);\nvar_dump($pipes);\nvar_dump(stream_get_contents($pipes[2]));\nproc_close($proc);\n$proc = proc_open($cmd, [1 => ['pipe', 'w'], 2 => ['null']], $pipes);\nvar_dump($pipes);\nvar_dump(stream_get_contents($pipes[1]));\nproc_close($proc);\n?>")).toMatchSnapshot();
  });
});
