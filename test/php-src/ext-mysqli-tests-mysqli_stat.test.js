// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_stat.phpt
  it("mysqli_stat()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    if ((!is_string($tmp = mysqli_stat($link))) || ('' === $tmp))\n        printf(\"[004] Expecting non empty string, got %s/'%s', [%d] %s\\n\",\n            gettype($tmp), $tmp, mysqli_errno($link), mysql_error($link));\n    mysqli_close($link);\n    try {\n        mysqli_stat($link);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
