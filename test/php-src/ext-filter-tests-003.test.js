// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/003.phpt
  it("GET/POST/REQUEST Test", function () {
    expect(parser.parseCode("<?php echo $_GET['a'];\necho $_GET['b'];\necho $_GET['c'];\necho $_POST['d'];\necho $_POST['e'];\necho \"\\n\";\necho $_REQUEST['a'];\necho $_REQUEST['b'];\necho $_REQUEST['c'];\necho $_REQUEST['d'];\necho $_REQUEST['e'];\n?>")).toMatchSnapshot();
  });
});
