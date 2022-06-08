// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/tanh_basic.phpt
  it("Test return type and value for expected input tanh()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\necho \"tanh .5  = \";\nvar_dump(tanh(0.5));\nif (allowed_rounding_error(tanh(0.5), 0.46211715726001)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"tanh -0.5  = \";\nvar_dump(tanh(-0.5));\nif (allowed_rounding_error(tanh(-0.5), -0.46211715726001)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"tanh 3  = \";\nvar_dump(tanh(3.0));\nif (allowed_rounding_error(tanh(3.0),0.99505475368673 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"tanh -3  = \";\nvar_dump(tanh(-3.0));\nif (allowed_rounding_error(tanh(-3.0),-0.99505475368673 )) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
