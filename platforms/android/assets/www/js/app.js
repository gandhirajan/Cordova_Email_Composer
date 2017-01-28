$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    $('#email').click(function() {

        try {
            // to check email sending capability is enabled
			/*cordova.plugins.email.isAvailable(
				function (isAvailable) {
					// alert('Service is not available') unless isAvailable;
				}
			);*/

			// Add app alias
			//cordova.plugins.email.addAlias('gmail', 'com.google.android.gm');

			// Specify app by name or alias
			/*cordova.plugins.email.open({
				app: 'gmail',
				subject: 'Sent from Email Composer'
			});*/

			alert("Plugin initialized");
			cordova.plugins.email.open({
				app: 'Email App',
				subject: 'Sent with mailto'
			});
        } catch (err) {
            alert("Plugin Error - " + err.message);
        }

    });
}