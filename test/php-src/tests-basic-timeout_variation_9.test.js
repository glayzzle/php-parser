// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/timeout_variation_9.phpt
  it("Timeout within shutdown function", function () {
    expect(parser.parseCode("<?php\nset_time_limit(1);\nregister_shutdown_function(\"sleep\", 1);\nregister_shutdown_function(\"sleep\", 1);\nexit(0);\n?>\nnever reached here")).toMatchSnapshot();
  });
});
