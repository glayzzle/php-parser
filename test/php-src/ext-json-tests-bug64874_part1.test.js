// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug64874_part1.phpt
  it("Whitespace part of bug #64874 (\"json_decode handles whitespace and case-sensitivity incorrectly\")", function () {
    expect(parser.parseCode("<?php\nfunction decode($json) {\n    var_dump(json_decode($json));\n    var_dump(json_last_error() !== 0);\n    echo \"\\n\";\n}\n// Leading whitespace should be ignored\ndecode(\" true\");\ndecode(\"\\ttrue\");\ndecode(\"\\ntrue\");\ndecode(\"\\rtrue\");\n// So should trailing whitespace\ndecode(\"true \");\ndecode(\"true\\t\");\ndecode(\"true\\n\");\ndecode(\"true\\r\");\n// And so should the combination of both\ndecode(\" true \");\ndecode(\" true\\t\");\ndecode(\" true\\n\");\ndecode(\" true\\r\");\ndecode(\"\\ttrue \");\ndecode(\"\\ttrue\\t\");\ndecode(\"\\ttrue\\n\");\ndecode(\"\\ttrue\\r\");\ndecode(\"\\ntrue \");\ndecode(\"\\ntrue\\t\");\ndecode(\"\\ntrue\\n\");\ndecode(\"\\ntrue\\r\");\ndecode(\"\\rtrue \");\ndecode(\"\\rtrue\\t\");\ndecode(\"\\rtrue\\n\");\ndecode(\"\\rtrue\\r\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
