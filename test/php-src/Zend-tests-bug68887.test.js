// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68887.phpt
  it("Bug #68887 (resources are not freed correctly)", function () {
    expect(parser.parseCode("<?php\nfclose(fopen(\"php://temp\",\"w+\"));\n$count = count(get_resources());\nfclose(fopen(\"php://temp\",\"w+\"));\nvar_dump(count(get_resources()) == $count);\nfclose(fopen(\"php://temp\",\"w+\"));\nvar_dump(count(get_resources()) == $count);\n?>")).toMatchSnapshot();
  });
});
