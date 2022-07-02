// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/constants.phpt
  it("Math constants", function () {
    expect(parser.parseCode("<?php\n$constants = array(\n    \"M_E\",\n    \"M_LOG2E\",\n    \"M_LOG10E\",\n    \"M_LN2\",\n    \"M_LN10\",\n    \"M_PI\",\n    \"M_PI_2\",\n    \"M_PI_4\",\n    \"M_1_PI\",\n    \"M_2_PI\",\n    \"M_SQRTPI\",\n    \"M_2_SQRTPI\",\n    \"M_LNPI\",\n    \"M_EULER\",\n    \"M_SQRT2\",\n    \"M_SQRT1_2\",\n    \"M_SQRT3\"\n);\nforeach($constants as $constant) {\n    printf(\"%-10s: %s\\n\", $constant, constant($constant));\n}\n?>")).toMatchSnapshot();
  });
});
