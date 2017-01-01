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
  it('binary cast', function() {
    var ast = parser.parseEval('echo (binary)"\\colors[1] contains >$colors[1]<\\n";');
    console.log(ast.children[0].arguments[0]);
  });
  it('...', function() {
    var ast = parser.parseEval('echo "\\colors[1] contains >$colors [1]<\\n";');
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
  it('heredoc ...', function() {
    var ast = parser.parseEval([
      '$code .= <<<\'EOF\'',
      '  }',
      'EOF;'
    ].join('\r\n'));
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
  });
  it('test heredoc end of doc', function() {
    var ast = parser.parseEval([
      '$a = <<<EOF2',
      '\\$catalogue%s = new MessageCatalogue(\'%s\', %s);',
      '\\$catalogue%s->addFallbackCatalogue(\\$catalogue%s);'
    ].join('\r'), {
      parser: {
        suppressErrors: true
      }
    });
  });
  it('test nowdoc end of doc', function() {
    var ast = parser.parseEval([
      '$a = <<<\'EOF2\'',
      '\\$catalogue%s = new MessageCatalogue(\'%s\', %s);',
      '\\$catalogue%s->addFallbackCatalogue(\\$catalogue%s);'
    ].join('\r'), {
      parser: {
        suppressErrors: true
      }
    });
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
  });

});
