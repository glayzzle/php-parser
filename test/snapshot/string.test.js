const parser = require("../main");

describe("Test strings", function () {
  it("fix #251", function () {
    expect(
      parser.parseEval("$var = \"string ${juices['FOO']} string\";")
    ).toMatchSnapshot();
  });

  it("fix #144", function () {
    expect(parser.parseEval('"encapsed \\" {$var}";')).toMatchSnapshot();
  });

  describe("fix #101", function () {
    it("case 1", function () {
      expect(parser.parseEval('"encapsed {$var}";')).toMatchSnapshot();
    });

    it("case 2", function () {
      expect(parser.parseEval('"encapsed {$arr[0]}";')).toMatchSnapshot();
    });

    it("case 3", function () {
      expect(parser.parseEval('"encapsed ${var}";')).toMatchSnapshot();
    });
  });

  it("fix #124", function () {
    expect(
      parser.parseEval('$string = "He drank some $juices[koolaid1] juice.";')
    ).toMatchSnapshot();
  });

  it("fix #123", function () {
    expect(
      parser.parseEval(
        "$string = 'Avoid converting \n chars, but \\' or \\\\ is ok.';"
      )
    ).toMatchSnapshot();
  });

  it("implement #116", function () {
    expect(parser.parseEval(`$a = "foo\\nbar";`)).toMatchSnapshot();
  });

  it("fix #149", function () {
    expect(parser.parseEval(`$a = b"foo\\nbar";`)).toMatchSnapshot();
  });

  it("test binary with double quotes", function () {
    expect(
      parser.parseEval(`echo b"\\colors contains >$colors<\\n";`)
    ).toMatchSnapshot();
  });

  describe("check infinite on $", function () {
    it("using doublequotes", function () {
      expect(
        parser.parseEval(`echo "$`, {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        })
      ).toMatchSnapshot();
    });

    it("using backquotes", function () {
      expect(
        parser.parseEval("echo `$", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        })
      ).toMatchSnapshot();
    });

    it("with arrow", function () {
      expect(
        parser.parseEval("echo ` -> $", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        })
      ).toMatchSnapshot();
    });
  });

  describe("check infinite on {", function () {
    it("using doublequotes", function () {
      expect(
        parser.parseEval(`echo "{`, {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        })
      ).toMatchSnapshot();
    });

    it("using backquotes", function () {
      expect(
        parser.parseEval("echo `{", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        })
      ).toMatchSnapshot();
    });

    it("with arrow", function () {
      expect(
        parser.parseEval("echo ` -> {", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        })
      ).toMatchSnapshot();
    });
  });

  describe("check infinite on ${", function () {
    it("using doublequotes", function () {
      expect(
        parser.parseEval('echo "${', {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        })
      ).toMatchSnapshot();
    });

    it("using backquotes", function () {
      expect(
        parser.parseEval("echo `${", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        })
      ).toMatchSnapshot();
    });

    it("with arrow", function () {
      expect(
        parser.parseEval("echo ` -> ${", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        })
      ).toMatchSnapshot();
    });
  });

  describe("check infinite on {$", function () {
    it("using doublequotes", function () {
      expect(
        parser.parseEval('echo "{$', {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        })
      ).toMatchSnapshot();
    });

    it("using backquotes", function () {
      expect(
        parser.parseEval("echo `{$", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        })
      ).toMatchSnapshot();
    });

    it("with arrow", function () {
      expect(
        parser.parseEval("echo ` -> {$", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false },
        })
      ).toMatchSnapshot();
    });
  });

  it.skip("binary cast", function () {
    expect(
      parser.parseEval(`echo (binary)"\\colors[1] contains >$colors[1]<\\n";`)
    ).toMatchSnapshot();
  });

  it("test encapsed variable", function () {
    expect(
      parser.parseEval(`
      echo "Hello $obj->name !";
      echo "Hello $obj->foo->bar !";
      echo "Hello $obj[1]->foo !";
    `)
    ).toMatchSnapshot();
  });

  it("encapsed variable / curly varname", function () {
    expect(parser.parseEval('echo "Hello ${obj}->name !";')).toMatchSnapshot();
  });

  it("encapsed variable / curly constant", function () {
    expect(parser.parseEval('echo "Hello ${ obj }";')).toMatchSnapshot();
  });

  it("encapsed variable / offsetlookup", function () {
    expect(parser.parseEval('echo "${$parts[$i]}\\n";')).toMatchSnapshot();
  });

  it("test double quotes", function () {
    expect(
      parser.parseEval(
        [
          '$a = "$";',
          '$a = "{";',
          '$a = "-$-";',
          '$a = "-{";',
          '$a = "$b";',
          '$a = "{$b}";',
          '$a = "${$b}";',
          '$a = "-$b?";',
          '$a = "-{$b}";',
          '$a = "-${$b}";',
          '$a = "";',
          '$a = "\\"";',
        ].join("\r\n"),
        {
          lexer: {
            debug: false,
          },
          parser: {
            debug: false,
          },
        }
      )
    ).toMatchSnapshot();
  });

  it.each([
    'echo B"\\colors[1] contains >$colors[1]<\\n";',
    'echo "\\colors[1] contains >$colors [1]<\\n";',
    "echo \"~'.{{$expectedLength}}'\\$~s\";",
    "$a = b'\\t\\ra';",
    '$foo = array("v1.09azAZ-._~!$", true);',
    '$v = strtolower("$i.$j.$k-$rel");',
    '$text = "$text at line $line";',
    "return \"Class.create('$package$className',{\";",
    "echo \"yo : {$feeds[0]['title[0][value]']}\";",
    'return "\\x1B[{$color}m{$str}\\x1B[0m";',
    'echo "\\"$parts[0]\\"\\n";',
    'echo "Hello {".$obj->name."} !";',
    'echo "Hello {$obj->name} !";',
  ])("string test: %s", function (code) {
    parser.parseEval(code);
  });

  it("test encapsed elements", function () {
    expect(
      parser.parseEval(
        [
          "$code = <<<\t EOFX",
          "{$this->docStar}",
          "${$foo}",
          "${targetDirs[1]}",
          "$test[1]",
          "$test->foo",
          "EOFX;",
        ].join("\r"),
        {
          parser: {
            debug: false,
          },
        }
      )
    ).toMatchSnapshot();
  });

  it("test nowdoc label and contents", function () {
    expect(
      parser.parseEval(["$code .= <<<'EOF'", "  }", "EOF;"].join("\r\n"), {
        parser: {
          debug: false,
        },
      })
    ).toMatchSnapshot();
  });

  it.skip("heredoc ...", function () {
    expect(
      parser.parseEval(`
      $fallbackContent .= sprintf(<<<EOF2
      \\$catalogue%s = new MessageCatalogue('%s', %s);
      \\$catalogue%s->addFallbackCatalogue(\\$catalogue%s);
      EOF2
      )
    `)
    ).toMatchSnapshot();
  });

  it("test empty nowdoc & heredoc contents", function () {
    expect(
      parser.parseEval(
        `
      echo <<<HDOC
      HDOC
      ;
      echo <<<'NDOC'
      NDOC
      ;
    `,
        {
          parser: {
            suppressErrors: true,
          },
        }
      )
    ).toMatchSnapshot();
  });

  it("test heredoc end of doc", function () {
    expect(
      parser.parseEval(["$a = <<<EOF2", "SOMETHING"].join("\r"), {
        parser: {
          suppressErrors: true,
        },
      })
    ).toMatchSnapshot();
  });

  it("test nowdoc end of doc", function () {
    expect(
      parser.parseEval(["$a = <<<'EOF2'", "FOO"].join("\r"), {
        parser: {
          suppressErrors: true,
        },
      })
    ).toMatchSnapshot();
  });

  it("test backquotes", function () {
    expect(
      parser.parseEval(
        [
          "$a = `ls $cwd`;",
          "$a = `ls ${$cwd}`;",
          "$a = `ls {$cwd}`;",
          "$a = `$var`;",
          "$a = `${var}`;",
          "$a = `{$var}`;",
          "$a = ``;",
          "$a = `\\``;",
          "$a = `{`;",
          "$a = `-{`;",
          "$a = `-$`;",
          "$a = `$`;",
        ].join("\r")
      )
    ).toMatchSnapshot();
  });

  it("single", function () {
    expect(parser.parseEval("'string';")).toMatchSnapshot();
  });
  it("single (2)", function () {
    expect(parser.parseEval('"string";')).toMatchSnapshot();
  });
  it("single quotes", function () {
    expect(
      parser.parseEval(`
$var = 'foo';
$var = '\\'';
$var = '\\'\\'\\'';
$var = '\\'foo';
$var = 'foo\\'';
$var = 'foo\\'foo';
$var = '\\\\\\'';
`)
    ).toMatchSnapshot();
  });
  it("double quotes", function () {
    expect(
      parser.parseEval(`
$var = "\\n";
$var = "\\r";
$var = "\\t";
$var = "\\v";
$var = "\\e";
$var = "\\f";
$var = "\\\\";
$var = "\\$";
$var = "\\"";
$var = "\\141";
$var = "\\7FF";
$var = "\\x61";
$var = "\\x0Z";
$var = "\\xZZ";
$var = "\\u{0061}";
$var = "\\u{}";
$var = "\\u{0FFF}";
$var = "\\u{0ZZZ}";
$var = "cat\\u{1F639}";
$var = "\\u{D83D}\\u{DCA9}";
$var = "💩";
$var = "\\u{ZZZZ}\\u{ZZZZ}";
$var = "🌟";
$var = "'";
$var = "\\'";
$var = "\\n | \\r | \\t | \\v | \\e | \\f | \\\\ | \\$ | \\" | \\141 | \\x61 | \\u{0061}";
`)
    ).toMatchSnapshot();
  });
});
