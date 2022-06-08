// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_exec_2.phpt
  it("pcntl_exec() 2", function () {
    expect(parser.parseCode("<?php\nif (getenv(\"PCNTL_EXEC_TEST_IS_CHILD\")) {\n    var_dump(getenv(\"FOO\"));\n    exit;\n}\necho \"ok\\n\";\npcntl_exec(getenv(\"TEST_PHP_EXECUTABLE\"), array('-n', __FILE__), array(\n    \"PCNTL_EXEC_TEST_IS_CHILD\" => \"1\",\n    \"FOO\" => \"BAR\",\n    1 => \"long\")\n);\necho \"nok\\n\";\n?>")).toMatchSnapshot();
  });
});
