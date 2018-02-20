var parser = require("../src/index");

describe("Test expressions", function() {
  it("test binary", function() {
    var ast = parser.parseEval(
      [
        "1 | 3;",
        "1 & 3;",
        "1 ^ 3;",
        '"1" . "3";',
        "1 + 3;",
        "1 - 3;",
        "1 * 3;",
        "1 / 3;",
        "1 % 3;",
        "1 ** 3;",
        "1 << 3;",
        "1 >> 3;"
      ].join("\n")
    );

    ast.children.should.matchEach(function(node) {
      node.should.have.property("kind", "bin");
      node.left.value.should.be.exactly("1");
      node.right.value.should.be.exactly("3");
    });

    ast.children
      .map(function(node) {
        return node.type;
      })
      .should.deepEqual([
        "|",
        "&",
        "^",
        ".",
        "+",
        "-",
        "*",
        "/",
        "%",
        "**",
        "<<",
        ">>"
      ]);
  });

  it("test more binary ops (formerly bool)", function() {
    var ast = parser.parseEval(
      [
        "$a && $b;",
        "$a AND $b;",
        "$a || $b;",
        "$a OR $b;",
        "$a XOR $b;",
        "$a === $b;",
        "$a !== $b;",
        "$a == $b;",
        "$a != $b;",
        "$a > $b;",
        "$a < $b;",
        "$a >= $b;",
        "$a <= $b;",
        "$a <=> $b;",
        "$a instanceof $b;"
      ].join("\n")
    );

    ast.children.should.matchEach(function(node) {
      node.should.have.property("kind", "bin");
      node.left.name.should.be.exactly("a");
      node.right.name.should.be.exactly("b");
    });

    ast.children
      .map(function(node) {
        return node.type;
      })
      .should.deepEqual([
        "&&",
        "and",
        "||",
        "or",
        "xor",
        "===",
        "!==",
        "==",
        "!=",
        ">",
        "<",
        ">=",
        "<=",
        "<=>",
        "instanceof"
      ]);
  });

  it("test assignements", function() {
    var ast = parser.parseEval(
      [
        "$a = $b;",
        "$a .= $b;",
        "$a += $b;",
        "$a -= $b;",
        "$a *= $b;",
        "$a **= $b;",
        "$a /= $b;",
        "$a &= $b;",
        "$a |= $b;",
        "$a %= $b;",
        "$a ^= $b;",
        "$a <<= $b;",
        "$a >>= $b;"
      ].join("\n")
    );
    // @todo
  });

  it("test if based returns", function() {
    var ast = parser.parseEval(
      ["$a ?? false;", "$a > 5 ? true : false;", "$a ?: false;"].join("\n")
    );
    //console.log(ast.children[1]);
    ast.children[1].kind.should.be.exactly("retif");
  });

  it("test silent", function() {
    var ast = parser.parseEval(["@trigger_error();"].join("\n"));
    ast.children[0].kind.should.be.exactly("silent");
    ast.children[0].expr.kind.should.be.exactly("call");
  });

  it("test generators", function() {
    var ast = parser.parseEval(
      [
        "function gen() {",
        "  yield 0; // key 0",
        "  yield from foo(); // keys 0-2",
        "  yield 1 => $a; // key 1",
        "}"
      ].join("\n")
    );
    var expr = ast.children[0].body.children;
    expr[0].kind.should.be.exactly("yield");
    expr[0].value.kind.should.be.exactly("number");

    expr[1].kind.should.be.exactly("yieldfrom");
    expr[1].value.kind.should.be.exactly("call");

    expr[2].kind.should.be.exactly("yield");
    expr[2].key.kind.should.be.exactly("number");
    expr[2].value.kind.should.be.exactly("variable");
  });

  it("test unary", function() {
    var ast = parser.parseEval(
      ["+$var;", "~$var;", "!$var;", "-$var;"].join("\n")
    );
    ast.children[0].kind.should.be.exactly("unary");
    ast.children[0].type.should.be.exactly("+");
    ast.children[0].what.kind.should.be.exactly("variable");
    ast.children[1].kind.should.be.exactly("unary");
    ast.children[1].type.should.be.exactly("~");
    ast.children[1].what.kind.should.be.exactly("variable");
    ast.children[2].kind.should.be.exactly("unary");
    ast.children[2].type.should.be.exactly("!");
    ast.children[2].what.kind.should.be.exactly("variable");
    ast.children[3].kind.should.be.exactly("unary");
    ast.children[3].type.should.be.exactly("-");
    ast.children[3].what.kind.should.be.exactly("variable");
  });

  it("test cast", function() {
    var typesWithAlias = {
      int: ["int", "integer"],
      bool: ["bool", "boolean"],
      float: ["float", "double", "real"]
    };
    Object.keys(typesWithAlias).forEach(function(shortName) {
      var aliases = typesWithAlias[shortName];
      var ast = parser.parseEval(
        aliases
          .map(function(alias) {
            return "(" + alias + ")$var;";
          })
          .join("\n")
      );

      aliases.forEach(function(alias, index) {
        ast.children[index].kind.should.be.exactly("cast");
        ast.children[index].type.should.be.exactly(shortName);
      });
    });
    var ast = parser.parseEval(
      ["(string)$var;", "(array)$var;", "(object)$var;", "(unset)$var;"].join(
        "\n"
      )
    );
    ast.children[0].kind.should.be.exactly("cast");
    ast.children[0].type.should.be.exactly("string");
    ast.children[1].kind.should.be.exactly("cast");
    ast.children[1].type.should.be.exactly("array");
    ast.children[2].kind.should.be.exactly("cast");
    ast.children[2].type.should.be.exactly("object");
    ast.children[3].kind.should.be.exactly("cast");
    ast.children[3].type.should.be.exactly("unset");
  });

  it("test exit", function() {
    var ast = parser.parseEval(["exit(1);", "die();", "exit;"].join("\n"));
    ast.children[0].kind.should.be.exactly("exit");
    ast.children[0].useDie.should.be.exactly(false);
    ast.children[1].kind.should.be.exactly("exit");
    ast.children[1].useDie.should.be.exactly(true);
    ast.children[2].kind.should.be.exactly("exit");
    ast.children[2].useDie.should.be.exactly(false);
  });

  it("test list statements", function() {
    var ast = parser.parseEval(
      ["list($a => list($c,$d,,$e,), $b) = [1, 2];"].join("\n"),
      {
        ast: {
          withPositions: true
        }
      }
    );
    // @todo
  });

  it("test incr/decr", function() {
    var ast = parser.parseEval(
      ["$i++;", "$i--;", "++$i;", "--$i;"].join("\n"),
      {
        ast: {
          withPositions: true
        }
      }
    );
    ast.children[0].kind.should.be.exactly("post");
    ast.children[1].kind.should.be.exactly("post");
    ast.children[2].kind.should.be.exactly("pre");
    ast.children[3].kind.should.be.exactly("pre");
    ast.children[0].type.should.be.exactly("+");
    ast.children[1].type.should.be.exactly("-");
    ast.children[2].type.should.be.exactly("+");
    ast.children[3].type.should.be.exactly("-");
  });

  it("should fail to assign constants", function() {
    var ast = parser.parseEval("a = 1;", {
      parser: { debug: false, suppressErrors: true }
    });
    var msg = "Parse Error : syntax error, unexpected '=' on line 1";
    ast.errors.length.should.be.exactly(1);
    ast.errors[0].message.should.be.exactly(msg);
  });

  it("should fail to assign class constants", function() {
    var ast = parser.parseEval("foo::b = 1;", {
      parser: { debug: false, suppressErrors: true }
    });
    var msg = "Parse Error : syntax error, unexpected '=' on line 1";
    ast.errors.length.should.be.exactly(1);
    ast.errors[0].message.should.be.exactly(msg);
  });

  it("should assign class static", function() {
    var ast = parser.parseEval("a::$b = 1;", {
      parser: { debug: false, suppressErrors: true }
    });
    ast.errors.length.should.be.exactly(0);
    ast.children[0].kind.should.be.exactly("assign");
  });

  it("test new", function() {
    var ast = parser.parseEval(
      [
        "$a = new \\foo();",
        "$a = new namespace\\foo::class();",
        "$a = new $foo();",
        "$a = new class extends foo implements bar { };"
      ].join("\n"),
      {
        parser: { debug: false }
      }
    );
    ast.children[0].right.kind.should.be.exactly("new");
    ast.children[0].right.what.kind.should.be.exactly("identifier");

    ast.children[2].right.kind.should.be.exactly("new");
    ast.children[2].right.what.kind.should.be.exactly("variable");

    ast.children[3].right.kind.should.be.exactly("new");
    ast.children[3].right.what.kind.should.be.exactly("class");
  });

  it("test nested expressions precedence", function() {
    var ast = parser.parseEval(
      [
        "$a = 5 * 2 + 1;", // same as ((5 * 2) + 1)
        "$b = 5 * (2 + 1);",
        "$c = 1 + 2 / 3 + 4;", // same as (1 + ((2 / 3) + 4))
        "$d = 1 !== 2 && 3;" // same as (1 !== 2) && 3
      ].join("\n"),
      {
        parser: { debug: false }
      }
    );
    var aExpr = ast.children[0].right;
    aExpr.kind.should.be.exactly("bin");
    aExpr.right.value.should.be.exactly("1");
    aExpr.type.should.be.exactly("+");

    aExpr.left.left.value.should.be.exactly("5");
    aExpr.left.type.should.be.exactly("*");
    aExpr.left.right.value.should.be.exactly("2");

    var bExpr = ast.children[1].right;
    bExpr.kind.should.be.exactly("bin");
    bExpr.left.value.should.be.exactly("5");
    bExpr.type.should.be.exactly("*");

    bExpr.right.kind.should.be.exactly("parenthesis");
    bExpr.right.inner.left.value.should.be.exactly("2");
    bExpr.right.inner.type.should.be.exactly("+");
    bExpr.right.inner.right.value.should.be.exactly("1");

    var cExpr = ast.children[2].right;
    cExpr.kind.should.be.exactly("bin");
    cExpr.left.type.should.be.exactly("+");
    cExpr.left.left.value.should.be.exactly("1");
    cExpr.left.right.type.should.be.exactly("/");
    cExpr.type.should.be.exactly("+");
    cExpr.right.value.should.be.exactly("4");

    var dExpr = ast.children[3].right;
    dExpr.should.have.property("kind", "bin");
    JSON.parse(JSON.stringify(dExpr)).should.deepEqual({
      kind: "bin",
      left: {
        kind: "bin",
        left: {
          kind: "number",
          value: "1"
        },
        right: {
          kind: "number",
          value: "2"
        },
        type: "!=="
      },
      right: {
        kind: "number",
        value: "3"
      },
      type: "&&"
    });
  });
});
