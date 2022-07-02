// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_search1.phpt
  it("array_search() tests", function () {
    expect(parser.parseCode("<?php\n$a = array(1=>0, 2=>1, 4=>3, \"a\"=>\"b\", \"c\"=>\"d\");\nvar_dump(array_search(\"a\",$a));\nvar_dump(array_search(\"0\",$a, true));\nvar_dump(array_search(\"0\",$a));\nvar_dump(array_search(0,$a));\nvar_dump(array_search(1,$a));\nvar_dump(array_search(\"d\",$a, true));\nvar_dump(array_search(\"d\",$a));\nvar_dump(array_search(-1,$a, true));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
