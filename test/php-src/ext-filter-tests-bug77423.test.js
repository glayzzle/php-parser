// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug77423.phpt
  it("Bug #77423 (parse_url() will deliver a wrong host to user)", function () {
    expect(parser.parseCode("<?php\n$urls = array(\n    \"http://php.net\\@aliyun.com/aaa.do\",\n    \"https://example.com\\uFF03@bing.com\",\n);\nforeach ($urls as $url) {\n    var_dump(filter_var($url, FILTER_VALIDATE_URL));\n}\n?>")).toMatchSnapshot();
  });
});
