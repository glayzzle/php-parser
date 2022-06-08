// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/nan_001.phpt
  it("NaN handling: 001", function () {
    expect(parser.parseCode("<?php\n$b = NAN;\nfor ($i = 0; $i < 3; $i++) {\n    if ($b) { echo \"nan is true\\n\"; }\n    else { echo \"nan is false\\n\"; }\n}\t\n?>")).toMatchSnapshot();
  });
});
