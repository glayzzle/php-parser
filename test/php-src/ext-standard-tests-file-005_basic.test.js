// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/005_basic.phpt
  it("Test fileatime(), filemtime(), filectime() & touch() functions : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing the basic functionality with file ***\\n\";\nprint( @date('Y:M:D:H:i:s', fileatime(__FILE__)) ).\"\\n\";\nprint( @date('Y:M:D:H:i:s', filemtime(__FILE__)) ).\"\\n\";\nprint( @date('Y:M:D:H:i:s', filectime(__FILE__)) ).\"\\n\";\nprint( @date('Y:M:D:H:i:s', touch(__DIR__.\"/005_basic.tmp\")) ).\"\\n\";\necho \"*** Testing the basic functionality with dir ***\\n\";\nprint( @date('Y:M:D:H:i:s', fileatime(\".\")) ).\"\\n\";\nprint( @date('Y:M:D:H:i:s', filemtime(\".\")) ).\"\\n\";\nprint( @date('Y:M:D:H:i:s', filectime(\".\")) ).\"\\n\";\nprint( @date('Y:M:D:H:i:s', touch(__DIR__.\"/005_basic\")) ).\"\\n\";\necho \"\\n*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
