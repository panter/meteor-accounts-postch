Accounts.oauth.registerService('postch');

if (Meteor.isClient) {
  Meteor.loginWithPostch = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Postch.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({

    forLoggedInUser: ['services.postch'],
    forOtherUsers: ['services.postch.email']
  });
}
