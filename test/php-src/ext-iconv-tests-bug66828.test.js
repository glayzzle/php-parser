// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/iconv/tests/bug66828.phpt
  it("Bug #66828 (iconv_mime_encode Q-encoding longer than it should be)", function () {
    expect(parser.parseCode("<?php\n$preferences = array(\n    \"input-charset\" => \"ISO-8859-1\",\n    \"output-charset\" => \"UTF-8\",\n    \"line-length\" => 76,\n    \"line-break-chars\" => \"\\n\",\n    \"scheme\" => \"Q\"\n);\nvar_dump(iconv_mime_encode(\"Subject\", \"Test Test Test Test Test Test Test Test\", $preferences));\n?>")).toMatchSnapshot();
  });
});
