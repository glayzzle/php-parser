// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_039.phpt
  it("GC 039: Garbage created by replacing argument send by reference", function () {
    expect(parser.parseCode("<?php\n$out = new stdClass;\n$out->x = $out;\nmb_parse_str(\"a=b\", $out);\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
