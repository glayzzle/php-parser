// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_get_level_basic_001.phpt
  it("Test ob_get_level() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ob_get_level() : basic functionality ***\\n\";\n// Zero arguments\necho \"\\n-- Testing ob_get_level() function with Zero arguments --\\n\";\nvar_dump(ob_get_level());\nob_start();\nvar_dump(ob_get_level());\nob_start();\nvar_dump(ob_get_level());\nob_end_flush();\nvar_dump(ob_get_level());\nob_end_flush();\nvar_dump(ob_get_level());\nob_end_flush();\nvar_dump(ob_get_level());\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
