const parser = require('../main');

describe('Test locations', function() {
  it('#164 : expr must include ;', function() {
    expect(
      parser.parseEval(
        '$a = $b + 1;', {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('#164 : expr should avoid ?>', function() {
    expect(
      parser.parseCode(
        '<?php $a = $b + 1 ?>', {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('if/elseif/else', function() {
    expect(
      parser.parseEval(
        'if ($a > $b) echo "something"; elseif ($a < $b) echo "something"; else echo "something";',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('if/elseif/else block', function() {
    expect(
      parser.parseEval(
        'if ($a > $b) { echo "something"; } elseif ($a < $b) { echo "something"; } else { echo "something"; }',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('switch', function() {
    expect(
      parser.parseEval(
        'switch ($i) {}',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('for', function() {
    expect(
      parser.parseEval(
        'for ($i = 1; $i <= 10; $i++) echo "something";',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('for block', function() {
    expect(
      parser.parseEval(
        'for ($i = 1; $i <= 10; $i++) { echo "something"; }',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('foreach', function() {
    expect(
      parser.parseEval(
        'foreach ($arr as $value) echo "something";',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('foreach block', function() {
    expect(
      parser.parseEval(
        'foreach ($arr as $value) { echo "something"; }',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('while', function() {
    expect(
      parser.parseEval(
        'while(true) echo "something";',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('while block', function() {
    expect(
      parser.parseEval(
        'while(true) { echo "something"; }',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('do', function() {
    expect(
      parser.parseEval(
        'do { echo $i; } while(true);',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('return', function() {
    expect(
      parser.parseEval(
        'return 1;',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });

  it('break', function() {
    expect(
      parser.parseEval(
        'break;',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });

  it('continue', function() {
    expect(
      parser.parseEval(
        'continue;',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('global', function() {
    expect(
      parser.parseEval(
        'global $a;',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('static', function() {
    expect(
      parser.parseEval(
        'static $a = 1;',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('echo', function() {
    expect(
      parser.parseEval(
        'echo "something";',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('unset', function() {
    expect(
      parser.parseEval(
        'unset($foo);',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('declare', function() {
    expect(
      parser.parseEval(
        'declare(ticks=1);',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('declare block', function() {
    expect(
      parser.parseEval(
        'declare(ticks=1) { echo "something"; }',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('try', function() {
    expect(
      parser.parseEval(
        'try new Exception();',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('goto', function() {
    expect(
      parser.parseEval(
        'goto a;',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('function', function() {
    expect(
      parser.parseEval(
        'function fn() { echo "something"; }',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('class', function() {
    expect(
      parser.parseEval(
        'class Foo {}',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('namespace', function() {
    expect(
      parser.parseEval(
        'namespace my\\name;',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
  it('namespace backets', function() {
    expect(
      parser.parseEval(
        'namespace my\\name { echo "something"; }',
        {
          ast: {
            withPositions: true,
            withSource: true
          }
        }
      )
    ).toMatchSnapshot();
  });
});
