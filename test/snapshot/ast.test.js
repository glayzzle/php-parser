const parser = require('../main');

describe("Test AST structure", function() {
  it('fix #127 - echo statements', () => {
    expect(parser.parseEval('echo "hello"; ?> world')).toMatchSnapshot();
  });

  it('fix #127 - inline', function() {
    expect(parser.parseEval('?>?>?>')).toMatchSnapshot();
  });

  it("#176 - lost `?>` in program node", function() {
    expect(parser.parseCode(`<?php
    __LINE__
    ?>`, null, {
      ast: {
        withPositions: true,
        withSource: true
      }
    })).toMatchSnapshot();
  })

  it('test program', function() {
    expect(parser.parseEval('')).toMatchSnapshot();
  });
  it("test syntax error", function() {
    const parse = function() {
      parser.parseEval(`
        $a = 1
        $b = 2
      `);
    };
    expect(parse).toThrowErrorMatchingSnapshot();
  });
  it("test inline", function() {
    expect(
      parser.parseCode("Hello <?php echo 'World'; ?>\n !")
    ).toMatchSnapshot();
  });

  it("fix #120", function() {
    expect(
      parser.parseCode("<?php echo 'World'; ?>\r\n !")
    ).toMatchSnapshot();
  });

  it("test magics", function() {
    expect(
      parser.parseEval("echo __FILE__, __DIR__;")
    ).toMatchSnapshot();
  });
  it("test shell", function() {
    expect(
      parser.parseEval("echo `ls -larth`;")
    ).toMatchSnapshot();
  });
  it("test clone", function() {
    expect(
      parser.parseEval("$a = clone $var;")
    ).toMatchSnapshot();
  });
  it("test echo, isset, unset, empty", function() {
    expect(
      parser.parseEval(`
        echo ($expr) ? "ok" : "ko";
        print "some text";
        isset($foo, $bar);
        unset($var);
        empty($var);
      `)
    ).toMatchSnapshot();
  });

  it("test constants", function() {
    expect(
      parser.parseEval("const FOO = 3.14;")
    ).toMatchSnapshot();
  });

  it("test eval", function() {
    expect(
      parser.parseEval('eval("return true;");')
    ).toMatchSnapshot();
  });
  it("test die/exit", function() {
    expect(
      parser.parseEval(`
        die("bye");
        exit(-1);
      `)
    ).toMatchSnapshot();
  });

  it("test coalesce operator", function() {
    expect(
      parser.parseEval("$var = $a ?? true;")
    ).toMatchSnapshot();
  });

  it("test include / require", function() {
    expect(
      parser.parseEval(`
        include "file.php";
        include_once (PATH . "/file.php");
        require "req.php";
        require_once "file.php";
      `)
    ).toMatchSnapshot();
  });
});
