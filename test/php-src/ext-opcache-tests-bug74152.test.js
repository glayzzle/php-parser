// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug74152.phpt
  it("Bug #74152 (if statement says true to a null variable)", function () {
    expect(parser.parseCode("<?php\n$foo = 'foo';\n$bar = null;\nswitch ($foo) {\ndefault:\ncase 'foo':\n    if ($bar) {\n        echo 'true';\n    } else {\n        echo 'false';\n    }\n}\n?>")).toMatchSnapshot();
  });
});
