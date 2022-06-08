// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/sizeof_object1.phpt
  it("Test sizeof() function : object functionality - object with Countable interface", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sizeof() : object functionality ***\\n\";\necho \"-- Testing sizeof() with an object which implements Countable interface --\\n\";\nclass sizeof_class implements Countable\n{\n  public $member1;\n  private $member2;\n  protected $member3;\n  public function count(): int\n  {\n    return 3; // return the count of member variables in the object\n  }\n}\n$obj = new sizeof_class();\necho \"-- Testing sizeof() in default mode --\\n\";\nvar_dump( sizeof($obj) );\necho \"-- Testing sizeof() in COUNT_NORMAL mode --\\n\";\nvar_dump( sizeof($obj, COUNT_NORMAL) );\necho \"-- Testing sizeof() in COUNT_RECURSIVE mode --\\n\";\nvar_dump( sizeof($obj, COUNT_RECURSIVE) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
