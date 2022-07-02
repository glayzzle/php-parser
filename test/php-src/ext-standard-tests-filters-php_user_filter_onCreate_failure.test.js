// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/php_user_filter_onCreate_failure.phpt
  it("php_user_filter onCreate() returns false", function () {
    expect(parser.parseCode("<?php\nclass my_filter extends php_user_filter {\n    function onCreate(): bool {\n        return false;\n    }\n}\nstream_filter_register(\"my_filter\", \"my_filter\");\n$fp = fopen('php://memory', 'rw');\nvar_dump(stream_filter_append($fp, \"my_filter\"));\nfwrite($fp, \"Test\");\nfseek($fp, 0);\nvar_dump(fgets($fp));\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
