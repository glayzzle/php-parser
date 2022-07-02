// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/sin_basic.phpt
  it("Test return type and value for expected input sin()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\n// Use known values to test\n$sixty = M_PI / 3.0;\n$thirty = M_PI / 6.0;\n$ninety = M_PI /2.0;\n$oneeighty = M_PI;\n$twoseventy = M_PI * 1.5;\n$threesixty = M_PI * 2.0;\necho \"sin 30 = \";\nvar_dump(sin($thirty));\nif (allowed_rounding_error(sin($thirty),0.5)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"sin 60 = \";\nvar_dump(sin($sixty));\nif (allowed_rounding_error(sin($sixty),0.86602540378444)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"sin 90 = \";\nvar_dump(sin($ninety));\nif (allowed_rounding_error(sin($ninety),1.0)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"sin 180 = \";\nvar_dump(sin($oneeighty));\nif (allowed_rounding_error(sin($oneeighty),0.0)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"sin 270 = \";\nvar_dump(sin($twoseventy));\nif (allowed_rounding_error(sin($twoseventy),-1.0)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"sin 360 = \";\nvar_dump(sin($threesixty));\nif (allowed_rounding_error(sin($threesixty),0.0)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
