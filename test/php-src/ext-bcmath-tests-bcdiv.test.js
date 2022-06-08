// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcdiv.phpt
  it("bcdiv() function", function () {
    expect(parser.parseCode("<?php\necho bcdiv(\"1\", \"2\"),\"\\n\";\necho bcdiv(\"1\", \"2\", 2),\"\\n\";\necho bcdiv(\"-1\", \"5\", 4),\"\\n\";\necho bcdiv(\"8728932001983192837219398127471\", \"1928372132132819737213\", 2),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
