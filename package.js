/**
 * Created by udit on 01/04/16.
 */
Package.describe(
	{
		name: "desaiuditd:accounts-hmis",
		summary: "Login service for HMIS accounts",
		version: "0.0.1",
		git: "https://github.com/desaiuditd/account-hmis",
	}
);

Package.onUse(function(api) {
	api.use('accounts-base', ['client', 'server']);
	// Export Accounts (etc) to packages using this one.
	api.imply('accounts-base', ['client', 'server']);
	api.use('accounts-oauth', ['client', 'server']);
	api.use('desaiuditd:hmis', ['client', 'server']);

	api.addFiles('hmis_login_button.css', 'client');

	api.addFiles("hmis.js");
});