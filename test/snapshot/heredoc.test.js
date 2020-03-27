const parser = require("../main");

describe("heredoc", function () {
  it("simple", function () {
    expect(
      parser.parseEval(`
echo <<<EOD
Example of string
spanning multiple lines
using heredoc syntax.
EOD;
    `)
    ).toMatchSnapshot();
  });

  it("with space between <<< and label", function () {
    expect(
      parser.parseEval(`
echo <<<     EOD
Example of string
spanning multiple lines
using heredoc syntax.
EOD;
    `)
    ).toMatchSnapshot();
  });

  it("with double quotes", function () {
    expect(
      parser.parseEval(`
echo <<<"EOD"
Example of string
spanning multiple lines
using heredoc syntax.
EOD;
    `)
    ).toMatchSnapshot();
  });

  it("with variables", function () {
    expect(
      parser.parseEval(`
echo <<<EOT
My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should print a capital 'A': \x41
EOT;
    `)
    ).toMatchSnapshot();
  });

  it("inside call", function () {
    expect(
      parser.parseEval(`
var_dump(array(<<<EOD
foobar!
EOD
));
    `)
    ).toMatchSnapshot();
  });

  it("inside function", function () {
    expect(
      parser.parseEval(`
function foo()
{
    static $bar = <<<LABEL
Nothing in here...
LABEL;
}
    `)
    ).toMatchSnapshot();
  });

  it("inside class", function () {
    expect(
      parser.parseEval(`
class foo {
    const BAR = <<<FOOBAR
Constant example
FOOBAR;

    public $baz = <<<FOOBAR
Property example
FOOBAR;
}
    `)
    ).toMatchSnapshot();
  });

  it("empty", function () {
    expect(
      parser.parseEval(`
echo <<<TEST
TEST;
    `)
    ).toMatchSnapshot();
  });

  it("only newline", function () {
    expect(
      parser.parseEval(`
echo <<<TEST

TEST;
    `)
    ).toMatchSnapshot();
  });

  it("space between <<< and label", function () {
    expect(
      parser.parseEval(`
echo <<<   TEST
  a
 b
c
TEST;
    `)
    ).toMatchSnapshot();
  });

  it("tab between <<< and label", function () {
    expect(
      parser.parseEval(`
echo <<<\tTEST
  a
 b
c
TEST;
    `)
    ).toMatchSnapshot();
  });

  it("Flexible heredoc syntax: 4 spaces of indentation", function () {
    expect(
      parser.parseEval(`
      echo <<<END
      a
     b
    c
    END;
    `)
    ).toMatchSnapshot();
  });

  it("Flexible heredoc syntax: with variables", function () {
    expect(
      parser.parseEval(`
      echo <<<END
      a
      {$foo->bar[1]}
     b
    c
    END;
    `)
    ).toMatchSnapshot();
  });

  it("Flexible heredoc syntax: If the closing marker is indented further than any lines of the body", () => {
    expect(
      parser.parseEval(
        `
      echo <<<END
  a
 b
c
 END;
`,
        {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();
  });

  it("Flexible heredoc syntax: different indentation for body (spaces) ending marker (tabs)", () => {
    expect(
      parser.parseEval(
        `
      echo <<<END
  a
\t\tEND;
`,
        {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();
  });

  it("Flexible heredoc syntax: mixing spaces and tabs in body", () => {
    expect(
      parser.parseEval(
        `
  echo <<<END
\t a
  END;
`,
        {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();
  });

  it("Flexible heredoc syntax: ending label breaks old versions", () => {
    expect(
      parser.parseEval(
        `
echo <<<END
a
 END;
`,
        {
          parser: { version: 702, suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();
  });

  it("Flexible heredoc syntax: parentheses", () => {
    expect(
      parser.parseEval(
        `
stringManipulator(<<<END
   a
  b
 c
END);
`
      )
    ).toMatchSnapshot();

    expect(
      parser.parseEval(
        `
stringManipulator(<<<END
   a
  b
 c
END);
`,

        {
          parser: { version: 702, suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();
  });

  it("Flexible heredoc syntax: symbols after ending", () => {
    expect(
      parser.parseEval(
        `
$values = [<<<END
a
b
c
END, 'd e f'];
`
      )
    ).toMatchSnapshot();

    expect(
      parser.parseEval(
        `
$values = [<<<END
a
b
c
END, 'd e f'];
`,

        {
          parser: { version: 702, suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();
  });

  it("Flexible heredoc syntax: symbols after ending with whitespace", () => {
    expect(
      parser.parseEval(
        `
$values = [<<<END
a
b
c
END          , 'd e f'];
`
      )
    ).toMatchSnapshot();

    expect(
      parser.parseEval(
        `
$values = [<<<END
a
b
c
END          , 'd e f'];
`,

        {
          parser: { version: 702, suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();
  });

  it("Flexible heredoc syntax: empty lines", () => {
    expect(
      parser.parseEval(
        `
$values = <<<END
        a

      b
  
    c

    END;
`
      )
    ).toMatchSnapshot();

    expect(
      parser.parseEval(
        `
$values = <<<END
        a
  
      b

    c
    END;
`
      )
    ).toMatchSnapshot();

    expect(
      parser.parseEval(
        `
$values = <<<END
        a
  
      b

    c
  
    END;
`
      )
    ).toMatchSnapshot();

    expect(
      parser.parseEval(
        `
$values = <<<END
        a
  
      b

   c
  
    END;
`,
        {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();

    // check that it still breaks in old versions
    expect(
      parser.parseEval(
        `
$values = <<<END
        a

      b
  
    c

    END;
`,
        {
          parser: { version: 702, suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();

    expect(
      parser.parseEval(
        `
$values = <<<END
        a
  
      b

    c
    END;
`,
        {
          parser: { version: 702, suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();

    expect(
      parser.parseEval(
        `
$values = <<<END
        a
  
      b

    c
  
    END;
`,
        {
          parser: { version: 702, suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();

    expect(
      parser.parseEval(
        `
$values = <<<END
        a
  
      b

   c
  
    END;
`,
        {
          parser: { version: 702, suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();
  });

  it("Flexible heredoc syntax: indentation bracket bug", () => {
    expect(
      parser.parseEval(
        `
$a = <<<EOT
  EOT;
$b = "{$x}\ntest";
$c = <<< TOE
  a
  TOE;
`
      )
    ).toMatchSnapshot();

    expect(
      parser.parseEval(
        `
$a = <<<EOT
  EOT;
$b = "{$x}\ntest";
$c = <<<TOE
  a
  TOE;
`,
        {
          parser: { version: 702, suppressErrors: true, debug: false },
          lexer: { debug: false },
        }
      )
    ).toMatchSnapshot();
  });

  it("Can't parse multiple flexible nowdoc blocks with different indentation #508", () => {
    expect(
      parser.parseEval(
        `
$a = <<<'EOT'
    a

    EOT;

$b = <<<'EOT'
  b
  EOT;
`
      )
    ).toMatchSnapshot();
  });
});
