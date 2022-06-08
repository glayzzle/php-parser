// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_search_regs.phpt
  it("Funktionstest mb_ereg_search_regs()", function () {
    expect(parser.parseCode("<?php\n    // homepage:\n    //$mb_str = \"Алексей Федорович Карамазов был Алексей Федорович Карамазов был kyrillischer string string\";\n    //      = \"Lorem ipsum dolor sit amet\"\n    mb_ereg_search_init(\"Алексей Федорович Карамазов был Алексей Федорович Карамазов был\");\n    $match= mb_ereg_search_regs(\"ов\");\n    var_dump($match);\n?>")).toMatchSnapshot();
  });
});
