// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/posix/tests/posix_times_basic.phpt
  it("Test posix_times() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n  echo \"Basic test of POSIX times function\\n\";\n  $times = posix_times();\n  var_dump($times);\n  if ($times == FALSE) {\n    $errno= posix_get_last_error();\n    var_dump(posix_strerror($errno));\n  }\n?>\n===DONE====")).toMatchSnapshot();
  });
});
