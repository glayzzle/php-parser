// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/printf_h_H.phpt
  it("sprintf() %h and %H specifiers", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_ALL, \"de_DE.utf8\");\n$f = 1.25;\nprintf(\"%g %G %h %H\\n\", $f, $f, $f, $f);\n$f = 0.00000125;\nprintf(\"%g %G %h %H\\n\", $f, $f, $f, $f);\n?>")).toMatchSnapshot();
  });
});
