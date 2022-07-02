// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_start_error_001.phpt
  it("Test wrong number of arguments and wrong arg types for ob_start()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in main/output.c\n*/\nfunction justPrint($str) {\n    return $str;\n}\n$arg_1 = \"justPrint\";\n$arg_2 = 0;\n$arg_3 = false;\n$extra_arg = 1;\necho \"\\nArg 1 wrong type\\n\";\nvar_dump(ob_start(1.5));\n?>")).toMatchSnapshot();
  });
});
