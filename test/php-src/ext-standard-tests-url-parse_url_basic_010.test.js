// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/parse_url_basic_010.phpt
  it("Test parse_url() function : check values of URL related constants", function () {
    expect(parser.parseCode("<?php\n/*\n *  check values of URL related constants\n */\nforeach(get_defined_constants() as $constantName => $constantValue) {\n    if (strpos($constantName, 'PHP_URL')===0) {\n        echo \"$constantName: $constantValue \\n\";\n    }\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
