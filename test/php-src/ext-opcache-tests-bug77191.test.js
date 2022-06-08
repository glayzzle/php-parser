// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug77191.phpt
  it("Bug #77191: Assertion failure in dce_live_ranges() when silencing is used", function () {
    expect(parser.parseCode("<?php\nfunction test($x) {\n    switch (@$x['y']) {\n        case 1: return 'a';\n        case 2: return 'b';\n        case 3: return 'c';\n        case 4: return 'd';\n    }\n    return 'e';\n}\nvar_dump(test([]));\n?>")).toMatchSnapshot();
  });
});
