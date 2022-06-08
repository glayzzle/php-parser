// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/verify_return_dfg.phpt
  it("Incorrect liveness computation for verify-return", function () {
    expect(parser.parseCode("<?php\nfunction test($foo): string\n{\n    switch ($foo) {\n        default:  $bar = 'x'; break;\n        case 'z': $bar = 'y'; break;\n    }\n    return (string)$bar;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
