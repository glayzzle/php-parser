// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/asin_basic.phpt
  it("Test return type and value for expected input asin()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\n//output is in degrees\necho \"asin .5  = \";\n$asinv1 = 360.0  * asin(0.5) / (2.0 * M_PI );\nvar_dump($asinv1);\nif (allowed_rounding_error($asinv1 ,30 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"asin 0.86602540378444 = \";\n$asinv2 = 360.0  * asin(0.86602540378444) / (2.0 * M_PI );\nvar_dump($asinv2);\nif (allowed_rounding_error($asinv2 ,60 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"asin 1.0 = \";\n$asinv3 = 360.0  * asin(1.0) / (2.0 * M_PI );\nvar_dump($asinv3);\nif (allowed_rounding_error($asinv3 ,90 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"asin 0.0 = \";\n$asinv4 = 360.0  * asin(0.0) / (2.0 * M_PI );\nvar_dump($asinv4);\nif (allowed_rounding_error($asinv4 ,0 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
