// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_nice_basic.phpt
  it("proc_nice() basic behaviour", function () {
    expect(parser.parseCode("<?php\n    function getNice($id)\n    {\n        $res = shell_exec('ps -p ' . $id .' -o \"pid,nice\"');\n        preg_match('/^\\s*\\w+\\s+\\w+\\s*(\\d+)\\s+(\\d+)/m', $res, $matches);\n        if (count($matches) > 2)\n            return $matches[2];\n        else\n            return -1;\n    }\n    $delta = 5;\n    $pid = getmypid();\n    $niceBefore = getNice($pid);\n    proc_nice($delta);\n    $niceAfter = getNice($pid);\n    var_dump($niceBefore == ($niceAfter - $delta));\n?>")).toMatchSnapshot();
  });
});
