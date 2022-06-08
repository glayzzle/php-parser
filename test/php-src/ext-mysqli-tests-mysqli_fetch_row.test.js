// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_fetch_row.phpt
  it("mysqli_fetch_row()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    if (!$res = mysqli_query($link, \"SELECT id, label, id AS _id FROM test ORDER BY id LIMIT 1\")) {\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    print \"[004]\\n\";\n    var_dump(mysqli_fetch_row($res));\n    print \"[005]\\n\";\n    var_dump(mysqli_fetch_row($res));\n    mysqli_free_result($res);\n    try {\n        mysqli_fetch_row($res);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
