// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug71952.phpt
  it("Bug #71952 (Corruption inside imageaffinematrixget)", function () {
    expect(parser.parseCode("<?php\n$vals=[str_repeat(\"A\",\"200\"),0,1,2,3,4,5,6,7,8,9];\nimageaffinematrixget(4,$vals[0]);\nvar_dump($vals[0]);\n?>")).toMatchSnapshot();
  });
});
