// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_store_result_buffered_c.phpt
  it("mysqli_store_result()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $tmp    = NULL;\n    $link   = NULL;\n    require('table.inc');\n    if (!$res = mysqli_real_query($link, \"SELECT id, label FROM test ORDER BY id\"))\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (!is_object($res = mysqli_store_result($link, MYSQLI_STORE_RESULT_COPY_DATA)))\n        printf(\"[004] Expecting object, got %s/%s. [%d] %s\\n\",\n            gettype($res), $res, mysqli_errno($link), mysqli_error($link));\n    if (true !== ($tmp = mysqli_data_seek($res, 2)))\n        printf(\"[005] Expecting boolean/true, got %s/%s. [%d] %s\\n\",\n            gettype($tmp), $tmp, mysqli_errno($link), mysqli_error($link));\n    mysqli_free_result($res);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
