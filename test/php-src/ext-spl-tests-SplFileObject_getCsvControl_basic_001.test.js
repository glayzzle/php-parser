// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_getCsvControl_basic_001.phpt
  it("SplFileObject::getCsvControl function - basic test", function () {
    expect(parser.parseCode("<?php\n$obj = New SplFileObject(__DIR__.'/SplFileObject_testinput.csv');\nvar_dump($obj->getCsvControl());\n?>")).toMatchSnapshot();
  });
});
