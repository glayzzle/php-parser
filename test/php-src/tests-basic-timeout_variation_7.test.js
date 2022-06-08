// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/timeout_variation_7.phpt
  it("Timeout within for loop", function () {
    expect(parser.parseCode("<?php\nset_time_limit(1);\n$y = 0;\nfor ($i = 0; $i < INF; $i++) {\n    $y++;\n}\n?>\nnever reached here")).toMatchSnapshot();
  });
});
