// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/005.phpt
  it("GET/REQUEST Test with fifa example data", function () {
    expect(parser.parseCode("<?php\necho $_GET['id'];\necho \"\\n\";\necho $_GET['pgurl'];\necho \"\\n\";\necho $_REQUEST['id'];\necho \"\\n\";\necho $_REQUEST['pgurl'];\n?>")).toMatchSnapshot();
  });
});
