// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_fscanf_basic.phpt
  it("SplFileObject::fscanf function - basic functionality test", function () {
    expect(parser.parseCode("<?php\n$obj = New SplFileObject(__DIR__.'/SplFileObject_testinput.csv');\nvar_dump($obj->fscanf('%s'));\n?>")).toMatchSnapshot();
  });
});
