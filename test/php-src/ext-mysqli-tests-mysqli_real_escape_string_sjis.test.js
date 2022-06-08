// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_real_escape_string_sjis.phpt
  it("mysqli_real_escape_string() - sjis", function () {
    expect(parser.parseCode("<?php\n    require_once(\"connect.inc\");\n    require_once('table.inc');\n    var_dump(mysqli_set_charset($link, \"sjis\"));\n    if ('?p??\\\\\\\\?p??' !== ($tmp = mysqli_real_escape_string($link, '?p??\\\\?p??')))\n        printf(\"[004] Expecting \\\\\\\\, got %s\\n\", $tmp);\n    if ('?p??\\\"?p??' !== ($tmp = mysqli_real_escape_string($link, '?p??\"?p??')))\n        printf(\"[005] Expecting \\\", got %s\\n\", $tmp);\n    if (\"?p??\\'?p??\" !== ($tmp = mysqli_real_escape_string($link, \"?p??'?p??\")))\n        printf(\"[006] Expecting ', got %s\\n\", $tmp);\n    if (\"?p??\\\\n?p??\" !== ($tmp = mysqli_real_escape_string($link, \"?p??\\n?p??\")))\n        printf(\"[007] Expecting \\\\n, got %s\\n\", $tmp);\n    if (\"?p??\\\\r?p??\" !== ($tmp = mysqli_real_escape_string($link, \"?p??\\r?p??\")))\n        printf(\"[008] Expecting \\\\r, got %s\\n\", $tmp);\n    if (\"?p??\\\\0?p??\" !== ($tmp = mysqli_real_escape_string($link, \"?p??\" . chr(0) . \"?p??\")))\n        printf(\"[009] Expecting %s, got %s\\n\", \"?p??\\\\0?p??\", $tmp);\n    var_dump(mysqli_query($link, \"INSERT INTO test(id, label) VALUES (100, '?p')\"));\n    mysqli_close($link);\n    print \"done!\";\n?>")).toMatchSnapshot();
  });
});
