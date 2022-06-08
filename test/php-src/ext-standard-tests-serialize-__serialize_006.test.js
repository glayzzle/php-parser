// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/__serialize_006.phpt
  it("Failure while parsing data array for __unserialize()", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __unserialize(array $data) { }\n}\nvar_dump(unserialize('O:4:\"Test\":1:{}'));\n?>")).toMatchSnapshot();
  });
});
