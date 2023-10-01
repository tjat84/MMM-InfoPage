Module.register("MMM-InfoPage", {

    // Default module config
    defaults: {
        contacts: [],  // Default is an empty array
        kidContacts: [],
        townServices: [],
        kidLogins: [],
        sectionTitles: {
            title1: "Contacts",
            title2: "Kid's Contacts",
            title3: "Town Services",
            title4: "Kids Login Information"
        }
    },

    getStyles: function() {
        return ["MMM-InfoPage.css"];
    },

    start: function() {
        Log.info("Starting module: " + this.name);
    },

    // Override dom generator
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.id = "magicMirrorModule";
        
        var infoGrid = document.createElement("div");
        infoGrid.className = "infoGrid";
    
        // New header
        var mainHeader = document.createElement("h1");
        mainHeader.innerText = "Important Information";
        infoGrid.appendChild(mainHeader);
    
        const sections = [
            {
                title: this.config.sectionTitles.title1,
                items: this.config.contacts
            },
            {
                title: this.config.sectionTitles.title2,
                items: this.config.kidContacts
            },
            {
                title: this.config.sectionTitles.title3,
                items: this.config.townServices
            },
            {
                title: this.config.sectionTitles.title4,
                items: this.config.kidLogins
            }
        ];
    
        sections.forEach(section => {
            let sectionElement = document.createElement("section");
            let header = document.createElement("h2");
            header.innerHTML = section.title;
            sectionElement.appendChild(header);
    
            section.items.forEach(item => {
                let itemElement = document.createElement("div");
                itemElement.innerHTML = `<i class="${item.icon}"></i> <span>${item.text}</span> <span>${item.phone}</span>`;                
                sectionElement.appendChild(itemElement);
            });
    
            infoGrid.appendChild(sectionElement);
        });
    
        wrapper.appendChild(infoGrid);
        return wrapper;
    },

    notificationReceived: function(notification, payload, sender) {
        console.log("Notification Received: " + notification);
        if (notification === "PAGE_SWITCH") {
            if (payload.direction === "ArrowUp") {
                var moduleElem = document.getElementById("magicMirrorModule");
                if (moduleElem) {
                    moduleElem.classList.add('expanded');
                }
            } else if (payload.direction === "ArrowDown") {
                var moduleElem = document.getElementById("magicMirrorModule");
                if (moduleElem) {
                    moduleElem.classList.remove('expanded');
                }
            }
        }
    }

});
