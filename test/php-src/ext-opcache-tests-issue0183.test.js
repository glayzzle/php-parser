// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/issue0183.phpt
  it("ISSUE #183 (TMP_VAR is not only used once)", function () {
    expect(parser.parseCode("<?php\nswitch (PHP_OS) {\n    case \"Windows\":\n    break;\n    case \"Darwin\":\n    break;\n    case \"Linux\":\n        echo \"okey\";\n    break;\n    default:\n    break;\n}\n?>")).toMatchSnapshot();
  });
});
