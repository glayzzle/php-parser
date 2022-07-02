// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/timeout_variation_2.phpt
  it("Timeout within array_map", function () {
    expect(parser.parseCode("<?php\nset_time_limit(1);\n$a = array(1, 1);\narray_map(\"sleep\", $a);\n?>\nnever reached here")).toMatchSnapshot();
  });
});
