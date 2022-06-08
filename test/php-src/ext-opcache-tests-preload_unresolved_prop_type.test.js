// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_unresolved_prop_type.phpt
  it("Preload: Unresolved property type", function () {
    expect(parser.parseCode("<?php\nclass Unknown {\n}\n$x = new Test;\n$x->prop = new Unknown;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
