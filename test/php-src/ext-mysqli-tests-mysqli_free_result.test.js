// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_free_result.phpt
  it("mysqli_free_result()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    if (!$res = mysqli_query($link, \"SELECT id FROM test ORDER BY id LIMIT 1\")) {\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    print \"a\\n\";\n    var_dump(mysqli_free_result($res));\n    print \"b\\n\";\n    try {\n        mysqli_free_result($res);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    if (!$res = mysqli_query($link, \"SELECT id FROM test ORDER BY id LIMIT 1\")) {\n        printf(\"[004] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    print \"c\\n\";\n    var_dump(mysqli_store_result($link));\n    var_dump(mysqli_error($link));\n    print \"[005]\\n\";\n    mysqli_free_result($res);\n    if (!$res = mysqli_query($link, \"SELECT id FROM test ORDER BY id LIMIT 1\")) {\n        printf(\"[006] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    print \"d\\n\";\n    var_dump(mysqli_use_result($link));\n    var_dump(mysqli_error($link));\n    print \"[007]\\n\";\n    var_dump(mysqli_free_result($res));\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
