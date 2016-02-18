Package.describe({
  name: 'panter:accounts-postch',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Enables login with die Post Schweiz',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('panter:postch', ['client', 'server']);

  api.addFiles('postch_login_button.css', 'client');

  api.addFiles("postch.js");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('panter:accounts-postch');
  api.addFiles('accounts-postch-tests.js');
});
