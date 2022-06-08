// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71428.3.phpt
  it("bug #71428: Validation type inheritance with = NULL", function () {
    expect(parser.parseCode("<?php\nclass A { }\nclass B           {  public function m(A $a = NULL, $n) { echo \"B.m\";} };\nclass C extends B {  public function m(A $a       , $n) { echo \"C.m\";} };\n?>")).toMatchSnapshot();
  });
});
