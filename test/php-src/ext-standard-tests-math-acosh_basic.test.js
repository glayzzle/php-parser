// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/acosh_basic.phpt
  it("Test return type and value for expected input acosh()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\necho \"acosh  1.1276259652064= \";\nvar_dump(acosh(1.1276259652064));\nif (allowed_rounding_error(acosh(1.1276259652064), 0.5))\n{\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"acosh 10.067661995778= \";\nvar_dump(acosh(10.067661995778));\nif (allowed_rounding_error(acosh(10.067661995778), 3.0))\n{\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
