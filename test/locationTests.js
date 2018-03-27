var parser = require("../src/index");

describe("Test offsets", function() {
  // init a new parser instance
  var test = parser.create({
    ast: {
      withPositions: true,
      withSource: true
    },
    parser: {
      extractDoc: true
      // debug: true
    },
    lexer: {
      // debug: true
    }
  });

  var lines = ["// a comment", 'echo "string";', "$a = true;"];
  var text = lines.join("\r\n");
  var ast = test.parseEval(text);

  describe("to program node", function() {
    it("test line", function() {
      ast.loc.start.line.should.be.exactly(1);
      ast.loc.end.line.should.be.exactly(lines.length);
    });
    it("test column", function() {
      ast.loc.start.column.should.be.exactly(0);
      ast.loc.end.column.should.be.exactly(lines[lines.length - 1].length);
    });
    it("test offsets", function() {
      ast.loc.start.offset.should.be.exactly(0);
      ast.loc.end.offset.should.be.exactly(text.length);
    });
  });

  describe("to comment node", function() {
    it("test line", function() {
      ast.comments[0].loc.start.line.should.be.exactly(1);
      ast.comments[0].loc.end.line.should.be.exactly(2);
    });
    it("test column", function() {
      ast.comments[0].loc.start.column.should.be.exactly(0);
      ast.comments[0].loc.end.column.should.be.exactly(0);
    });
    it("test offsets", function() {
      ast.comments[0].loc.start.offset.should.be.exactly(0);
      ast.comments[0].loc.end.offset.should.be.exactly(lines[0].length + 2);
      ast.comments[0].loc.source.should.be.exactly(lines[0] + '\r\n');
    });
  });

  describe("on echo node", function() {
    it("test line", function() {
      ast.children[0].loc.start.line.should.be.exactly(2);
      ast.children[0].loc.end.line.should.be.exactly(2);
    });
    it("test column", function() {
      ast.children[0].loc.start.column.should.be.exactly(0);
      ast.children[0].loc.end.column.should.be.exactly(14);
    });
    it("test offsets", function() {
      ast.children[0].loc.start.offset.should.be.exactly(14);
      ast.children[0].loc.end.offset.should.be.exactly(28);
      ast.children[0].loc.source.should.be.exactly(lines[1]);
    });
  });

  describe("on text node", function() {
    const arg = ast.children[0].arguments[0];
    it("test line", function() {
      arg.loc.start.line.should.be.exactly(2);
      arg.loc.end.line.should.be.exactly(2);
    });
    it("test column", function() {
      arg.loc.start.column.should.be.exactly(5);
      arg.loc.end.column.should.be.exactly(13);
    });
    it("test offsets", function() {
      arg.loc.source.should.be.exactly('"string"');
    });
  });

  describe("on assign node", function() {
    it("test line", function() {
      ast.children[1].loc.start.line.should.be.exactly(3);
      ast.children[1].loc.end.line.should.be.exactly(3);
    });
    it("test column", function() {
      ast.children[1].loc.start.column.should.be.exactly(0);
      // ignored ';' because it was eaten by expr and assign
      // was retrieved by expr_item without it
      ast.children[1].loc.end.column.should.be.exactly(9);
    });
    it("test offsets", function() {
      ast.children[1].loc.source.should.be.exactly(lines[2].substring(0, 9));
    });
  });

  describe("on variable node", function() {
    const node = ast.children[1].left;
    it("test line", function() {
      node.loc.start.line.should.be.exactly(3);
      node.loc.end.line.should.be.exactly(3);
    });
    it("test column", function() {
      node.loc.start.column.should.be.exactly(0);
      node.loc.end.column.should.be.exactly(2);
    });
    it("test offsets", function() {
      node.loc.source.should.be.exactly("$a");
    });
  });

  describe("on boolean node", function() {
    const node = ast.children[1].right;
    it("test line", function() {
      node.loc.start.line.should.be.exactly(3);
      node.loc.end.line.should.be.exactly(3);
    });
    it("test column", function() {
      node.loc.start.column.should.be.exactly(5);
      node.loc.end.column.should.be.exactly(9);
    });
    it("test offsets", function() {
      node.loc.source.should.be.exactly("true");
    });
  });

  describe("test block statements", function() {
    it("test if", function() {
      const ast = test.parseEval('if(true) {}\n//foo\necho $bar;');
      ast.children[0].loc.start.line.should.be.exactly(1);
      ast.children[0].loc.end.line.should.be.exactly(1);
      ast.children[1].loc.start.line.should.be.exactly(3);
      ast.children[1].loc.end.line.should.be.exactly(3);
    });
  })
});
