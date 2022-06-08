// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_006.phpt
  it("SPL: iterator_to_array() without keys", function () {
    expect(parser.parseCode("<?php\n$it = new AppendIterator();\n$it->append(new ArrayIterator(array(1,2)));\n$it->append(new ArrayIterator(array(2,3)));\nvar_dump(iterator_to_array($it));\nvar_dump(iterator_to_array($it, false));\nvar_dump(iterator_to_array($it, true));\n?>")).toMatchSnapshot();
  });
});
