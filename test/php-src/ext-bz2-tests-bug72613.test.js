// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/bug72613.phpt
  it("Bug #72613 (Inadequate error handling in bzread())", function () {
    expect(parser.parseCode("<?php\n$fp = bzopen(__DIR__.'/72613.bz2', 'r');\nif ($fp === FALSE) {\n    exit(\"ERROR: bzopen()\");\n}\n$data = \"\";\nwhile (!feof($fp)) {\n    $res = bzread($fp);\n    if ($res === FALSE) {\n        exit(\"ERROR: bzread()\");\n    }\n    $data .= $res;\n}\nbzclose($fp);\n?>\nDONE")).toMatchSnapshot();
  });
});
