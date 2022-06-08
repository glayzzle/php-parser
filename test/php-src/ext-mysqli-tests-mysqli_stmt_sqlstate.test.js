// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_stmt_sqlstate.phpt
  it("mysqli_stmt_sqlstate()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    if (!$stmt = mysqli_stmt_init($link))\n        printf(\"[004] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    try {\n        mysqli_stmt_sqlstate($stmt);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    if (!mysqli_stmt_prepare($stmt, \"SELECT id FROM test\"))\n        printf(\"[006] [%d] %s\\n\", mysqli_stmt_errno($stmt), mysqli_stmt_error($stmt));\n    if ('00000' !== ($tmp = mysqli_stmt_sqlstate($stmt)))\n        printf(\"[007] Expecting string/00000, got %s/%s. [%d] %s\\n\",\n            gettype($tmp), $tmp, mysqli_stmt_errno($stmt), mysqli_stmt_error($stmt));\n    if (mysqli_stmt_prepare($stmt, \"SELECT believe_me FROM i_dont_belive_that_this_table_exists\"))\n        printf(\"[008] Should fail! [%d] %s\\n\", mysqli_stmt_errno($stmt), mysqli_stmt_error($stmt));\n    if ('' === ($tmp = mysqli_stmt_sqlstate($stmt)))\n        printf(\"[009] [%d] %s\\n\", mysqli_stmt_errno($stmt), mysqli_stmt_error($stmt));\n    mysqli_stmt_close($stmt);\n    try {\n        mysqli_stmt_sqlstate($stmt);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
