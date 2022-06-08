// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_get_clean_basic_002.phpt
  it("Test basic behaviour of ob_get_clean()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in main/output.c\n*/\nob_start();\necho \"Hello World\";\n$out = ob_get_clean();\n$out = strtolower($out);\nvar_dump($out);\n?>")).toMatchSnapshot();
  });
});
