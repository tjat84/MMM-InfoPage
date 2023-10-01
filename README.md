This module displays an information page that is collapsed by default in the lower left corner of the magic mirror. When the user swipes or arrow keys up, the page expands. A swipe or arrow down will collapse the menu. 

### Prerequisite
MMM-Keypress

### Configuration
```
        {
            module: "MMM-InfoPage",
            position: "top_right", // Change this to wherever you want the module to appear
            config: {
                // Custom section titles
                sectionTitles: {
                    title1: "My Custom Title",
                    title2: "My Custom Title",
                    title3: "My Custom Title",
                    title4: "My Custom Title"
                },
                // Custom data for each section
                contacts: [
                    { icon: 'fa-solid fa-mobile', text: 'name', phone: '(123) 123-1234' },
                    // ... more contacts
                ],
                kidContacts: [
                    { icon: 'fa-solid fa-mobile', text: 'name', phone: '(123) 123-1234' },
                    // ... more kid contacts
                ],
                townServices: [
                    { icon: 'fa-regular fa-address-book', text: 'name', phone: '(123) 123-1234' },
                    // ... more town services
                ],
                kidLogins: [
                    { icon: 'fa-regular fa-address-book', text: 'name', phone: '(123) 123-1234' },
                    // ... more kid logins
                ]
            }
        },
```