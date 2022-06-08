// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/tan_basic.phpt
  it("Test return type and value for expected input tan()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/math.c\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/allowed_rounding_error.inc\");\n$sixty = M_PI / 3.0;\n$thirty = M_PI / 6.0;\necho \"tan 60 = \";\nvar_dump(tan($sixty));\nif (allowed_rounding_error(tan($sixty),1.7320508075689)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\necho \"tan 30 = \";\nvar_dump(tan($thirty));\nif (allowed_rounding_error(tan($thirty),0.57735026918963)) {\n    echo \"Pass\\n\";\n}\nelse {\n    echo \"Fail\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
