// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bccomp.phpt
  it("bccomp() function", function () {
    expect(parser.parseCode("<?php\necho bccomp(\"-1\", \"5\", 4),\"\\n\";\necho bccomp(\"1928372132132819737213\", \"8728932001983192837219398127471\"),\"\\n\";\necho bccomp(\"1.00000000000000000001\", \"1\", 2),\"\\n\";\necho bccomp(\"97321\", \"2321\"),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
