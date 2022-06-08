// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/atanh_basic.phpt
  it("Test return type and value for expected input atanh()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\necho \"atanh  0.46211715726001 = \";\nvar_dump(atanh(0.46211715726001));\nif (allowed_rounding_error(atanh(0.46211715726001), 0.5))\n{\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"atanh  0.99505475368673 = \";\nvar_dump(atanh(0.99505475368673));\nif (allowed_rounding_error(atanh(0.99505475368673), 3.0))\n{\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
