// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_033.phpt
  it("SCCP: Warning during evaluation of function", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $array = [\"foo\", []];\n    return implode(\",\", $array);\n}\necho \"Before\\n\";\nvar_dump(test());\necho \"After\\n\";\n?>")).toMatchSnapshot();
  });
});
