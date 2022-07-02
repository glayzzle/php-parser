// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/bug72625.phpt
  it("Bug #72625 realpath() fails on very long argument.", function () {
    expect(parser.parseCode("<?php\n$base = sys_get_temp_dir() . \"/\" . md5(uniqid());\nwhile (strlen($base) < 260) {\n    $base = \"$base/\" . md5(uniqid());\n}\n$f0 = \"$base/_test/documents/projects/myproject/vendor/name/library/classpath\";\n$f1 = \"$f0/../../../../../../../../_test/documents/projects/myproject/vendor/name/library/../../../../../../../_test/documents/projects/myproject/vendor/name/library/classpath\";\nmkdir($f0, 0777, true);\nvar_dump(\n    $f0,\n    file_exists($f0),\n    realpath($f0),\n    dirname($f0),\n    $f1,\n    file_exists($f1),\n    realpath($f1),\n    dirname($f1)\n);\n$tmp = $f0;\nwhile ($tmp > $base) {\n    rmdir($tmp);\n    $tmp = dirname($tmp);\n}\n?>")).toMatchSnapshot();
  });
});
