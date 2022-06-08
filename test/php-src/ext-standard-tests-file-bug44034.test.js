// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug44034.phpt
  it("Bug #44034", function () {
    expect(parser.parseCode("<?php\n$urls = array();\n$urls[] = \"data://text/plain,foo\\r\\nbar\\r\\n\";\n$urls[] = \"data://text/plain,\\r\\nfoo\\r\\nbar\\r\\n\";\n$urls[] = \"data://text/plain,foo\\r\\nbar\";\nforeach($urls as $url) {\n    echo strtr($url, array(\"\\r\" => \"\\\\r\", \"\\n\" => \"\\\\n\")) . \"\\n\";\n    var_dump(file($url, FILE_IGNORE_NEW_LINES));\n}\n?>")).toMatchSnapshot();
  });
});
