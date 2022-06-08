// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug43614.phpt
  it("Bug #43614 (incorrect processing of numerical string keys of array in arbitrary serialized data)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nvar_dump($a = unserialize('a:2:{s:2:\"10\";i:1;s:2:\"01\";i:2;}'));\nvar_dump($a['10']);\nvar_dump($a['01']);\n?>")).toMatchSnapshot();
  });
});
