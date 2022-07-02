// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities18.phpt
  it("htmlentities() / htmlspecialchars() \"don't double encode\" flag support", function () {
    expect(parser.parseCode("<?php\n$tests = array(\n    \"abc\",\n    \"abc&amp;sfdsa\",\n    \"test&#043;s &amp; some more &#68;\",\n    \"test&#x2b;s &amp; some more &#X44;\",\n    \"&; &amp &#a; &9; &#xyz;\",\n    \"&kffjadfdhsjfhjasdhffasdfas;\",\n    \"&#8787978789\",\n    \"&\",\n    \"&&amp;&\",\n    \"&ab&amp;&\",\n);\nforeach ($tests as $test) {\n    var_dump(htmlentities($test, ENT_QUOTES, NULL, FALSE));\n    var_dump(htmlspecialchars($test, ENT_QUOTES, NULL, FALSE));\n}\n?>")).toMatchSnapshot();
  });
});
