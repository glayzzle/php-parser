// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/timeout_variation_0.phpt
  it("Timeout within while loop", function () {
    expect(parser.parseCode("<?php\nset_time_limit(1);\n$x = true;\n$y = 0;\nwhile ($x) {\n    $y++;\n}\n?>\nnever reached here")).toMatchSnapshot();
  });
});
