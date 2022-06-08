// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_stmt_prepare.phpt
  it("mysqli_stmt_prepare()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    // Note: No SQL tests here! We can expand one of the *fetch()\n    // tests to a generic SQL test, if we ever need that.\n    // We would duplicate the SQL test cases if we have it here and in one of the\n    // fetch tests, because the fetch tests would have to call prepare/execute etc.\n    // anyway.\n    require('table.inc');\n    if (!$stmt = mysqli_stmt_init($link))\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (false !== ($tmp = mysqli_stmt_prepare($stmt, '')))\n        printf(\"[005] Expecting boolean/false, got %s/%s\\n\", gettype($tmp), $tmp);\n    if (true !== ($tmp = mysqli_stmt_prepare($stmt, 'SELECT id FROM test')))\n        printf(\"[006] Expecting boolean/true, got %s/%s\\n\", gettype($tmp), $tmp);\n    mysqli_stmt_close($stmt);\n    try {\n        mysqli_stmt_prepare($stmt, \"SELECT id FROM test\");\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
