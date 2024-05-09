const maintenanceCardData = [
    {
        title: 'Small Repairs',
        body:"Tackle those pesky household tasks with our Handyman Services, covering a range of smaller jobs to keep your property in top shape. Whether it's fixing a leaky faucet, repairing a squeaky door, or installing shelves, our skilled handyman is at your service!",
        details: {
            'Handyman Service': '$50/hour or quote per job',
            'House Calls': '$50 stop out fee plus additional hourly after 30 minutes',
            'Garbage Removal': '$5 per bag (plus house call if not already on site)',
            'Concierge Services': 'Available upon request, rates varies.'
        },
        img: '../images/services/maintenance-stock-2.jpg'
    },
    {
        title: 'Contractors',
        body:"When it comes to larger projects requiring specialized skills and equipment, count on us to coordinate with trusted contractors from our network of professionals. We'll take care of all communications, ensuring seamless coordination and clear expectations!",
        details: {
            'Network': 'Carpenters, Plumbers, HVAC, Electricians, and much more',
            'Trust': 'We use contractors that we can vouch for',
            'Communication': 'We\'ll be your point of contact for all work',
            'Coordination':'Service scheduling and access to property',
        },
        img: '../images/services/maintenance-stock-3.jpg'
    }
]

const seasonalData = [
    {
        title: 'Winter',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget felis eget nunc.',
        services: ['Snow Removal - Walkways & Driveways', 'De-Ice - Walkways, Stairs, & Decks', ],
        img: '../images/services/winter-stock-1.jpg'
    },
    {
        title: 'Spring',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget felis eget nunc.',
        services: ['Planting', 'Lawn Mowing', 'Property Clean-up'],
        img: '../images/services/spring-stock-1.jpg'
    },
    {
        title: 'Summer',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget felis eget nunc.',
        services: ['Lawn Care'],
        img: '../images/services/summer-stock-1.jpg'
    },
    {
        title: 'Fall',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget felis eget nunc.',
        services: ['Lawn Care', 'Leaf Removal'],
        img: '../images/services/fall-stock-1.jpg'
    },
]

const cleaningTypeData = [
    {
        heading:'Routine Cleaning',
        body: ' Our Routine Cleaning service is your ticket to a sparkling clean home without the hassle. Our meticulous team handles everything from mopping and vacuuming to dusting and sanitizing all surfaces in every corner of your property, including kitchens, bathrooms, bedrooms, living rooms, and laundry rooms. With attention to detail as our priority, we ensure every inch is left spotless and inviting. Priced affordably at $35 per hour, our Routine Cleaning service offers unbeatable value for a home that gleams with freshness and cleanliness!',
        svgPath: 'M120-40v-280q0-83 58.5-141.5T320-520h40v-320q0-33 23.5-56.5T440-920h80q33 0 56.5 23.5T600-840v320h40q83 0 141.5 58.5T840-320v280H120Zm80-80h80v-120q0-17 11.5-28.5T320-280q17 0 28.5 11.5T360-240v120h80v-120q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240v120h80v-120q0-17 11.5-28.5T640-280q17 0 28.5 11.5T680-240v120h80v-200q0-50-35-85t-85-35H320q-50 0-85 35t-35 85v200Zm320-400v-320h-80v320h80Zm0 0h-80 80Z'
    },
    {
        heading:'Deep Cleaning',
        body: 'Includes everything from Routine Cleaning plus sanitizing high-touch areas, cleaning wooden blind slats, and tackling overhead fan dust. Experience the difference in just one session, leaving your space sparkling and sanitized from top to bottom!',
        svgPath: 'M160-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T200-200q0-17-11.5-28.5T160-240q-17 0-28.5 11.5T120-200q0 17 11.5 28.5T160-160Zm160 80q14-18 22.5-37.5T356-160h84v-280q0-33-23.5-56.5T360-520H160v120q-21 0-41.5 4T80-384v-216h120v-136q0-77 53.5-130.5T384-920q56 0 102 30.5t68 81.5l273 648h93v80H640v-80h100L481-776q-12-29-38.5-46.5T384-840q-44 0-74 30t-30 74v136h80q66 0 113 47t47 113v360H320Zm-20-260Z'
    },
    {
        heading:'Move-In/Move-Out',
        body: "Includes everything in our Routine and Deep Cleaning packages, plus additional tasks like cleaning cabinets/pantry shelves, door and door frames, and sanitizing showerheads. Whether you're moving in or moving out, leave the cleaning to us and step into a fresh, sanitized space that's ready to welcome you home or impress potential buyers or tenants!",
        svgPath: 'M280-80v-40q-33 0-56.5-23.5T200-200v-440q0-33 23.5-56.5T280-720h80v-120q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840v120h80q33 0 56.5 23.5T760-640v440q0 33-23.5 56.5T680-120v40h-80v-40H360v40h-80Zm160-640h80v-80h-80v80Zm40 240q53 0 103.5-13.5T680-534v-106H280v106q46 27 96.5 40.5T480-480Zm-40 120v-42q-42-5-82-15t-78-27v244h400v-244q-38 17-78 27t-82 15v42h-80Zm40 0Zm0-120Zm0 36Z'
    }
]

export {maintenanceCardData, seasonalData, cleaningTypeData}