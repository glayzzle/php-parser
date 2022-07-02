// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/directory/DirectoryClass_basic_001.phpt
  it("Directory class behaviour.", function () {
    expect(parser.parseCode("<?php\n/*\n * Description: Directory class with properties, handle and class and methods read, rewind and close\n * Class is defined in ext/standard/dir.c\n */\necho \"Structure of Directory class:\\n\";\n$rc = new ReflectionClass(\"Directory\");\necho $rc;\necho \"Cannot instantiate a valid Directory directly:\\n\";\n$d = new Directory(getcwd());\nvar_dump($d);\ntry {\n    var_dump($d->read());\n} catch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
