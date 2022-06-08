// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_waitpid_rusage1.phpt
  it("pcntl_waitpid() and rusage", function () {
    expect(parser.parseCode("<?php\n$pid = pcntl_fork();\nif ($pid == -1) {\n    die(\"failed\");\n} else if ($pid) {\n    $status = 0;\n    var_dump(pcntl_waitpid($pid, $status, WUNTRACED, $rusage));\n    var_dump($rusage['ru_utime.tv_sec']);\n    var_dump($rusage['ru_utime.tv_usec']);\n    posix_kill($pid, SIGCONT);\n    $rusage = array(1,2,3);\n    pcntl_waitpid($pid, $status, WUNTRACED, $rusage);\n    var_dump($rusage['ru_utime.tv_sec']);\n    var_dump($rusage['ru_utime.tv_usec']);\n    $rusage = \"string\";\n    pcntl_waitpid($pid, $status, 0, $rusage);\n    var_dump(gettype($rusage));\n    var_dump(count($rusage));\n    $rusage = new stdClass;\n    pcntl_waitpid($pid, $status, 0, $rusage);\n    var_dump(gettype($rusage));\n    var_dump(count($rusage));\n    echo \"END\\n\";\n} else {\n    posix_kill(posix_getpid(), SIGSTOP);\n    exit(42);\n}\n?>")).toMatchSnapshot();
  });
});
