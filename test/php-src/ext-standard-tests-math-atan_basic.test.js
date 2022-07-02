// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/atan_basic.phpt
  it("Test return type and value for expected input atan()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\necho \"atan 1.7320508075689 = \";\n$atan1 = 360 * atan(1.7320508075689) / (2.0 * M_PI);\nvar_dump($atan1);\nif (allowed_rounding_error($atan1 ,60 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"atan 0.57735026918963 = \";\n$atan2 = 360 * atan(0.57735026918963) / (2.0 * M_PI);\nvar_dump($atan2);\nif (allowed_rounding_error($atan2 ,30 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
