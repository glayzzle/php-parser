// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/chmod_basic.phpt
  it("chmod() basic functionality", function () {
    expect(parser.parseCode("<?php\ndefine(\"MODE_MASK\", 07777);\n$filename = __FILE__ . \".tmp\";\n$fd = fopen($filename, \"w+\");\nfclose($fd);\nfor ($perms_to_set = 07777; $perms_to_set >= 0; $perms_to_set--) {\n    chmod($filename, $perms_to_set);\n    $set_perms = (fileperms($filename) & MODE_MASK);\n    clearstatcache();\n    if ($set_perms != $perms_to_set) {\n        printf(\"Error: %o does not match %o\\n\", $set_perms, $perms_to_set);\n    }\n}\nvar_dump(chmod($filename, 0777));\nunlink($filename);\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
