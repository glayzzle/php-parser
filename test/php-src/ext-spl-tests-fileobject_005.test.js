// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fileobject_005.phpt
  it("SPL: SplFileObject truncate tests", function () {
    expect(parser.parseCode("<?php\nset_include_path(dirname(__DIR__));\n$path = __DIR__.DIRECTORY_SEPARATOR.'fileobject_005.txt';\ntouch($path);\n$fo = new SplFileObject('tests'.DIRECTORY_SEPARATOR.'fileobject_005.txt', 'w+', true);\n$fo->fwrite(\"blahlubba\");\nvar_dump($fo->ftruncate(4));\n$fo->rewind();\nvar_dump($fo->fgets());\n$fo->rewind();\n$fo->fwrite(\"blahlubba\");\n?>")).toMatchSnapshot();
  });
});
