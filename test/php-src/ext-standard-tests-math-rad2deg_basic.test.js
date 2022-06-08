// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/rad2deg_basic.phpt
  it("Test return type and value for expected input rad2deg()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\n$arg_0 = 0.0;\n$arg_1 = 1.570796327;\n$arg_2 = 3.141592654;\n$arg_3 = 6.283185307;\necho \"rad2deg $arg_0= \";\n$r0 = rad2deg($arg_0);\nvar_dump($r0);\nif (allowed_rounding_error($r0 ,0 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"rad2deg $arg_1 = \";\n$r1 = rad2deg($arg_1);\nvar_dump($r1);\nif (allowed_rounding_error($r1 ,90.000000011752)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"rad2deg $arg_2  = \";\n$r2 = rad2deg($arg_2);\nvar_dump($r2);\nif (allowed_rounding_error($r2 ,180.0000000235 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"rad2deg $arg_3 = \";\n$r3 = rad2deg($arg_3);\nvar_dump($r3);\nif (allowed_rounding_error($r3 ,359.99999998971 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
