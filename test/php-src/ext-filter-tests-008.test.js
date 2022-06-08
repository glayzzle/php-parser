// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/008.phpt
  it("filter_list()", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_list());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
