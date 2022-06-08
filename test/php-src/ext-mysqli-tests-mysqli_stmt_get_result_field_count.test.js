// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_stmt_get_result_field_count.phpt
  it("mysqli_stmt_get_result() - meta data, field_count()", function () {
    expect(parser.parseCode("<?php\n    require('table.inc');\n    if (!$stmt = mysqli_stmt_init($link))\n        printf(\"[001] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    if (!mysqli_stmt_prepare($stmt, \"SELECT id, label FROM test ORDER BY id ASC LIMIT 3\"))\n        printf(\"[002] [%d] %s\\n\", mysqli_stmt_errno($stmt), mysqli_stmt_error($stmt));\n    if (!mysqli_stmt_execute($stmt))\n        printf(\"[003] [%d] %s\\n\", mysqli_stmt_errno($stmt), mysqli_stmt_error($stmt));\n    if (!is_object($res = mysqli_stmt_get_result($stmt)) || 'mysqli_result' != get_class($res)) {\n        printf(\"[004] Expecting object/mysqli_result got %s/%s, [%d] %s\\n\",\n            gettype($res), $res, mysqli_stmt_errno($stmt), mysqli_stmt_error($stmt));\n    }\n    if (!is_object($res_meta = mysqli_stmt_result_metadata($stmt)) ||\n        'mysqli_result' != get_class($res_meta)) {\n        printf(\"[005] Expecting object/mysqli_result got %s/%s, [%d] %s\\n\",\n            gettype($res), $res, mysqli_stmt_errno($stmt), mysqli_stmt_error($stmt));\n    }\n    printf(\"%s %s\\n\",\n    $res_meta->field_count,\n    $res->field_count);\n    mysqli_stmt_close($stmt);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
