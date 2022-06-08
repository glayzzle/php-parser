// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_warning_count.phpt
  it("mysqli_warning_count()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    if (!$res = mysqli_query($link, \"SELECT id, label FROM test\"))\n        printf(\"[004] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (0 !== ($tmp = mysqli_warning_count($link)))\n        printf(\"[005] Expecting int/0, got %s/%s\\n\", gettype($tmp), $tmp);\n    if (!mysqli_query($link, \"DROP TABLE IF EXISTS this_table_does_not_exist\"))\n        printf(\"[006] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (1 !== ($tmp = mysqli_warning_count($link)))\n        printf(\"[007] Expecting int/1, got %s/%s\\n\", gettype($tmp), $tmp);\n    mysqli_close($link);\n    try {\n        mysqli_warning_count($link);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
