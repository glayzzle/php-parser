// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug39322.phpt
  it("Bug #39322 (proc_terminate() losing process resource)", function () {
    expect(parser.parseCode("<?php\n$descriptors = array(\n    0 => array('pipe', 'r'),\n    1 => array('pipe', 'w'),\n    2 => array('pipe', 'w'));\n$pipes = array();\n$process = proc_open('/bin/sleep 120', $descriptors, $pipes);\nproc_terminate($process, 9);\nsleep(1); // wait a bit to let the process finish\nvar_dump(proc_get_status($process));\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
