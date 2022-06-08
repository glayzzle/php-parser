// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_basic4.phpt
  it("Test basic function : variation4 use_trans_sid", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing basic session functionality : variation4 use_trans_sid ***\\n\";\necho \"*** Test trans sid ***\\n\";\noutput_add_rewrite_var('testvar1','testvalue1');\nsession_id('test1');\nsession_start();\necho '\n<a href=\"/\">\n<form action=\"\" method=\"post\">\n</form>\n';\nsession_commit();\noutput_add_rewrite_var('testvar2','testvalue2');\nsession_id('test2');\nsession_start();\necho '\n<a href=\"/\">\n<form action=\"\" method=\"post\">\n</form>\n';\n?>")).toMatchSnapshot();
  });
});
