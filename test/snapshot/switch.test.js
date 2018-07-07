const parser = require('../main');

describe("Test SWITCH statements", function() {
  it("parse correctly", function() {
    var ast = parser.parseEval(
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
        parser: { debug: false }
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("test errors", function() {
    const errAst = parser.parseEval(
      `
      switch(true);
      switch(true): ?> bug <?php
        case A: return ?><?php true;
        case B: return false  ?><?php ;
      endswitch;
      `,
      {
        parser: { suppressErrors: true }
      }
    );
    expect(errAst).toMatchSnapshot();
    expect(errAst.errors.length).not.toBe(0);
  });
});
