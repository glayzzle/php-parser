// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_http_input.phpt
  it("mb_http_input()", function () {
    expect(parser.parseCode("<?php\necho $_POST['a'].\"\\n\";\necho $_GET['b'].\"\\n\";\n// Get encoding\nvar_dump(mb_http_input('P'));\nvar_dump(mb_http_input('G'));\nvar_dump(mb_http_input('C'));\nvar_dump(mb_http_input('S'));\nvar_dump(mb_http_input('I'));\nvar_dump(mb_http_input('L'));\ntry {\n    var_dump(mb_http_input('Q'));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
