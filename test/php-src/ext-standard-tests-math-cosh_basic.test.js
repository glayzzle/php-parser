// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/cosh_basic.phpt
  it("Test return type and value for expected input cosh()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\necho \"cosh .5  = \";\nvar_dump(cosh(0.5));\nif (allowed_rounding_error(cosh(0.5),1.1276259652064)){\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"cosh -0.5  = \";\nvar_dump(cosh(-0.5));\nif (allowed_rounding_error(cosh(-0.5),1.1276259652064)){\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"cosh 3  = \";\nvar_dump(cosh(3.0));\nif (allowed_rounding_error(cosh(3.0), 10.067661995778)){\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"cosh -3  = \";\nvar_dump(cosh(-3.0));\nif (allowed_rounding_error(cosh(-3.0), 10.067661995778)){\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
