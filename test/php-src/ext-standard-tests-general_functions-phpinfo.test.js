// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/phpinfo.phpt
  it("phpinfo()", function () {
    expect(parser.parseCode("<?php\nvar_dump(phpinfo());\necho \"--\\n\";\nvar_dump(phpinfo(0));\necho \"--\\n\";\nvar_dump(phpinfo(INFO_LICENSE));\n?>")).toMatchSnapshot();
  });
});
