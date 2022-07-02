// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug34794.phpt
  it("Bug #34794 (proc_close() hangs when used with two processes)", function () {
    expect(parser.parseCode("<?php\necho \"Opening process 1\\n\";\n$process1 = proc_open('/bin/cat', array(0 => array('pipe', 'r'), 1 =>array('pipe', 'r')), $pipes1);\necho \"Opening process 2\\n\";\n$process2 = proc_open('/bin/cat', array(0 => array('pipe', 'r'), 1 =>array('pipe', 'r')), $pipes2);\necho \"Closing process 1\\n\";\nfclose($pipes1[0]);\nfclose($pipes1[1]);\nproc_close($process1);\necho \"Closing process 2\\n\";\nfclose($pipes2[0]);\nfclose($pipes2[1]);\nproc_close($process2);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
