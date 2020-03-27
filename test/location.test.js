const parser = require("./main");

describe("Test offsets", function () {
  // init a new parser instance
  const test = parser.create({
    ast: {
      withPositions: true,
      withSource: true,
    },
    parser: {
      extractDoc: true,
      // debug: true
    },
    lexer: {
      // debug: true
    },
  });

  const lines = ["// a comment", 'echo "string";', "$a = true;"];
  const text = lines.join("\r\n");
  const ast = test.parseEval(text);

  describe("to program node", function () {
    it("test line", function () {
      expect(ast.loc.start.line).toBe(1);
      expect(ast.loc.end.line).toBe(lines.length);
    });
    it("test column", function () {
      expect(ast.loc.start.column).toBe(0);
      expect(ast.loc.end.column).toBe(lines[lines.length - 1].length);
    });
    it("test offsets", function () {
      expect(ast.loc.start.offset).toBe(0);
      expect(ast.loc.end.offset).toBe(text.length);
    });
  });

  describe("to comment node", function () {
    it("test line", function () {
      expect(ast.comments[0].loc.start.line).toBe(1);
      expect(ast.comments[0].loc.end.line).toBe(2);
    });
    it("test column", function () {
      expect(ast.comments[0].loc.start.column).toBe(0);
      expect(ast.comments[0].loc.end.column).toBe(0);
    });
    it("test offsets", function () {
      expect(ast.comments[0].loc.start.offset).toBe(0);
      expect(ast.comments[0].loc.end.offset).toBe(lines[0].length + 2);
      expect(ast.comments[0].loc.source).toBe(lines[0] + "\r\n");
    });
  });

  describe("on echo node", function () {
    it("test line", function () {
      expect(ast.children[0].loc.start.line).toBe(2);
      expect(ast.children[0].loc.end.line).toBe(2);
    });
    it("test column", function () {
      expect(ast.children[0].loc.start.column).toBe(0);
      expect(ast.children[0].loc.end.column).toBe(14);
    });
    it("test offsets", function () {
      expect(ast.children[0].loc.start.offset).toBe(14);
      expect(ast.children[0].loc.end.offset).toBe(28);
      expect(ast.children[0].loc.source).toBe(lines[1]);
    });
  });

  describe("on text node", function () {
    const arg = ast.children[0].expressions[0];
    it("test line", function () {
      expect(arg.loc.start.line).toBe(2);
      expect(arg.loc.end.line).toBe(2);
    });
    it("test column", function () {
      expect(arg.loc.start.column).toBe(5);
      expect(arg.loc.end.column).toBe(13);
    });
    it("test offsets", function () {
      expect(arg.loc.source).toBe('"string"');
    });
  });

  describe("on assign node", function () {
    it("test line", function () {
      expect(ast.children[1].loc.start.line).toBe(3);
      expect(ast.children[1].loc.end.line).toBe(3);
    });
    it("test column", function () {
      expect(ast.children[1].loc.start.column).toBe(0);
      // ignored ';' because it was eaten by expr and assign
      // was retrieved by expr_item without it
      expect(ast.children[1].loc.end.column).toBe(10);
    });
    it("test offsets", function () {
      expect(ast.children[1].loc.source).toBe(lines[2].substring(0, 10));
    });
  });

  describe("on variable node", function () {
    const node = ast.children[1].expression.left;
    it("test line", function () {
      expect(node.loc.start.line).toBe(3);
      expect(node.loc.end.line).toBe(3);
    });
    it("test column", function () {
      expect(node.loc.start.column).toBe(0);
      expect(node.loc.end.column).toBe(2);
    });
    it("test offsets", function () {
      expect(node.loc.source).toBe("$a");
    });
  });

  describe("on boolean node", function () {
    const node = ast.children[1].expression.right;
    it("test line", function () {
      expect(node.loc.start.line).toBe(3);
      expect(node.loc.end.line).toBe(3);
    });
    it("test column", function () {
      expect(node.loc.start.column).toBe(5);
      expect(node.loc.end.column).toBe(9);
    });
    it("test offsets", function () {
      expect(node.loc.source).toBe("true");
    });
  });

  describe("test block statements", function () {
    it("test if", function () {
      const ast = test.parseEval("if(true) {}\n//foo\necho $bar;");
      expect(ast.children[0].loc.start.line).toBe(1);
      expect(ast.children[0].loc.end.line).toBe(1);
      expect(ast.children[1].loc.start.line).toBe(3);
      expect(ast.children[1].loc.end.line).toBe(3);
    });
  });
});
