var parser = require("../src/index");

describe("Test comments", function() {
  describe("issues", function() {
    it("fix #126 : new option", function() {
      console.log(parser.parseEval("$a = 1 + /* Hello */ 3;",
        {
          parser: {
            extractDoc: true
          }
        }
      ));
      const ast = parser.parseEval(
        [
          "if (true) {",
          "  $a = 1;",
          "}",
          "// Don't parsed :(",
          "else if (false) {",
          "  $a = 2;",
          "}"
        ].join("\n"),
        {
          parser: {
            extractDoc: true
          }
        }
      );
      const ifNode = ast.children[0];
      ast.children.length.should.be.exactly(1);
      ifNode.kind.should.be.exactly("if");
      ifNode.alternate.kind.should.be.exactly("if");
      ast.comments.length.should.be.exactly(1);
      ast.comments[0].kind.should.be.exactly("commentline");
    });
    it("fix #55", function() {
      var ast = parser.parseEval(
        [
          "if (true):",
          "  if (true):",
          "  // inner statements",
          "  endif; // another comment",
          "endif; // 2nd comment"
        ].join("\n"),
        {
          parser: {
            extractDoc: true
            // debug: true
          }
        }
      );
      ast.children.length.should.be.exactly(1);
      ast.children[0].kind.should.be.exactly("if");
      ast.children[0].body.children.length.should.be.exactly(1);
      ast.children[0].body.children[0].kind.should.be.exactly("if");
      // @todo implement tests
      // ast.children[0].body.children[1].kind.should.be.exactly("doc");
      // ast.children[0].body.children[1].lines[0].should.be.exactly(
      //  "another comment"
      // );
      ast.comments[2].kind.should.be.exactly("commentline");
      ast.comments[2].value.should.be.exactly("// 2nd comment");
    });
  });

  describe("single line comments", function() {
    var ast = parser.parseEval(
      [
        "# some information",
        "// another line",
        "$foo = 123 // 123",
        "; /* done */"
      ].join("\n"),
      {
        parser: {
          extractDoc: true
        }
      }
    );
    it("test cummulative array", function() {
      ast.comments.length.should.be.exactly(4);
      ast.comments[0].kind.should.be.exactly("commentline");
      ast.comments[3].kind.should.be.exactly("commentblock");
    });
    it("test statements", function() {
      ast.comments[3].value.should.be.exactly("/* done */");
    });
    it("ignore comments in expression", function() {
      // @todo check attachments
      ast.children[0].kind.should.be.exactly("assign");
      ast.children[0].left.kind.should.be.exactly("variable");
      ast.children[0].right.kind.should.be.exactly("number");
    });
  });

  describe("multi line comments", function() {
    var ast = parser.parseEval(
      [
        "/**",
        " * Description",
        " */",
        "function /* ignore */ & /* ignore */ name(/* @var something */ $arg) {",
        "// inner",
        "return $arg /* ignore */;",
        "}"
      ].join("\n"),
      {
        parser: {
          extractDoc: true
        }
      }
    );
    it("test statements", function() {
      ast.comments[0].kind.should.be.exactly("commentblock");
      ast.comments[0].value.should.be.exactly("/**\n * Description\n */");
    });
    it("test function", function() {
      ast.children[0].kind.should.be.exactly("function");
      ast.children[0].name.should.be.exactly("name");
      ast.children[0].arguments.length.should.be.exactly(1);
      var body = ast.children[0].body.children;
      body.length.should.be.exactly(1);
      // @todo check previous statement
      body[0].kind.should.be.exactly('return');
    });
    it("test if statements", function() {
      var ast = parser.parseEval(
        [
          "if /* ignore */ (/* */ true) /* ignore */ {",
          "# inner statement",
          "} /* ignore */ else /* ignore */ ",
          // else with a inner if single statement :
          "  if (true /* ignore */) /* ignore */ {",
          "  } /* ignore */ elseif /* ignore */ (/* ignore */ false /* ignore */ /* ignore */) /* ignore */ /* ignore */ {",
          "  } /* ignore */ else /* ignore */ {",
          "  }",
          "if (false) /* ignore */ : /* ignore */",
          "/* ignore */ endif /* ignore */;/* ignore */"
        ].join("\n"),
        {
          parser: {
            extractDoc: true
          }
        }
      );
      ast.children.length.should.be.exactly(2);
      ast.children[0].kind.should.be.exactly("if");
      ast.children[1].kind.should.be.exactly("if");
      ast.comments.length.should.be.exactly(22);
    });
    it("test try statements", function() {
      var ast = parser.parseEval(
        [
          "try /* ignore */ {",
          "# inner statement",
          "} /* dd */ catch(/* zz */ \\Exception /* 1 */ | /* 2 */ \\Foo /* aa */ $e /* bb */) /* dd */ {",
          "/* ee */",
          "} /* zz */ finally /* yy */ {",
          "/* ignore */",
          "} // end"
        ].join("\n"),
        {
          parser: {
            extractDoc: true
          }
        }
      );
      ast.children.length.should.be.exactly(1);
      ast.children[0].kind.should.be.exactly("try");
      ast.children[0].body.kind.should.be.exactly("block");
      ast.children[0].catches[0].kind.should.be.exactly("catch");
      ast.children[0].catches[0].what[0].name.should.be.exactly("\\Exception");
      ast.children[0].catches[0].what[1].name.should.be.exactly("\\Foo");
      ast.children[0].catches[0].variable.name.should.be.exactly("e");
      ast.comments.length.should.be.exactly(14);
      ast.comments[0].kind.should.be.exactly("commentblock");
    });
  });

  describe("test classes", function() {
    var ast = parser.parseEval(
      [
        "/**",
        " * Description",
        " */",
        "class /* ignore */ name /* hehe */ {",
        "   // @var test",
        "   protected $test, $toto;",
        "   // ignored comment",
        "   /** @var Class */",
        "   static public $foo = 123;",
        "   /** ignored also **/",
        "   /**",
        "    * @return void",
        "    */",
        "   public function void() { }",
        "}"
      ].join("\n"),
      {
        parser: {
          extractDoc: true
        }
      }
    );
    it("assume doc block before class", function() {
      ast.children[0].kind.should.be.exactly("class");
      ast.comments[0].kind.should.be.exactly("commentblock");
    });
    it("test class elements", function() {
      var body = ast.children[0].body;

      //ast.comments[0].kind.should.be.exactly("commentblock");
      //body[0].lines[0].should.be.exactly("@var test");

      body[0].kind.should.be.exactly("property");
      body[0].name.should.be.exactly("test");

      body[1].kind.should.be.exactly("property");
      body[1].name.should.be.exactly("toto");

      //body[3].kind.should.be.exactly("doc");
      //body[3].lines[0].should.be.exactly("ignored comment");

      //body[4].kind.should.be.exactly("doc");
      //body[4].lines[0].should.be.exactly("@var Class");

      body[2].kind.should.be.exactly("property");
      body[2].name.should.be.exactly("foo");

      body[3].kind.should.be.exactly("method");
      body[3].name.should.be.exactly("void");
    });
  });
});
