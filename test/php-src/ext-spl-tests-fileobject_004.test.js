// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fileobject_004.phpt
  it("SPL: SplFileObject realpath and include_path", function () {
    expect(parser.parseCode("<?php\nset_include_path('tests');\nchdir(dirname(__DIR__)); // ext/spl\n$fo = new SplFileObject('fileobject_004.phpt', 'r', true);\nvar_dump($fo->getPath());\nvar_dump($fo->getFilename());\nvar_dump($fo->getRealPath());\n?>")).toMatchSnapshot();
  });
});
