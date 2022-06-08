// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/sleep_mangled_name_clash.phpt
  it("__sleep() returns properties clashing only after mangling", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    private $priv;\n    public function __sleep() {\n        return [\"\\0Test\\0priv\", \"priv\"];\n    }\n}\n$s = serialize(new Test);\nvar_dump(str_replace(\"\\0\", '\\0', $s));\n?>")).toMatchSnapshot();
  });
});
