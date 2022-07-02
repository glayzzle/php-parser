// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_clean_basic_001.phpt
  it("Test ob_clean() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ob_clean() : basic functionality ***\\n\";\n// Zero arguments\necho \"\\n-- Testing ob_clean() function with Zero arguments --\\n\";\nvar_dump( ob_clean() );\nob_start();\necho \"You should never see this.\";\nvar_dump(ob_clean());\necho \"Ensure the buffer is still active after the clean.\";\n$out = ob_get_clean();\nvar_dump($out);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
