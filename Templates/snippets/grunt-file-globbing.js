// You can specify single files:
{src: 'foo/this.js', dest: ...}
// Or arrays of files:
{src: ['foo/this.js', 'foo/that.js', 'foo/the-other.js'], dest: ...}
// Or you can generalize with a glob pattern:
{src: 'foo/th*.js', dest: ...}

// This single node-glob pattern:
{src: 'foo/{a,b}*.js', dest: ...}
// Could also be written like this:
{src: ['foo/a*.js', 'foo/b*.js'], dest: ...}

// All .js files, in foo/, in alpha order:
{src: ['foo/*.js'], dest: ...}
// Here, bar.js is first, followed by the remaining files, in alpha order:
{src: ['foo/bar.js', 'foo/*.js'], dest: ...}

// All files except for bar.js, in alpha order:
{src: ['foo/*.js', '!foo/bar.js'], dest: ...}
// All files in alpha order, but with bar.js at the end.
{src: ['foo/*.js', '!foo/bar.js', 'foo/bar.js'], dest: ...}

// Templates may be used in filepaths or glob patterns:
{src: ['src/<%= basename %>.js'], dest: 'build/<%= basename %>.min.js'}
// But they may also reference file lists defined elsewhere in the config:
{src: ['foo/*.js', '<%= jshint.all.src %>'], dest: ...}
