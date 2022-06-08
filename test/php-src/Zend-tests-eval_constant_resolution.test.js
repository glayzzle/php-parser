// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/eval_constant_resolution.phpt
  it("eval() constant resolution", function () {
    expect(parser.parseCode("<?php\nnamespace foo {\ndefine('foo\\true', 'test');\necho \"In eval\\n\";\neval('namespace foo { var_dump(true); var_dump(TrUe); var_dump(namespace\\true); var_dump(\\true); }');\necho \"Outside eval\\n\";\nvar_dump(true); var_dump(TrUe); var_dump(namespace\\true); var_dump(\\true);\n}\n?>")).toMatchSnapshot();
  });
});
