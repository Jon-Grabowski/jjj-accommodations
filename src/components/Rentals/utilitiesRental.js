const rentalManagementData = {
    body: "Let us Take the Stress Out of Managing Your Rental Property with Our Comprehensive Services",
    serviceArray:[
        {
            title: 'Create & Manage Airbnb Listings',
            text: {
                header: 'Managing your Airbnb listing is a breeze with us!',
                body: "We'll handle creating and maintaining your Airbnb listing including taking and updating captivating photos to ensure your property shines and attracts guests."
            },
            img: '../images/social icons/airbnb-logo.png'
        },
        {
            title: 'Use of Superhost Status',
            text:{
                header: 'Gain the competitive edge with our Airbnb Superhost status!',
                body: "As trusted hosts, we ensure exceptional guest experiences, leading to higher bookings and increased rental income for your property."
            },
            img: '../images/stock-images/superhost-logo-cropped.jpg'
        },
        {
            title: 'Guest Communications',
            text:{
                header: 'Leave all guest communications to us!',
                body: "Our dedicated team ensures prompt and professional responses 24/7, guaranteeing a seamless experience for your guests, day or night."
            },
            img: '../images/stock-images/guest-communications-1.png'
        },
        {
            title: 'Cleaning & Maintenance',
            text:{
                header: 'We handle all cleaning and maintenance services!',
                body: "Thorough cleanings are provided after each guest, ensuring your property stays in top condition without lifting a finger."
            },
            img: '../images/stock-images/cleaning-card.png'
        },
        {
            title: 'Décor & Aesthetic Services',
            text:{
                header: 'Let us freshen up your property!',
                body: "From bedding to towels, art, and pillows, we'll spruce up your property to create a welcoming and stylish atmosphere that guests will love."
            },
            img: '../images/stock-images/decor-card.png'
        },
        {
            title: 'Seasonal Services',
            text:{
                header: 'Keeping Your Airbnb Ready Year-Round!',
                body: "From snow removal to lawn care and spring planting, we handle all seasonal maintenance for your Airbnb, keeping your property guest-ready."
            },
            img: '../images/stock-images/seasonal-services-stock-photo1.png'
        }
    ]
};

