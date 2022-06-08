// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg-compat-02.phpt
  it("mb_ereg() compat test 2", function () {
    expect(parser.parseCode("<?php\n/* (counterpart: ext/standard/tests/reg/005.phpt) */\n  $a=\"This is a nice and simple string\";\n  echo mb_ereg(\".*(is).*(is).*\",$a,$registers);\n  echo \"\\n\";\n  echo $registers[0];\n  echo \"\\n\";\n  echo $registers[1];\n  echo \"\\n\";\n  echo $registers[2];\n  echo \"\\n\";\n?>")).toMatchSnapshot();
  });
});
