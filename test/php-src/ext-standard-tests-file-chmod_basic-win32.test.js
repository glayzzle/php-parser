// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/chmod_basic-win32.phpt
  it("chmod() basic functionality", function () {
    expect(parser.parseCode("<?php\ndefine(\"PERMISSIONS_MASK\", 0777);\n$filename = __FILE__ . \".tmp\";\n$fd = fopen($filename, \"w+\");\nfclose($fd);\nfor ($perms_to_set = 0777; $perms_to_set >= 0; $perms_to_set--) {\n    chmod($filename, $perms_to_set);\n    $set_perms = (fileperms($filename) & PERMISSIONS_MASK);\n    clearstatcache();\n    printf(\"Setting mode %o gives mode %o\\n\", $perms_to_set, $set_perms);\n}\nvar_dump(chmod($filename, 0777));\nunlink($filename);\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
