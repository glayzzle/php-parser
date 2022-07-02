// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_error_002.phpt
  it("Test wrong number of arguments and wrong arg types for ob_start()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in main/output.c\n*/\nClass C {\n    static function f($str) {\n        return $str;\n    }\n}\nvar_dump(ob_start(array(\"nonExistent\",\"f\")));\nvar_dump(ob_start(array(\"C\",\"nonExistent\")));\nvar_dump(ob_start(\"C::no\"));\nvar_dump(ob_start(\"no\"));\necho \"done\"\n?>")).toMatchSnapshot();
  });
});
