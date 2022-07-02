// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug41655_1.phpt
  it("Bug #41655 (open_basedir bypass via glob()) 1/2", function () {
    expect(parser.parseCode("<?php\n$a=glob(\"./*.jpeg\");\nvar_dump($a);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
