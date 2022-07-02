// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/cos_basic.phpt
  it("Test return type and value for expected input cos()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\n// Use known values to test\n$sixty = M_PI / 3.0;\n$thirty = M_PI / 6.0;\n$ninety = M_PI /2.0;\n$oneeighty = M_PI;\n$twoseventy = M_PI * 1.5;\n$threesixty = M_PI * 2.0;\necho \"cos 30 = \";\nvar_dump(cos($thirty));\nif (allowed_rounding_error(cos($thirty),0.86602540378444)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"cos 60 = \";\nvar_dump(cos($sixty));\nif (allowed_rounding_error(cos($sixty),0.5)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"cos 90 = \";\nvar_dump(cos($ninety));\nif (allowed_rounding_error(cos($ninety),0.0)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"cos 180 = \";\nvar_dump(cos($oneeighty));\nif (allowed_rounding_error(cos($oneeighty),-1.0)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"cos 270 = \";\nvar_dump(cos($twoseventy));\nif (allowed_rounding_error(cos($twoseventy),0.0)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"cos 360 = \";\nvar_dump(cos($threesixty));\nif (allowed_rounding_error(cos($threesixty),1.0)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
