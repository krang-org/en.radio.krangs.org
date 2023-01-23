window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Feest Group",
      "url": "./commercials/en-US/railroad-manufacture/feest-group/1672760995558/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Rolfson Weber",
      "url": "./commercials/en-US/motion-pictures-and-film/rolfson-weber/1672762421505/commercial.mp3",
      "artist": "Motion Pictures And Film",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Klocko Group",
      "url": "./commercials/en-US/military/klocko-group/1672760858804/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Schmeler Bins And Rogahn",
      "url": "./commercials/en-US/construction/schmeler-bins-and-rogahn/1672761095375/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Bayer Group",
      "url": "./commercials/en-US/textiles/bayer-group/1672761292597/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Friesen Group",
      "url": "./commercials/en-US/alternative-dispute-resolution/friesen-group/1672240370/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Hudson Krajcik And Hoppe",
      "url": "./commercials/en-US/venture-capital-private-equity/hudson-krajcik-and-hoppe/1672760929265/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Aufderhar Group",
      "url": "./commercials/en-US/real-estate/aufderhar-group/1672240370/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Maggio Schoen",
      "url": "./commercials/en-US/public-safety/maggio-schoen/1672762341861/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Simonis And Sons",
      "url": "./commercials/en-US/computer-hardware/simonis-and-sons/1672761453852/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Leuschke Ratke",
      "url": "./commercials/en-US/logistics-and-supply-chain/leuschke-ratke/1672240370/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Kovacek Miller And Lebsack",
      "url": "./commercials/en-US/financial-services/kovacek-miller-and-lebsack/1672240370/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Krajcik Stark And Emard",
      "url": "./commercials/en-US/business-supplies-and-equipment/krajcik-stark-and-emard/1672761475752/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Hammes Parisian",
      "url": "./commercials/en-US/dairy/hammes-parisian/1672240370/commercial.mp3",
      "artist": "Dairy",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Mosciski Sporer",
      "url": "./commercials/en-US/public-relations-and-communications/mosciski-sporer/1672240370/commercial.mp3",
      "artist": "Public Relations And Communications",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Erdman Llc",
      "url": "./commercials/en-US/construction/erdman-llc/1672761920578/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Moore Llc",
      "url": "./commercials/en-US/international-affairs/moore-llc/1672240370/commercial.mp3",
      "artist": "International Affairs",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Veum Macejkovic And Gottlieb",
      "url": "./commercials/en-US/utilities/veum-macejkovic-and-gottlieb/1672240370/commercial.mp3",
      "artist": "Utilities",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Kassulke Lueilwitz And Fay",
      "url": "./commercials/en-US/mental-health-care/kassulke-lueilwitz-and-fay/1672761828998/commercial.mp3",
      "artist": "Mental Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Buckridge Volkman And Bechtelar",
      "url": "./commercials/en-US/animation/buckridge-volkman-and-bechtelar/1672760651423/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Nader And Sons",
      "url": "./commercials/en-US/mental-health-care/nader-and-sons/1672240370/commercial.mp3",
      "artist": "Mental Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Monahan Powlowski",
      "url": "./commercials/en-US/medical-practice/monahan-powlowski/1672240370/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Kulas Llc",
      "url": "./commercials/en-US/fishery/kulas-llc/1672240370/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Murazik Schaefer And Predovic",
      "url": "./commercials/en-US/package-freight-delivery/murazik-schaefer-and-predovic/1672240370/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Kertzmann Morar",
      "url": "./commercials/en-US/glass-ceramics-concrete/kertzmann-morar/1672760682794/commercial.mp3",
      "artist": "Glass Ceramics Concrete",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Harris Llc",
      "url": "./commercials/en-US/research/harris-llc/1672762330755/commercial.mp3",
      "artist": "Research",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Waters Rau And Schulist",
      "url": "./commercials/en-US/consumer-services/waters-rau-and-schulist/1672762138439/commercial.mp3",
      "artist": "Consumer Services",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Torp Llc",
      "url": "./commercials/en-US/law-enforcement/torp-llc/1672762000655/commercial.mp3",
      "artist": "Law Enforcement",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Cummerata Schinner",
      "url": "./commercials/en-US/broadcast-media/cummerata-schinner/1672760950178/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Conroy Kshlerin",
      "url": "./commercials/en-US/hospitality/conroy-kshlerin/1672240370/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Hermiston Hammes And Hand",
      "url": "./commercials/en-US/mining-metals/hermiston-hammes-and-hand/1672240370/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Champlin Hand",
      "url": "./commercials/en-US/education-management/champlin-hand/1672761561540/commercial.mp3",
      "artist": "Education Management",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Jenkins Reichel",
      "url": "./commercials/en-US/medical-devices/jenkins-reichel/1672761578715/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Sporer Llc",
      "url": "./commercials/en-US/leisure-travel-tourism/sporer-llc/1672240370/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Ebert Mraz And Gleichner",
      "url": "./commercials/en-US/education-management/ebert-mraz-and-gleichner/1672240370/commercial.mp3",
      "artist": "Education Management",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Graham Llc",
      "url": "./commercials/en-US/building-materials/graham-llc/1672760722420/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Mitchell Price And Erdman",
      "url": "./commercials/en-US/real-estate/mitchell-price-and-erdman/1672240370/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Terry Jaskolski And Mraz",
      "url": "./commercials/en-US/nonprofit-organization-management/terry-jaskolski-and-mraz/1672240370/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Schroeder Prosacco And Weissnat",
      "url": "./commercials/en-US/alternative-medicine/schroeder-prosacco-and-weissnat/1672762173027/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Conn Bruen And Mraz",
      "url": "./commercials/en-US/biotechnology/conn-bruen-and-mraz/1672761088910/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Schaefer Johnson",
      "url": "./commercials/en-US/newspapers/schaefer-johnson/1672760689791/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Dooley Oberbrunner And Hegmann",
      "url": "./commercials/en-US/online-media/dooley-oberbrunner-and-hegmann/1672240370/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Nicolas Howe And Gorczany",
      "url": "./commercials/en-US/international-trade-and-development/nicolas-howe-and-gorczany/1672240370/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Welch Bruen And Reinger",
      "url": "./commercials/en-US/package-freight-delivery/welch-bruen-and-reinger/1672762132383/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Doyle Yost And O Kon",
      "url": "./commercials/en-US/internet/doyle-yost-and-o-kon/1672240370/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Beer Auer And Satterfield",
      "url": "./commercials/en-US/dairy/beer-auer-and-satterfield/1672762351832/commercial.mp3",
      "artist": "Dairy",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Bogan Hand",
      "url": "./commercials/en-US/arts-and-crafts/bogan-hand/1672240370/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Ritchie Group",
      "url": "./commercials/en-US/political-organization/ritchie-group/1672240370/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Botsford Dickens And Goyette",
      "url": "./commercials/en-US/music/botsford-dickens-and-goyette/1672240370/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Borer Inc",
      "url": "./commercials/en-US/animation/borer-inc/1672760594177/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Littel Kirlin",
      "url": "./commercials/en-US/semiconductors/littel-kirlin/1672760601888/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Krajcik Boyer And Runte",
      "url": "./commercials/en-US/electrical-electronic-manufacturing/krajcik-boyer-and-runte/1672762036084/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Labadie Mante",
      "url": "./commercials/en-US/entertainment/labadie-mante/1672760635644/commercial.mp3",
      "artist": "Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Abbott Mosciski",
      "url": "./commercials/en-US/shipbuilding/abbott-mosciski/1672240370/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Lehner Farrell",
      "url": "./commercials/en-US/human-resources/lehner-farrell/1672761373142/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Bruen Llc",
      "url": "./commercials/en-US/civic-social-organization/bruen-llc/1672762236831/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Rau Mitchell",
      "url": "./commercials/en-US/fund-raising/rau-mitchell/1672240370/commercial.mp3",
      "artist": "Fund Raising",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Wiza Swaniawski",
      "url": "./commercials/en-US/public-safety/wiza-swaniawski/1672240370/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Hickle Llc",
      "url": "./commercials/en-US/medical-devices/hickle-llc/1672761965896/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Rohan Monahan",
      "url": "./commercials/en-US/motion-pictures-and-film/rohan-monahan/1672760691950/commercial.mp3",
      "artist": "Motion Pictures And Film",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Cummerata Group",
      "url": "./commercials/en-US/semiconductors/cummerata-group/1672761198593/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Zemlak And Sons",
      "url": "./commercials/en-US/music/zemlak-and-sons/1672240370/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Kunze Huels",
      "url": "./commercials/en-US/translation-and-localization/kunze-huels/1672761892532/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Douglas Mosciski And Hintz",
      "url": "./commercials/en-US/computer-network-security/douglas-mosciski-and-hintz/1672240370/commercial.mp3",
      "artist": "Computer Network Security",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Marks Mertz",
      "url": "./commercials/en-US/railroad-manufacture/marks-mertz/1672240370/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Hackett Heaney And Schamberger",
      "url": "./commercials/en-US/medical-practice/hackett-heaney-and-schamberger/1672240370/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Reinger Inc",
      "url": "./commercials/en-US/defense-space/reinger-inc/1672762290071/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Bailey Marks And Miller",
      "url": "./commercials/en-US/shipbuilding/bailey-marks-and-miller/1672240370/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Heidenreich Inc",
      "url": "./commercials/en-US/building-materials/heidenreich-inc/1672240370/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Kshlerin And Sons",
      "url": "./commercials/en-US/legislative-office/kshlerin-and-sons/1672762406980/commercial.mp3",
      "artist": "Legislative Office",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Boyer Wisozk",
      "url": "./commercials/en-US/media-production/boyer-wisozk/1672760765139/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Luettgen Group",
      "url": "./commercials/en-US/executive-office/luettgen-group/1672761432026/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Aufderhar O Hara",
      "url": "./commercials/en-US/pharmaceuticals/aufderhar-o-hara/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Ortiz Koepp",
      "url": "./commercials/en-US/plastics/ortiz-koepp/1672762067987/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Funk And Sons",
      "url": "./commercials/en-US/railroad-manufacture/funk-and-sons/1672761514749/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Leuschke Abshire",
      "url": "./commercials/en-US/museums-and-institutions/leuschke-abshire/1672240370/commercial.mp3",
      "artist": "Museums And Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Erdman Llc",
      "url": "./commercials/en-US/publishing/erdman-llc/1672240370/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Hodkiewicz Conroy",
      "url": "./commercials/en-US/chemicals/hodkiewicz-conroy/1672240370/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Swaniawski Lockman And Kuvalis",
      "url": "./commercials/en-US/e-learning/swaniawski-lockman-and-kuvalis/1672761280945/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Morissette Breitenberg",
      "url": "./commercials/en-US/consumer-goods/morissette-breitenberg/1672240370/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Boehm Streich And Leuschke",
      "url": "./commercials/en-US/higher-education/boehm-streich-and-leuschke/1672760728423/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Ullrich Schmitt",
      "url": "./commercials/en-US/import-and-export/ullrich-schmitt/1672761529508/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Lehner Llc",
      "url": "./commercials/en-US/animation/lehner-llc/1672240370/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "D Amore Llc",
      "url": "./commercials/en-US/accounting/d-amore-llc/1672240370/commercial.mp3",
      "artist": "Accounting",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Schmidt Johns",
      "url": "./commercials/en-US/alternative-medicine/schmidt-johns/1672240370/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Mayert Johnston",
      "url": "./commercials/en-US/public-relations-and-communications/mayert-johnston/1672761011694/commercial.mp3",
      "artist": "Public Relations And Communications",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Donnelly Ward And Parker",
      "url": "./commercials/en-US/music/donnelly-ward-and-parker/1672761247711/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Dibbert Abbott",
      "url": "./commercials/en-US/apparel-fashion/dibbert-abbott/1672760876416/commercial.mp3",
      "artist": "Apparel Fashion",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Bins Gibson",
      "url": "./commercials/en-US/gambling-casinos/bins-gibson/1672240370/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Stoltenberg Llc",
      "url": "./commercials/en-US/consumer-goods/stoltenberg-llc/1672762023794/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Price Schowalter And Grimes",
      "url": "./commercials/en-US/computer-software/price-schowalter-and-grimes/1672240370/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Hammes Graham And Heathcote",
      "url": "./commercials/en-US/textiles/hammes-graham-and-heathcote/1672240370/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Wilderman Treutel",
      "url": "./commercials/en-US/packaging-and-containers/wilderman-treutel/1672240370/commercial.mp3",
      "artist": "Packaging And Containers",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Mclaughlin Haley And Wilderman",
      "url": "./commercials/en-US/information-services/mclaughlin-haley-and-wilderman/1672761840113/commercial.mp3",
      "artist": "Information Services",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Robel Wisozk",
      "url": "./commercials/en-US/translation-and-localization/robel-wisozk/1672240370/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Green Lubowitz",
      "url": "./commercials/en-US/packaging-and-containers/green-lubowitz/1672761414503/commercial.mp3",
      "artist": "Packaging And Containers",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Bogan Spencer",
      "url": "./commercials/en-US/music/bogan-spencer/1672760968039/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Romaguera Hettinger And Paucek",
      "url": "./commercials/en-US/environmental-services/romaguera-hettinger-and-paucek/1672761436382/commercial.mp3",
      "artist": "Environmental Services",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Keeling And Sons",
      "url": "./commercials/en-US/commercial-real-estate/keeling-and-sons/1672240370/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Zieme Huel And Keeling",
      "url": "./commercials/en-US/program-development/zieme-huel-and-keeling/1672240370/commercial.mp3",
      "artist": "Program Development",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Koepp Herzog And Schmitt",
      "url": "./commercials/en-US/military/koepp-herzog-and-schmitt/1672240370/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Kirlin Vonrueden",
      "url": "./commercials/en-US/printing/kirlin-vonrueden/1672761628094/commercial.mp3",
      "artist": "Printing",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "O Connell Inc",
      "url": "./commercials/en-US/civic-social-organization/o-connell-inc/1672761504392/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Hirthe And Sons",
      "url": "./commercials/en-US/civil-engineering/hirthe-and-sons/1672761050332/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Kunze Spencer And Lehner",
      "url": "./commercials/en-US/religious-institutions/kunze-spencer-and-lehner/1672761678106/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Conn Ebert And Ratke",
      "url": "./commercials/en-US/chemicals/conn-ebert-and-ratke/1672240370/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Krajcik Auer And Kuphal",
      "url": "./commercials/en-US/wireless/krajcik-auer-and-kuphal/1672760924236/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Lang Ratke",
      "url": "./commercials/en-US/paper-forest-products/lang-ratke/1672240370/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Mcdermott And Sons",
      "url": "./commercials/en-US/performing-arts/mcdermott-and-sons/1672240370/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Doyle Hickle And Mante",
      "url": "./commercials/en-US/logistics-and-supply-chain/doyle-hickle-and-mante/1672760986737/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Jacobson And Sons",
      "url": "./commercials/en-US/broadcast-media/jacobson-and-sons/1672240370/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Hagenes Hartmann And Frami",
      "url": "./commercials/en-US/government-administration/hagenes-hartmann-and-frami/1672762363412/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Corwin Inc",
      "url": "./commercials/en-US/warehousing/corwin-inc/1672240370/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Koch Powlowski And Pacocha",
      "url": "./commercials/en-US/computer-hardware/koch-powlowski-and-pacocha/1672761214985/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Rolfson Bradtke And Bailey",
      "url": "./commercials/en-US/paper-forest-products/rolfson-bradtke-and-bailey/1672761765708/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Lindgren Hayes",
      "url": "./commercials/en-US/entertainment/lindgren-hayes/1672761395289/commercial.mp3",
      "artist": "Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Hamill And Sons",
      "url": "./commercials/en-US/package-freight-delivery/hamill-and-sons/1672240370/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Bayer Franecki",
      "url": "./commercials/en-US/renewables-environment/bayer-franecki/1672762044116/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Cruickshank Berge",
      "url": "./commercials/en-US/wholesale/cruickshank-berge/1672760940083/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Waelchi Ankunding",
      "url": "./commercials/en-US/facilities-services/waelchi-ankunding/1672760770051/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Jacobs Llc",
      "url": "./commercials/en-US/military/jacobs-llc/1672240370/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Rogahn Lebsack",
      "url": "./commercials/en-US/aviation-aerospace/rogahn-lebsack/1672761240605/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Thompson Waters And Boyer",
      "url": "./commercials/en-US/biotechnology/thompson-waters-and-boyer/1672761471285/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Quigley Llc",
      "url": "./commercials/en-US/management-consulting/quigley-llc/1672760961319/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Donnelly Rippin",
      "url": "./commercials/en-US/public-policy/donnelly-rippin/1672761043926/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Macejkovic Barton And Hickle",
      "url": "./commercials/en-US/food-production/macejkovic-barton-and-hickle/1672761559708/commercial.mp3",
      "artist": "Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Durgan And Sons",
      "url": "./commercials/en-US/maritime/durgan-and-sons/1672761658937/commercial.mp3",
      "artist": "Maritime",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Jacobson Klein",
      "url": "./commercials/en-US/marketing-and-advertising/jacobson-klein/1672240370/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Wehner Hartmann And Wolf",
      "url": "./commercials/en-US/medical-practice/wehner-hartmann-and-wolf/1672761368475/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Homenick Grimes And Roob",
      "url": "./commercials/en-US/consumer-goods/homenick-grimes-and-roob/1672762300111/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Herzog Koepp And Swaniawski",
      "url": "./commercials/en-US/telecommunications/herzog-koepp-and-swaniawski/1672240370/commercial.mp3",
      "artist": "Telecommunications",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Swaniawski Inc",
      "url": "./commercials/en-US/entertainment/swaniawski-inc/1672240370/commercial.mp3",
      "artist": "Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Kris Llc",
      "url": "./commercials/en-US/facilities-services/kris-llc/1672761426034/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Nolan Maggio",
      "url": "./commercials/en-US/capital-markets/nolan-maggio/1672240370/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Hackett Howe",
      "url": "./commercials/en-US/marketing-and-advertising/hackett-howe/1672240370/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Wisoky D Amore And Schoen",
      "url": "./commercials/en-US/civil-engineering/wisoky-d-amore-and-schoen/1672761084540/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Farrell Bartoletti",
      "url": "./commercials/en-US/investment-management/farrell-bartoletti/1672240370/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Metz Wintheiser",
      "url": "./commercials/en-US/cosmetics/metz-wintheiser/1672240370/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Schneider Gibson",
      "url": "./commercials/en-US/ranching/schneider-gibson/1672240370/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "O Connell Bednar And Streich",
      "url": "./commercials/en-US/higher-education/o-connell-bednar-and-streich/1672240370/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Schuster Raynor",
      "url": "./commercials/en-US/animation/schuster-raynor/1672240370/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Mcdermott Treutel",
      "url": "./commercials/en-US/airlines-aviation/mcdermott-treutel/1672240370/commercial.mp3",
      "artist": "Airlines Aviation",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Hermiston Predovic",
      "url": "./commercials/en-US/fine-art/hermiston-predovic/1672761775405/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Bernier Kozey",
      "url": "./commercials/en-US/warehousing/bernier-kozey/1672240370/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Hand Berge",
      "url": "./commercials/en-US/capital-markets/hand-berge/1672761119447/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Gaylord Blanda",
      "url": "./commercials/en-US/philanthropy/gaylord-blanda/1672762377006/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Nolan Bergnaum And Strosin",
      "url": "./commercials/en-US/internet/nolan-bergnaum-and-strosin/1672762383735/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Russel Group",
      "url": "./commercials/en-US/public-policy/russel-group/1672240370/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Schowalter Group",
      "url": "./commercials/en-US/wireless/schowalter-group/1672761099872/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Leannon And Sons",
      "url": "./commercials/en-US/textiles/leannon-and-sons/1672761873991/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "O Reilly Huels",
      "url": "./commercials/en-US/fishery/o-reilly-huels/1672761380153/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Schiller Stiedemann",
      "url": "./commercials/en-US/packaging-and-containers/schiller-stiedemann/1672240370/commercial.mp3",
      "artist": "Packaging And Containers",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Schmidt Hoppe",
      "url": "./commercials/en-US/fine-art/schmidt-hoppe/1672240370/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Schaefer Ondricka",
      "url": "./commercials/en-US/computer-hardware/schaefer-ondricka/1672761518346/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Russel Inc",
      "url": "./commercials/en-US/food-beverages/russel-inc/1672240370/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Oberbrunner And Sons",
      "url": "./commercials/en-US/program-development/oberbrunner-and-sons/1672240370/commercial.mp3",
      "artist": "Program Development",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Goldner Harber And Will",
      "url": "./commercials/en-US/fund-raising/goldner-harber-and-will/1672240370/commercial.mp3",
      "artist": "Fund Raising",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Leannon Koelpin",
      "url": "./commercials/en-US/nonprofit-organization-management/leannon-koelpin/1672761598256/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Williamson Will",
      "url": "./commercials/en-US/aviation-aerospace/williamson-will/1672240370/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Pagac Gaylord And Wehner",
      "url": "./commercials/en-US/individual-family-services/pagac-gaylord-and-wehner/1672762443094/commercial.mp3",
      "artist": "Individual Family Services",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Prosacco Bednar And Mclaughlin",
      "url": "./commercials/en-US/outsourcing-offshoring/prosacco-bednar-and-mclaughlin/1672762408806/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Collins Zboncak And Lind",
      "url": "./commercials/en-US/retail/collins-zboncak-and-lind/1672240370/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Mayert And Sons",
      "url": "./commercials/en-US/package-freight-delivery/mayert-and-sons/1672760848329/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Bayer And Sons",
      "url": "./commercials/en-US/capital-markets/bayer-and-sons/1672761937622/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Konopelski Group",
      "url": "./commercials/en-US/logistics-and-supply-chain/konopelski-group/1672760931353/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Cassin Group",
      "url": "./commercials/en-US/cosmetics/cassin-group/1672240370/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Smith Sanford",
      "url": "./commercials/en-US/outsourcing-offshoring/smith-sanford/1672240370/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Sauer And Sons",
      "url": "./commercials/en-US/media-production/sauer-and-sons/1672240370/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Medhurst Osinski And Kuhlman",
      "url": "./commercials/en-US/automotive/medhurst-osinski-and-kuhlman/1672240370/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Graham Group",
      "url": "./commercials/en-US/think-tanks/graham-group/1672240370/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Hoppe Llc",
      "url": "./commercials/en-US/computer-hardware/hoppe-llc/1672240370/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Stehr Weber",
      "url": "./commercials/en-US/publishing/stehr-weber/1672240370/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Denesik Koepp",
      "url": "./commercials/en-US/luxury-goods-jewelry/denesik-koepp/1672760747134/commercial.mp3",
      "artist": "Luxury Goods Jewelry",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Hoeger Ferry",
      "url": "./commercials/en-US/facilities-services/hoeger-ferry/1672761340360/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Reichert Inc",
      "url": "./commercials/en-US/performing-arts/reichert-inc/1672240370/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Ziemann Tremblay And Stiedemann",
      "url": "./commercials/en-US/computer-games/ziemann-tremblay-and-stiedemann/1672762222097/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Willms Llc",
      "url": "./commercials/en-US/tobacco/willms-llc/1672240370/commercial.mp3",
      "artist": "Tobacco",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Weber Blanda",
      "url": "./commercials/en-US/biotechnology/weber-blanda/1672240370/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Wolf Hills",
      "url": "./commercials/en-US/glass-ceramics-concrete/wolf-hills/1672761288060/commercial.mp3",
      "artist": "Glass Ceramics Concrete",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Wolf Nicolas And Stark",
      "url": "./commercials/en-US/mental-health-care/wolf-nicolas-and-stark/1672761541091/commercial.mp3",
      "artist": "Mental Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Kuhic Langworth",
      "url": "./commercials/en-US/commercial-real-estate/kuhic-langworth/1672761819458/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Rogahn Padberg",
      "url": "./commercials/en-US/information-services/rogahn-padberg/1672761644781/commercial.mp3",
      "artist": "Information Services",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Windler Kautzer",
      "url": "./commercials/en-US/alternative-dispute-resolution/windler-kautzer/1672240370/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Morar Inc",
      "url": "./commercials/en-US/retail/morar-inc/1672762268786/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Olson Kohler",
      "url": "./commercials/en-US/e-learning/olson-kohler/1672761777314/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Grimes Johnston And Terry",
      "url": "./commercials/en-US/paper-forest-products/grimes-johnston-and-terry/1672762217891/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Rolfson Schamberger",
      "url": "./commercials/en-US/defense-space/rolfson-schamberger/1672761868711/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Weber Bode And Haley",
      "url": "./commercials/en-US/executive-office/weber-bode-and-haley/1672761168127/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Fadel Llc",
      "url": "./commercials/en-US/real-estate/fadel-llc/1672240370/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Marks Mante And Balistreri",
      "url": "./commercials/en-US/consumer-electronics/marks-mante-and-balistreri/1672240370/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Streich Hayes And Reilly",
      "url": "./commercials/en-US/alternative-dispute-resolution/streich-hayes-and-reilly/1672761704078/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Lang Bechtelar",
      "url": "./commercials/en-US/oil-energy/lang-bechtelar/1672761498572/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Bernier Beahan",
      "url": "./commercials/en-US/commercial-real-estate/bernier-beahan/1672760978068/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Kreiger Miller",
      "url": "./commercials/en-US/telecommunications/kreiger-miller/1672240370/commercial.mp3",
      "artist": "Telecommunications",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Rice Considine",
      "url": "./commercials/en-US/online-media/rice-considine/1672240370/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Nicolas Bednar And Windler",
      "url": "./commercials/en-US/media-production/nicolas-bednar-and-windler/1672760706018/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Koepp Conroy",
      "url": "./commercials/en-US/warehousing/koepp-conroy/1672240370/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Kutch Lebsack And Stiedemann",
      "url": "./commercials/en-US/nonprofit-organization-management/kutch-lebsack-and-stiedemann/1672760598031/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Turcotte Wilkinson And Legros",
      "url": "./commercials/en-US/cosmetics/turcotte-wilkinson-and-legros/1672240370/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Collier And Sons",
      "url": "./commercials/en-US/writing-and-editing/collier-and-sons/1672761032775/commercial.mp3",
      "artist": "Writing And Editing",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Roob Pfeffer",
      "url": "./commercials/en-US/broadcast-media/roob-pfeffer/1672762162301/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Smitham And Sons",
      "url": "./commercials/en-US/retail/smitham-and-sons/1672761403717/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Wilderman Schneider",
      "url": "./commercials/en-US/health-wellness-and-fitness/wilderman-schneider/1672761928543/commercial.mp3",
      "artist": "Health Wellness And Fitness",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Fay Douglas",
      "url": "./commercials/en-US/government-administration/fay-douglas/1672761690851/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Kutch Grimes And Kuhlman",
      "url": "./commercials/en-US/graphic-design/kutch-grimes-and-kuhlman/1672761729382/commercial.mp3",
      "artist": "Graphic Design",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Parisian West And Langosh",
      "url": "./commercials/en-US/wine-and-spirits/parisian-west-and-langosh/1672240370/commercial.mp3",
      "artist": "Wine And Spirits",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Davis Llc",
      "url": "./commercials/en-US/religious-institutions/davis-llc/1672240370/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Lockman Group",
      "url": "./commercials/en-US/religious-institutions/lockman-group/1672240370/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Toy Inc",
      "url": "./commercials/en-US/nanotechnology/toy-inc/1672761491641/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Schultz Llc",
      "url": "./commercials/en-US/public-policy/schultz-llc/1672761538262/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Lueilwitz Inc",
      "url": "./commercials/en-US/chemicals/lueilwitz-inc/1672240370/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Towne Hoppe And Keeling",
      "url": "./commercials/en-US/broadcast-media/towne-hoppe-and-keeling/1672761616957/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Huels Muller",
      "url": "./commercials/en-US/market-research/huels-muller/1672761605008/commercial.mp3",
      "artist": "Market Research",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Dickens Towne",
      "url": "./commercials/en-US/pharmaceuticals/dickens-towne/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Bartoletti Dubuque",
      "url": "./commercials/en-US/computer-software/bartoletti-dubuque/1672240370/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Klocko Kub",
      "url": "./commercials/en-US/building-materials/klocko-kub/1672761970103/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Kihn Prohaska And Nikolaus",
      "url": "./commercials/en-US/railroad-manufacture/kihn-prohaska-and-nikolaus/1672240370/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Brekke Nicolas And Hoeger",
      "url": "./commercials/en-US/capital-markets/brekke-nicolas-and-hoeger/1672761942811/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Runolfsson Rath And Mosciski",
      "url": "./commercials/en-US/media-production/runolfsson-rath-and-mosciski/1672760736476/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Littel Macgyver",
      "url": "./commercials/en-US/program-development/littel-macgyver/1672761137047/commercial.mp3",
      "artist": "Program Development",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Gusikowski Llc",
      "url": "./commercials/en-US/civic-social-organization/gusikowski-llc/1672240370/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Gerlach O Reilly",
      "url": "./commercials/en-US/market-research/gerlach-o-reilly/1672240370/commercial.mp3",
      "artist": "Market Research",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Hegmann Pagac And Koelpin",
      "url": "./commercials/en-US/furniture/hegmann-pagac-and-koelpin/1672240370/commercial.mp3",
      "artist": "Furniture",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Volkman Rosenbaum",
      "url": "./commercials/en-US/mining-metals/volkman-rosenbaum/1672760671738/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Graham Llc",
      "url": "./commercials/en-US/photography/graham-llc/1672240370/commercial.mp3",
      "artist": "Photography",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Towne Group",
      "url": "./commercials/en-US/government-relations/towne-group/1672240370/commercial.mp3",
      "artist": "Government Relations",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Kshlerin And Sons",
      "url": "./commercials/en-US/education-management/kshlerin-and-sons/1672761269541/commercial.mp3",
      "artist": "Education Management",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Douglas And Sons",
      "url": "./commercials/en-US/think-tanks/douglas-and-sons/1672762158121/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Konopelski Cassin And Nitzsche",
      "url": "./commercials/en-US/computer-network-security/konopelski-cassin-and-nitzsche/1672762418883/commercial.mp3",
      "artist": "Computer Network Security",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Hoppe Cronin And Cronin",
      "url": "./commercials/en-US/alternative-dispute-resolution/hoppe-cronin-and-cronin/1672760914692/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Gorczany Turcotte And Kassulke",
      "url": "./commercials/en-US/hospital-health-care/gorczany-turcotte-and-kassulke/1672760887917/commercial.mp3",
      "artist": "Hospital Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "O Kon Group",
      "url": "./commercials/en-US/libraries/o-kon-group/1672761222069/commercial.mp3",
      "artist": "Libraries",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Funk Hyatt And Powlowski",
      "url": "./commercials/en-US/religious-institutions/funk-hyatt-and-powlowski/1672240370/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "O Conner Group",
      "url": "./commercials/en-US/building-materials/o-conner-group/1672761409251/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Miller Schuster And Kunde",
      "url": "./commercials/en-US/arts-and-crafts/miller-schuster-and-kunde/1672760907270/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Kihn Bechtelar And Rutherford",
      "url": "./commercials/en-US/consumer-electronics/kihn-bechtelar-and-rutherford/1672762319616/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Collins Larson",
      "url": "./commercials/en-US/public-safety/collins-larson/1672240370/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Wilkinson Lockman And Shields",
      "url": "./commercials/en-US/sporting-goods/wilkinson-lockman-and-shields/1672761886400/commercial.mp3",
      "artist": "Sporting Goods",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Donnelly And Sons",
      "url": "./commercials/en-US/performing-arts/donnelly-and-sons/1672761821788/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Mraz Group",
      "url": "./commercials/en-US/nanotechnology/mraz-group/1672240370/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Borer Hessel And Bashirian",
      "url": "./commercials/en-US/alternative-dispute-resolution/borer-hessel-and-bashirian/1672761108284/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Hessel And Sons",
      "url": "./commercials/en-US/investment-management/hessel-and-sons/1672761420983/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Jacobi Klocko And Streich",
      "url": "./commercials/en-US/gambling-casinos/jacobi-klocko-and-streich/1672240370/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Larkin Leuschke And Friesen",
      "url": "./commercials/en-US/automotive/larkin-leuschke-and-friesen/1672760823030/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Grimes Prosacco And Kertzmann",
      "url": "./commercials/en-US/publishing/grimes-prosacco-and-kertzmann/1672240370/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Abshire Vonrueden And Macejkovic",
      "url": "./commercials/en-US/cosmetics/abshire-vonrueden-and-macejkovic/1672761335567/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Bernier Group",
      "url": "./commercials/en-US/business-supplies-and-equipment/bernier-group/1672761172740/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Pfannerstill Lueilwitz",
      "url": "./commercials/en-US/management-consulting/pfannerstill-lueilwitz/1672761267599/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Terry And Sons",
      "url": "./commercials/en-US/professional-training-coaching/terry-and-sons/1672761225976/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Bartoletti Group",
      "url": "./commercials/en-US/chemicals/bartoletti-group/1672760868520/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Deckow Group",
      "url": "./commercials/en-US/executive-office/deckow-group/1672240370/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Cummerata Spencer And Klein",
      "url": "./commercials/en-US/computer-software/cummerata-spencer-and-klein/1672760889227/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Ankunding Marks",
      "url": "./commercials/en-US/government-administration/ankunding-marks/1672761128853/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Ledner Mcglynn And Predovic",
      "url": "./commercials/en-US/public-policy/ledner-mcglynn-and-predovic/1672762182963/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Waters Sauer And Reinger",
      "url": "./commercials/en-US/consumer-goods/waters-sauer-and-reinger/1672240370/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Wyman Group",
      "url": "./commercials/en-US/food-production/wyman-group/1672240370/commercial.mp3",
      "artist": "Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Altenwerth And Sons",
      "url": "./commercials/en-US/pharmaceuticals/altenwerth-and-sons/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Rempel Beer And Kilback",
      "url": "./commercials/en-US/computer-games/rempel-beer-and-kilback/1672240370/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Friesen Runolfsson",
      "url": "./commercials/en-US/gambling-casinos/friesen-runolfsson/1672240370/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Torphy Mertz",
      "url": "./commercials/en-US/logistics-and-supply-chain/torphy-mertz/1672240370/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Hill Howe",
      "url": "./commercials/en-US/marketing-and-advertising/hill-howe/1672760697560/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Powlowski Llc",
      "url": "./commercials/en-US/mining-metals/powlowski-llc/1672761894332/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Sawayn Skiles And Jacobi",
      "url": "./commercials/en-US/think-tanks/sawayn-skiles-and-jacobi/1672240370/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Ruecker And Sons",
      "url": "./commercials/en-US/venture-capital-private-equity/ruecker-and-sons/1672761350556/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Reinger Strosin",
      "url": "./commercials/en-US/architecture-planning/reinger-strosin/1672240370/commercial.mp3",
      "artist": "Architecture Planning",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Runolfsson Jast",
      "url": "./commercials/en-US/computer-games/runolfsson-jast/1672240370/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Beahan Hahn And Reichel",
      "url": "./commercials/en-US/financial-services/beahan-hahn-and-reichel/1672240370/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Graham Grimes",
      "url": "./commercials/en-US/gambling-casinos/graham-grimes/1672760590848/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Moen Gleason",
      "url": "./commercials/en-US/religious-institutions/moen-gleason/1672240370/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Kertzmann White And Hilll",
      "url": "./commercials/en-US/consumer-services/kertzmann-white-and-hilll/1672240370/commercial.mp3",
      "artist": "Consumer Services",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Hudson Group",
      "url": "./commercials/en-US/broadcast-media/hudson-group/1672760922270/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Balistreri Llc",
      "url": "./commercials/en-US/human-resources/balistreri-llc/1672240370/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Greenfelder Zemlak",
      "url": "./commercials/en-US/computer-networking/greenfelder-zemlak/1672240370/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Morissette Rolfson",
      "url": "./commercials/en-US/ranching/morissette-rolfson/1672240370/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Bins Hansen",
      "url": "./commercials/en-US/gambling-casinos/bins-hansen/1672240370/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Wyman Reichel",
      "url": "./commercials/en-US/biotechnology/wyman-reichel/1672240370/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Hermann Beier",
      "url": "./commercials/en-US/computer-hardware/hermann-beier/1672240370/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Schowalter Gutmann",
      "url": "./commercials/en-US/executive-office/schowalter-gutmann/1672761748889/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Crona Rosenbaum And Koepp",
      "url": "./commercials/en-US/farming/crona-rosenbaum-and-koepp/1672240370/commercial.mp3",
      "artist": "Farming",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Rosenbaum Llc",
      "url": "./commercials/en-US/professional-training-coaching/rosenbaum-llc/1672761833778/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Dooley Konopelski And Larkin",
      "url": "./commercials/en-US/warehousing/dooley-konopelski-and-larkin/1672761752100/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Bednar Hills",
      "url": "./commercials/en-US/dairy/bednar-hills/1672761149709/commercial.mp3",
      "artist": "Dairy",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Bruen Ziemann And Graham",
      "url": "./commercials/en-US/law-practice/bruen-ziemann-and-graham/1672761187892/commercial.mp3",
      "artist": "Law Practice",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Ankunding Okuneva",
      "url": "./commercials/en-US/graphic-design/ankunding-okuneva/1672760839256/commercial.mp3",
      "artist": "Graphic Design",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Mante Ruecker And Hodkiewicz",
      "url": "./commercials/en-US/arts-and-crafts/mante-ruecker-and-hodkiewicz/1672761952373/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Blick Hilpert And Wisozk",
      "url": "./commercials/en-US/import-and-export/blick-hilpert-and-wisozk/1672760646864/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Mcdermott Inc",
      "url": "./commercials/en-US/accounting/mcdermott-inc/1672760799333/commercial.mp3",
      "artist": "Accounting",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Mraz Denesik And Waters",
      "url": "./commercials/en-US/judiciary/mraz-denesik-and-waters/1672240370/commercial.mp3",
      "artist": "Judiciary",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Waters Beer And Ferry",
      "url": "./commercials/en-US/medical-devices/waters-beer-and-ferry/1672760983015/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Witting Roob",
      "url": "./commercials/en-US/human-resources/witting-roob/1672240370/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Pfannerstill Kertzmann And Hilpert",
      "url": "./commercials/en-US/insurance/pfannerstill-kertzmann-and-hilpert/1672240370/commercial.mp3",
      "artist": "Insurance",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Rosenbaum Group",
      "url": "./commercials/en-US/legal-services/rosenbaum-group/1672761391629/commercial.mp3",
      "artist": "Legal Services",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Crooks Inc",
      "url": "./commercials/en-US/business-supplies-and-equipment/crooks-inc/1672240370/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Moore And Sons",
      "url": "./commercials/en-US/sports/moore-and-sons/1672240370/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Frami Group",
      "url": "./commercials/en-US/machinery/frami-group/1672240370/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Monahan Gleichner",
      "url": "./commercials/en-US/political-organization/monahan-gleichner/1672761669627/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Macejkovic Erdman",
      "url": "./commercials/en-US/sports/macejkovic-erdman/1672760872357/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Tremblay Schoen",
      "url": "./commercials/en-US/events-services/tremblay-schoen/1672240370/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Emmerich Wolf And Blick",
      "url": "./commercials/en-US/plastics/emmerich-wolf-and-blick/1672761565695/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Ankunding Mills",
      "url": "./commercials/en-US/leisure-travel-tourism/ankunding-mills/1672240370/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Jaskolski O Reilly And Lowe",
      "url": "./commercials/en-US/airlines-aviation/jaskolski-o-reilly-and-lowe/1672761698959/commercial.mp3",
      "artist": "Airlines Aviation",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Schuster Quitzon",
      "url": "./commercials/en-US/semiconductors/schuster-quitzon/1672761611566/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Fadel Kihn And Jones",
      "url": "./commercials/en-US/human-resources/fadel-kihn-and-jones/1672761325043/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Cruickshank Jenkins",
      "url": "./commercials/en-US/shipbuilding/cruickshank-jenkins/1672240370/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Runolfsson And Sons",
      "url": "./commercials/en-US/design/runolfsson-and-sons/1672240370/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Larson Fadel",
      "url": "./commercials/en-US/executive-office/larson-fadel/1672762297099/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Fisher Llc",
      "url": "./commercials/en-US/commercial-real-estate/fisher-llc/1672762211201/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Sanford Raynor",
      "url": "./commercials/en-US/online-media/sanford-raynor/1672240370/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Mcdermott Inc",
      "url": "./commercials/en-US/wholesale/mcdermott-inc/1672240370/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Langosh Johnston",
      "url": "./commercials/en-US/research/langosh-johnston/1672761265786/commercial.mp3",
      "artist": "Research",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Crist Collins And O Hara",
      "url": "./commercials/en-US/arts-and-crafts/crist-collins-and-o-hara/1672761055195/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Marvin Monahan And Kessler",
      "url": "./commercials/en-US/publishing/marvin-monahan-and-kessler/1672761072290/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "White Carroll And Swaniawski",
      "url": "./commercials/en-US/wireless/white-carroll-and-swaniawski/1672760828211/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Treutel Inc",
      "url": "./commercials/en-US/judiciary/treutel-inc/1672761692747/commercial.mp3",
      "artist": "Judiciary",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Jakubowski Llc",
      "url": "./commercials/en-US/oil-energy/jakubowski-llc/1672761113235/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Morar Toy",
      "url": "./commercials/en-US/health-wellness-and-fitness/morar-toy/1672240370/commercial.mp3",
      "artist": "Health Wellness And Fitness",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Watsica Llc",
      "url": "./commercials/en-US/translation-and-localization/watsica-llc/1672240370/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Schimmel Kilback And Ryan",
      "url": "./commercials/en-US/wine-and-spirits/schimmel-kilback-and-ryan/1672762014656/commercial.mp3",
      "artist": "Wine And Spirits",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Murray Hintz",
      "url": "./commercials/en-US/semiconductors/murray-hintz/1672240370/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Kuhn Spinka And O Keefe",
      "url": "./commercials/en-US/staffing-and-recruiting/kuhn-spinka-and-o-keefe/1672240370/commercial.mp3",
      "artist": "Staffing And Recruiting",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Lubowitz Llc",
      "url": "./commercials/en-US/design/lubowitz-llc/1672240370/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Feest Inc",
      "url": "./commercials/en-US/commercial-real-estate/feest-inc/1672240370/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Dooley Schultz",
      "url": "./commercials/en-US/supermarkets/dooley-schultz/1672240370/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Cummings Parisian And Swift",
      "url": "./commercials/en-US/supermarkets/cummings-parisian-and-swift/1672761153691/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Emmerich Beatty",
      "url": "./commercials/en-US/pharmaceuticals/emmerich-beatty/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Kozey And Sons",
      "url": "./commercials/en-US/hospitality/kozey-and-sons/1672240370/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Kovacek Bergnaum",
      "url": "./commercials/en-US/telecommunications/kovacek-bergnaum/1672240370/commercial.mp3",
      "artist": "Telecommunications",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Grimes Inc",
      "url": "./commercials/en-US/broadcast-media/grimes-inc/1672240370/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Renner Kessler And Mayert",
      "url": "./commercials/en-US/banking/renner-kessler-and-mayert/1672761363277/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Feil Kulas And Ledner",
      "url": "./commercials/en-US/farming/feil-kulas-and-ledner/1672760796927/commercial.mp3",
      "artist": "Farming",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Buckridge Mayer And Donnelly",
      "url": "./commercials/en-US/military/buckridge-mayer-and-donnelly/1672762340056/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Turcotte Roberts And Rolfson",
      "url": "./commercials/en-US/security-and-investigations/turcotte-roberts-and-rolfson/1672240370/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Crooks Wisoky",
      "url": "./commercials/en-US/investment-management/crooks-wisoky/1672760969979/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Tremblay Llc",
      "url": "./commercials/en-US/graphic-design/tremblay-llc/1672240370/commercial.mp3",
      "artist": "Graphic Design",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Koelpin Rogahn And Anderson",
      "url": "./commercials/en-US/civil-engineering/koelpin-rogahn-and-anderson/1672761586312/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Gislason Zemlak",
      "url": "./commercials/en-US/human-resources/gislason-zemlak/1672240370/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Lesch Romaguera And Senger",
      "url": "./commercials/en-US/consumer-services/lesch-romaguera-and-senger/1672240370/commercial.mp3",
      "artist": "Consumer Services",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Lueilwitz O Keefe",
      "url": "./commercials/en-US/libraries/lueilwitz-o-keefe/1672240370/commercial.mp3",
      "artist": "Libraries",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Feeney Inc",
      "url": "./commercials/en-US/facilities-services/feeney-inc/1672240370/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Jacobson Yost",
      "url": "./commercials/en-US/medical-devices/jacobson-yost/1672240370/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Glover Block And Johnson",
      "url": "./commercials/en-US/motion-pictures-and-film/glover-block-and-johnson/1672761843821/commercial.mp3",
      "artist": "Motion Pictures And Film",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Kertzmann Inc",
      "url": "./commercials/en-US/nanotechnology/kertzmann-inc/1672240370/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Mckenzie Group",
      "url": "./commercials/en-US/construction/mckenzie-group/1672762405339/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Goodwin Morissette",
      "url": "./commercials/en-US/medical-practice/goodwin-morissette/1672761918716/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Barton Mcclure And Jacobson",
      "url": "./commercials/en-US/wholesale/barton-mcclure-and-jacobson/1672761987940/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Muller Jerde",
      "url": "./commercials/en-US/government-relations/muller-jerde/1672762313971/commercial.mp3",
      "artist": "Government Relations",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Leffler Inc",
      "url": "./commercials/en-US/warehousing/leffler-inc/1672240370/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Beatty Group",
      "url": "./commercials/en-US/fine-art/beatty-group/1672240370/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Block And Sons",
      "url": "./commercials/en-US/renewables-environment/block-and-sons/1672240370/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Kutch Schiller And Schoen",
      "url": "./commercials/en-US/renewables-environment/kutch-schiller-and-schoen/1672761710891/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Johnson Langosh",
      "url": "./commercials/en-US/industrial-automation/johnson-langosh/1672760944070/commercial.mp3",
      "artist": "Industrial Automation",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Deckow Kessler",
      "url": "./commercials/en-US/public-safety/deckow-kessler/1672760667742/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Bradtke Schimmel",
      "url": "./commercials/en-US/security-and-investigations/bradtke-schimmel/1672761836321/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Sporer Monahan",
      "url": "./commercials/en-US/staffing-and-recruiting/sporer-monahan/1672240370/commercial.mp3",
      "artist": "Staffing And Recruiting",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Miller Schneider",
      "url": "./commercials/en-US/farming/miller-schneider/1672240370/commercial.mp3",
      "artist": "Farming",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Runte Emard And Fisher",
      "url": "./commercials/en-US/ranching/runte-emard-and-fisher/1672240370/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Bruen Inc",
      "url": "./commercials/en-US/fishery/bruen-inc/1672761494213/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Grimes Jacobs",
      "url": "./commercials/en-US/oil-energy/grimes-jacobs/1672761261107/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Kuhlman Llc",
      "url": "./commercials/en-US/medical-practice/kuhlman-llc/1672762193820/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Nienow Kutch And Shields",
      "url": "./commercials/en-US/internet/nienow-kutch-and-shields/1672240370/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Wuckert Fahey And Lockman",
      "url": "./commercials/en-US/alternative-medicine/wuckert-fahey-and-lockman/1672240370/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Gorczany Inc",
      "url": "./commercials/en-US/industrial-automation/gorczany-inc/1672240370/commercial.mp3",
      "artist": "Industrial Automation",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "O Conner Nader And Glover",
      "url": "./commercials/en-US/banking/o-conner-nader-and-glover/1672761236011/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Gorczany Keebler And Langosh",
      "url": "./commercials/en-US/package-freight-delivery/gorczany-keebler-and-langosh/1672761025768/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Von Group",
      "url": "./commercials/en-US/luxury-goods-jewelry/von-group/1672762164766/commercial.mp3",
      "artist": "Luxury Goods Jewelry",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Jaskolski Group",
      "url": "./commercials/en-US/management-consulting/jaskolski-group/1672762220345/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Kling Inc",
      "url": "./commercials/en-US/higher-education/kling-inc/1672240370/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Johnson Emmerich And Schinner",
      "url": "./commercials/en-US/computer-networking/johnson-emmerich-and-schinner/1672762317196/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Conroy Collins And West",
      "url": "./commercials/en-US/security-and-investigations/conroy-collins-and-west/1672240370/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Homenick Gleason And Hansen",
      "url": "./commercials/en-US/maritime/homenick-gleason-and-hansen/1672762141805/commercial.mp3",
      "artist": "Maritime",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Skiles Luettgen And Walter",
      "url": "./commercials/en-US/individual-family-services/skiles-luettgen-and-walter/1672240370/commercial.mp3",
      "artist": "Individual Family Services",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Ziemann Armstrong",
      "url": "./commercials/en-US/tobacco/ziemann-armstrong/1672761830594/commercial.mp3",
      "artist": "Tobacco",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Buckridge Hoeger And Balistreri",
      "url": "./commercials/en-US/financial-services/buckridge-hoeger-and-balistreri/1672240370/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Jones Reichel And Hartmann",
      "url": "./commercials/en-US/pharmaceuticals/jones-reichel-and-hartmann/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Kris Schmeler And Mante",
      "url": "./commercials/en-US/defense-space/kris-schmeler-and-mante/1672240370/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Maggio Llc",
      "url": "./commercials/en-US/legal-services/maggio-llc/1672761294760/commercial.mp3",
      "artist": "Legal Services",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Hoppe Morissette",
      "url": "./commercials/en-US/music/hoppe-morissette/1672761683235/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Bergnaum Huel And Ernser",
      "url": "./commercials/en-US/education-management/bergnaum-huel-and-ernser/1672240370/commercial.mp3",
      "artist": "Education Management",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Schmitt Gibson",
      "url": "./commercials/en-US/arts-and-crafts/schmitt-gibson/1672760686159/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Braun Dooley",
      "url": "./commercials/en-US/warehousing/braun-dooley/1672760718056/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Jerde Schowalter And Altenwerth",
      "url": "./commercials/en-US/broadcast-media/jerde-schowalter-and-altenwerth/1672240370/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Heaney Inc",
      "url": "./commercials/en-US/defense-space/heaney-inc/1672761636833/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Feeney Altenwerth",
      "url": "./commercials/en-US/marketing-and-advertising/feeney-altenwerth/1672761046536/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Johns Johnson",
      "url": "./commercials/en-US/civic-social-organization/johns-johnson/1672761166156/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Hintz And Sons",
      "url": "./commercials/en-US/publishing/hintz-and-sons/1672761971751/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Cole Fisher",
      "url": "./commercials/en-US/veterinary/cole-fisher/1672761040708/commercial.mp3",
      "artist": "Veterinary",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Sauer Mcglynn And Mosciski",
      "url": "./commercials/en-US/public-safety/sauer-mcglynn-and-mosciski/1672240370/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Tromp Ledner And Lang",
      "url": "./commercials/en-US/arts-and-crafts/tromp-ledner-and-lang/1672240370/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Oberbrunner Llc",
      "url": "./commercials/en-US/sports/oberbrunner-llc/1672240370/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Hermann Kris",
      "url": "./commercials/en-US/railroad-manufacture/hermann-kris/1672761438940/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Pfeffer Kuphal",
      "url": "./commercials/en-US/public-policy/pfeffer-kuphal/1672762381597/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Cronin Walsh",
      "url": "./commercials/en-US/law-enforcement/cronin-walsh/1672762434077/commercial.mp3",
      "artist": "Law Enforcement",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Murray And Sons",
      "url": "./commercials/en-US/wireless/murray-and-sons/1672240370/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Pacocha Smith And Hudson",
      "url": "./commercials/en-US/e-learning/pacocha-smith-and-hudson/1672760612523/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Hane And Sons",
      "url": "./commercials/en-US/ranching/hane-and-sons/1672761772689/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Lubowitz And Sons",
      "url": "./commercials/en-US/oil-energy/lubowitz-and-sons/1672761723657/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Carroll Brown And Lowe",
      "url": "./commercials/en-US/building-materials/carroll-brown-and-lowe/1672761857480/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Goyette Dach And Luettgen",
      "url": "./commercials/en-US/wireless/goyette-dach-and-luettgen/1672762298555/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Zboncak And Sons",
      "url": "./commercials/en-US/semiconductors/zboncak-and-sons/1672240370/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Hoeger Group",
      "url": "./commercials/en-US/import-and-export/hoeger-group/1672240370/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Mosciski Weimann",
      "url": "./commercials/en-US/animation/mosciski-weimann/1672240370/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Mills Inc",
      "url": "./commercials/en-US/apparel-fashion/mills-inc/1672761569101/commercial.mp3",
      "artist": "Apparel Fashion",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Cummerata Schroeder",
      "url": "./commercials/en-US/computer-networking/cummerata-schroeder/1672240370/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Rice Llc",
      "url": "./commercials/en-US/computer-games/rice-llc/1672240370/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Cartwright Group",
      "url": "./commercials/en-US/civic-social-organization/cartwright-group/1672240370/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Maggio Group",
      "url": "./commercials/en-US/executive-office/maggio-group/1672240370/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Haag Group",
      "url": "./commercials/en-US/railroad-manufacture/haag-group/1672240370/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Walsh Ferry",
      "url": "./commercials/en-US/animation/walsh-ferry/1672760655286/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Predovic And Sons",
      "url": "./commercials/en-US/motion-pictures-and-film/predovic-and-sons/1672761994096/commercial.mp3",
      "artist": "Motion Pictures And Film",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Crooks Llc",
      "url": "./commercials/en-US/individual-family-services/crooks-llc/1672240370/commercial.mp3",
      "artist": "Individual Family Services",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Walter Group",
      "url": "./commercials/en-US/performing-arts/walter-group/1672240370/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Price And Sons",
      "url": "./commercials/en-US/architecture-planning/price-and-sons/1672761902611/commercial.mp3",
      "artist": "Architecture Planning",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Funk Llc",
      "url": "./commercials/en-US/ranching/funk-llc/1672760772342/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Conn Tremblay And Luettgen",
      "url": "./commercials/en-US/arts-and-crafts/conn-tremblay-and-luettgen/1672761206424/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Murray Llc",
      "url": "./commercials/en-US/apparel-fashion/murray-llc/1672240370/commercial.mp3",
      "artist": "Apparel Fashion",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Larkin Thompson And Davis",
      "url": "./commercials/en-US/restaurants/larkin-thompson-and-davis/1672240370/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Cartwright Inc",
      "url": "./commercials/en-US/logistics-and-supply-chain/cartwright-inc/1672240370/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Klein Dickens And Schoen",
      "url": "./commercials/en-US/electrical-electronic-manufacturing/klein-dickens-and-schoen/1672760712963/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Mcclure Konopelski And Jaskolski",
      "url": "./commercials/en-US/automotive/mcclure-konopelski-and-jaskolski/1672240370/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "O Kon Stanton And Williamson",
      "url": "./commercials/en-US/warehousing/o-kon-stanton-and-williamson/1672761642560/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Mcglynn Inc",
      "url": "./commercials/en-US/nonprofit-organization-management/mcglynn-inc/1672761851400/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Armstrong Feest",
      "url": "./commercials/en-US/import-and-export/armstrong-feest/1672761881481/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Schuppe Hegmann And Blick",
      "url": "./commercials/en-US/banking/schuppe-hegmann-and-blick/1672761418819/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Kuhlman Inc",
      "url": "./commercials/en-US/mining-metals/kuhlman-inc/1672761588289/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Wisoky And Sons",
      "url": "./commercials/en-US/construction/wisoky-and-sons/1672760904230/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Wunsch Bruen And Mitchell",
      "url": "./commercials/en-US/alternative-dispute-resolution/wunsch-bruen-and-mitchell/1672761932577/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Green Inc",
      "url": "./commercials/en-US/venture-capital-private-equity/green-inc/1672762412283/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Waters Group",
      "url": "./commercials/en-US/gambling-casinos/waters-group/1672761181966/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Reichert Inc",
      "url": "./commercials/en-US/financial-services/reichert-inc/1672240370/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Lynch And Sons",
      "url": "./commercials/en-US/import-and-export/lynch-and-sons/1672240370/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Flatley Donnelly",
      "url": "./commercials/en-US/facilities-services/flatley-donnelly/1672760990525/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Kuhlman Nader And Schumm",
      "url": "./commercials/en-US/venture-capital-private-equity/kuhlman-nader-and-schumm/1672761213187/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Gulgowski Smith",
      "url": "./commercials/en-US/management-consulting/gulgowski-smith/1672240370/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Koelpin Reinger",
      "url": "./commercials/en-US/philanthropy/koelpin-reinger/1672240370/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Kreiger Champlin And Aufderhar",
      "url": "./commercials/en-US/executive-office/kreiger-champlin-and-aufderhar/1672240370/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Lockman And Sons",
      "url": "./commercials/en-US/veterinary/lockman-and-sons/1672240370/commercial.mp3",
      "artist": "Veterinary",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Marquardt Abernathy And Metz",
      "url": "./commercials/en-US/supermarkets/marquardt-abernathy-and-metz/1672761230755/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Marks Wiza And Orn",
      "url": "./commercials/en-US/electrical-electronic-manufacturing/marks-wiza-and-orn/1672761245782/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Romaguera Inc",
      "url": "./commercials/en-US/fishery/romaguera-inc/1672762065606/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Hegmann Collins And Strosin",
      "url": "./commercials/en-US/utilities/hegmann-collins-and-strosin/1672761712777/commercial.mp3",
      "artist": "Utilities",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Hagenes Gorczany And Reichel",
      "url": "./commercials/en-US/machinery/hagenes-gorczany-and-reichel/1672240370/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Gorczany Leannon",
      "url": "./commercials/en-US/medical-devices/gorczany-leannon/1672761879167/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Reichel Bauch",
      "url": "./commercials/en-US/newspapers/reichel-bauch/1672760819005/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Larkin Kassulke",
      "url": "./commercials/en-US/venture-capital-private-equity/larkin-kassulke/1672761923145/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Kreiger Llc",
      "url": "./commercials/en-US/banking/kreiger-llc/1672240370/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Bode Inc",
      "url": "./commercials/en-US/computer-network-security/bode-inc/1672760952029/commercial.mp3",
      "artist": "Computer Network Security",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Vandervort Group",
      "url": "./commercials/en-US/tobacco/vandervort-group/1672240370/commercial.mp3",
      "artist": "Tobacco",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Marquardt Hintz And Kassulke",
      "url": "./commercials/en-US/railroad-manufacture/marquardt-hintz-and-kassulke/1672761756031/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Adams Feil",
      "url": "./commercials/en-US/consumer-goods/adams-feil/1672761554188/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Turner Jaskolski",
      "url": "./commercials/en-US/information-services/turner-jaskolski/1672240370/commercial.mp3",
      "artist": "Information Services",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Lubowitz Gleichner",
      "url": "./commercials/en-US/management-consulting/lubowitz-gleichner/1672240370/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Koch Wilkinson And Steuber",
      "url": "./commercials/en-US/broadcast-media/koch-wilkinson-and-steuber/1672240370/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Dare Bailey",
      "url": "./commercials/en-US/newspapers/dare-bailey/1672762098227/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Cummings Lindgren",
      "url": "./commercials/en-US/leisure-travel-tourism/cummings-lindgren/1672240370/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Ryan Hauck",
      "url": "./commercials/en-US/performing-arts/ryan-hauck/1672240370/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Keebler And Sons",
      "url": "./commercials/en-US/computer-hardware/keebler-and-sons/1672761563481/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Mertz Mueller And Weber",
      "url": "./commercials/en-US/automotive/mertz-mueller-and-weber/1672240370/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Schimmel Witting",
      "url": "./commercials/en-US/defense-space/schimmel-witting/1672240370/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Ratke Group",
      "url": "./commercials/en-US/financial-services/ratke-group/1672761609534/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Stark Powlowski And Kutch",
      "url": "./commercials/en-US/wine-and-spirits/stark-powlowski-and-kutch/1672761081056/commercial.mp3",
      "artist": "Wine And Spirits",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Franecki Runolfsson",
      "url": "./commercials/en-US/publishing/franecki-runolfsson/1672240370/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Kilback Group",
      "url": "./commercials/en-US/individual-family-services/kilback-group/1672761283357/commercial.mp3",
      "artist": "Individual Family Services",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Heaney And Sons",
      "url": "./commercials/en-US/market-research/heaney-and-sons/1672761621697/commercial.mp3",
      "artist": "Market Research",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Hermiston Wilkinson And Kessler",
      "url": "./commercials/en-US/executive-office/hermiston-wilkinson-and-kessler/1672760693468/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Koelpin Group",
      "url": "./commercials/en-US/writing-and-editing/koelpin-group/1672761718433/commercial.mp3",
      "artist": "Writing And Editing",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Mills Lockman And Glover",
      "url": "./commercials/en-US/medical-devices/mills-lockman-and-glover/1672240370/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Weissnat Bernhard",
      "url": "./commercials/en-US/sporting-goods/weissnat-bernhard/1672760734702/commercial.mp3",
      "artist": "Sporting Goods",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Schimmel Hyatt And Olson",
      "url": "./commercials/en-US/writing-and-editing/schimmel-hyatt-and-olson/1672240370/commercial.mp3",
      "artist": "Writing And Editing",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Wyman Yundt And Dubuque",
      "url": "./commercials/en-US/photography/wyman-yundt-and-dubuque/1672760726813/commercial.mp3",
      "artist": "Photography",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Kulas Berge",
      "url": "./commercials/en-US/religious-institutions/kulas-berge/1672761854508/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Fay And Sons",
      "url": "./commercials/en-US/import-and-export/fay-and-sons/1672240370/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Lueilwitz Jerde And Kreiger",
      "url": "./commercials/en-US/medical-practice/lueilwitz-jerde-and-kreiger/1672761125969/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Zieme Hackett And O Hara",
      "url": "./commercials/en-US/libraries/zieme-hackett-and-o-hara/1672240370/commercial.mp3",
      "artist": "Libraries",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Jacobs And Sons",
      "url": "./commercials/en-US/research/jacobs-and-sons/1672240370/commercial.mp3",
      "artist": "Research",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Nolan Inc",
      "url": "./commercials/en-US/higher-education/nolan-inc/1672240370/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Kozey Jaskolski",
      "url": "./commercials/en-US/restaurants/kozey-jaskolski/1672240370/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Murazik Ortiz And Marvin",
      "url": "./commercials/en-US/real-estate/murazik-ortiz-and-marvin/1672761076457/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Abbott Crooks",
      "url": "./commercials/en-US/consumer-goods/abbott-crooks/1672240370/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Rodriguez Pagac And Schuppe",
      "url": "./commercials/en-US/hospitality/rodriguez-pagac-and-schuppe/1672762021143/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Ward Paucek And Kris",
      "url": "./commercials/en-US/program-development/ward-paucek-and-kris/1672761249946/commercial.mp3",
      "artist": "Program Development",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Parisian Schowalter And Jones",
      "url": "./commercials/en-US/music/parisian-schowalter-and-jones/1672240370/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Jerde Kertzmann",
      "url": "./commercials/en-US/pharmaceuticals/jerde-kertzmann/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Lakin O Connell",
      "url": "./commercials/en-US/religious-institutions/lakin-o-connell/1672762256744/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Berge Llc",
      "url": "./commercials/en-US/judiciary/berge-llc/1672240370/commercial.mp3",
      "artist": "Judiciary",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Kohler Llc",
      "url": "./commercials/en-US/nanotechnology/kohler-llc/1672240370/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Connelly Inc",
      "url": "./commercials/en-US/renewables-environment/connelly-inc/1672761662930/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Botsford Mraz And Morissette",
      "url": "./commercials/en-US/glass-ceramics-concrete/botsford-mraz-and-morissette/1672761177473/commercial.mp3",
      "artist": "Glass Ceramics Concrete",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Yundt Group",
      "url": "./commercials/en-US/venture-capital-private-equity/yundt-group/1672761078705/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Reinger And Sons",
      "url": "./commercials/en-US/military/reinger-and-sons/1672240370/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Mueller Konopelski",
      "url": "./commercials/en-US/outsourcing-offshoring/mueller-konopelski/1672240370/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Kemmer Streich",
      "url": "./commercials/en-US/defense-space/kemmer-streich/1672240370/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Bernier Bergnaum And Smith",
      "url": "./commercials/en-US/ranching/bernier-bergnaum-and-smith/1672240370/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Hoeger Walter And Dicki",
      "url": "./commercials/en-US/machinery/hoeger-walter-and-dicki/1672762355856/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Gislason Larkin And Labadie",
      "url": "./commercials/en-US/computer-games/gislason-larkin-and-labadie/1672240370/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "O Kon Murphy",
      "url": "./commercials/en-US/executive-office/o-kon-murphy/1672761258689/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Funk Barton",
      "url": "./commercials/en-US/leisure-travel-tourism/funk-barton/1672240370/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Paucek Feeney And Legros",
      "url": "./commercials/en-US/alternative-medicine/paucek-feeney-and-legros/1672240370/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-032.jpg"
    },
    {
      "name": "Rempel Hermiston",
      "url": "./commercials/en-US/public-relations-and-communications/rempel-hermiston/1672240370/commercial.mp3",
      "artist": "Public Relations And Communications",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Rodriguez Llc",
      "url": "./commercials/en-US/automotive/rodriguez-llc/1672240370/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Kautzer Baumbach And Schneider",
      "url": "./commercials/en-US/computer-networking/kautzer-baumbach-and-schneider/1672761170006/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Crona Leannon",
      "url": "./commercials/en-US/government-administration/crona-leannon/1672760732207/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Koelpin Labadie And Mckenzie",
      "url": "./commercials/en-US/veterinary/koelpin-labadie-and-mckenzie/1672240370/commercial.mp3",
      "artist": "Veterinary",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Legros Bernhard And Mckenzie",
      "url": "./commercials/en-US/venture-capital-private-equity/legros-bernhard-and-mckenzie/1672760874480/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Crist Cummerata",
      "url": "./commercials/en-US/restaurants/crist-cummerata/1672240370/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Ankunding Hamill And Connelly",
      "url": "./commercials/en-US/executive-office/ankunding-hamill-and-connelly/1672760845027/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Wilderman Kemmer And Smith",
      "url": "./commercials/en-US/consumer-goods/wilderman-kemmer-and-smith/1672760810438/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Mitchell Pagac",
      "url": "./commercials/en-US/events-services/mitchell-pagac/1672240370/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Greenfelder Monahan",
      "url": "./commercials/en-US/logistics-and-supply-chain/greenfelder-monahan/1672761361307/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Swaniawski Llc",
      "url": "./commercials/en-US/newspapers/swaniawski-llc/1672760675809/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Friesen Llc",
      "url": "./commercials/en-US/hospital-health-care/friesen-llc/1672762117613/commercial.mp3",
      "artist": "Hospital Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Balistreri Nitzsche And Bradtke",
      "url": "./commercials/en-US/biotechnology/balistreri-nitzsche-and-bradtke/1672240370/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Mertz Inc",
      "url": "./commercials/en-US/defense-space/mertz-inc/1672761794182/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Morissette Parker And Rohan",
      "url": "./commercials/en-US/photography/morissette-parker-and-rohan/1672762423994/commercial.mp3",
      "artist": "Photography",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Botsford Bahringer",
      "url": "./commercials/en-US/civil-engineering/botsford-bahringer/1672760835651/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Ryan Ward And Thiel",
      "url": "./commercials/en-US/events-services/ryan-ward-and-thiel/1672762040338/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Crist Llc",
      "url": "./commercials/en-US/marketing-and-advertising/crist-llc/1672761134512/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Steuber Koelpin",
      "url": "./commercials/en-US/food-beverages/steuber-koelpin/1672761910951/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Russel Inc",
      "url": "./commercials/en-US/consumer-goods/russel-inc/1672761193833/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Mertz Group",
      "url": "./commercials/en-US/outsourcing-offshoring/mertz-group/1672762045499/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Fay Stehr And Morar",
      "url": "./commercials/en-US/supermarkets/fay-stehr-and-morar/1672240370/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Collier Wilkinson And Roberts",
      "url": "./commercials/en-US/performing-arts/collier-wilkinson-and-roberts/1672760854903/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Bashirian Kshlerin And Beatty",
      "url": "./commercials/en-US/package-freight-delivery/bashirian-kshlerin-and-beatty/1672761940866/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Lakin Llc",
      "url": "./commercials/en-US/primary-secondary-education/lakin-llc/1672240370/commercial.mp3",
      "artist": "Primary Secondary Education",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Weber Vandervort",
      "url": "./commercials/en-US/retail/weber-vandervort/1672240370/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Rau Group",
      "url": "./commercials/en-US/e-learning/rau-group/1672240370/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Cummings Llc",
      "url": "./commercials/en-US/investment-management/cummings-llc/1672761062383/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Maggio And Sons",
      "url": "./commercials/en-US/primary-secondary-education/maggio-and-sons/1672240370/commercial.mp3",
      "artist": "Primary Secondary Education",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Beier Deckow",
      "url": "./commercials/en-US/religious-institutions/beier-deckow/1672761516696/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Hirthe Inc",
      "url": "./commercials/en-US/food-beverages/hirthe-inc/1672761444144/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "Lebsack Terry",
      "url": "./commercials/en-US/investment-banking/lebsack-terry/1672761005986/commercial.mp3",
      "artist": "Investment Banking",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Franecki Group",
      "url": "./commercials/en-US/printing/franecki-group/1672240370/commercial.mp3",
      "artist": "Printing",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Smith And Sons",
      "url": "./commercials/en-US/shipbuilding/smith-and-sons/1672760642420/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Wiza Llc",
      "url": "./commercials/en-US/law-practice/wiza-llc/1672240370/commercial.mp3",
      "artist": "Law Practice",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Strosin Inc",
      "url": "./commercials/en-US/computer-software/strosin-inc/1672761800935/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Harber Carter And Funk",
      "url": "./commercials/en-US/management-consulting/harber-carter-and-funk/1672240370/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Gulgowski Ryan And Krajcik",
      "url": "./commercials/en-US/information-technology-and-services/gulgowski-ryan-and-krajcik/1672240370/commercial.mp3",
      "artist": "Information Technology And Services",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Baumbach Llc",
      "url": "./commercials/en-US/animation/baumbach-llc/1672240370/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Cartwright Graham And White",
      "url": "./commercials/en-US/performing-arts/cartwright-graham-and-white/1672240370/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Yundt Kuphal And Rolfson",
      "url": "./commercials/en-US/religious-institutions/yundt-kuphal-and-rolfson/1672761890057/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Adams And Sons",
      "url": "./commercials/en-US/plastics/adams-and-sons/1672761457194/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Ritchie Feeney",
      "url": "./commercials/en-US/computer-software/ritchie-feeney/1672760863154/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Konopelski Bradtke And Bashirian",
      "url": "./commercials/en-US/pharmaceuticals/konopelski-bradtke-and-bashirian/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "O Reilly Group",
      "url": "./commercials/en-US/oil-energy/o-reilly-group/1672761331060/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Larson Llc",
      "url": "./commercials/en-US/newspapers/larson-llc/1672762071909/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Mckenzie Bradtke",
      "url": "./commercials/en-US/railroad-manufacture/mckenzie-bradtke/1672761244402/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Emard Bogisich And Kiehn",
      "url": "./commercials/en-US/business-supplies-and-equipment/emard-bogisich-and-kiehn/1672240370/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Boyer Rosenbaum",
      "url": "./commercials/en-US/recreational-facilities-and-services/boyer-rosenbaum/1672240370/commercial.mp3",
      "artist": "Recreational Facilities And Services",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Barrows Hauck",
      "url": "./commercials/en-US/design/barrows-hauck/1672760648514/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Barrows Goyette",
      "url": "./commercials/en-US/plastics/barrows-goyette/1672762203301/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Lind Group",
      "url": "./commercials/en-US/aviation-aerospace/lind-group/1672761810727/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    }
  ]
});

