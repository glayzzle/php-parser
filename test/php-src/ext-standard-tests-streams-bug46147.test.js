// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug46147.phpt
  it("Bug #46147 (after stream seek, appending stream filter reads incorrect data)", function () {
    expect(parser.parseCode("<?php\n$fp = tmpfile();\nfwrite($fp, \"this is a lowercase string.\\n\");\nfseek($fp, 5);\nstream_filter_append($fp, \"string.toupper\");\nwhile (!feof($fp)) {\n    echo fread($fp, 5);\n}\n?>")).toMatchSnapshot();
  });
});
