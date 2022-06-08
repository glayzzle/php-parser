// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcadd.phpt
  it("bcadd() function", function () {
    expect(parser.parseCode("<?php\necho bcadd(\"1\", \"2\"),\"\\n\";\necho bcadd(\"-1\", \"5\", 4),\"\\n\";\necho bcadd(\"1928372132132819737213\", \"8728932001983192837219398127471\", 2),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
