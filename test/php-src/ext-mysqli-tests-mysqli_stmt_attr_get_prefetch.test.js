// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_stmt_attr_get_prefetch.phpt
  it("mysqli_stmt_attr_get() - prefetch", function () {
    expect(parser.parseCode("<?php\n    require('table.inc');\n    $stmt = mysqli_stmt_init($link);\n    mysqli_stmt_prepare($stmt, 'SELECT * FROM test');\n    if (1 !== ($tmp = mysqli_stmt_attr_get($stmt, MYSQLI_STMT_ATTR_PREFETCH_ROWS))) {\n        printf(\"[001] Expecting int/1, got %s/%s for attribute %s/%s\\n\",\n            gettype($tmp), $tmp, $k, $attr);\n    }\n    $stmt->close();\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
