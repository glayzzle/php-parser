// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/typed_property_ref_overwrite.phpt
  it("Overwriting a typed property reference", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public ?object $prop;\n}\n$s = <<<'STR'\nO:4:\"Test\":2:{s:4:\"prop\";R:1;s:4:\"prop\";N;}}\nSTR;\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});
