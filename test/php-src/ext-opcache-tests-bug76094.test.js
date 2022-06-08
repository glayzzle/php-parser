// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug76094.phpt
  it("Bug #76094 (Access violation when using opcache)", function () {
    expect(parser.parseCode("<?php\nfunction MetaType($t)\n{\n    switch (strtoupper($t)) {\n    case PHP_INT_MAX :\n        return 1;\n    case 0:\n    default:\n        return 0;\n    }\n}\nvar_dump(MetaType(\"aa\"));\n?>")).toMatchSnapshot();
  });
});
