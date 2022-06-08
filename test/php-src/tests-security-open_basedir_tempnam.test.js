// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/security/open_basedir_tempnam.phpt
  it("Test open_basedir configuration", function () {
    expect(parser.parseCode("<?php\nrequire_once \"open_basedir.inc\";\n$initdir = getcwd();\ntest_open_basedir_before(\"tempnam\");\nvar_dump(tempnam(\"../bad\", \"test\"));\nvar_dump(tempnam(\"..\", \"test\"));\nvar_dump(tempnam(\"../\", \"test\"));\nvar_dump(tempnam(\"/\", \"test\"));\nvar_dump(tempnam(\"../bad/.\", \"test\"));\nvar_dump(tempnam(\"./../.\", \"test\"));\nvar_dump(tempnam(\"\", \"test\"));\n//absolute test\n$file = tempnam($initdir.\"/test/ok\", \"test\");\nvar_dump($file);\nvar_dump(unlink($file));\n//relative test\n$file = tempnam(\".\", \"test\");\nvar_dump($file);\nvar_dump(unlink($file));\n$file = tempnam(\"../ok\", \"test\");\nvar_dump($file);\nvar_dump(unlink($file));\ntest_open_basedir_after(\"tempnam\");\n?>")).toMatchSnapshot();
  });
});
