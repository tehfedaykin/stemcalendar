var cp = require('child_process'),
    path = require('path');

function exec(cmd, args) {
  if (typeof args == 'string') {
    args = [args];
  }

  return cp.spawnSync(cmd, args, { stdio: [0, 1, 2] });
}

exec('dropdb', 'stem_events');
exec('dropuser', ['stem_user']);
exec('createuser', ['-s', 'stem_user']);
exec('createdb', ['-O', 'stem_user', 'stem_events']);
exec('psql', ['-a', '-d', 'stem_events',  '-U',  'stem_user', '-f', path.join(__dirname, 'backup.sql')]);

//Using the old way
// exec('psql', ['-a', '-d', 'stem_events',  '-U',  'stem_user', '-f', path.join(__dirname, '..', 'src/server/scripts/create_database.sql')]);


// exec('psql -a -d stem_events -U stem_user -f ' + path.join(__dirname, '..', 'db.sql'));
exec('psql', ['-a', '-d', 'stem_events', '-U', 'stem_user', '-f', path.join(__dirname, '..', 'src/server/scripts/insert_data.sql')]);
