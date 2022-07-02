// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_end_clean_basic_001.phpt
  it("Test return type and value, as well as basic behaviour, for ob_end_clean()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in main/output.c\n*/\nvar_dump(ob_end_clean());\nob_start();\nvar_dump(ob_end_clean());\nob_start();\necho \"Hello\";\nvar_dump(ob_end_clean());\nvar_dump(ob_end_clean());\n?>")).toMatchSnapshot();
  });
});
