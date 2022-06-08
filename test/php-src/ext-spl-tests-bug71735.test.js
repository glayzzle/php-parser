// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug71735.phpt
  it("Bug #71735 (Double-free in SplDoublyLinkedList::offsetSet)", function () {
    expect(parser.parseCode("<?php\ntry {\n$var_1=new SplStack();\n$var_1->offsetSet(100,new DateTime('2000-01-01'));\n} catch(OutOfRangeException $e) {\n    print $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
