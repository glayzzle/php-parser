// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug20261.phpt
  it("Bug #20261 (str_rot13() changes too much)", function () {
    expect(parser.parseCode("<?php\n $first = \"boo\";\n $second = $first;\n $rot = \"\";\n echo \"1: \".$first.\"\\n\";\n echo \"2: \".$second.\"\\n\";\n echo \"3: \".$rot.\"\\n\";\n $rot = str_rot13($second);\n echo \"1: \".$first.\"\\n\";\n echo \"2: \".$second.\"\\n\";\n echo \"3: \".$rot.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
