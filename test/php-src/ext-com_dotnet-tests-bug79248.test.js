// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug79248.phpt
  it("Bug #79248 (Traversing empty VT_ARRAY throws com_exception)", function () {
    expect(parser.parseCode("<?php\n$v = new variant([], VT_ARRAY);\nforeach ($v as $el) {\n    var_dump($el);\n}\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
