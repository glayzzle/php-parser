// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/http_build_query_variation1.phpt
  it("Test http_build_query() function: usage variations - first arguments as object", function () {
    expect(parser.parseCode("<?php\nclass UrlBuilder\n{\n  public $name = 'homepage';\n  public $page = 1;\n  protected $sort = 'desc,name';\n  private $access = 'admin';\n}\n$obj = new stdClass;\n$obj->name = 'homepage';\n$obj->page = 1;\n$obj->sort = 'desc,name';\necho http_build_query($obj) . PHP_EOL;\necho http_build_query(new UrlBuilder());\n?>")).toMatchSnapshot();
  });
});
