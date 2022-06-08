// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_end_flush_basic_001.phpt
  it("Test ob_end_flush() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ob_end_flush() : basic functionality ***\\n\";\n// Zero arguments\necho \"\\n-- Testing ob_end_flush() function with Zero arguments --\\n\";\nvar_dump(ob_end_flush());\nob_start();\nvar_dump(ob_end_flush());\nob_start();\necho \"Hello\\n\";\nvar_dump(ob_end_flush());\nvar_dump(ob_end_flush());\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
