// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMComment_replaceData_error1.phpt
  it("Test replacing data into a DOMComment basic test", function () {
    expect(parser.parseCode("<?php\n//Negative offset\n$dom = new DomDocument();\n$comment = $dom->createComment('test-comment');\ntry {\n  $comment->replaceData(-1,4,'-inserted');\n} catch (DOMException $e ) {\n  if ($e->getMessage() == 'Index Size Error'){\n    echo \"Throws DOMException for -ve offset\\n\";\n  }\n}\n?>")).toMatchSnapshot();
  });
});
