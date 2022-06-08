// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bccomp_variation001.phpt
  it("bccomp() with non-integers", function () {
    expect(parser.parseCode("<?php\necho bccomp(\"2.2\", \"2.2\", \"2\").\"\\n\";\necho bccomp(\"2.32\", \"2.2\", \"2\").\"\\n\";\necho bccomp(\"2.29\", \"2.3\", \"2\");\n?>")).toMatchSnapshot();
  });
});
