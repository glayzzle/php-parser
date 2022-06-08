// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_fork_basic.phpt
  it("Test function pcntl_fork() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** Test by calling method or function with its expected arguments, first print the child PID and the father ***\\n\";\n$pid = pcntl_fork();\nif ($pid > 0) {\n    pcntl_wait($status);\n    var_dump($pid);\n} else {\n    var_dump($pid);\n}\n?>")).toMatchSnapshot();
  });
});
