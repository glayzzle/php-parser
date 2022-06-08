// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_connect_oo_warnings.phpt
  it("new mysqli()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    $myhost = 'invalidhost';\n    $link   = NULL;\n    print \"1) bail\\n\";\n    if (!is_object($mysqli = new mysqli($myhost)) || ('mysqli' !== get_class($mysqli)))\n        printf(\"[001] Expecting NULL, got %s/%s\\n\", gettype($mysqli), (is_object($mysqli)) ? var_export($mysqli, true) : $mysqli);\n    print \"2) be quiet\\n\";\n    if (!is_object($mysqli = @new mysqli($myhost)) || ('mysqli' !== get_class($mysqli)))\n        printf(\"[002] Expecting NULL, got %s/%s\\n\", gettype($mysqli), (is_object($mysqli)) ? var_export($mysqli, true) : $mysqli);\n    var_dump(mysqli_connect_error());\n    var_dump(mysqli_connect_errno());\n    print \"3) bail\\n\";\n    if (false !== ($link = mysqli_connect($myhost))) {\n        printf(\"[003] Expecting boolean/false, got %s/%s\\n\", gettype($link), $link);\n    }\n    print \"4) be quiet\\n\";\n    if (false !== ($link = @mysqli_connect($myhost))) {\n        printf(\"[004] Expecting boolean/false, got %s/%s\\n\", gettype($link), $link);\n    }\n    var_dump(mysqli_connect_error());\n    var_dump(mysqli_connect_errno());\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
