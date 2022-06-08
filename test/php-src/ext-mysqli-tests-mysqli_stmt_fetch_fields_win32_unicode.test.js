// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_stmt_fetch_fields_win32_unicode.phpt
  it("mysqli_stmt_fetch_fields() unicode, win32", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require_once('table.inc');\n    $bind_res = $id = null;\n    if (!($stmt = mysqli_stmt_init($link)) ||\n        !mysqli_stmt_prepare($stmt, \"SELECT id, label FROM test\") ||\n        !mysqli_stmt_execute($stmt) ||\n        !($result = mysqli_stmt_result_metadata($stmt)) ||\n        !mysqli_stmt_bind_result($stmt, $id, $bind_res) ||\n        !($fields = mysqli_fetch_fields($result))) {\n        printf(\"FAIL 1\\n\");\n    }\n    while (mysqli_stmt_fetch($stmt)) {\n        ;\n    }\n    mysqli_free_result($result);\n    mysqli_stmt_close($stmt);\n    if (!($stmt = mysqli_stmt_init($link)) ||\n        !mysqli_stmt_prepare($stmt, \"SELECT id, label FROM test\") ||\n        !mysqli_stmt_execute($stmt) ||\n        !($result = mysqli_stmt_result_metadata($stmt)) ||\n        !mysqli_stmt_bind_result($stmt, $id, $bind_res)) {\n        printf(\"FAIL 2\\n\");\n    }\n    print \"OK: 1\\n\";\n    if (!($fields = mysqli_fetch_fields($result)))\n        printf(\"Aua 3\\n\");\n    print \"OK: 2\\n\";\n    while (mysqli_stmt_fetch($stmt)) {\n        ;\n    }\n    mysqli_free_result($result);\n    mysqli_stmt_close($stmt);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
