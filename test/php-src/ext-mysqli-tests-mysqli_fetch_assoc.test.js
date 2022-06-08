// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_fetch_assoc.phpt
  it("mysqli_fetch_assoc()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    // Note: no SQL type tests, internally the same function gets used as for mysqli_fetch_array() which does a lot of SQL type test\n    require('table.inc');\n    if (!$res = mysqli_query($link, \"SELECT id, label FROM test ORDER BY id LIMIT 1\")) {\n        printf(\"[004] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    print \"[005]\\n\";\n    var_dump(mysqli_fetch_assoc($res));\n    print \"[006]\\n\";\n    var_dump(mysqli_fetch_assoc($res));\n    mysqli_free_result($res);\n    if (!$res = mysqli_query($link, \"SELECT\n        1 AS a,\n        2 AS a,\n        3 AS c,\n        4 AS C,\n        NULL AS d,\n        true AS e,\n        5 AS '-1',\n        6 AS '-10',\n        7 AS '-100',\n        8 AS '-1000',\n        9 AS '10000',\n        'a' AS '100000',\n        'b' AS '1000000',\n        'c' AS '9',\n        'd' AS '9',\n        'e' AS '01',\n        'f' AS '-02'\n    \")) {\n        printf(\"[007] Cannot run query, [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    print \"[008]\\n\";\n    var_dump(mysqli_fetch_assoc($res));\n    mysqli_free_result($res);\n    try {\n        mysqli_fetch_assoc($res);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