const rentalProperties = [
    {
        name: 'Good Vibes Studio in the Woods',
        description: "Hi! We're Jen, Jacob, and Jude. Welcome to our peaceful studio apartment with good vibes. One memory foam queen bed and one futon. Whether you want to just get away and enjoy the woods or need a place to crash that is super close to Bethel Woods, Resorts World Casino, Kartrite Waterpark and all of the delicious White Lake restaurants, our studio is the place for you! And we are right next door if you need anything at all. Come experience Mother Nature with us!",
        details:['4 guests', 'studio', '2 beds', '1 bath'],
        type: 'Entire Guesthouse',
        location: 'Mongaup Valley, NY',
        amenities: ['Kitchen', 'Wifi', 'Free Parking on Premises', 'TV with standard cable', 'Washer', 'Dryer', 'Air Conditioning', 'Bathtub', 'Patio or Balcony',  'Security Cameras on Property'],
        images: ['../images/rentals/vibes-studio/vibes-1.jpeg', '../images/rentals/vibes-studio/vibes-2.webp', '../images/rentals/vibes-studio/vibes-3.webp', '../images/rentals/vibes-studio/vibes-4.webp', '../images/rentals/vibes-studio/vibes-5.webp', '../images/rentals/vibes-studio/vibes-6.webp', '../images/rentals/vibes-studio/vibes-7.webp', '../images/rentals/vibes-studio/vibes-8.webp'],
        bnbLink: 'https://www.airbnb.com/rooms/25569768?source_impression_id=p3_1711472795_5lKsDaCfrv7cwE%2B6'
    },
    {
        name: 'Quiet Catskill Cabin in the (Bethel) Woods',
        description: "Enjoy sweet sounds of birds and rock n’ roll at our ‘Blueberry’ Cabin set at the edge of the Smallwood Nature Preserve and 7 miles from Bethel Woods performing arts center! With 2 on-site fire pits and a shaded outdoor seating spot with BBQ, our home has everything you crave for a Catskills mountain getaway. By day, swim in the Toronto Reservoir or Lake Superior State Park where you rent boats at a lake beach. At night, stop in in nearby White Lake/Kauneonga for a bite or an ice cream cone.",
        details:['4 guests', '2 bedrooms', '4 beds', '1 bath'],
        type: 'Entire Cabin',
        location: 'Monticello, NY',
        amenities: ['Beach access', 'Kitchen', 'Wifi','Dedicated Workspace', 'Free Parking on Premises', 'TV', 'Washer', 'Free Dryer', 'Window AC unit', 'Security Cameras on Property'],
        images: ['../images/rentals/bethel-cabin/bethel-cabin-1.webp', '../images/rentals/bethel-cabin/bethel-cabin-2.jpg', '../images/rentals/bethel-cabin/bethel-cabin-3.jpg', '../images/rentals/bethel-cabin/bethel-cabin-5.webp', '../images/rentals/bethel-cabin/bethel-cabin-6.webp', '../images/rentals/bethel-cabin/bethel-cabin-7.jpg', '../images/rentals/bethel-cabin/bethel-cabin-8.jpg'],
        bnbLink: 'https://www.airbnb.com/rooms/647692435259519247?source_impression_id=p3_1711733619_osO26riup1SD1pGg'
    },
    {
        name: 'Zen Sanctuary',
        description: "Relax with the whole family at this Zen Sanctuary nestled in the small, friendly community of Smallwood. Less than 15 minutes from Bethel Woods, Monticello Motor Club, Resorts World Casino, The Kartrite Indoor Water Park, The Forestburgh Playhouse, restaurants galore, plus so much more! Guests have access to the whole home and side yard with a fire pit. Total privacy but the hosts are less than 10 min away if anything is needed.",
        details:['6 guests', '3 bedrooms', '3 beds', '1 bath'],
        type: 'Entire Cabin',
        location: 'Monticello, NY',
        amenities: ['Kitchen', 'Free Parking on Premises', 'TV', 'Window AC unit', 'Bathtub', 'Patio or Balcony',  'Backyard', 'Indoor Fireplace', 'Hair dryer', 'Fire pit'],
        images: ['../images/rentals/zen/zen-1.webp', '../images/rentals/zen/zen-2.jpg', '../images/rentals/zen/zen-3.webp', '../images/rentals/zen/zen-4.jpg', '../images/rentals/zen/zen-5.webp', '../images/rentals/zen/zen-6.webp', '../images/rentals/zen/zen-7.webp', '../images/rentals/zen/zen-8.webp'],
        bnbLink: 'https://www.airbnb.com/rooms/1005075602563122864?source_impression_id=p3_1711742527_DD2oFh6GYOW8wliK'
    },
    {
        name: 'Scenic Mountain Escape',
        description: "Relax with the whole family or all by yourself at this tranquil retreat. Nestled up in the mountains away from the hustle and bustle of the city but close to grocery stores, restaurants, Bethel Woods, The Kartrite Indoor Water Park, Resorts World Catskills, Holiday Mountain, farmers markets galore and so much more!!",
        details:['4 Guests', '1 bedroom', '2 beds', '1 bath'],
        type: 'Enitre Home',
        location: 'Callicoon, NY',
        amenities: ['Kitchen', 'Wifi', 'Dedicated Workspace', 'Free Parking on Premises', 'TV', 'Washer', 'Indoor Fireplace', 'Fire Pit', 'Refrigerator',  'Exterior Security Cameras on Property'],
        images: ['../images/rentals/scenic/scenic-1.jpeg', '../images/rentals/scenic/scenic-2.jpeg', '../images/rentals/scenic/scenic-3.webp', '../images/rentals/scenic/scenic-4.jpeg', '../images/rentals/scenic/scenic-5.jpeg', '../images/rentals/scenic/scenic-6.jpeg', '../images/rentals/scenic/scenic-7.jpeg', '../images/rentals/scenic/scenic-8.webp'],
        bnbLink: 'https://www.airbnb.com/rooms/1126041542442734816?source_impression_id=p3_1712776239_aq2rzybwZrPTGUov'
    },
    {
        name: 'Zen Terrarium',
        description: "Step into a plant filled home away from home! Only about 12 minutes from Bethel Woods, Resorts World Casino, the Kartrite Water Park and more! Stay extra cozy in the cool weather with lots of throws, pillows and a wood stove to warm your toes. Wood provided - must discuss using the wood stove with hosts prior to arrival. This space is very special. Who wouldn't want to stay in a 100 year old house filled with plants and cozy nooks?!",
        details:['4 Guests', '1 bedroom', '1 beds', '1 bath'],
        type: 'Enitre Apartment',
        location: 'Mongaup Valley, NY',
        amenities: ['River View', 'Kitchen', 'Wifi', 'Free Parking on Premises', 'TV', 'Washer', 'Dryer', 'Window AC Unit', 'Patio or Balcony',  'Security Cameras on Property'],
        images: ['../images/rentals/zen2/zen2-1.webp', '../images/rentals/zen2/zen2-2.jpg', '../images/rentals/zen2/zen2-3.jpg', '../images/rentals/zen2/zen2-4.webp', '../images/rentals/zen2/zen2-5.jpg', '../images/rentals/zen2/zen2-6.webp', '../images/rentals/zen2/zen2-7.webp', '../images/rentals/zen2/zen2-8.webp'],
        bnbLink: 'https://www.airbnb.com/rooms/48508669?source_impression_id=p3_1711747447_LJqNid28yybFzDqm'
    },
    {
        name: 'Cozy Cottage with Woodstock Scavenger Hunt',
        description: "The cottage is a cozy little space with great amenities. Jam out with the SONOS speaker or watch any channel on DirecTV during the down time. Large back porch and beautiful gardens with a little pond surrounding the home. This space is very Woodstock. Enjoy the peace and love surrounding you, plus tie dye everywhere of course! 10 minutes from Bethel Woods, and less than 15 from the Resorts World Casino and Kartrite Resort & Indoor Water Park. We also have a Woodstock themed scavenger hunt for any guest who would like to participate! Prize included for anyone who solves all the clues!!",
        details:['4 guests', '1 bedroom', '2 beds', '1 bath'],
        type: 'Entire Guesthouse',
        location: 'Mongaup Valley, NY',
        amenities: ['Kitchen', 'Wifi', 'Free Parking on Premises', 'TV with standard cable', 'Air Conditioning', 'Bathtub', 'Patio or Balcony', 'Backyard', "Children's Books/Toys", 'Security Cameras on Property'],
        images: ['../images/rentals/cozy-cottage2/cozy-cottage2-1.webp', '../images/rentals/cozy-cottage2/cozy-cottage2-2.webp', '../images/rentals/cozy-cottage2/cozy-cottage2-3.webp', '../images/rentals/cozy-cottage2/cozy-cottage2-4.webp', '../images/rentals/cozy-cottage2/cozy-cottage2-5.webp', '../images/rentals/cozy-cottage2/cozy-cottage2-6.webp', '../images/rentals/cozy-cottage2/cozy-cottage2-7.jpg', '../images/rentals/cozy-cottage2/cozy-cottage2-8.jpg'],
        bnbLink: 'https://www.airbnb.com/rooms/33779801?source_impression_id=p3_1711748256_8PqzZDfdUvpv%2F4KB'
    },
    {
        name: 'Zen Crystal Cove',
        description: "Come stay in our two bedroom second floor paradise. Fully stocked kitchen with everything you need and a cozy living room with a massage recliner, love seat and vintage rocking chair. Bedrooms each have a king size bed, dresser and closet. Enjoy our crystal decor and good vibes. There are two private bedrooms, a bathroom with stand up shower, living room stocked with entertainment and a full kitchen. (Crystal Cove is the second floor of a two unit house. Guests have a private entrance but the driveway is shared with downstairs guests)",
        details:['4 Guests', '2 bedrooms', '2 beds', '1 bath'],
        type: 'Entire Apartment',
        location: 'Mongaup Valley, NY',
        amenities: ['Kitchen', 'Wifi', 'Free Parking on Premises', 'TV', 'Air Conditioning', 'Backyard', 'Refrigerator', 'Microwave', 'Stove/Oven', 'Security Cameras on Property'],
        images: ['../images/rentals/zen3/zen3-1.webp', '../images/rentals/zen3/zen3-2.webp', '../images/rentals/zen3/zen3-3.webp', '../images/rentals/zen3/zen3-4.webp', '../images/rentals/zen3/zen3-5.jpg', '../images/rentals/zen3/zen3-6.jpg', '../images/rentals/zen3/zen3-7.webp', '../images/rentals/zen3/zen3-8.jpg'],
        bnbLink: 'https://www.airbnb.com/rooms/53499116?source_impression_id=p3_1711748975_TnLuqLnmqr3NRQW0'
    }
]

const reviewQuotesData = [
    {
        body:'"Jen is a great host, who provided us with a well-equipped and clean place to stay. Definitely recommended!"',
        author:'Yaroslav',
        title: 'Zen Crystal Cove Guest'
    },
    {
        body:'"Jen and Jacob were very accommodating during our stay. Their place is very charming and I will absolutely be recommending to friends."',
        author:'Frank',
        title:'Good Vibes Studio Guest'
    },
    {
        body:'"Easy check in, clean space, great hosts!"',
        author:'Hudson',
        title:'Zen Crystal Cove Guest'
    },
    {
        body:'"What a relaxing and peaceful weekend! Jen and Jacob were very attentive to our needs and very down to earth. Their place was exactly as they described it! We would definitely stay again and highly recommend them! We give this stay 5+ stars!"',
        author:'Edward',
        title:'Zen Terrarium Guest'
    }
]

export {rentalManagementData, rentalProperties, reviewQuotesData}