const parser = require('../main');

describe("Test expressions", function() {
  it("test binary", function() {
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

  it("test more binary ops (formerly bool)", function() {
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

  it("test assignements", function() {
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

  it("test if based returns", function() {
    const ast = parser.parseEval(
      `
        $a ?? false;
        $a > 5 ? true : false;
        $a ?: false;
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test silent", function() {
    const ast = parser.parseEval("@trigger_error();");
    expect(ast).toMatchSnapshot();
  });

  it("test generators", function() {
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

  it("test unary", function() {
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

  it("test cast", function() {
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
        (array)$var;
        (object)$var;
        (unset)$var;
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test exit", function() {
    const ast = parser.parseEval(
      `
        exit(1);
        die();
        exit;
      `
    );
    expect(ast).toMatchSnapshot();
  });

  it("test list statements", function() {
    const ast = parser.parseEval(`list($a => list($c,$d,,$e,), $b) = [1, 2];`, {
      ast: {
        withPositions: true
      }
    });
    expect(ast).toMatchSnapshot();
  });

  it("fix #150", function() {
    const ast = parser.parseEval("list('foo' => $bar) = ['foo' => 'bar'];");
    expect(ast).toMatchSnapshot();
  });

  it("fix #137", function() {
    const ast = parser.parseEval("list(,,$a,,$b) = [null, 1, null, 2];", {
      ast: {
        withPositions: true
      }
    });
    expect(ast).toMatchSnapshot();
  });

  it("test incr/decr", function() {
    const ast = parser.parseEval(
      `
      $i++;
      $i--;
      ++$i;
      --$i;
    `,
      {
        ast: {
          withPositions: true
        }
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("should fail to assign constants", function() {
    const ast = parser.parseEval("a = 1;", {
      parser: { debug: false, suppressErrors: true }
    });
    expect(ast).toMatchSnapshot();
  });

  it("should fail to assign class constants", function() {
    const ast = parser.parseEval("foo::b = 1;", {
      parser: { debug: false, suppressErrors: true }
    });
    expect(ast).toMatchSnapshot();
  });

  it("should assign class static", function() {
    const ast = parser.parseEval("a::$b = 1;", {
      parser: { debug: false, suppressErrors: true }
    });
    expect(ast).toMatchSnapshot();
  });

  it("test new", function() {
    const ast = parser.parseEval(
      `
      $a = new \\foo();
      $a = new namespace\\foo::class();
      $a = new $foo();
      $a = new class extends foo implements bar { };
      `,
      {
        parser: { debug: false }
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("test nested expressions precedence", function() {
    const ast = parser.parseEval(
      `
      $a = 5 * 2 + 1; // same as ((5 * 2) + 1)
      $b = 5 * (2 + 1);
      $c = 1 + 2 / 3 + 4; // same as (1 + ((2 / 3) + 4))
      $d = 1 !== 2 && 3; // same as (1 !== 2) && 3
      `,
      {
        parser: { debug: false }
      }
    );
    expect(ast).toMatchSnapshot();
  });
});
