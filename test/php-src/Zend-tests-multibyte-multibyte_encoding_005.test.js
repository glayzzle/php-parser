// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/multibyte/multibyte_encoding_005.phpt
  it("encoding conversion from script encoding into internal encoding", function () {
    expect(parser.parseCode("<?php\n    function �\\�\\�\\($����)\n    {\n        echo $����;\n    }\n    �\\�\\�\\(\"�h���~�t�@�\\\");\n?>")).toMatchSnapshot();
  });
});
