// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_getflags_basic.phpt
  it("SPL: SplFileObject::getFlags basic", function () {
    expect(parser.parseCode("<?php\nfile_put_contents('SplFileObject_getflags_basic.csv', 'eerste;tweede;derde');\n$fo = new SplFileObject('SplFileObject_getflags_basic.csv');\n$fo->setFlags(SplFileObject::DROP_NEW_LINE);\nvar_dump($fo->getFlags());\n?>")).toMatchSnapshot();
  });
});
