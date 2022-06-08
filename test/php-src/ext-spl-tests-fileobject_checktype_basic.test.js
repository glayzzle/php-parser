// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fileobject_checktype_basic.phpt
  it("SPL: SplFileObject::isFile/isDir/isLink", function () {
    expect(parser.parseCode("<?php\n$s = new SplFileObject(__FILE__);\nvar_dump($s->isFile());\nvar_dump($s->isDir());\nvar_dump($s->isLink());\n?>")).toMatchSnapshot();
  });
});
