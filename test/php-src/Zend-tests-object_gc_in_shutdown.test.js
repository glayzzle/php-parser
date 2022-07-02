// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/object_gc_in_shutdown.phpt
  it("Bug object gc not working in shutdown", function () {
    expect(parser.parseCode("<?php\nini_set('memory_limit', '2M');\nregister_shutdown_function(function () {\n    for ($n = 1000 * 1000; $n--;) {\n        new stdClass;\n    }\n    echo \"OK\\n\";\n});\n?>")).toMatchSnapshot();
  });
});
