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
        name: 'Charming Catskills Lakefront Home',
        description: `This beautiful lakefront cabin is located at the end of a peaceful road adorned with tire swings and wildflowers. It is situated in a private community on a small and serene lake, offering the perfect setting to enjoy morning coffee on the dock, taking refreshing afternoon swims in the lake, going for evening kayaking rides, and stargazing. You can unwind in our hammock nestled amidst the ferns next to a tranquil stream. We offer 2 kayaks and 1 SUP for your enjoyment. Best of all, 2 hrs from NYC!`,
        details:['6 guests', '3 bedrooms', '4 beds', '2 baths'],
        type: 'Entire Cabin',
        location: 'Ferndale, NY',
        amenities: ['Lake view', 'Waterfront', 'Kitchen', 'Fast Wifi', 'Dedicated workspace', 'Free Parking on Premises', 'TV with streaming services', 'Free washer', 'Free dryer', 'Bathtub', 'Security Cameras on Property'],
        images: ['../images/rentals/lakefront/lakefront-1.webp', '../images/rentals/lakefront/lakefront-2.webp', '../images/rentals/lakefront/lakefront-3.webp', '../images/rentals/lakefront/lakefront-4.webp', '../images/rentals/lakefront/lakefront-5.webp', '../images/rentals/lakefront/lakefront-6.webp', '../images/rentals/lakefront/lakefront-7.webp', '../images/rentals/lakefront/lakefront-8.webp'],
        bnbLink: 'https://www.airbnb.com/rooms/44995054?source_impression_id=p3_1711734236_zpzObVw52q8gWVV5'
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
        name: 'Cozy Cottage with Wood-burning Stove',
        description: "The Dairyland Cottage itself has lots of vintage/antique charm and decor, while also providing many modern conveniences. A new, well-equipped kitchen for cooking up tasty meals and two new heat and A/C units for staying cozy and/or cool. The heart of the cottage is centered around a wood-burning stove that sits between the main dining and living room areas. The charm continues with lots of natural light, a clawfoot tub, an adorable sleeping loft, and a record player and collection to enjoy. Kick back and relax in this newly listed, calm, stylish cottage retreat in the heart of the Catskill Mountains. It's located on a gorgeous private 33-acre plot with hiking trails and a creek.",
        details:['4 Guests', '2 bedrooms', '3 beds', '1 bath'],
        type: 'Entire Cottage',
        location: 'Ellenville, NY',
        amenities: ['Garden View', 'Valley View', 'Kitchen', 'Fast Wifi', 'Pets Allowed', 'Free Parking on Premises', '42" HDTV', 'AC - Spilt Unit', 'Bathtub', 'Private Patio or Balcony',  'Security Cameras on Property'],
        images: ['../images/rentals/cozy-cottage/cozy-cottage-1.webp', '../images/rentals/cozy-cottage/cozy-cottage-2.webp', '../images/rentals/cozy-cottage/cozy-cottage-3.webp', '../images/rentals/cozy-cottage/cozy-cottage-4.webp', '../images/rentals/cozy-cottage/cozy-cottage-5.webp', '../images/rentals/cozy-cottage/cozy-cottage-6.webp', '../images/rentals/cozy-cottage/cozy-cottage-7.webp', '../images/rentals/cozy-cottage/cozy-cottage-8.webp'],
        bnbLink: 'https://www.airbnb.com/rooms/53203765?source_impression_id=p3_1711744523_9CBKz1rrLtzJsUaT'
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
    //TODO:KEEP ADDING RENTAL DATA
]

export {rentalProperties}