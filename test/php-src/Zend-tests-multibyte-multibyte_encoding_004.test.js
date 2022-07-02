// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/multibyte/multibyte_encoding_004.phpt
  it("test for mbstring script_encoding for flex unsafe encoding (Shift_JIS)", function () {
    expect(parser.parseCode("<?php\n    function �\\�\\�\\($����)\n    {\n        echo $����;\n    }\n    �\\�\\�\\(\"�h���~�t�@�\\\");\n?>")).toMatchSnapshot();
  });
});
