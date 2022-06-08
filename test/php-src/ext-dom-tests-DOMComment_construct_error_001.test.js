// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMComment_construct_error_001.phpt
  it("DOMComment::__construct() with more arguments than acceptable.", function () {
    expect(parser.parseCode("<?php\ntry {\n    $comment = new DOMComment(\"comment1\", \"comment2\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
