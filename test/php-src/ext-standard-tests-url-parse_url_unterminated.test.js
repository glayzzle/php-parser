// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/parse_url_unterminated.phpt
  it("Test parse_url() function: Parse unterminated string", function () {
    expect(parser.parseCode("<?php\n/*\n * This is the same as the basic001 test, but with unterminated strings.\n */\ninclude_once(__DIR__ . '/urls.inc');\nforeach ($urls as $url) {\n    echo \"\\n--> $url: \";\n    $str = zend_create_unterminated_string($url);\n    var_dump(parse_url($str));\n    zend_terminate_string($str);\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
