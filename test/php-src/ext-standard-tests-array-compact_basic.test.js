// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/compact_basic.phpt
  it("Test compact() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality\n */\necho \"*** Testing compact() : basic functionality ***\\n\";\n$a=1;\n$b=0.2;\n$c=true;\n$d=array(\"key\"=>\"val\");\n$e=NULL;\n$f=\"string\";\n// simple array test\nvar_dump (compact(array(\"a\", \"b\", \"c\", \"d\", \"e\", \"f\")));\n// simple parameter test\nvar_dump (compact(\"a\", \"b\", \"c\", \"d\", \"e\", \"f\"));\nvar_dump (compact(array(\"keyval\"=>\"a\", \"b\"=>\"b\")));\nvar_dump(compact(array(\"g\")));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
