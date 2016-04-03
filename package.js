/**
 * Created by udit on 01/04/16.
 */
Package.describe(
	{
		name: "desaiuditd:accounts-hmis",
		summary: "Login service for HMIS accounts",
		version: "0.0.2",
		git: "https://github.com/desaiuditd/account-hmis",
	}
);

Package.onUse(function(api) {
	api.use('accounts-base@1.2.2', ['client', 'server']);
	// Export Accounts (etc) to packages using this one.
	api.imply('accounts-base@1.2.2', ['client', 'server']);
	api.use('accounts-oauth@1.1.8', ['client', 'server']);
	api.use('desaiuditd:hmis@0.0.1', ['client', 'server']);

	api.addFiles('hmis_login_button.css', 'client');

	api.addFiles("hmis.js");
});