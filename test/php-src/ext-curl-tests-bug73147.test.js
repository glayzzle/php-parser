// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug73147.phpt
  it("Bug #73147: Use After Free in PHP7 unserialize()", function () {
    expect(parser.parseCode("<?php\n$poc = 'a:1:{i:0;O:8:\"CURLFile\":1:{s:4:\"name\";R:1;}}';\ntry {\n    var_dump(unserialize($poc));\n} catch(Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
