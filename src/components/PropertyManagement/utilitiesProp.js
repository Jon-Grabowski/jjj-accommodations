const rentalCardData = [
    {
        title: 'Manage AirBnb Listings',
        subTitle:'Let us manage your AirBnb listing to enjoy the follow benefits:',
        details: ['Create listing for property', 'Use of Our Super Host Status', 'Write Titles and Description', 'Take and Upload Pictures', 'Updating of Calendar and Pricing']
    },
    {
        title: 'Guest Communication',
        subTitle:'Let us handle any and all communications with your guests:',
        details: ['On Call at All Times', 'Answer All Guests Questions', 'Handle Any Issues with Property', 'Pre and Post Checkout Communication']
    },
    {
        title: 'Décor & Environment',
        subTitle:'We offer optional services for creating a “one of a kind“ environment that will entice bookings:',
        details: ['Décor', 'Bedding', 'Towels', 'Art', 'Pillows']
    }
]

const propManagementTypeData = [
    {
        title:'Rental Properties',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh venenatis cras sed. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Ut etiam sit amet nisl purus in mollis nunc sed. Erat pellentesque adipiscing commodo elit at.',
        imageURL: '../images/stock-images/superhost-logo.jpg',
        serviceObj:{
            'Manage AirBnb Listings': 'Description Goes Here',
            'Use of Superhost Status': 'Description Goes Here',
            'Handle All Guest Communication': 'Description Goes Here',
            'Décor & Environmental Aesthetic': 'Description Goes Here',
            'Cleaning & Maintenance Services': 'Description Goes Here'
        }
    },
    {
        title:'Residential Properties',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh venenatis cras sed. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Ut etiam sit amet nisl purus in mollis nunc sed. Erat pellentesque adipiscing commodo elit at.',
        imageURL: '../images/stock-images/hands-holding-house.jpg',
        serviceObj:{
            'Routine & Deep Cleans': 'Description Goes Here',
            'Move-In/Move-Out': 'Description Goes Here',
            'Property Maintenance': 'Description Goes Here',
            'Handyman Services': 'Description Goes Here',
            'Routine Check-ins': 'Description Goes Here'
        }

    }
]
export { rentalCardData, propManagementTypeData }