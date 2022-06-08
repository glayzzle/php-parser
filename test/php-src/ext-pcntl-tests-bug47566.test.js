// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/bug47566.phpt
  it("Bug #47566 (return value of pcntl_wexitstatus())", function () {
    expect(parser.parseCode("<?php\n$pid = pcntl_fork();\nif ($pid == -1) {\n echo \"Unable to fork\";\n exit;\n} elseif ($pid) {\n $epid = pcntl_waitpid(-1,$status);\n var_dump(pcntl_wexitstatus($status));\n} else {\n exit(128);\n}\n?>")).toMatchSnapshot();
  });
});
