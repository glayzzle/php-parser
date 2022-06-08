// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug20539.phpt
  it("Bug #20539 (PHP CLI Segmentation Fault)", function () {
    expect(parser.parseCode("<?php\n    print \"good :)\\n\";\n    $filename = __DIR__ . '/sess_' . session_id();\n    var_dump(file_exists($filename));\n    @unlink($filename);\n?>")).toMatchSnapshot();
  });
});
