// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/log10_basic.phpt
  it("Test return type and value for expected input log10()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\n$arg_0 = 1.0;\n$arg_1 = 10.0;\n$arg_2 = 100.0;\necho \"log10 $arg_0 = \";\n$r0 = log10($arg_0);\nvar_dump($r0);\nif (allowed_rounding_error($r0 ,0.0 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"log10 $arg_1 = \";\n$r1 = log10($arg_1);\nvar_dump($r1);\nif (allowed_rounding_error($r1 ,1.0 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"log10 $arg_2 = \";\n$r2 = log10($arg_2);\nvar_dump($r2);\nif (allowed_rounding_error($r2 ,2.0 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
