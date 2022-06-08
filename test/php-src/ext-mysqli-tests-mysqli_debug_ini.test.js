// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_debug_ini.phpt
  it("mysqli_debug() - enabling trace with ini setting", function () {
    expect(parser.parseCode("<?php\n    require_once('connect.inc');\n    require_once('table.inc');\n    var_dump(ini_get('mysqlnd.debug'));\n    $trace_file = '/tmp/mysqli_debug_phpt.trace';\n    clearstatcache();\n    if (!file_exists($trace_file))\n        printf(\"[003] Trace file '%s' has not been created\\n\", $trace_file);\n    if (filesize($trace_file) < 50)\n        printf(\"[004] Trace file '%s' is very small. filesize() reports only %d bytes. Please check.\\n\",\n            $trace_file,\n            filesize($trace_file));\n    mysqli_close($link);\n    unlink($trace_file);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
