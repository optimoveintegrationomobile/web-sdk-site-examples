

     $(document).ready(() => {
    // Place JavaScript code here...
    const userLocal = window.localStorage.getItem('public_userid');
    if (userLocal != null && userLocal != undefined) {
        window.public_userid = userLocal;
    }

    const loadJSResource = function (resourceURL, callback) {
        if (resourceURL != null) {
            const d = document;
            const g = d.createElement('script');
            const s = d.getElementsByTagName('script')[0];
            g.type = 'text/javascript';
            g.async = true;
            g.defer = true;
            g.src = resourceURL;
            g.onload = callback;
            s.parentNode.insertBefore(g, s);
        }
    };

    function onLoadSDK() {
        console.log('called onSDKLoad');
        var token = 'QA';
        var configVersion = '1.0.1';
        self.optimoveSDK.initialize(token, configVersion, onSDKInitialized, 'info');
    }

    function onSDKInitialized(status) {
        console.log(`testing my call back status = ${status}`);

        let url = self.document.location.href;
        let host =  self.document.location.origin;
        let splited =  url.split(host);
        let pageName = splited[1];
        let pageTitle  = pageName.slice(1, pageName.length);
        if(pageTitle == "")
            pageTitle = "Home - Hackathon Starter";

        self.optimoveSDK.API.setPageVisit( window.location.href, pageTitle, 'mycategory');
    }
    loadJSResource('http://sdk-cdn.optimove.net/websdk/sdk-v1.0.4.js', onLoadSDK);
	 
   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	
 ga('create', 'UA-105059156-1', 'auto');
 ga('send', 'pageview');


    function updateSignup(elem) {

        var emailInputElement = document.getElementById('email');
        var email = emailInputElement.value;
        window.public_userid = email;
        window.localStorage.setItem('public_userid', window.public_userid);
//encrypted(email)
	let  encrypted = undefined;
	if(email == 'nitzan_b@optimove.com'){
		encrypted  = 'FZlTAjDb5B5u1ZCP/07Xky4DwVnkchLRy3RUHsJZv60/yMBLm7HH2mIvRFhKDabf7fDJoyqi1KJnSEDtlNXlfjj7Vv+9gfEh9PbpzjuRz4w=';
	}else  if(email == 'tamar_k@optimove.com'){
                encrypted  = 'JfOw3uqikVjuiZXgdiHywm7Zu5QkJCga9En+klh/h/qz38B6oVglPyTuwo81o5bGxorht5Ea3gi04apZrCzcO85k5OS4UHqE5ATNS89VrBw=';
        }else  if(email == 'haimi_g@optimove.com'){
                encrypted  = 'CqYp04WUACnfFxYwH70h7A+gzFeQWgczn8NIMpVFjUAwrcTCmAF9Qdm384wzNuHDMx/1oh2JmSG9sOfIhmCB0gc58Dn4yqODTszydvPMgyQ=';
        }else  if(email == 'boris_f@optimove.com'){
                encrypted  = '/ZDWVzFThPEkWTOzInSV6selYoxIfFhEY9NLw53NFbXNWsyoKSFfxFUz8BwRcy7Ety8YHufgkpX5j4y1yHXFIq8YSNvND539p0BItsq/0ag=';
        }else  if(email == 'dima_t@optimove.com'){
                encrypted  = 'Aqj4zQ7aE0Z6Nxocht4g9ASiQ90ay3xEHzhkLzT+7vMLlWB9GhBChzb0JXbr/OokosmtpRbh5fMlRnpkhZFD5J1a2ObTkHJnlva7B0pbU8Q=';
        }else  if(email == 'tomer_c@optimove.com'){
                encrypted  = 'TatMLmVSwPweoDiJ0p9jabOS3jO/EYE7DO1u1wcR5yw8EeD5VnLOLB89rPQbX63/Ncp2WgbdRsTZSzFDuZCdlcegs6oj1r3x32o90qTSBX8=';
        }else  if(email == 'roman_y@optimove.com'){
                encrypted  = 'xrthZx+eWsmNNqRz5UR1FY/xBOH5TyxIZFkkCsBEbkFWGdIH3xK+UrWux3T10i0yQNV+fT9K/Qt8VQDUW+UXu9ymbpWL+9J9GoM5wMw0lW0=';
        }  
	if(encrypted == undefined){
	   self.optimoveSDK.API.setUserId(email);
	}else{
	   self.optimoveSDK.API.setUserId(encrypted);
	}

       

	ga('create', 'UA-105059156-1', 'auto', {
  		userId: email 
		});
	    
	ga('set', 'userId', email); // Set the user ID using signed-in user_id.
	ga('send', 'event', 'login', email);
	

        return true;
    };
    var loginButtonElem = document.getElementById('signup-button');
    if(loginButtonElem != null)
    {
        loginButtonElem.addEventListener('click', updateSignup );
    }

    function updateLogin(elem) {

        var emailInputElement = document.getElementById('email');
        var email = emailInputElement.value;
        window.public_userid = email;
        window.localStorage.setItem('public_userid', window.public_userid);
       // self.optimoveSDK.API.setUserId(email);
	let  encrypted = undefined;
                if(email == 'nitzan_b@optimove.com'){
                encrypted  = 'FZlTAjDb5B5u1ZCP/07Xky4DwVnkchLRy3RUHsJZv60/yMBLm7HH2mIvRFhKDabf7fDJoyqi1KJnSEDtlNXlfjj7Vv+9gfEh9PbpzjuRz4w=';
        }else  if(email == 'tamar_k@optimove.com'){
                encrypted  = 'JfOw3uqikVjuiZXgdiHywm7Zu5QkJCga9En+klh/h/qz38B6oVglPyTuwo81o5bGxorht5Ea3gi04apZrCzcO85k5OS4UHqE5ATNS89VrBw=';
        }else  if(email == 'haimi_g@optimove.com'){
                encrypted  = 'CqYp04WUACnfFxYwH70h7A+gzFeQWgczn8NIMpVFjUAwrcTCmAF9Qdm384wzNuHDMx/1oh2JmSG9sOfIhmCB0gc58Dn4yqODTszydvPMgyQ=';
        }else  if(email == 'boris_f@optimove.com'){
                encrypted  = '/ZDWVzFThPEkWTOzInSV6selYoxIfFhEY9NLw53NFbXNWsyoKSFfxFUz8BwRcy7Ety8YHufgkpX5j4y1yHXFIq8YSNvND539p0BItsq/0ag=';
        }else  if(email == 'dima_t@optimove.com'){
                encrypted  = 'Aqj4zQ7aE0Z6Nxocht4g9ASiQ90ay3xEHzhkLzT+7vMLlWB9GhBChzb0JXbr/OokosmtpRbh5fMlRnpkhZFD5J1a2ObTkHJnlva7B0pbU8Q=';
        }else  if(email == 'tomer_c@optimove.com'){
                encrypted  = 'TatMLmVSwPweoDiJ0p9jabOS3jO/EYE7DO1u1wcR5yw8EeD5VnLOLB89rPQbX63/Ncp2WgbdRsTZSzFDuZCdlcegs6oj1r3x32o90qTSBX8=';
        }else  if(email == 'roman_y@optimove.com'){
                encrypted  = 'xrthZx+eWsmNNqRz5UR1FY/xBOH5TyxIZFkkCsBEbkFWGdIH3xK+UrWux3T10i0yQNV+fT9K/Qt8VQDUW+UXu9ymbpWL+9J9GoM5wMw0lW0=';
        }   
        if(encrypted == undefined){
           self.optimoveSDK.API.setUserId(email);
        }else{
           self.optimoveSDK.API.setUserId(encrypted);
        }
	self.optimoveSDK.API.reportEvent('login_event', { });
	    
	ga('create', 'UA-105059156-1', 'auto', {
                userId: email
                });    
	ga('set', 'userId',email); // Set the user ID using signed-in user_id.    
	ga('send', 'event', 'login', email);
        ga('send', 'event', 'login_event', email);
   	
	

        return true;
    }
    var loginButtonElem = document.getElementById('login-button');
    if(loginButtonElem != null)
    {

	    loginButtonElem.addEventListener('click', updateLogin );
    }


    function updateLogout(elem) {

        var emailInputElement = document.getElementById('email');
        var email = emailInputElement.value;


        return true;
    }
    var logoutButtonElem = document.getElementById('logout-link');
    if(logoutButtonElem != null)
    {
        logoutButtonElem.addEventListener('click', updateLogout );

    }
    function updateAction(elem) {


        var eventName = elem.srcElement.innerText;
	var deposit_value = 0;
	var game_name_value =0;
	var win_amount_value=0;
	var loss_amount_value=0;

	if(eventName == 'Event1'){
		game_name_value ='Slot';
		win_amount_value=10;
		self.optimoveSDK.API.reportEvent('wininx_event', { game_name: game_name_value, win_amount: win_amount_value});
	    deposit_value = 10;
	}else if(eventName == 'Event2'){ 
	    game_name_value ='Slot';
		loss_amount_value=100;
	    self.optimoveSDK.API.reportEvent('lossinx_event', { game_name: game_name_value, loss_amount: loss_amount_value});
	      deposit_value = 100;
        } else if(eventName == 'Event3'){
        game_name_value ='Poker';
		win_amount_value=300;
	    self.optimoveSDK.API.reportEvent('wininx_event', { game_name: game_name_value, win_amount: win_amount_value}); 
        deposit_value = 300;
        }else if(eventName == 'Event4'){ 
        game_name_value ='Poker';
		loss_amount_value=1000;
	    self.optimoveSDK.API.reportEvent('lossinx_event', { game_name: game_name_value, loss_amount: loss_amount_value, products:[{game_name: game_name_value},{loss_amount: loss_amount_value}]});
	    
            deposit_value = 1000;
        }
        self.optimoveSDK.API.reportEvent('deposit_event', { deposit: deposit_value});

	//self.optimoveSDK.API.reportEvent('Set_email_event', {'email': 'yossi.cohn@gmail.com' });
	
	ga('set', 'dimension1', 'deposit');
	ga('set', 'dimension2', deposit_value);
	ga('send', 'event', 'logEvent', 'deposit_event');
	    
        return true;
    }

    var action1 = document.getElementById('action1-btn');
    if(action1 != null)
    {

        action1.addEventListener('click', updateAction );
    }

    var action2 = document.getElementById('action2-btn');
    if(action2 != null)
    {
        action2.addEventListener('click', updateAction );
    }
    var action3 = document.getElementById('action3-btn');
    if(action3 != null)
    {
        action3.addEventListener('click', updateAction );
    }

    var action4 = document.getElementById('action4-btn');
    if(action4 != null)
    {
        action4.addEventListener('click', updateAction );
    }

});




