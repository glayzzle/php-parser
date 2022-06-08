// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/parse_url_error_002.phpt
  it("Test parse_url() function: url component specifier out of range", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing parse_url() : error conditions: url component specifier out of range ***\\n\";\n$url = 'http://secret:hideout@www.php.net:80/index.php?test=1&test2=char&test3=mixesCI#some_page_ref123';\necho \"--> Below range:\";\nvar_dump(parse_url($url, -1));\necho \"\\n\\n--> Above range:\\n\";\ntry {\n    parse_url($url, 99);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
