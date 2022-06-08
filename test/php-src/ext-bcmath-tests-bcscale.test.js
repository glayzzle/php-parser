// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcscale.phpt
  it("bcscale() function", function () {
    expect(parser.parseCode("<?php\necho bcadd(\"1\", \"2\"),\"\\n\";\nbcscale(2);\necho bcadd(\"1\", \"2\"),\"\\n\";\nbcscale(10);\necho bcadd(\"1\", \"2\"),\"\\n\";\nbcscale(0);\necho bcadd(\"1\", \"2\"),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
