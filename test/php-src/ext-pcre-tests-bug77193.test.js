// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug77193.phpt
  it("Bug #77193 Infinite loop in preg_replace_callback", function () {
    expect(parser.parseCode("<?php\n$text = '{CCM:CID_2}';\necho '1';\n$mt = array();\npreg_replace_callback(\n    '/([0-9]+)/i',\n    function ($matches) {\n        echo $matches[1];\n        filter_var('http', FILTER_VALIDATE_REGEXP, ['options' => ['regexp' => '/^http$/i']]);\n    },\n    $text\n);\necho '3', \"\\n\";\n?>")).toMatchSnapshot();
  });
});
