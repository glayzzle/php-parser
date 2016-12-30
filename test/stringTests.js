var should = require("should");
var parser = require('../src/index');

describe('Test strings', function() {

  it('...', function() {
    var ast = parser.parseEval('$a = b\'a\';');
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
  it('...', function() {
    var ast = parser.parseEval('$tiny = "$";');
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
      '$code = <<<EOFX',
      '',
      '/*{$this->docStar}',
      ' * Constructor.',
      ' */',
      'public function __construct()',
      '{{$targetDirs}',
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

});
