const parser = require("../main");

describe("Test list expressions", function() {
  it("test list statements", function() {
    const ast = parser.parseEval(`list($a => list($c,$d,,$e,), $b) = [1, 2];`, {
      ast: {
        withPositions: true
      }
    });
    expect(ast).toMatchSnapshot();
  });

  it("test short list", function() {
    expect(
      parser.parseEval(
        `[$a => [$c,$d,,$e,], $b] = [1 => [5, 6, 7, 8, 9,], 2];`,
        {
          ast: {
            withPositions: true
          }
        }
      )
    ).toMatchSnapshot();
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

  it("fix #174", function() {
    expect(
      parser.parseEval("list(, $foo,,, $bar,) = $array;")
    ).toMatchSnapshot();
  });

  it("fix #174 (2)", function() {
    expect(
      parser.parseEval(
        "list($foo, $bar, $baz, list(, $nestedFoo,,, $nestedBar,)) = $array;"
      )
    ).toMatchSnapshot();
  });

  it("fix #174", function() {
    expect(parser.parseEval("list($var,,,,,) = $array;")).toMatchSnapshot();
  });

  it("fix #174", function() {
    expect(parser.parseEval("list(,,,,,$var) = $array;")).toMatchSnapshot();
  });
});
