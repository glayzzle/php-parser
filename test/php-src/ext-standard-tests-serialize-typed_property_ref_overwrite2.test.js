// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/typed_property_ref_overwrite2.phpt
  it("Overwriting a typed property that is not yet a reference", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public ?Test $prop;\n}\n$s = <<<'STR'\nO:4:\"Test\":2:{s:4:\"prop\";N;s:4:\"prop\";O:4:\"Test\":1:{s:4:\"prop\";R:2;}}\nSTR;\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});
