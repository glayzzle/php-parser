// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_http_input_pass.phpt
  it("mb_http_input() with pass encoding", function () {
    expect(parser.parseCode("<?php\necho $_POST['a'].\"\\n\";\necho $_GET['b'].\"\\n\";\n// Get encoding\nvar_dump(mb_http_input('P'));\nvar_dump(mb_http_input('G'));\nvar_dump(mb_http_input('C'));\nvar_dump(mb_http_input('S'));\nvar_dump(mb_http_input('I'));\nvar_dump(mb_http_input('L'));\n?>")).toMatchSnapshot();
  });
});
