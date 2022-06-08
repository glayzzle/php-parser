// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_rfork_flags.phpt
  it("Test function pcntl_rfork() with RFCFDG and RFFDG flags.", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Test with RFFDG and RFCFDG flags ***\\n\";\n$pid = pcntl_rfork(RFFDG);\nif ($pid > 0) {\n\tpcntl_wait($status);\n  var_dump($pid);\n} else {\n\tvar_dump($pid);\n  exit;\n}\n$pid = pcntl_rfork(RFCFDG);\nif ($pid > 0) {\n  pcntl_wait($status);\n  var_dump($pid);\n}\n?>")).toMatchSnapshot();
  });
});
