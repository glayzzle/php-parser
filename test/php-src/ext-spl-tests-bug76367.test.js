// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug76367.phpt
  it("Bug #76367 (NoRewindIterator segfault 11)", function () {
    expect(parser.parseCode("<?php\n$arr = [1,3,55,66,43,6];\n$iter = new NoRewindIterator(new ArrayIterator($arr));\nwhile($iter->valid()) {\n        $iter->next();\n}\nvar_dump($iter->current());\n?>")).toMatchSnapshot();
  });
});
