// This is a JavaScript file
    ons.ready(function() {
        
      var gestureDetector = document.querySelector('ons-gesture-detector');
      var tabbar1 = document.getElementById("tabbar1");
      var tabbar2;
      var tabCount1 = tabbar1.childNodes[1].childElementCount;
      var tabCount2;

      gestureDetector.addEventListener('swipeleft', function() {
        var activeTab1 = tabbar1.getActiveTabIndex();
        
        if (activeTab1 === 1) {
            var activeTab2 = tabbar2.getActiveTabIndex();
            
            if (activeTab2 + 1 <= tabCount2 - 1) {
                tabbar2.setActiveTab(activeTab2 + 1);
            }
            else if (activeTab1 + 1 <= tabCount1 - 1) {
                tabbar1.setActiveTab(activeTab1 + 1);
            }
        }
        else if (activeTab1 + 1 <= tabCount1 - 1) {
            tabbar1.setActiveTab(activeTab1 + 1);
            
            if ((activeTab1 + 1) === 1) {
                tabbar2 = document.getElementById("tabbar2");
                tabCount2 = tabbar2.childNodes[1].childElementCount;
                
                if (tabbar2.getActiveTabIndex() != 0) {
                    tabbar2.setActiveTab(0);
                }
            }
        }
      });
      
      gestureDetector.addEventListener('swiperight', function() {
        var activeTab1 = tabbar1.getActiveTabIndex();
        
        if (activeTab1 === 1) {
            var activeTab2 = tabbar2.getActiveTabIndex();
            
            if (activeTab2 - 1 >= 0) {
                tabbar2.setActiveTab(activeTab2 - 1);
            }
            else if (activeTab1 - 1 >= 0) {
                tabbar1.setActiveTab(activeTab1 - 1);
            }
        }
        else if (activeTab1 - 1 >= 0) {
            tabbar1.setActiveTab(activeTab1 - 1);
            
            if ((activeTab1 - 1) === 1) {
                tabbar2 = document.getElementById("tabbar2");
                tabCount2 = tabbar2.childNodes[1].childElementCount;
                
                if (tabbar2.getActiveTabIndex() != (tabCount2-1)) {
                    tabbar2.setActiveTab(tabCount2-1);
                }
            }
        }
      });
    });