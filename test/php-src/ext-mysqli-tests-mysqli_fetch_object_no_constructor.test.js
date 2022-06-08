// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_fetch_object_no_constructor.phpt
  it("mysqli_fetch_object() - calling constructor on class wo constructor", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $tmp    = NULL;\n    $link   = NULL;\n    require('table.inc');\n    if (!$res = mysqli_query($link, \"SELECT id AS ID, label FROM test AS TEST ORDER BY id LIMIT 5\")) {\n        printf(\"[001] [%d] %s\\n\", mysqli_errno($link), mysqli_error($link));\n    }\n    class mysqli_fetch_object_test {\n        public $a = null;\n        public $b = null;\n        public function toString() {\n            var_dump($this);\n        }\n    }\n    printf(\"No exception with PHP:\\n\");\n    var_dump($obj = new mysqli_fetch_object_test(1, 2));\n    printf(\"\\nException with mysqli. Note that at all other places we throws errors but no exceptions unless the error mode has been changed:\\n\");\n    try {\n        var_dump($obj = mysqli_fetch_object($res, 'mysqli_fetch_object_test', array(1, 2)));\n    } catch (Exception $e) {\n        printf(\"Exception: %s\\n\", $e->getMessage());\n    }\n    printf(\"\\nFatal error with PHP (but no exception!):\\n\");\n    var_dump($obj->mysqli_fetch_object_test(1, 2));\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
