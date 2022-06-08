// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_stmt_init.phpt
  it("mysqli_stmt_init()", function () {
    expect(parser.parseCode("<?php\n    /*\n    NOTE: no datatype tests here! This is done by\n    mysqli_stmt_bind_result.phpt already. Restrict\n    this test case to the basics.\n    */\n    require_once(\"connect.inc\");\n    require('table.inc');\n    if (!is_object($stmt = mysqli_stmt_init($link)))\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (!is_object($stmt2 = @mysqli_stmt_init($link)))\n        printf(\"[003a] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    try {\n        mysqli_stmt_close($stmt);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    mysqli_close($link);\n    try {\n        mysqli_stmt_init($link);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
