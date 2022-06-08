// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_field_tell.phpt
  it("mysqli_field_tell()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    if (!$res = mysqli_query($link, \"SELECT id FROM test ORDER BY id LIMIT 1\", MYSQLI_USE_RESULT)) {\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    var_dump(mysqli_field_tell($res));\n    var_dump(mysqli_field_tell($res));\n    var_dump(mysqli_fetch_field($res));\n    var_dump(mysqli_fetch_field($res));\n    var_dump(mysqli_field_tell($res));\n    try {\n        var_dump(mysqli_field_seek($res, 2));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    var_dump(mysqli_field_tell($res));\n    try {\n        var_dump(mysqli_field_seek($res, -1));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    var_dump(mysqli_field_tell($res));\n    var_dump(mysqli_field_seek($res, 0));\n    var_dump(mysqli_field_tell($res));\n    mysqli_free_result($res);\n    try {\n        mysqli_field_tell($res);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
