// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug44667.phpt
  it("Bug #44667 (proc_open() does not handle pipes with the mode 'wb' correctly)", function () {
    expect(parser.parseCode("<?php\n$pipes = array();\n$descriptor_spec = array(\n    0 => array('pipe', 'rb'),\n    1 => array('pipe', 'wb'),\n);\n$proc = proc_open('cat', $descriptor_spec, $pipes);\nfwrite($pipes[0], 'Hello', 5);\nfflush($pipes[0]);\nfclose($pipes[0]);\n$result = fread($pipes[1], 5);\nfclose($pipes[1]);\nproc_close($proc);\necho \"Result is: \", $result, \"\\n\";\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
