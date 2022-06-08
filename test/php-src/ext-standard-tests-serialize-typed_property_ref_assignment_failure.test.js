// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/typed_property_ref_assignment_failure.phpt
  it("Failure to assign ref to typed property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $prop;\n}\n$s = <<<'STR'\nO:4:\"Test\":1:{s:4:\"prop\";O:8:\"stdClass\":1:{s:1:\"y\";R:2;}}\nSTR;\ntry {\n    var_dump(unserialize($s));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$s = <<<'STR'\nO:4:\"Test\":1:{s:4:\"prop\";a:1:{i:0;R:2;\nSTR;\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});
