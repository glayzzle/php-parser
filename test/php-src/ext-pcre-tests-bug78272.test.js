// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug78272.phpt
  it("Bug #78272: calling preg_match() before pcntl_fork() will freeze child process", function () {
    expect(parser.parseCode("<?php\npreg_match('/abc/', 'abcde', $r);\n$pid = pcntl_fork();\nif ($pid === 0) {\n    print \"Child start\\n\";\n    preg_match('/abc/', 'abcde', $r);\n    print_r($r);\n    print \"End child\\n\";\n    exit(0);\n} else {\n    pcntl_waitpid($pid, $status);\n    print \"End Main\\n\";\n    exit(0);\n}\n?>")).toMatchSnapshot();
  });
});
