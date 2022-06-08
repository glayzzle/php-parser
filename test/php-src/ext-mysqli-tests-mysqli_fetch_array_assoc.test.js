// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_fetch_array_assoc.phpt
  it("mysqli_fetch_array()", function () {
    expect(parser.parseCode("<?php\n    require('table.inc');\n    if (!$res = mysqli_query($link, \"SELECT * FROM test ORDER BY id LIMIT 5\")) {\n        printf(\"[001] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    print \"[002]\\n\";\n    var_dump(mysqli_fetch_array($res, MYSQLI_ASSOC));\n    mysqli_free_result($res);\n    if (!$res = mysqli_query($link, \"SELECT id, label FROM test ORDER BY id LIMIT 5\")) {\n        printf(\"[003] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    print \"[004]\\n\";\n    var_dump(mysqli_fetch_array($res, MYSQLI_ASSOC));\n    mysqli_free_result($res);\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
