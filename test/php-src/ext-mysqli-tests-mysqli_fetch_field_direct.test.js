// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_fetch_field_direct.phpt
  it("mysqli_fetch_field_direct()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    if (!$res = mysqli_query($link, \"SELECT id AS ID, label FROM test AS TEST ORDER BY id LIMIT 1\")) {\n        printf(\"[004] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    try {\n        var_dump(mysqli_fetch_field_direct($res, -1));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    var_dump(mysqli_fetch_field_direct($res, 0));\n    try {\n        var_dump(mysqli_fetch_field_direct($res, 2));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    mysqli_free_result($res);\n    try {\n        mysqli_fetch_field_direct($res, 0);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
