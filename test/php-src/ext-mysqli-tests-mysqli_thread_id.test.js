// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_thread_id.phpt
  it("mysqli_thread_id()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    if (!is_int($tmp = mysqli_thread_id($link)) || (0 === $tmp))\n        printf(\"[003] Expecting int/any but zero, got %s/%s. [%d] %s\\n\",\n            gettype($tmp), $tmp, mysqli_errno($link), mysqli_error($link));\n    // should work if the thread id is correct\n    mysqli_kill($link, mysqli_thread_id($link));\n    mysqli_close($link);\n    try {\n        mysqli_thread_id($link);\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
