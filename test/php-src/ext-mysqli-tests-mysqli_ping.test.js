// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_ping.phpt
  it("mysqli_ping()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    var_dump(mysqli_ping($link));\n    // provoke an error to check if mysqli_ping resets it\n    $res = mysqli_query($link, 'SELECT * FROM unknown_table');\n    if (!($errno = mysqli_errno($link)))\n        printf(\"[003] Statement should have caused an error\\n\");\n    var_dump(mysqli_ping($link));\n    if ($errno === mysqli_errno($link))\n        printf(\"[004] Error codes should have been reset\\n\");\n    mysqli_close($link);\n    try {\n        mysqli_ping($link);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
