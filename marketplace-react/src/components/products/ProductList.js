const productList = [
  {
    name: "HP Pavilion 14 16GB RAM",
    id: "1",
    image: "https://m.media-amazon.com/images/I/81h346HzqML._SX679_.jpg",
    price: "35000",
    description: `Processor: Intel Core i5-1235U (up to 4.4 GHz with Intel Turbo Boost Technology, 12 MB L3 cache, 10 cores, 12 threads)| Memory & Storage: 16 GB DDR4-3200 MHz RAM (2 x 8 GB) | Storage: 512GB PCIe NVMe TLC M.2 SSD
        Display & Graphics: 35.6 cm (14") diagonal, FHD, IPS, micro-edge, BrightView, 250 nits, 157 ppi | Graphics: Intel UHD Graphics
        Operating System & Pre-installed Software: Pre-loaded Windows 11 Home 64 Single Language| Microsoft Office Home & Student 2021`,
    tags: ["laptops", "laptop", "hp", "pavilion", "electronics"],
  },
  {
    name: "Slim-fit Casual Shirt",
    id: "2",
    image: "https://m.media-amazon.com/images/I/51XatSFVktL._AC_UL320_.jpg",
    price: "499",
    description: `Fit Type: Slim Fit
        Fabric - 100% Premium Cotton, Pre-Washed for extremely soft finish and Guaranteed 0% Shrinkage Post Washing
        Style - Enhance your look by wearing this Casual Stylish Men's shirt, Team it with a pair of tapered Denims Or Solid Chinos and Loafers for a fun Smart Casual look`,
    tags: ["clothing", "shirt", "men", "boys"],
  },
  {
    name: "Fastrack Analog Men's Watch",
    id: "3",
    image: "https://m.media-amazon.com/images/I/71WY7bEfkNL._UY879_.jpg",
    price: "765",
    description: ``,
    tags: ["accessories", "watch", "men", "boys"],
  },
  {
    name: "AELOMART Men's T-Shirt",
    id: "4",
    image: "https://m.media-amazon.com/images/I/71O1QaI-sbL._UY879_.jpg",
    price: "599",
    description: `Fit Type: Regular Fit
        Fabric Type: 100% Cotton, Pattern name: Checkered
        Ocassion: Casual and formal
        Create a lasting impression in this Regular Fit Men’s T-Shirt. Crafted in Premium, Bio-washed 100% Cotton, which is breathable, comfortable, skin friendly, odourless and all natural.
        This T-shirt has Checkered pattern, has half sleeve and a round collar which is stretchy and durable and is definitely a must-have in your wardrobe.`,
    tags: ["clothing", "tshirt", "t-shirt", "men", "boys"],
  },
  {
    name: "Samsung Galaxy S21 5G",
    id: "5",
    image: "https://m.media-amazon.com/images/I/91-uC3gGWGL._SY879_.jpg",
    price: "80999",
    description: `Triple rear camera setup- Main Camera 12MP Dual Pixel + Ultra Wide 12MP Camera + Tele1 3X 64MP Camera | 10MP front Dual Pixel Camera
        (6.2-inch) Dynamic AMOLED 2X Display, FHD+ resolution with 2400 X 1080 pixels resolution, 421 PPI with 16M colours
        8GB RAM | 128GB internal Storage | Dual SIM (nano+nano) dual-standby (5G+5G)
        Android Pie v10.0 operating system with 2.9GHz Exynos 2100 octa core processor
        4000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase`,
    tags: ["electronics", "mobile", "smartphone", "smartphone", "gadgets"],
  },
  {
    name: "JBL Tune 510BT Headphones",
    id: "6",
    image: "https://m.media-amazon.com/images/I/61kFL7ywsZS._SX679_.jpg",
    price: "2899",
    description: `JBL PURE BASE SOUND: Packed with 32mm Dynamic drivers, the JBL Tune 510BT features the renowned JBL Pure Bass sound, which can be found in the most famous venues all around the world.
        UPTO 40 HOURS PLAYTIME: Designed for long playhours, the Tune 510BT allows you to Listen wirelessly upto 40 hours non-stop under optimal audio settings.
        QUICK CHARGING: With its superior USB Type-C charging cable, a quick 5 min recharge of your Tune 510BT provides you with playtime upto 2 Hours while in a span of 2 hours, get your headphones completely charged up.`,
    tags: ["electronics", "headphone", "headphones", "headset", "gadgets"],
  },
  {
    name: "Love & lemons celeste cardigan in blue",
    id: "7",
    image:
      "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61oz2FZevUL._UY879_.jpg",
    price: "1282",
    description:
      "For Love & Lemons Celeste Cardigan in Blue. size S (also in L, XS) For Love & Lemons Celeste Cardigan in Blue. – size S (also in L, XS) 58% acrylic 29% viscose 9% nylon 4% wool. Made in China. Dry clean only. Front button closure. Side slip pockets. Fuzzy waffle knit fabric with banded hem. FORL-WK108. KFA21C401. Derived from those sun-soaked Lemonade Stand Days designers and owners, Gillian Mahin and Laura Hall are the masterminds behind the line For Love & Lemons. Born in Wyoming, finding their style niche in Australia and now based in Los Angeles, the collection is anything but conventional-rebelling against the standards of modern society. The line taunts with intrigue as a clash of colors and patterns are evoked by chic separates and devious dresses. Where the modern gypsy is punk, For Love & Lemons is a brand to relate to, for that girl that doesn’t follow trends, she makes them.",
    tags: ["clothing", "cardigan", "women", "girls"],
  },
  {
    name: "Sorel women’s joan of arctic wedge ii zip bootie",
    id: "8",
    image:
      "https://www.fashiongonerogue.com/wp-content/uploads/2022/02/Sorel-Womens-Joan-Of-Arctic-Wedge-II-Zip-Bootie-.jpg",
    price: "2000",
    description:
      "A Sorel.com Exclusive, Our Latest Joan Zip Wedge Features A Tasteful Side Zipper And Slanted Ankle Bootie Length For Subtle Style That Packs Major Impact. Be Ready For Rain With Its Waterproof Full-Grain Leather And Walk Comfortably All Day With Its Comfortable Eva Footbed. A Sorel.com Exclusive, Our Latest Joan Zip Wedge Features A Tasteful Side Zipper And Slanted Ankle Bootie Length For Subtle Style That Packs Major Impact. Be Ready For Rain With Its Waterproof Full-Grain Leather And Walk Comfortably All Day With Its Comfortable Eva Footbed. A Sorel.com Exclusive, Our Latest Joan Zip Wedge Features A Tasteful Side Zipper And Slanted Ankle Bootie Length For Subtle Style That Packs Major Impact. Be Ready For Rain With Its Waterproof Full-Grain Leather And Walk Comfortably All Day With Its Comfortable Eva Footbed.",
    tags: ["fashion", "boots", "women", "girls"],
  },
  {
    name: "Kate spade 57mm gradient polarized square sunglasses",
    id: "9",
    image:
      "https://www.fashiongonerogue.com/wp-content/uploads/2021/02/Womens-Kate-Spade-New-York-Lourdes-57mm-Gradient-Polarized-Square-Sunglasses-Peach-Brown-Pink-Gradient-600x920.jpg",
    price: "1599",
    description:
      "Tortoiseshell-patterned temples detailed with the brand’s spade logo elevates the stylish look of square sunnies fitted with glare-reducing polarized lenses. Style Name: Kate Spade New York Lourdes 57mm Gradient Polarized Square Sunglasses. Style Number: 6210509.",
    tags: ["cooling glasses", "fashion", "sunglasses", "women", "girls"],
  },
  {
    name: "Pearlette delicate stud earrings",
    id: "10",
    image:
      "https://www.fashiongonerogue.com/wp-content/uploads/2021/02/Womens-Kate-Spade-New-York-Pearlette-Delicate-Stud-Earrings.jpg",
    price: "499",
    description:
      "Everyday elegance is yours in these lustrous studs designed with classic pearly beads. Style Name: Kate Spade New York Pearlette Delicate Stud Earrings. Style Number: 5803186.",
    tags: ["clothing", "earrings", "fashion", "women", "girls"],
  },
  {
    name: "Margaux leather satchel - Black",
    id: "11",
    image:
      "https://www.fashiongonerogue.com/wp-content/uploads/2021/02/Kate-Spade-New-York-Medium-Margaux-Leather-Satchel-Black-600x920.jpg",
    price: "2899",
    description:
      "An optional, adjustable strap and top handles make it a cinch to carry this structured bag, shaped from pebbled leather and accented with gleaming hardware. A divided interior with a center zip pocket helps to keep belongings organized on the go. Style Name: Kate Spade New York Medium Margaux Leather Satchel. Style Number: 5716221",
    tags: ["clothing", "handbag", "satchel", "women", "girls", "fashion"],
  },
  {
    name: "Heart of gold bangle",
    id: "12",
    image:
      "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51oyzOnPJ1L._UX695_.jpg",
    price: "1599",
    description:
      "A slim, stackable bangle plated in lustrous 12-karat gold hides a meaningful “heart of gold” engraving inside. Style Name: Kate Spade New York Idiom – Heart Of Gold Bangle. Style Number: 551537",
    tags: ["clothing", "bangle", "women", "girls", "fashion"],
  },
];

export default productList;
