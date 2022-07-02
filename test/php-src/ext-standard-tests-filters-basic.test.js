// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/basic.phpt
  it("basic stream filter tests", function () {
    expect(parser.parseCode("<?php\n$text = \"Hello There!\";\n$filters = array(\"string.rot13\", \"string.toupper\", \"string.tolower\");\nfunction filter_test($names)\n{\n    $fp = tmpfile();\n    fwrite($fp, $GLOBALS[\"text\"]);\n    rewind($fp);\n    foreach ($names as $name) {\n        echo \"filter: $name\\n\";\n        var_dump(stream_filter_prepend($fp, $name));\n    }\n    var_dump(fgets($fp));\n    fclose($fp);\n}\nforeach ($filters as $filter) {\n    filter_test(array($filter));\n}\nfilter_test(array($filters[0], $filters[1]));\n?>")).toMatchSnapshot();
  });
});
