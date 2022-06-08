// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/phi_use_chain.phpt
  it("Check that phi use chains are correctly maintained when removing blocks", function () {
    expect(parser.parseCode("<?php\nfunction test(array $adapters) {\n    foreach ($adapters as $adapter) {\n        if (\\in_array('cli-server', ['cli', 'phpdbg'], true) && $adapter instanceof stdClass && !\\filter_var('1', \\FILTER_VALIDATE_BOOLEAN)) {\n            continue;\n        }\n        $adapters[] = $adapter;\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
