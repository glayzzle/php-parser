// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/deg2rad_basic.phpt
  it("Test return type and value for expected input deg2rad()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\n$arg_0 = 0.0;\n$arg_1 = 90.0;\n$arg_2 = 180.0;\n$arg_3 = 360.0;\necho \"deg2rad $arg_0 = \";\n$r0 = deg2rad($arg_0);\nvar_dump($r0);\nif (allowed_rounding_error($r0 ,0 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"deg2rad $arg_1 = \";\n$r1 = deg2rad($arg_1);\nvar_dump($r1);\nif (allowed_rounding_error($r1 ,1.5707963267949 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"deg2rad $arg_2 = \";\n$r2 = deg2rad($arg_2);\nvar_dump($r2);\nif (allowed_rounding_error($r2 ,3.1415926535898 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"deg2rad $arg_3 = \";\n$r3 = deg2rad($arg_3);\nvar_dump($r3);\nif (allowed_rounding_error($r3 ,6.2831853071796 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
