// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_flip.phpt
  it("basic array_flip test", function () {
    expect(parser.parseCode("<?php\n$trans = array(\"a\" => 1,\n               \"b\" => 1,\n               \"c\" => 2,\n               \"z\" => 0,\n               \"d\" => TRUE,\n               \"E\" => FALSE,\n               \"F\" => NULL,\n               0 => \"G\",\n               1 => \"h\",\n               2 => \"i\");\n$trans = array_flip($trans);\nvar_dump($trans);\n?>")).toMatchSnapshot();
  });
});
