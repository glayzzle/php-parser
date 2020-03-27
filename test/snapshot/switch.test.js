const parser = require("../main");

describe("switch statements", function () {
  it("empty case list", function () {
    const ast = parser.parseEval("switch (true) {}");
    expect(ast).toMatchSnapshot();
  });

  it("empty case list #2", function () {
    const ast = parser.parseEval("switch (true) {;}");
    expect(ast).toMatchSnapshot();
  });

  it("empty case list #3", function () {
    const ast = parser.parseEval("switch (true): endswitch;");
    expect(ast).toMatchSnapshot();
  });

  it("empty case list #4", function () {
    const ast = parser.parseEval("switch (true):; endswitch;");
    expect(ast).toMatchSnapshot();
  });

  it("curly and one case", function () {
    const ast = parser.parseEval('switch (true) { case 1: return "1"; }');
    expect(ast).toMatchSnapshot();
  });

  it("curly and one case #2", function () {
    const ast = parser.parseEval('switch (true) {; case 1: return "1"; }');
    expect(ast).toMatchSnapshot();
  });

  it("colon and one case", function () {
    const ast = parser.parseEval(
      'switch (true): case 1: return "1"; endswitch;'
    );
    expect(ast).toMatchSnapshot();
  });

  it("colon and one case #2", function () {
    const ast = parser.parseEval(
      'switch (true):; case 1: return "1"; endswitch;'
    );
    expect(ast).toMatchSnapshot();
  });

  it("curly and multiple difference cases", function () {
    const ast = parser.parseEval(
      'switch (true) { case 1: return "1"; case 2: return "2"; case 3: return "3"; }'
    );
    expect(ast).toMatchSnapshot();
  });

  it("curly and multiple difference cases #2", function () {
    const ast = parser.parseEval(
      'switch (true) {; case 1: return "1"; case 2: return "2"; case 3: return "3"; }'
    );
    expect(ast).toMatchSnapshot();
  });

  it("colon and multiple difference cases", function () {
    const ast = parser.parseEval(
      'switch (true): case 1: return "1"; case 2: return "2"; case 3: return "3"; endswitch;'
    );
    expect(ast).toMatchSnapshot();
  });

  it("colon and multiple difference cases #2", function () {
    const ast = parser.parseEval(
      'switch (true):; case 1: return "1"; case 2: return "2"; case 3: return "3"; endswitch;'
    );
    expect(ast).toMatchSnapshot();
  });

  it("curly and multiple same cases", function () {
    const ast = parser.parseEval(
      'switch (true) { case 1: case 2: case 3: return "3"; }'
    );
    expect(ast).toMatchSnapshot();
  });

  it("curly and multiple same cases #2", function () {
    const ast = parser.parseEval(
      'switch (true) {; case 1: case 2: case 3: return "3"; }'
    );
    expect(ast).toMatchSnapshot();
  });

  it("colon and multiple same cases", function () {
    const ast = parser.parseEval(
      'switch (true): case 1: case 2: case 3: return "3"; endswitch;'
    );
    expect(ast).toMatchSnapshot();
  });

  it("colon and multiple same cases #2", function () {
    const ast = parser.parseEval(
      'switch (true):; case 1: case 2: case 3: return "3"; endswitch;'
    );
    expect(ast).toMatchSnapshot();
  });

  it("curly and multiple difference cases with default", function () {
    const ast = parser.parseEval(
      'switch (true) { case 1: return "1"; case 2: return "2"; case 3: return "3"; default: return "5"; }'
    );
    expect(ast).toMatchSnapshot();
  });

  it("curly and multiple difference cases with default #2", function () {
    const ast = parser.parseEval(
      'switch (true) {; case 1: return "1"; case 2: return "2"; case 3: return "3"; default: return "5"; }'
    );
    expect(ast).toMatchSnapshot();
  });

  it("colon and multiple difference cases with default", function () {
    const ast = parser.parseEval(
      'switch (true): case 1: return "1"; case 2: return "2"; case 3: return "3"; default: return "5"; endswitch;'
    );
    expect(ast).toMatchSnapshot();
  });

  it("colon and multiple difference cases with default #2", function () {
    const ast = parser.parseEval(
      'switch (true):; case 1: return "1"; case 2: return "2"; case 3: return "3"; default: return "5"; endswitch;'
    );
    expect(ast).toMatchSnapshot();
  });

  it("curly and multiple same cases with default", function () {
    const ast = parser.parseEval(
      'switch (true) { case 1: case 2: case 3: return "3"; default: return "5"; }'
    );
    expect(ast).toMatchSnapshot();
  });

  it("curly and multiple same cases with default #2", function () {
    const ast = parser.parseEval(
      'switch (true) {; case 1: case 2: case 3: return "3"; default: return "5"; }'
    );
    expect(ast).toMatchSnapshot();
  });

  it("colon and multiple same cases with default", function () {
    const ast = parser.parseEval(
      'switch (true): case 1: case 2: case 3: return "3"; default: return "5"; endswitch;'
    );
    expect(ast).toMatchSnapshot();
  });

  it("colon and multiple same cases with default #2", function () {
    const ast = parser.parseEval(
      'switch (true):; case 1: case 2: case 3: return "3"; default: return "5"; endswitch;'
    );
    expect(ast).toMatchSnapshot();
  });

  it("curly and ';' separator", function () {
    const ast = parser.parseEval(
      'switch (true) { case 1; case 2; case 3; return "3"; default; return "5"; }'
    );
    expect(ast).toMatchSnapshot();
  });

  it("curly and ';' separator #2", function () {
    const ast = parser.parseEval(
      'switch (true) {; case 1; case 2; case 3; return "3"; default; return "5"; }'
    );
    expect(ast).toMatchSnapshot();
  });

  it("colon and ';' separator", function () {
    const ast = parser.parseEval(
      'switch (true): case 1; case 2; case 3; return "3"; default; return "5"; endswitch;'
    );
    expect(ast).toMatchSnapshot();
  });

  it("colon and ';' separator #2", function () {
    const ast = parser.parseEval(
      'switch (true):; case 1; case 2; case 3; return "3"; default; return "5"; endswitch;'
    );
    expect(ast).toMatchSnapshot();
  });

  it("parse correctly", function () {
    const ast = parser.parseEval(
      `
      switch(true) {
        case 1:
        case $var:
          $foo = false;
          break 10;
        case FOO:
          $foo = true;
          break;
        default:
          $bar = false;
      }
      switch(true): ?><?php
        case A: ?><?php return true;
        case B: ?><?php return false;
      endswitch;
      `,
      {
        parser: { debug: false },
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("test errors", function () {
    const errAst = parser.parseEval(
      `
      switch(true);
      switch(true): ?> bug <?php
        case A: return ?><?php true;
        case B: return false  ?><?php ;
      endswitch;
      `,
      {
        parser: { suppressErrors: true },
      }
    );
    expect(errAst).toMatchSnapshot();
    expect(errAst.errors.length).not.toBe(0);
  });
});
