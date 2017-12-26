var parser = require("../src/index");

describe("Array without keys", function() {
  it("deference array", function() {
    var ast = parser.parseEval(
      ["$a = [", '"a", "b"', "]($foo)[$foo->bar()[1]]->foo()"].join("\r"),
      {
        parser: {
          // debug: true
        }
      }
    );
    // @todo console.log(ast);
  });

  describe("of strings", function() {
    // Get result from parser
    var ast = parser.parseEval('array("item1", "item2", "item3")');

    it("should be of type array", function() {
      ast.children[0].kind.should.be.exactly("array");
    });

    it("should have correct number of items", function() {
      ast.children[0].items.length.should.be.exactly(3);
    });

    it("should have correct item types and values", function() {
      ast.children[0].items[0].value.kind.should.be.exactly("string");
      ast.children[0].items[0].value.value.should.be.exactly("item1");

      ast.children[0].items[1].value.kind.should.be.exactly("string");
      ast.children[0].items[1].value.value.should.be.exactly("item2");

      ast.children[0].items[2].value.kind.should.be.exactly("string");
      ast.children[0].items[2].value.value.should.be.exactly("item3");
    });
  });

  describe("of numbers", function() {
    // Get result from parser
    var ast = parser.parseEval("array(1, 2.5, 0x1000)");

    it("should be of type array", function() {
      ast.children[0].kind.should.be.exactly("array");
    });

    it("should have correct number of items", function() {
      ast.children[0].items.length.should.be.exactly(3);
    });

    it("should have correct item types and values", function() {
      ast.children[0].items[0].value.kind.should.be.exactly("number");
      ast.children[0].items[0].value.value.should.be.exactly("1");

      ast.children[0].items[1].value.kind.should.be.exactly("number");
      ast.children[0].items[1].value.value.should.be.exactly("2.5");

      ast.children[0].items[2].value.kind.should.be.exactly("number");
      ast.children[0].items[2].value.value.should.be.exactly("0x1000");
    });
  });

  describe("of strings and numbers", function() {
    // Get result from parser
    var ast = parser.parseEval('array(1, "item2", 3, "item4")');

    it("should be of type array", function() {
      ast.children[0].kind.should.be.exactly("array");
    });

    it("should have correct number of items", function() {
      ast.children[0].items.length.should.be.exactly(4);
    });

    it("should have correct item types and values", function() {
      ast.children[0].items[0].value.kind.should.be.exactly("number");
      ast.children[0].items[0].value.value.should.be.exactly("1");

      ast.children[0].items[1].value.kind.should.be.exactly("string");
      ast.children[0].items[1].value.value.should.be.exactly("item2");

      ast.children[0].items[2].value.kind.should.be.exactly("number");
      ast.children[0].items[2].value.value.should.be.exactly("3");

      ast.children[0].items[3].value.kind.should.be.exactly("string");
      ast.children[0].items[3].value.value.should.be.exactly("item4");
    });
  });

  describe("of variables", function() {
    // Get result from parser
    var ast = parser.parseEval("array($obj1, $obj2, $obj3)");

    it("should be of type array", function() {
      ast.children[0].kind.should.be.exactly("array");
    });

    it("should have correct number of items", function() {
      ast.children[0].items.length.should.be.exactly(3);
    });

    it("should have correct item types and values", function() {
      ast.children[0].items[0].value.kind.should.be.exactly("variable");
      ast.children[0].items[0].value.name.should.be.exactly("obj1");

      ast.children[0].items[1].value.kind.should.be.exactly("variable");
      ast.children[0].items[1].value.name.should.be.exactly("obj2");

      ast.children[0].items[2].value.kind.should.be.exactly("variable");
      ast.children[0].items[2].value.name.should.be.exactly("obj3");
    });
  });

  // TODO -- Check this is valid PHP + check AST output is correct
  describe("of objects", function() {
    // Get result from parser
    var ast = parser.parseEval("[new foo(), new stdClass(), new bar()]");

    it("should be of type array", function() {
      ast.children[0].kind.should.be.exactly("array");
    });

    it("should have correct number of items", function() {
      ast.children[0].items.length.should.be.exactly(3);
    });

    it("should have correct item types and values", function() {
      ast.children[0].items[0].value.kind.should.be.exactly("new");
      ast.children[0].items[0].value.what.name.should.be.exactly("foo");

      ast.children[0].items[1].value.kind.should.be.exactly("new");
      ast.children[0].items[1].value.what.name.should.be.exactly("stdClass");

      ast.children[0].items[2].value.kind.should.be.exactly("new");
      ast.children[0].items[2].value.what.name.should.be.exactly("bar");
    });
  });

  describe("of arrays", function() {
    // Get result from parser
    var ast = parser.parseEval(
      [
        "array(",
        '  array("item1", "item2"),',
        '  array("item3", "item4"),',
        '  array("item5", "item6")',
        ")"
      ].join("\n")
    );

    it("should be of type array", function() {
      ast.children[0].kind.should.be.exactly("array");
    });

    it("should have correct number of items", function() {
      ast.children[0].items.length.should.be.exactly(3);
    });

    it("should have correct item types and values", function() {
      ast.children[0].items[0].value.kind.should.be.exactly("array");
      ast.children[0].items[0].value.items.length.should.be.exactly(2);
      ast.children[0].items[0].value.items[0].value.value.should.be.exactly(
        "item1"
      );
      ast.children[0].items[0].value.items[1].value.value.should.be.exactly(
        "item2"
      );

      ast.children[0].items[1].value.kind.should.be.exactly("array");
      ast.children[0].items[1].value.items.length.should.be.exactly(2);
      ast.children[0].items[1].value.items[0].value.value.should.be.exactly(
        "item3"
      );
      ast.children[0].items[1].value.items[1].value.value.should.be.exactly(
        "item4"
      );

      ast.children[0].items[2].value.kind.should.be.exactly("array");
      ast.children[0].items[2].value.items.length.should.be.exactly(2);
      ast.children[0].items[2].value.items[0].value.value.should.be.exactly(
        "item5"
      );
      ast.children[0].items[2].value.items[1].value.value.should.be.exactly(
        "item6"
      );
    });
  });

  describe("mixed tests / coverage", function() {
    it("test empty array", function() {
      var ast = parser.parseEval("$a = []; $b = array();");
      ast.children[0].right.items.length.should.be.exactly(0);
      ast.children[1].right.items.length.should.be.exactly(0);
    });
    it("test short form / keys", function() {
      var ast = parser.parseEval('[0 => &$foo, $bar => "foobar"];');
      ast.children[0].items.length.should.be.exactly(2);
      ast.children[0].shortForm.should.be.exactly(true);
      ast.children[0].items[0].key.kind.should.be.exactly("number");
      ast.children[0].items[0].value.kind.should.be.exactly("variable");
      ast.children[0].items[0].value.byref.should.be.exactly(true);
      ast.children[0].items[0].value.name.should.be.exactly("foo");
      ast.children[0].items[0].value.byref.should.be.exactly(true);
      ast.children[0].items[1].key.kind.should.be.exactly("variable");
      ast.children[0].items[1].key.name.should.be.exactly("bar");
      ast.children[0].items[1].key.byref.should.be.exactly(false);
    });
  });
});
