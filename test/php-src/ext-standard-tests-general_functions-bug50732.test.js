// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug50732.phpt
  it("Bug #50732 (exec() adds single byte twice to $output array)", function () {
    expect(parser.parseCode("<?php\nexec(\"echo x\", $output);\nvar_dump($output);\n?>")).toMatchSnapshot();
  });
});
