// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMComment_insertData_error1.phpt
  it("Test inserting data into a DOMComment basic test", function () {
    expect(parser.parseCode("<?php\n//Negative offset\n$dom = new DomDocument();\n$comment = $dom->createComment('test-comment');\ntry {\n  $comment->insertData(-1,'-inserted');\n} catch (DOMException $e ) {\n  if ($e->getMessage() == 'Index Size Error'){\n    echo \"Throws DOMException for -ve offset\\n\";\n  }\n}\n?>")).toMatchSnapshot();
  });
});
