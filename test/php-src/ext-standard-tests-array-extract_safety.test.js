// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_safety.phpt
  it("Test extract() for overwrite of GLOBALS", function () {
    expect(parser.parseCode("<?php\n$str = \"John\";\nvar_dump($GLOBALS[\"str\"]);\n/* Extracting Global Variables */\n$splat = array(\"foo\" => \"bar\");\nvar_dump(extract(array(\"GLOBALS\" => $splat, EXTR_OVERWRITE)));\nunset ($splat);\nvar_dump($GLOBALS[\"str\"]);\necho \"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
