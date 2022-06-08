// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_wait.phpt
  it("pcntl_wait()", function () {
    expect(parser.parseCode("<?php\n$pid = pcntl_fork();\nif ($pid == -1) {\n    die(\"failed\");\n} else if ($pid) {\n    $status = 0;\n    pcntl_wait($status, WUNTRACED);\n    var_dump(pcntl_wifexited($status));\n    posix_kill($pid, SIGCONT);\n    pcntl_wait($status);\n    var_dump(pcntl_wifsignaled($status));\n    var_dump(pcntl_wifstopped($status));\n    var_dump(pcntl_wexitstatus($status));\n    var_dump(pcntl_wait($status, WNOHANG | WUNTRACED));\n} else {\n    posix_kill(posix_getpid(), SIGSTOP);\n    exit(42);\n}\n?>")).toMatchSnapshot();
  });
});
