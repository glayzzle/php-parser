// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_real_escape_string.phpt
  it("mysqli_real_escape_string()", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require('table.inc');\n    if ('\\\\\\\\' !== ($tmp = mysqli_real_escape_string($link, '\\\\')))\n        printf(\"[004] Expecting \\\\\\\\, got %s\\n\", $tmp);\n    if ('\\\"' !== ($tmp = mysqli_real_escape_string($link, '\"')))\n        printf(\"[005] Expecting \\\", got %s\\n\", $tmp);\n    if (\"\\'\" !== ($tmp = mysqli_real_escape_string($link, \"'\")))\n        printf(\"[006] Expecting ', got %s\\n\", $tmp);\n    if (\"\\\\n\" !== ($tmp = mysqli_real_escape_string($link, \"\\n\")))\n        printf(\"[007] Expecting \\\\n, got %s\\n\", $tmp);\n    if (\"\\\\r\" !== ($tmp = mysqli_real_escape_string($link, \"\\r\")))\n        printf(\"[008] Expecting \\\\r, got %s\\n\", $tmp);\n    if (\"foo\\\\0bar\" !== ($tmp = mysqli_real_escape_string($link, \"foo\" . chr(0) . \"bar\")))\n        printf(\"[009] Expecting %s, got %s\\n\", \"foo\\\\0bar\", $tmp);\n    mysqli_close($link);\n    try {\n        mysqli_real_escape_string($link, 'foo');\n    } catch (Error $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
