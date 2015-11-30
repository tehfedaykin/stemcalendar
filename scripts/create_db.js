var cp = require('child_process'),
    fs = require('fs'),
    path = require('path'),
    sqlScripts;

function exec(cmd, args) {
  if (typeof args == 'string') {
    args = [args];
  }

  // Uncommment to see database output
  // return cp.spawnSync(cmd, args, { stdio: [0, 0, 0] });
  return cp.spawnSync(cmd, args);
}

console.log('Dropping stem_events database');
exec('dropdb', 'stem_events');
console.log('Dropping stem user');
exec('dropuser', ['stem_user']);
console.log('Creating stem user');
exec('createuser', ['-s', 'stem_user']);
console.log('Creating database stem_events');
exec('createdb', ['-O', 'stem_user', 'stem_events']);


sqlScripts = fs.readdirSync(path.join(__dirname, 'sql'));

sqlScripts.forEach(script => {
  console.log('Executing SQL script: ', path.join(__dirname, 'sql', script));
  exec('psql',  ['-a', '-d', 'stem_events',  '-U',  'stem_user', '-f', path.join(__dirname, 'sql', script)]);
});

console.log('Database creation complete');
