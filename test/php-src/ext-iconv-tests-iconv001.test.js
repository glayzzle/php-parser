// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/iconv001.phpt
  it("iconv() test 1", function () {
    expect(parser.parseCode("<?php\necho \"iconv extension is available\\n\";\n$test = \"���\";\nvar_dump(\"ISO-8859-1: $test\");\nvar_dump(\"UTF-8: \".iconv( \"ISO-8859-1\", \"UTF-8\", $test ) );\n?>")).toMatchSnapshot();
  });
});
