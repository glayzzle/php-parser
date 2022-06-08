// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/045.phpt
  it("Timeout again inside register_shutdown_function", function () {
    expect(parser.parseCode("<?php\nset_time_limit(1);\nregister_shutdown_function(\"plop\");\nfunction plop() {\n    while (true);\n}\nplop();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
