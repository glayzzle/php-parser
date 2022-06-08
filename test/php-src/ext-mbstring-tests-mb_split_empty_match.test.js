// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_split_empty_match.phpt
  it("mb_split() empty match\n--", function () {
    expect(parser.parseCode("<?php\nmb_regex_set_options('m');\nvar_dump(mb_split('^', \"a\\nb\\nc\"));\n?>")).toMatchSnapshot();
  });
});
