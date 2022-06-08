// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_get_clean_basic_001.phpt
  it("Test return type and value, as well as basic behaviour, of ob_get_clean()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in main/output.c\n*/\nvar_dump(ob_get_clean());\nob_start();\necho \"Hello World\";\nvar_dump(ob_get_clean());\n?>")).toMatchSnapshot();
  });
});
