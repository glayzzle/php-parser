// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug81015.phpt
  it("Bug #81015: Opcache optimization assumes wrong part of ternary operator in if-condition", function () {
    expect(parser.parseCode("<?php\nfunction ternary(bool $enabled, ?string $value): void\n{\n\t// the \"true\" part is not as trivial in the real case\n\tif ($enabled ? true : $value === null) {\n\t\techo ($value ?? 'NULL') . \"\\n\";\n\t} else {\n\t\techo \"INVALID\\n\";\n\t}\n}\nternary(true, 'value');\nternary(true, null);\nternary(false, 'value');\nternary(false, null);\n?>")).toMatchSnapshot();
  });
});
