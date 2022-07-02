// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/004.phpt
  it("Test natsort and natcasesort", function () {
    expect(parser.parseCode("<?php\n$data = array(\n    'Test1',\n    'teST2'=>0,\n    5=>'test2',\n    'abc'=>'test10',\n    'test21'\n);\nvar_dump($data);\nnatsort($data);\nvar_dump($data);\nnatcasesort($data);\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
