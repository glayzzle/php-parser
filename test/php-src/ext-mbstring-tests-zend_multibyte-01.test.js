// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/zend_multibyte-01.phpt
  it("zend multibyte (1)", function () {
    expect(parser.parseCode("<?php\n    function �\\�\\�\\($����)\n    {\n        echo $����;\n    }\n    �\\�\\�\\(\"�h���~�t�@�\\\");\n?>")).toMatchSnapshot();
  });
});
