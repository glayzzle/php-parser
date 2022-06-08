// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/overwrite_untyped_ref.phpt
  it("Overwrite reference in untyped property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop;\n}\n$s = <<<'STR'\nO:4:\"Test\":2:{s:4:\"prop\";R:1;s:4:\"prop\";i:0;}\nSTR;\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});
