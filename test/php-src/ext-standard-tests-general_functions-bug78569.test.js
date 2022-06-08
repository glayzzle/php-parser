// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug78569.phpt
  it("Bug #78569 (proc_open() may require extra quoting)", function () {
    expect(parser.parseCode("<?php\n// We are searching for the following line:\n// FIND ME\n$descriptorspec = array(['pipe', 'r'], ['pipe', 'w'], ['pipe', 'w']);\n$cmd = sprintf('\"findstr\" \"/b\" \"/c:// FIND ME\" \"%s\" 2>&1', __FILE__);\n$proc = proc_open($cmd, $descriptorspec, $pipes);\nfpassthru($pipes[1]);\nproc_close($proc);\n?>")).toMatchSnapshot();
  });
});
