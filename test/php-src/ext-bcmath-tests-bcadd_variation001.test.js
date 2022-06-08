// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcadd_variation001.phpt
  it("bcadd() with non-integers", function () {
    expect(parser.parseCode("<?php\necho bcadd(\"2.2\", \"4.3\", \"2\").\"\\n\";\necho bcadd(\"2.2\", \"-7.3\", \"1\").\"\\n\";\necho bcadd(\"-4.27\", \"7.3\");\n?>")).toMatchSnapshot();
  });
});
