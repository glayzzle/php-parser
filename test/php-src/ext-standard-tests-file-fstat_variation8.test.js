// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fstat_variation8.phpt
  it("Test function fstat() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\n$stat_result = stat(__FILE__);\nclearstatcache();\n$fp = fopen (__FILE__, 'r');\n$fstat_result = fstat($fp);\nfclose($fp);\n$isWin = (substr(PHP_OS, 0, 3) == 'WIN');\n$failed = false;\nforeach($stat_result as $key =>$value) {\n   if ($isWin && ($key === 0 || $key === 6 || $key === 'dev' || $key === 'rdev')) {\n      // windows, dev and rdev will not match this is expected\n   }\n   else {\n       if ($fstat_result[$key] != $value) {\n          echo \"FAIL: stat differs at '$key'. $fstat_result[$key] -- $value\\n\";\n          $failed = true;\n       }\n   }\n}\nif ($failed !== true) {\n   echo \"PASSED: all elements are the same\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
