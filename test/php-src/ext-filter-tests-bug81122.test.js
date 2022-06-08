// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug81122.phpt
  it("Bug #81122 (SSRF bypass in FILTER_VALIDATE_URL)", function () {
    expect(parser.parseCode("<?php\n$urls = [\n    \"https://example.com:\\\\@test.com/\",\n    \"https://user:\\\\epass@test.com\",\n    \"https://user:\\\\@test.com\",\n];\nforeach ($urls as $url) {\n    var_dump(filter_var($url, FILTER_VALIDATE_URL));\n}\n?>")).toMatchSnapshot();
  });
});
