// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug45722.phpt
  it("Bug #45722 (mb_check_encoding() crashes)", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_check_encoding(\"&\\xc2\\xb7 TEST TEST TEST TEST TEST TEST\", \"HTML-ENTITIES\"));\n?>")).toMatchSnapshot();
  });
});
