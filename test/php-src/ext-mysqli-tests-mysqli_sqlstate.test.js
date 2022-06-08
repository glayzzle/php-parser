// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_sqlstate.phpt
  it("mysqli_sqlstate()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    var_dump(mysqli_sqlstate($link));\n    mysqli_query($link, \"SELECT unknown_column FROM test\");\n    var_dump(mysqli_sqlstate($link));\n    mysqli_free_result(mysqli_query($link, \"SELECT id FROM test\"));\n    var_dump(mysqli_sqlstate($link));\n    mysqli_close($link);\n    try {\n        mysqli_sqlstate($link);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
