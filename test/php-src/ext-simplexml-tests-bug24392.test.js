// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug24392.phpt
  it("Bug #24392 (empty namespaces causing confusion)", function () {
    expect(parser.parseCode("<?php\n$s = simplexml_load_file(__DIR__.'/bug24392.xml');\nforeach ($s->item as $item) {\n    echo $item->title . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
