// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_fetch_object_no_object.phpt
  it("mysqli_fetch_object()", function () {
    expect(parser.parseCode("<?php\n    require('table.inc');\n    if (!$res = mysqli_query($link, \"SELECT id AS ID, label FROM test AS TEST ORDER BY id LIMIT 5\")) {\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    $obj = mysqli_fetch_object($res);\n    var_dump(gettype($obj));\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
