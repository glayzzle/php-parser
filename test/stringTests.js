var should = require("should");
var parser = require('../src/index');

describe('Test strings', function() {

  it('...', function() {
    var ast = parser.parseEval('$a = b\'\\t\\ra\';');
  });
  it('...', function() {
    var ast = parser.parseEval('echo b"\\colors contains >$colors<\\n";');
  });
  it('...', function() {
    var ast = parser.parseEval('echo B"\\colors[1] contains >$colors[1]<\\n";');
  });
  it('...', function() {
    var ast = parser.parseEval('echo "\\colors[1] contains >$colors [1]<\\n";');
  });
  it('...', function() {
    var ast = parser.parseEval('var_dump("$colors[1]");');
  });
  it('...', function() {
    var ast = parser.parseEval('var_dump("$colors[01]");');
  });
  it('...', function() {
    var ast = parser.parseEval('var_dump("$colors[0x1]");');
  });
  it('...', function() {
    var ast = parser.parseEval('var_dump("$colors[0X1]");');
  });
  it('...', function() {
    var ast = parser.parseEval('echo "~\'.{{$expectedLength}}\'\\$~s";');
  });
  it('...', function() {
    var ast = parser.parseEval('echo "Hello \\"$obj->name\\" !";');
  });
  it('...', function() {
    var ast = parser.parseEval('echo "Hello {".$obj->name."} !";');
  });
  it('...', function() {
    var ast = parser.parseEval('echo "Hello {$obj->name} !";');
  });
  it('...', function() {
    var ast = parser.parseEval('echo "Hello ${obj}->name !";');
  });
  it('...', function() {
    var ast = parser.parseEval('echo "\\"$parts[0]\\"\\n";');
  });
  it('...', function() {
    var ast = parser.parseEval('echo "${$parts[$i]}\\n";');
  });
  it('...', function() {
    var ast = parser.parseEval('echo "yo : {$feeds[0][\'title[0][value]\']}";');
  });
  it('...', function() {
    var ast = parser.parseEval('return "\\x1B[{$color}m{$str}\\x1B[0m";');
  });
  it('test double quotes', function() {
    var ast = parser.parseEval([
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
    ].join('\r\n'), {
      lexer: {
        debug: false
      },
      parser: {
        debug: false
      }
    });
  });
  it('...', function() {
    var ast = parser.parseEval('$foo = array("v1.09azAZ-._~!$", true);');
  });
  it('...', function() {
    var ast = parser.parseEval('$v = strtolower("$i.$j.$k-$rel");');
  });
  it('...', function() {
    var ast = parser.parseEval('$text = "$text at line $line";');
  });
  it('...', function() {
    var ast = parser.parseEval('return "Class.create(\'$package$className\',{";');
  });
  it('heredoc ...', function() {
    var ast = parser.parseEval([
      '$code = <<<\t EOFX',
      '',
      '/*{$this->docStar}',
      ' * Constructor.',
      ' */',
      'public function __construct()',
      '${$targetDirs}',
      '$test',
      'EOFX;'
    ].join('\r\n'));
  });
  it('test nowdoc label and contents', function() {
    var ast = parser.parseEval([
      '$code .= <<<\'EOF\'',
      '  }',
      'EOF;'
    ].join('\r\n'), {
      parser: {
        debug: false
      }
    });
    var expr = ast.children[0].right;
    expr.kind.should.be.exactly('nowdoc');
    expr.label.should.be.exactly('EOF');
    expr.value.should.be.exactly('  }');
  });
  it('heredoc ...', function() {
    var ast = parser.parseEval([
      '$fallbackContent .= sprintf(<<<EOF2',
      '\\$catalogue%s = new MessageCatalogue(\'%s\', %s);',
      '\\$catalogue%s->addFallbackCatalogue(\\$catalogue%s);',
      'EOF2',
      ');',
    ].join('\r\n'));
  });
  it('test empty nowdoc & heredoc contents', function() {
    var ast = parser.parseEval([
      'echo <<<HDOC',
      'HDOC',
      ';',
      'echo <<<\'NDOC\'',
      'NDOC',
      ';',
    ].join('\r\n'));
    ast.children[0].arguments[0].kind.should.be.exactly('encapsed');
    ast.children[0].arguments[0].label.should.be.exactly('HDOC');
    ast.children[0].arguments[0].value.length.should.be.exactly(0);

    ast.children[1].arguments[0].kind.should.be.exactly('nowdoc');
    ast.children[1].arguments[0].label.should.be.exactly('NDOC');
    ast.children[1].arguments[0].value.should.be.exactly('');
  });
  it('test heredoc end of doc', function() {
    var ast = parser.parseEval([
      '$a = <<<EOF2',
      'SOMETHING'
    ].join('\r'), {
      parser: {
        suppressErrors: true
      }
    });
    ast.errors.length.should.be.exactly(1);
    ast.errors[0].line.should.be.exactly(2);
    ast.errors[0].message.indexOf('T_END_HEREDOC').should.be.greaterThan(-1);
    ast.children[0].right.kind.should.be.exactly('encapsed');
    ast.children[0].right.type.should.be.exactly('heredoc');
    ast.children[0].right.label.should.be.exactly('EOF2');
    ast.children[0].right.value[0].value.should.be.exactly('SOMETHING');
  });
  it('test nowdoc end of doc', function() {
    var ast = parser.parseEval([
      '$a = <<<\'EOF2\'',
      'FOO'
    ].join('\r'), {
      parser: {
        suppressErrors: true
      }
    });
    ast.errors.length.should.be.exactly(1);
    ast.errors[0].line.should.be.exactly(2);
    ast.errors[0].message.indexOf('T_END_HEREDOC').should.be.greaterThan(-1);
    ast.children[0].right.kind.should.be.exactly('nowdoc');
    ast.children[0].right.label.should.be.exactly('EOF2');
    ast.children[0].right.value.should.be.exactly('FOO');
  });
  it('test backquotes', function() {
    var ast = parser.parseEval([
      '$a = `ls $cwd`;',
      '$a = `ls ${$cwd}`;',
      '$a = `ls {$cwd}`;',
      '$a = `$var`;',
      '$a = `${var}`;',
      '$a = `{$var}`;',
      '$a = ``;',
      '$a = `\\``;',
      '$a = `{`;',
      '$a = `-{`;',
      '$a = `-$`;',
      '$a = `$`;',
    ].join('\r'));
    ast.children[0].right.kind.should.be.exactly('shell');
    ast.children[0].right.value.kind.should.be.exactly('encapsed');
    ast.children[0].right.value.type.should.be.exactly('shell');
    ast.children[0].right.value.value.length.should.be.exactly(2);
    ast.children[0].right.value.value[0].kind.should.be.exactly('string');
    ast.children[0].right.value.value[0].value.should.be.exactly('ls ');
    ast.children[0].right.value.value[1].kind.should.be.exactly('variable');
    ast.children[0].right.value.value[1].name.should.be.exactly('cwd');
    // @todo test the rest of childs
  });

});
