// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/sinh_basic.phpt
  it("Test return type and value for expected input sinh()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\necho \"sinh .5  = \";\nvar_dump(sinh(0.5));\nif (allowed_rounding_error(sinh(0.5),0.52109530549375)){\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"sinh -0.5  = \";\nvar_dump(sinh(-0.5));\nif (allowed_rounding_error(sinh(-0.5), -0.52109530549375)){\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"sinh 3  = \";\nvar_dump(sinh(3.0));\nif (allowed_rounding_error(sinh(3.0), 10.01787492741)){\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"sinh -3  = \";\nvar_dump(sinh(-3.0));\nif (allowed_rounding_error(sinh(-3.0), -10.01787492741)){\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
