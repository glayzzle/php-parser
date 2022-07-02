// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug42107.phpt
  it("Bug #42107 (sscanf() broken when using %2$s type format parameters)", function () {
    expect(parser.parseCode("<?php\nvar_dump(sscanf('one two', '%1$s %2$s'));\nvar_dump(sscanf('one two', '%2$s %1$s'));\necho \"--\\n\";\nsscanf('one two', '%1$s %2$s', $foo, $bar);\nvar_dump($foo, $bar);\nsscanf('one two', '%2$s %1$s', $foo, $bar);\nvar_dump($foo, $bar);\necho \"--\\n\";\nvar_dump(sscanf('one two', '%1$d %2$d'));\nvar_dump(sscanf('one two', '%1$d'));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
