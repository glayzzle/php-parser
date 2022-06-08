// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcmul.phpt
  it("bcmul() function", function () {
    expect(parser.parseCode("<?php\necho bcmul(\"1\", \"2\"),\"\\n\";\necho bcmul(\"-3\", \"5\"),\"\\n\";\necho bcmul(\"1234567890\", \"9876543210\"),\"\\n\";\necho bcmul(\"2.5\", \"1.5\", 2),\"\\n\";\necho bcmul(\"2.555\", \"1.555\", 2),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
