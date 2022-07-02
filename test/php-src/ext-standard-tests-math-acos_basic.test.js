// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/acos_basic.phpt
  it("Test return type and value for expected input acos()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\n//output is in degrees\necho \"acos .5  = \";\n$acosv1 = 360.0  * acos(0.5) / (2.0 * M_PI );\nvar_dump($acosv1);\nif (allowed_rounding_error($acosv1 ,60 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"acos 0.86602540378444 = \";\n$acosv2 = 360.0  * acos(0.86602540378444) / (2.0 * M_PI );\nvar_dump($acosv2);\nif (allowed_rounding_error($acosv2 ,30 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"acos 1.0 = \";\n$acosv3 = 360.0  * acos(1.0) / (2.0 * M_PI);\nvar_dump($acosv3);\nif (allowed_rounding_error($acosv3 ,0 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"acos 0.0 = \";\n$acosv4 = 360.0  * acos(0.0) / (2.0 * M_PI );\nvar_dump($acosv4);\nif (allowed_rounding_error($acosv3 ,0 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
