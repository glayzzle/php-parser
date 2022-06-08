// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78175_2.phpt
  it("Bug #78175.2 (Preloading segfaults at preload time and at runtime)", function () {
    expect(parser.parseCode("<?php\nvar_dump(get_class(Loader::getLoader()));\nvar_dump(Loader::getCounter());\n?>\nOK")).toMatchSnapshot();
  });
});
