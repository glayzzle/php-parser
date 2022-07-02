// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/rand.phpt
  it("rand() and mt_rand() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(mt_rand());\nvar_dump(mt_rand(-1,1));\nvar_dump(mt_rand(0,3));\nvar_dump(rand());\nvar_dump(rand(-1,1));\nvar_dump(rand(0,3));\nvar_dump(srand());\nvar_dump(srand(-1));\nvar_dump(mt_srand());\nvar_dump(mt_srand(-1));\nvar_dump(getrandmax());\nvar_dump(mt_getrandmax());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
