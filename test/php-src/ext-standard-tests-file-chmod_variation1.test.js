// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/chmod_variation1.phpt
  it("chmod() on a directory", function () {
    expect(parser.parseCode("<?php\ndefine(\"PERMISSIONS_MASK\", 0777);\n$dirname = __DIR__ . \"/\" . basename(__FILE__, \".php\") . \"testdir\";\nmkdir($dirname);\nfor ($perms_to_set = 0777; $perms_to_set >= 0; $perms_to_set--) {\n    chmod($dirname, $perms_to_set);\n    $set_perms = (fileperms($dirname) & PERMISSIONS_MASK);\n    clearstatcache();\n    if ($set_perms != $perms_to_set) {\n        printf(\"Error: %o does not match %o\\n\", $set_perms, $perms_to_set);\n    }\n}\nvar_dump(chmod($dirname, 0777));\nrmdir($dirname);\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
