// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug64936.phpt
  it("ReflectionMethod::getDocComment() uses left over doc comment from previous scanner run", function () {
    expect(parser.parseCode("<?php\nfunction strip_doc_comment($c)\n{\n    if (!strlen($c) || $c === false) return $c;\n    return trim(substr($c, 3, -2));\n}\ntoken_get_all(\"<?php\\n/**\\n * Foo\\n */\"); // doc_comment compiler global now contains this Foo comment\neval('class A { }'); // Could also be an include of a file containing similar\n$ra = new ReflectionClass('A');\nvar_dump(strip_doc_comment($ra->getDocComment()));\ntoken_get_all(\"<?php\\n/**\\n * Foo\\n */\"); // doc_comment compiler global now contains this Foo comment\ninclude('bug64936.inc');\n$rb = new ReflectionClass('B');\nvar_dump(strip_doc_comment($rb->getDocComment()));\n?>")).toMatchSnapshot();
  });
});
