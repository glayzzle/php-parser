// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert_basic4.phpt
  it("assert() - basic - test initial values using ini.get and assert_options", function () {
    expect(parser.parseCode("<?php\n// Check the initial settings for all assert_options\n//Using assert_options;\necho \"Initial values: assert_options(ASSERT_ACTIVE) => [\".assert_options(ASSERT_ACTIVE).\"]\\n\";\necho \"Initial values: assert_options(ASSERT_WARNING) => [\".assert_options(ASSERT_WARNING).\"]\\n\";\necho \"Initial values: assert_options(ASSERT_BAIL) => [\".assert_options(ASSERT_BAIL).\"]\\n\";\necho \"Initial values: assert_options(ASSERT_CALLBACK) => [\".assert_options(ASSERT_CALLBACK).\"]\\n\";\n//Using ini.get;\necho \"Initial values: ini.get(\\\"assert.active\\\") => [\".ini_get(\"assert.active\").\"]\\n\";\necho \"Initial values: ini.get(\\\"assert.warning\\\") => [\".ini_get(\"assert.warning\").\"]\\n\";\necho \"Initial values: ini.get(\\\"assert.bail\\\") => [\".ini_get(\"assert.bail\").\"]\\n\";\necho \"Initial values: ini.get(\\\"assert.callback\\\") => [\".ini_get(\"assert.callback\").\"]\\n\\n\";\n?>")).toMatchSnapshot();
  });
});
