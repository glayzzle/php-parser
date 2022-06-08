// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug78609.phpt
  it("Bug #78609 (mb_check_encoding() no longer supports stringable objects)", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function __toString()\n    {\n        return 'string_representation';\n    }\n}\nvar_dump(mb_check_encoding(new Foo, 'UTF-8'));\n?>")).toMatchSnapshot();
  });
});
