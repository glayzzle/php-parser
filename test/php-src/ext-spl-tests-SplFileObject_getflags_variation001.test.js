// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileObject_getflags_variation001.phpt
  it("SPL: SplFileObject::getFlags", function () {
    expect(parser.parseCode("<?php\n$fo = new SplFileObject(__FILE__);\n$fo->setFlags(SplFileObject::DROP_NEW_LINE);\nvar_dump($fo->getFlags());\n$fo->setFlags(SplFileObject::READ_AHEAD);\nvar_dump($fo->getFlags());\n$fo->setFlags(SplFileObject::SKIP_EMPTY);\nvar_dump($fo->getFlags());\n$fo->setFlags(SplFileObject::READ_CSV);\nvar_dump($fo->getFlags());\n?>")).toMatchSnapshot();
  });
});
