sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'userprofile/test/integration/FirstJourney',
		'userprofile/test/integration/pages/profileList',
		'userprofile/test/integration/pages/profileObjectPage'
    ],
    function(JourneyRunner, opaJourney, profileList, profileObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('userprofile') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheprofileList: profileList,
					onTheprofileObjectPage: profileObjectPage
                }
            },
            opaJourney.run
        );
    }
);