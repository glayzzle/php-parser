// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/asinh_basic.phpt
  it("Test return type and value for expected input asinh()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\necho \"asinh  0.52109530549375= \";\nvar_dump(asinh(0.52109530549375));\nif (allowed_rounding_error(asinh(0.52109530549375), 0.5))\n{\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"asinh 10.01787492741= \";\nvar_dump(asinh(10.01787492741));\nif (allowed_rounding_error(asinh(10.01787492741), 3.0))\n{\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
