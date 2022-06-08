// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/const_dereference_002.phpt
  it("Const string dereference", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nvar_dump(\"foobar\"[3]);\nvar_dump(\"foobar\"[2][0]);\nvar_dump(\"foobar\"[\"0foo\"][\"0bar\"]);\n?>")).toMatchSnapshot();
  });
});
