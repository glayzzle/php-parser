// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcsub.phpt
  it("bcsub() function", function () {
    expect(parser.parseCode("<?php\necho bcsub(\"1\", \"2\"),\"\\n\";\necho bcsub(\"-1\", \"5\", 4),\"\\n\";\necho bcsub(\"1.555\", \"2.555\", 2),\"\\n\";\necho bcsub(\"8728932001983192837219398127471\", \"1928372132132819737213\", 2),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
