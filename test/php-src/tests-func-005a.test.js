// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/005a.phpt
  it("Testing register_shutdown_function() with timeout. (Bug: #21513)", function () {
    expect(parser.parseCode("<?php\necho \"Start\\n\";\nfunction boo()\n{\n    echo \"Shutdown\\n\";\n}\nregister_shutdown_function(\"boo\");\nset_time_limit(1);\n/* infinite loop to simulate long processing */\nfor (;;) {}\necho \"End\\n\";\n?>")).toMatchSnapshot();
  });
});
