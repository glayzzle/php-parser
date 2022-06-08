// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/surprising_integer_literals.phpt
  it("Surprising result with integer literals (hex/octal)", function () {
    expect(parser.parseCode("<?php\necho 'Hex', \\PHP_EOL;\nvar_dump(filter_var('0x', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_HEX));\nvar_dump(filter_var('0xg', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_HEX));\nvar_dump(filter_var('0X', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_HEX));\nvar_dump(filter_var('0Xg', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_HEX));\nvar_dump(filter_var('', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_HEX));\necho 'Octal', \\PHP_EOL;\nvar_dump(filter_var('0o', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_OCTAL));\nvar_dump(filter_var('0og', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_OCTAL));\nvar_dump(filter_var('0O', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_OCTAL));\nvar_dump(filter_var('0Og', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_OCTAL));\nvar_dump(filter_var('O', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_OCTAL));\nvar_dump(filter_var('Og', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_OCTAL));\nvar_dump(filter_var('', FILTER_VALIDATE_INT, FILTER_FLAG_ALLOW_OCTAL));\n?>")).toMatchSnapshot();
  });
});
