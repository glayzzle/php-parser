// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/switch_string_free_opt.phpt
  it("A SWITCH_STRING operand FREE may be optimized away", function () {
    expect(parser.parseCode("<?php\nfunction test($a) {\n    switch (!$a) {\n        case '':\n            r>l;\n        default:\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
