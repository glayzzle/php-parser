// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcmod.phpt
  it("bcmod() function", function () {
    expect(parser.parseCode("<?php\necho bcmod(\"11\", \"2\"),\"\\n\";\necho bcmod(\"-1\", \"5\"),\"\\n\";\necho bcmod(\"8728932001983192837219398127471\", \"1928372132132819737213\"),\"\\n\";\necho bcmod(\"3.5\", \"4\", 1),\"\\n\";\necho bcmod(\"1071\", \"357.5\"),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
