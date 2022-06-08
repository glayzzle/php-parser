// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcpow.phpt
  it("bcpow() function", function () {
    expect(parser.parseCode("<?php\necho bcpow(\"1\", \"2\"),\"\\n\";\necho bcpow(\"-2\", \"5\", 4),\"\\n\";\necho bcpow(\"2\", \"64\"),\"\\n\";\necho bcpow(\"-2.555\", \"5\", 2),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
