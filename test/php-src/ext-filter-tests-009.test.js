// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/009.phpt
  it("filter_id()", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_id(\"stripped\"));\nvar_dump(filter_id(\"string\"));\nvar_dump(filter_id(\"url\"));\nvar_dump(filter_id(\"int\"));\nvar_dump(filter_id(\"none\"));\nvar_dump(filter_id(-1));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
