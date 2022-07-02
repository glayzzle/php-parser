// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/phpcredits.phpt
  it("phpcredits()", function () {
    expect(parser.parseCode("<?php\nvar_dump(phpcredits());\necho \"--\\n\";\nvar_dump(phpcredits(0));\necho \"--\\n\";\nvar_dump(phpcredits(CREDITS_GROUP));\n?>")).toMatchSnapshot();
  });
});
