var parser = require("./main");

describe("Test variables", function() {
  describe("array destructuring", function() {
    // Get result from parser
    var ast = parser.parseEval("[$id1, $name1] = $data[0];");
    it("should be assign with array", function() {
      ast.children[0].kind.should.be.exactly("assign");
      ast.children[0].left.kind.should.be.exactly("array");
      ast.children[0].operator.should.be.exactly("=");
    });
  });

  describe("Default variables", function() {
    var ast = parser.parseEval(
      ['$a = "foo";', "$b = &$c;", "$a->b = true;"].join("\n")
    );
    it("should be $a", function() {
      ast.children[0].left.kind.should.be.exactly("variable");
      ast.children[0].left.name.should.be.exactly("a");
    });
    it("should be $c byref", function() {
      ast.children[1].right.kind.should.be.exactly("variable");
      ast.children[1].right.name.should.be.exactly("c");
      ast.children[1].right.byref.should.be.exactly(true);
    });
    it("should be $a->b", function() {
      ast.children[2].left.kind.should.be.exactly("propertylookup");
      ast.children[2].left.what.kind.should.be.exactly("variable");
      ast.children[2].left.what.name.should.be.exactly("a");
      ast.children[2].left.offset.kind.should.be.exactly("constref");
      ast.children[2].left.offset.name.should.be.exactly("b");
    });
  });

  describe("Variable chains", function() {
    var ast = parser.parseEval(["foo::$a[1][2];"].join("\n"));
    it("should be $a[1][2]", function() {
      var expr = ast.children[0].offset;
      expr.kind.should.be.exactly("offsetlookup");
      expr.what.kind.should.be.exactly("offsetlookup");
      expr.offset.value.should.be.exactly("2");
      expr.what.what.kind.should.be.exactly("variable");
      expr.what.what.name.should.be.exactly("a");
      expr.what.offset.value.should.be.exactly("1");
    });
  });

  describe("Class constants", function() {
    var ast = parser.parseEval(
      [
        "static::foo();",
        "self::foo();",
        "parent::foo();",
        "foo::class;",
        "$this->foo();",
        "foo::$bar;",
        '$this->foo::bar["baz"]::qux();'
      ].join("\n"),
      {
        parser: {
          // debug: true
        }
      }
    );
    it("should be static::foo", function() {
      var expr = ast.children[0].what;
      expr.kind.should.be.exactly("staticlookup");
      expr.what.kind.should.be.exactly("constref");
      expr.what.name.should.be.exactly("static");
      expr.offset.kind.should.be.exactly("constref");
      expr.offset.name.should.be.exactly("foo");
    });
    it("should be self::foo", function() {
      var expr = ast.children[1].what;
      expr.kind.should.be.exactly("staticlookup");
      expr.what.kind.should.be.exactly("identifier");
      expr.what.name.should.be.exactly("self");
      expr.what.resolution.should.be.exactly("uqn");
      expr.offset.kind.should.be.exactly("constref");
      expr.offset.name.should.be.exactly("foo");
    });
    it("should be parent::foo", function() {
      var expr = ast.children[2].what;
      expr.kind.should.be.exactly("staticlookup");
      expr.what.kind.should.be.exactly("identifier");
      expr.what.name.should.be.exactly("parent");
      expr.what.resolution.should.be.exactly("uqn");
      expr.offset.kind.should.be.exactly("constref");
      expr.offset.name.should.be.exactly("foo");
    });
    it("should be foo::class", function() {
      var expr = ast.children[3];
      expr.kind.should.be.exactly("staticlookup");
      expr.what.kind.should.be.exactly("identifier");
      expr.what.name.should.be.exactly("foo");
      expr.offset.kind.should.be.exactly("constref");
      expr.offset.name.should.be.exactly("class");
    });
    it("should be $this->foo()", function() {
      var expr = ast.children[4].what;
      expr.kind.should.be.exactly("propertylookup");
      expr.what.kind.should.be.exactly("variable");
      expr.what.name.should.be.exactly("this");
      expr.offset.kind.should.be.exactly("constref");
      expr.offset.name.should.be.exactly("foo");
    });
    it("should be foo::$bar", function() {
      var expr = ast.children[5];
      expr.kind.should.be.exactly("staticlookup");
      expr.what.kind.should.be.exactly("identifier");
      expr.what.name.should.be.exactly("foo");
      expr.offset.kind.should.be.exactly("variable");
      expr.offset.name.should.be.exactly("bar");
    });
    it('should be $this->foo::bar["baz"]::qux();', function() {
      var expr = ast.children[6];

      expr.kind.should.be.exactly("call");
      expr.arguments.length.should.be.exactly(0);

      expr.what.kind.should.be.exactly("staticlookup");
      expr.what.offset.kind.should.be.exactly("constref");
      expr.what.offset.name.should.be.exactly("qux");

      expr.what.what.kind.should.be.exactly("offsetlookup");
      expr.what.what.offset.kind.should.be.exactly("string");
      expr.what.what.offset.value.should.be.exactly("baz");

      expr.what.what.what.kind.should.be.exactly("staticlookup");
      expr.what.what.what.offset.kind.should.be.exactly("constref");
      expr.what.what.what.offset.name.should.be.exactly("bar");

      expr.what.what.what.what.kind.should.be.exactly("propertylookup");
      expr.what.what.what.what.what.kind.should.be.exactly("variable");
      expr.what.what.what.what.what.name.should.be.exactly("this");
      expr.what.what.what.what.offset.kind.should.be.exactly("constref");
      expr.what.what.what.what.offset.name.should.be.exactly("foo");
    });
  });

  describe("Encaps var offset", function() {
    var ast = parser.parseEval(
      ['$a = "{$a[1]}";', '$a = "{$a["a"]}";', '$a = "{$a[$b]}";'].join("\n")
    );
    it("should be $a[1]", function() {
      //console.log(ast.children[0].right);
      //ast.children[0].left.kind.should.be.exactly('variable');
    });
  });

  describe("Dynamic variables", function() {
    var ast = parser.parseEval(
      [
        '$$a = "bar";',
        '$$$a = "bar";',
        '${$a."bar"} = "bar";',
        '$foo{$a."bar"} = "bar";'
      ].join("\n")
    );
    it("should be $$a", function() {
      ast.children[0].left.kind.should.be.exactly("variable");
      ast.children[0].left.name.kind.should.be.exactly("variable");
      ast.children[0].left.name.name.should.be.exactly("a");
    });
    it("should be $$$a", function() {
      ast.children[1].left.kind.should.be.exactly("variable");
      ast.children[1].left.name.kind.should.be.exactly("variable");
      ast.children[1].left.name.name.kind.should.be.exactly("variable");
    });
    it('should be ${$a."bar"}', function() {
      ast.children[2].left.kind.should.be.exactly("variable");
      ast.children[2].left.name.kind.should.be.exactly("bin");
      ast.children[2].left.name.type.should.be.exactly(".");
      ast.children[2].left.name.left.kind.should.be.exactly("variable");
      ast.children[2].left.name.left.name.should.be.exactly("a");
      ast.children[2].left.name.right.kind.should.be.exactly("string");
      ast.children[2].left.name.right.value.should.be.exactly("bar");
    });
    it('should be $foo{$a."bar"}', function() {
      //console.log(ast.children[3]);
      //ast.children[3].kind.should.be.exactly('variable');
    });
  });

  describe("Check errors", function() {
    var ast = parser.parseEval(["$? = true;"].join("\n"), {
      parser: {
        suppressErrors: true
      }
    });
    it("should be ?", function() {
      ast.children[0].left.kind.should.be.exactly("variable");
      ast.children[0].left.name.should.be.exactly("?");
    });

    it("should fail on double static lookup", function() {
      var astErr = parser.parseEval(["this->foo::bar::baz;"].join("\n"), {
        parser: {
          suppressErrors: true
        }
      });

      var msg =
        "Parse Error : syntax error, unexpected '::' (T_DOUBLE_COLON) on line 1";
      astErr.errors.length.should.be.exactly(1);
      astErr.errors[0].line.should.be.exactly(1);
      astErr.errors[0].message.should.be.exactly(msg);
    });

    it("should fail on property lookup on static lookup", function() {
      var astErr = parser.parseEval(["$this->foo::bar->baz;"].join("\n"), {
        parser: {
          suppressErrors: true
        }
      });

      var msg =
        "Parse Error : syntax error, unexpected '->' (T_OBJECT_OPERATOR) on line 1";
      astErr.errors.length.should.be.exactly(1);
      astErr.errors[0].line.should.be.exactly(1);
      astErr.errors[0].message.should.be.exactly(msg);
    });

    it("should fail $foo->bar::!", function() {
      var errAst = parser.parseEval("$foo->bar::!", {
        parser: {
          suppressErrors: true
        }
      });
      errAst.errors.length.should.be.exactly(1);
      errAst.errors[0].token.should.be.exactly("'!'");
      errAst.children[0].kind.should.be.exactly("staticlookup");
      errAst.children[0].offset.name.should.be.exactly("!");
    });

    it("should fail foo::bar::baz", function() {
      var errAst = parser.parseEval("foo::bar::baz", {
        parser: {
          suppressErrors: true
        }
      });
      errAst.errors.length.should.be.exactly(1);
      errAst.children[0].kind.should.be.exactly("staticlookup");
    });
  });
});
