const parser = require('../main');

describe("Test IF statements", function() {
  it("test common cases", function() {
    const ast = parser.parseEval(
      `
      if (true) {
        echo "is true";
      } else if (false) {
        echo "false";
      } elseif (false) {
        echo "2nd";
      } else {
        echo "else";
      }
      `,
      {
        parser: { debug: false }
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("test short form", function() {
    const ast = parser.parseEval(
      `
      if (true):
        echo "is true";
      elseif (false):
        echo "false";
      else:
        echo "else";
      endif;
      `,
      {
        parser: { debug: false }
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("test various cases", function() {
    const ast = parser.parseEval(
      `
      if (true):
        echo "is true";
      elseif (false):
        echo "false";
      elseif (false):
        echo "false";
      endif;
      if (true):
        echo "is true";
      else:
        echo "false";
      endif;
      `,
      {
        parser: { debug: false }
      }
    );
    expect(ast).toMatchSnapshot();
  });

  it("test issue #84", function() {
    const ast = parser.parseCode(
      `
        <?php if (true): ?>
        <?php else: ?>
        <?php endif; ?>
      `,
      {
        parser: { debug: false }
      }
    );
    expect(ast).toMatchSnapshot();
  });
  it("test issue #168", () => {
    
    // should be ok
    let ast = parser.parseCode(
      `<?php if ($foo); ?>
      `,
      {
        ast: {
          withPositions: true,
          withSource: true
        }
      }
    );
    expect(ast).toMatchSnapshot();

    // should ignore ?>
    ast = parser.parseCode(
      `<?php if ($foo) ?>
      `,
      {
        ast: {
          withPositions: true,
          withSource: true
        }
      }
    );
    expect(ast).toMatchSnapshot();

    // should include ';'
    ast = parser.parseCode(
      `<?php if ($foo)
      ;`,
      {
        ast: {
          withPositions: true,
          withSource: true
        }
      }
    );
    expect(ast).toMatchSnapshot();

  });
});
