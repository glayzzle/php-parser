// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/parse_url_basic_001.phpt
  it("Test parse_url() function: Parse a load of URLs without specifying the component", function () {
    expect(parser.parseCode("<?php\n/*\n * Parse a load of URLs without specifying the component\n */\ninclude_once(__DIR__ . '/urls.inc');\nforeach ($urls as $url) {\n    echo \"\\n--> $url: \";\n    var_dump(parse_url($url));\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
