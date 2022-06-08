// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bug21523.phpt
  it("Bug #21523 (number_format tries to allocate negative amount of memory)", function () {
    expect(parser.parseCode("<?php\nset_time_limit(5);\nvar_dump(number_format(-2000, 2768));\necho \"OK\";\n?>")).toMatchSnapshot();
  });
});
