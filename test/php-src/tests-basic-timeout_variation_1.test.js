// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/timeout_variation_1.phpt
  it("Timeout within function", function () {
    expect(parser.parseCode("<?php\nset_time_limit(1);\nsleep(1);\nsleep(1);\n?>\nnever reached here")).toMatchSnapshot();
  });
});
