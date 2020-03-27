const parser = require("../main");

describe("Test expressions", function () {
  it("test binary", function () {
    const ast = parser.parseEval(
      `
      1 | 3;
      1 & 3;
      1 ^ 3;
      "1" . "3";
      1 + 3;
      1 - 3;
      1 * 3;
      1 / 3;
      1 % 3;
      1 ** 3;
      1 << 3;
      1 >> 3;
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test more binary ops (formerly bool)", function () {
    const ast = parser.parseEval(
      `
      $a && $b;
      $a AND $b;
      $a || $b;
      $a OR $b;
      $a XOR $b;
      $a === $b;
      $a !== $b;
      $a == $b;
      $a != $b;
      $a > $b;
      $a < $b;
      $a >= $b;
      $a <= $b;
      $a <=> $b;
      $a instanceof $b;
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test assignements", function () {
    const ast = parser.parseEval(
      `
      $a = $b;
      $a .= $b;
      $a += $b;
      $a -= $b;
      $a *= $b;
      $a **= $b;
      $a /= $b;
      $a &= $b;
      $a |= $b;
      $a %= $b;
      $a ^= $b;
      $a <<= $b;
      $a >>= $b;
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test if based returns", function () {
    const ast = parser.parseEval(
      `
        $a ?? false;
        $a > 5 ? true : false;
        $a ?: false;
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test silent", function () {
    const ast = parser.parseEval("@trigger_error();");
    expect(ast).toMatchSnapshot();
  });

  it("test generators", function () {
    const ast = parser.parseEval(
      `
      function gen() {
        yield 0; // key 0
        yield from foo(); // keys 0-2
        yield 1 => $a; // key 1
      }
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test unary", function () {
    const ast = parser.parseEval(
      `
        +$var;
        ~$var;
        !$var;
        -$var;
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test cast", function () {
    const ast = parser.parseEval(
      `
        (int)$var;
        (integer)$var;
        (bool)$var;
        (boolean)$var;
        (float)$var;
        (double)$var;
        (real)$var;
        (string)$var;
        (binary)$var;
        (array)$var;
        (object)$var;
        (unset)$var;
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test cast extension - #171", function () {
    const ast = parser.parseEval(
      `
        (int)$var;
        (integer)$var;
        (bool)$var;
        (boolean)$var;
        (float)$var;
        (double)$var;
        (real)$var;
        (string)$var;
        (binary)$var;
        (array)$var;
        (object)$var;
        (unset)$var;
      `,
      {
        parser: {
          read_expr_cast: function (cast) {
            const rawCast = this.text();
            const expr = this.next().read_expr();
            expr.cast = cast;
            expr.rawCast = rawCast;
            return expr;
          },
        },
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("test exit", function () {
    const ast = parser.parseEval(
      `
        exit(1);
        die();
        exit;
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test incr/decr", function () {
    const ast = parser.parseEval(
      `
      $i++;
      $i--;
      ++$i;
      --$i;
    `,
      {
        ast: {
          withPositions: true,
        },
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("should fail to assign constants", function () {
    const ast = parser.parseEval("a = 1;", {
      parser: { debug: false, suppressErrors: true },
    });
    expect(ast).toMatchSnapshot();
  });

  it("should fail to assign class constants", function () {
    const ast = parser.parseEval("foo::b = 1;", {
      parser: { debug: false, suppressErrors: true },
    });
    expect(ast).toMatchSnapshot();
  });

  it("should assign class static", function () {
    const ast = parser.parseEval("a::$b = 1;", {
      parser: { debug: false, suppressErrors: true },
    });
    expect(ast).toMatchSnapshot();
  });

  it("test new", function () {
    const ast = parser.parseEval(
      `
      $a = new \\foo();
      $a = new namespace\\foo::class();
      $a = new $foo();
      $a = new class extends foo implements bar { };
      `,
      {
        parser: { debug: false },
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("fix #234", function () {
    expect(
      parser.parseEval(
        `
      new foo;
      $a = (new foo)[0];
    `,
        { parser: { debug: false } }
      )
    ).toMatchSnapshot();
  });

  it("fix #235", function () {
    expect(
      parser.parseEval(
        `
    self();
    sElF();
    parent();
    pArEnT();
    parent::foo();
    new self();
    new static();
    new parent();
    `,
        { parser: { debug: false } }
      )
    ).toMatchSnapshot();
  });

  it("test node references", function () {
    expect(
      parser.parseEval(
        `
    parent::foo();
    new self();
    new static();
    new parent();
    `,
        { parser: { debug: false } }
      )
    ).toMatchSnapshot();
  });

  it("test fail new", function () {
    expect(
      parser.parseEval(
        `
      $a = new foo[0];
    `,
        { parser: { suppressErrors: true } }
      )
    ).toMatchSnapshot();
  });

  it("test nested expressions precedence", function () {
    const ast = parser.parseEval(
      `
      $a = 5 * 2 + 1; // same as ((5 * 2) + 1)
      $b = 5 * (2 + 1);
      $c = 1 + 2 / 3 + 4; // same as (1 + ((2 / 3) + 4))
      $d = 1 !== 2 && 3; // same as (1 !== 2) && 3
      `,
      {
        parser: { debug: false },
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("chaining calls (derefenceable)", function () {
    expect(
      parser.parseEval(`($a->b)::call()->foo[10]->bar;`)
    ).toMatchSnapshot();
    expect(parser.parseEval(`array(1, 2, 3)[0]->foo;`)).toMatchSnapshot();
    expect(
      parser.parseEval(`($a++)($foo)->bar{$baz}::foo();`)
    ).toMatchSnapshot();
    // expect error :
    expect(
      parser.parseEval(`($a++)bar::foo::baz;`, {
        parser: {
          suppressErrors: true,
        },
      })
    ).toMatchSnapshot();
    // should pass
    expect(parser.parseEval(`bar()::foo()::baz();`)).toMatchSnapshot();
  });
});
