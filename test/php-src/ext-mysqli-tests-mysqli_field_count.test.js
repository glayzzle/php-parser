// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_field_count.phpt
  it("mysqli_field_count()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    var_dump(mysqli_field_count($link));\n    if (!$res = mysqli_query($link, \"SELECT * FROM test ORDER BY id LIMIT 1\")) {\n        printf(\"[004] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    var_dump(mysqli_field_count($link));\n    mysqli_free_result($res);\n    if (!mysqli_query($link, \"INSERT INTO test(id, label) VALUES (100, 'x')\"))\n        printf(\"[005] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    var_dump($link->field_count);\n    var_dump(mysqli_field_count($link));\n    if (!$res = mysqli_query($link, \"SELECT NULL as _null, '' AS '', 'three' AS 'drei'\"))\n        printf(\"[006] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    var_dump(mysqli_field_count($link));\n    mysqli_free_result($res);\n    mysqli_close($link);\n    try {\n        mysqli_field_count($link);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";")).toMatchSnapshot();
  });
});
