const parser = require("../main");

describe("Test strings", function() {

  it("fix #251", function() {
    expect(parser.parseEval('$var = "string ${juices[\'FOO\']} string";')).toMatchSnapshot();
  });

  it("fix #144", function() {
    expect(parser.parseEval('"encapsed \\" {$var}";')).toMatchSnapshot();
  });

  describe("fix #101", function() {
    it("case 1", function() {
      expect(parser.parseEval('"encapsed {$var}";')).toMatchSnapshot();
    });

    it("case 2", function() {
      expect(parser.parseEval('"encapsed {$arr[0]}";')).toMatchSnapshot();
    });

    it("case 3", function() {
      expect(parser.parseEval('"encapsed ${var}";')).toMatchSnapshot();
    });
  });

  it("fix #124", function() {
    expect(
      parser.parseEval('$string = "He drank some $juices[koolaid1] juice.";')
    ).toMatchSnapshot();
  });

  it("fix #123", function() {
    expect(
      parser.parseEval(
        "$string = 'Avoid converting \n chars, but \\' or \\\\ is ok.';"
      )
    ).toMatchSnapshot();
  });

  it("implement #116", function() {
    expect(parser.parseEval(`$a = "foo\\nbar";`)).toMatchSnapshot();
  });

  it("fix #149", function() {
    expect(parser.parseEval(`$a = b"foo\\nbar";`)).toMatchSnapshot();
  });

  it("test binary with double quotes", function() {
    expect(
      parser.parseEval(`echo b"\\colors contains >$colors<\\n";`)
    ).toMatchSnapshot();
  });

  describe("check infinite on $", function() {
    it("using doublequotes", function() {
      expect(
        parser.parseEval(`echo "$`, {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false }
        })
      ).toMatchSnapshot();
    });

    it("using backquotes", function() {
      expect(
        parser.parseEval("echo `$", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false }
        })
      ).toMatchSnapshot();
    });

    it("with arrow", function() {
      expect(
        parser.parseEval("echo ` -> $", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false }
        })
      ).toMatchSnapshot();
    });
  });

  describe("check infinite on {", function() {
    it("using doublequotes", function() {
      expect(
        parser.parseEval(`echo "{`, {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false }
        })
      ).toMatchSnapshot();
    });

    it("using backquotes", function() {
      expect(
        parser.parseEval("echo `{", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false }
        })
      ).toMatchSnapshot();
    });

    it("with arrow", function() {
      expect(
        parser.parseEval("echo ` -> {", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false }
        })
      ).toMatchSnapshot();
    });
  });

  describe("check infinite on ${", function() {
    it("using doublequotes", function() {
      expect(
        parser.parseEval('echo "${', {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false }
        })
      ).toMatchSnapshot();
    });

    it("using backquotes", function() {
      expect(
        parser.parseEval("echo `${", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false }
        })
      ).toMatchSnapshot();
    });

    it("with arrow", function() {
      expect(
        parser.parseEval("echo ` -> ${", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false }
        })
      ).toMatchSnapshot();
    });
  });

  describe("check infinite on {$", function() {
    it("using doublequotes", function() {
      expect(
        parser.parseEval('echo "{$', {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false }
        })
      ).toMatchSnapshot();
    });

    it("using backquotes", function() {
      expect(
        parser.parseEval("echo `{$", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false }
        })
      ).toMatchSnapshot();
    });

    it("with arrow", function() {
      expect(
        parser.parseEval("echo ` -> {$", {
          parser: { suppressErrors: true, debug: false },
          lexer: { debug: false }
        })
      ).toMatchSnapshot();
    });
  });

  it.skip("binary cast", function() {
    expect(
      parser.parseEval(`echo (binary)"\\colors[1] contains >$colors[1]<\\n";`)
    ).toMatchSnapshot();
  });

  it("test encapsed variable", function() {
    expect(
      parser.parseEval(`
      echo "Hello $obj->name !";
      echo "Hello $obj->foo->bar !";
      echo "Hello $obj[1]->foo !";
    `)
    ).toMatchSnapshot();
  });

  it("encapsed variable / curly varname", function() {
    expect(parser.parseEval('echo "Hello ${obj}->name !";')).toMatchSnapshot();
  });

  it("encapsed variable / curly constant", function() {
    expect(parser.parseEval('echo "Hello ${ obj }";')).toMatchSnapshot();
  });

  it("encapsed variable / offsetlookup", function() {
    expect(parser.parseEval('echo "${$parts[$i]}\\n";')).toMatchSnapshot();
  });

  it("test double quotes", function() {
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
          '$a = "\\"";'
        ].join("\r\n"),
        {
          lexer: {
            debug: false
          },
          parser: {
            debug: false
          }
        }
      )
    ).toMatchSnapshot();
  });

  it("...", function() {
    var ast = parser.parseEval('echo B"\\colors[1] contains >$colors[1]<\\n";');
  });

  it("...", function() {
    var ast = parser.parseEval('echo "\\colors[1] contains >$colors [1]<\\n";');
  });

  it("...", function() {
    var ast = parser.parseEval("echo \"~'.{{$expectedLength}}'\\$~s\";");
  });

  it("...", function() {
    var ast = parser.parseEval("$a = b'\\t\\ra';");
  });

  it("...", function() {
    var ast = parser.parseEval('$foo = array("v1.09azAZ-._~!$", true);');
  });

  it("...", function() {
    var ast = parser.parseEval('$v = strtolower("$i.$j.$k-$rel");');
  });

  it("...", function() {
    var ast = parser.parseEval('$text = "$text at line $line";');
  });

  it("...", function() {
    var ast = parser.parseEval(
      "return \"Class.create('$package$className',{\";"
    );
  });

  it("...", function() {
    var ast = parser.parseEval("echo \"yo : {$feeds[0]['title[0][value]']}\";");
  });

  it("...", function() {
    var ast = parser.parseEval('return "\\x1B[{$color}m{$str}\\x1B[0m";');
  });

  it("...", function() {
    var ast = parser.parseEval('echo "\\"$parts[0]\\"\\n";');
  });

  it("...", function() {
    var ast = parser.parseEval('echo "Hello {".$obj->name."} !";');
  });

  it("...", function() {
    var ast = parser.parseEval('echo "Hello {$obj->name} !";');
  });

  it("test encapsed elements", function() {
    expect(
      parser.parseEval(
        [
          "$code = <<<\t EOFX",
          "{$this->docStar}",
          "${$foo}",
          "${targetDirs[1]}",
          "$test[1]",
          "$test->foo",
          "EOFX;"
        ].join("\r"),
        {
          parser: {
            debug: false
          }
        }
      )
    ).toMatchSnapshot();
  });

  it("test nowdoc label and contents", function() {
    expect(
      parser.parseEval(["$code .= <<<'EOF'", "  }", "EOF;"].join("\r\n"), {
        parser: {
          debug: false
        }
      })
    ).toMatchSnapshot();
  });

  it.skip("heredoc ...", function() {
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

  it("test empty nowdoc & heredoc contents", function() {
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
            suppressErrors: true
          }
        }
      )
    ).toMatchSnapshot();
  });

  it("test heredoc end of doc", function() {
    expect(
      parser.parseEval(["$a = <<<EOF2", "SOMETHING"].join("\r"), {
        parser: {
          suppressErrors: true
        }
      })
    ).toMatchSnapshot();
  });

  it("test nowdoc end of doc", function() {
    expect(
      parser.parseEval(["$a = <<<'EOF2'", "FOO"].join("\r"), {
        parser: {
          suppressErrors: true
        }
      })
    ).toMatchSnapshot();
  });

  it("test backquotes", function() {
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
          "$a = `$`;"
        ].join("\r")
      )
    ).toMatchSnapshot();
  });

  it("single", function() {
    expect(parser.parseEval("'string';")).toMatchSnapshot();
  });
  it("single (2)", function() {
    expect(parser.parseEval('"string";')).toMatchSnapshot();
  });
});
