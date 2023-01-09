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
      "cover_art_url": "assets/img/krang/krang-radio-013.png"
    },
    {
      "name": "Rolfson Weber",
      "url": "./commercials/en-US/motion-pictures-and-film/rolfson-weber/1672762421505/commercial.mp3",
      "artist": "Motion Pictures And Film",
      "cover_art_url": "assets/img/krang/krang-radio-054.png"
    },
    {
      "name": "Klocko Group",
      "url": "./commercials/en-US/military/klocko-group/1672760858804/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-006.png"
    },
    {
      "name": "Schmeler Bins And Rogahn",
      "url": "./commercials/en-US/construction/schmeler-bins-and-rogahn/1672761095375/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-013.png"
    },
    {
      "name": "Bayer Group",
      "url": "./commercials/en-US/textiles/bayer-group/1672761292597/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-006.png"
    },
    {
      "name": "Friesen Group",
      "url": "./commercials/en-US/alternative-dispute-resolution/friesen-group/1672240370/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-017.png"
    },
    {
      "name": "Hudson Krajcik And Hoppe",
      "url": "./commercials/en-US/venture-capital-private-equity/hudson-krajcik-and-hoppe/1672760929265/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-024.png"
    },
    {
      "name": "Aufderhar Group",
      "url": "./commercials/en-US/real-estate/aufderhar-group/1672240370/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-050.png"
    },
    {
      "name": "Maggio Schoen",
      "url": "./commercials/en-US/public-safety/maggio-schoen/1672762341861/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-039.png"
    },
    {
      "name": "Simonis And Sons",
      "url": "./commercials/en-US/computer-hardware/simonis-and-sons/1672761453852/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-039.png"
    },
    {
      "name": "Leuschke Ratke",
      "url": "./commercials/en-US/logistics-and-supply-chain/leuschke-ratke/1672240370/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-026.png"
    },
    {
      "name": "Kovacek Miller And Lebsack",
      "url": "./commercials/en-US/financial-services/kovacek-miller-and-lebsack/1672240370/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-046.png"
    },
    {
      "name": "Krajcik Stark And Emard",
      "url": "./commercials/en-US/business-supplies-and-equipment/krajcik-stark-and-emard/1672761475752/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-084.png"
    },
    {
      "name": "Hammes Parisian",
      "url": "./commercials/en-US/dairy/hammes-parisian/1672240370/commercial.mp3",
      "artist": "Dairy",
      "cover_art_url": "assets/img/krang/krang-radio-022.png"
    },
    {
      "name": "Mosciski Sporer",
      "url": "./commercials/en-US/public-relations-and-communications/mosciski-sporer/1672240370/commercial.mp3",
      "artist": "Public Relations And Communications",
      "cover_art_url": "assets/img/krang/krang-radio-029.png"
    },
    {
      "name": "Erdman Llc",
      "url": "./commercials/en-US/construction/erdman-llc/1672761920578/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-052.png"
    },
    {
      "name": "Moore Llc",
      "url": "./commercials/en-US/international-affairs/moore-llc/1672240370/commercial.mp3",
      "artist": "International Affairs",
      "cover_art_url": "assets/img/krang/krang-radio-050.png"
    },
    {
      "name": "Veum Macejkovic And Gottlieb",
      "url": "./commercials/en-US/utilities/veum-macejkovic-and-gottlieb/1672240370/commercial.mp3",
      "artist": "Utilities",
      "cover_art_url": "assets/img/krang/krang-radio-008.png"
    },
    {
      "name": "Kassulke Lueilwitz And Fay",
      "url": "./commercials/en-US/mental-health-care/kassulke-lueilwitz-and-fay/1672761828998/commercial.mp3",
      "artist": "Mental Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-040.png"
    },
    {
      "name": "Buckridge Volkman And Bechtelar",
      "url": "./commercials/en-US/animation/buckridge-volkman-and-bechtelar/1672760651423/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-056.png"
    },
    {
      "name": "Nader And Sons",
      "url": "./commercials/en-US/mental-health-care/nader-and-sons/1672240370/commercial.mp3",
      "artist": "Mental Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-012.png"
    },
    {
      "name": "Monahan Powlowski",
      "url": "./commercials/en-US/medical-practice/monahan-powlowski/1672240370/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-053.png"
    },
    {
      "name": "Kulas Llc",
      "url": "./commercials/en-US/fishery/kulas-llc/1672240370/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-084.png"
    },
    {
      "name": "Murazik Schaefer And Predovic",
      "url": "./commercials/en-US/package-freight-delivery/murazik-schaefer-and-predovic/1672240370/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-083.png"
    },
    {
      "name": "Kertzmann Morar",
      "url": "./commercials/en-US/glass-ceramics-concrete/kertzmann-morar/1672760682794/commercial.mp3",
      "artist": "Glass Ceramics Concrete",
      "cover_art_url": "assets/img/krang/krang-radio-094.png"
    },
    {
      "name": "Harris Llc",
      "url": "./commercials/en-US/research/harris-llc/1672762330755/commercial.mp3",
      "artist": "Research",
      "cover_art_url": "assets/img/krang/krang-radio-076.png"
    },
    {
      "name": "Waters Rau And Schulist",
      "url": "./commercials/en-US/consumer-services/waters-rau-and-schulist/1672762138439/commercial.mp3",
      "artist": "Consumer Services",
      "cover_art_url": "assets/img/krang/krang-radio-082.png"
    },
    {
      "name": "Torp Llc",
      "url": "./commercials/en-US/law-enforcement/torp-llc/1672762000655/commercial.mp3",
      "artist": "Law Enforcement",
      "cover_art_url": "assets/img/krang/krang-radio-005.png"
    },
    {
      "name": "Cummerata Schinner",
      "url": "./commercials/en-US/broadcast-media/cummerata-schinner/1672760950178/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-080.png"
    },
    {
      "name": "Conroy Kshlerin",
      "url": "./commercials/en-US/hospitality/conroy-kshlerin/1672240370/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-035.png"
    },
    {
      "name": "Hermiston Hammes And Hand",
      "url": "./commercials/en-US/mining-metals/hermiston-hammes-and-hand/1672240370/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-065.png"
    },
    {
      "name": "Champlin Hand",
      "url": "./commercials/en-US/education-management/champlin-hand/1672761561540/commercial.mp3",
      "artist": "Education Management",
      "cover_art_url": "assets/img/krang/krang-radio-095.png"
    },
    {
      "name": "Jenkins Reichel",
      "url": "./commercials/en-US/medical-devices/jenkins-reichel/1672761578715/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-058.png"
    },
    {
      "name": "Sporer Llc",
      "url": "./commercials/en-US/leisure-travel-tourism/sporer-llc/1672240370/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-093.png"
    },
    {
      "name": "Ebert Mraz And Gleichner",
      "url": "./commercials/en-US/education-management/ebert-mraz-and-gleichner/1672240370/commercial.mp3",
      "artist": "Education Management",
      "cover_art_url": "assets/img/krang/krang-radio-064.png"
    },
    {
      "name": "Graham Llc",
      "url": "./commercials/en-US/building-materials/graham-llc/1672760722420/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-065.png"
    },
    {
      "name": "Mitchell Price And Erdman",
      "url": "./commercials/en-US/real-estate/mitchell-price-and-erdman/1672240370/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-001.png"
    },
    {
      "name": "Terry Jaskolski And Mraz",
      "url": "./commercials/en-US/nonprofit-organization-management/terry-jaskolski-and-mraz/1672240370/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-063.png"
    },
    {
      "name": "Schroeder Prosacco And Weissnat",
      "url": "./commercials/en-US/alternative-medicine/schroeder-prosacco-and-weissnat/1672762173027/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-019.png"
    },
    {
      "name": "Conn Bruen And Mraz",
      "url": "./commercials/en-US/biotechnology/conn-bruen-and-mraz/1672761088910/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-028.png"
    },
    {
      "name": "Schaefer Johnson",
      "url": "./commercials/en-US/newspapers/schaefer-johnson/1672760689791/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-075.png"
    },
    {
      "name": "Dooley Oberbrunner And Hegmann",
      "url": "./commercials/en-US/online-media/dooley-oberbrunner-and-hegmann/1672240370/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-058.png"
    },
    {
      "name": "Nicolas Howe And Gorczany",
      "url": "./commercials/en-US/international-trade-and-development/nicolas-howe-and-gorczany/1672240370/commercial.mp3",
      "artist": "International Trade And Development",
      "cover_art_url": "assets/img/krang/krang-radio-085.png"
    },
    {
      "name": "Welch Bruen And Reinger",
      "url": "./commercials/en-US/package-freight-delivery/welch-bruen-and-reinger/1672762132383/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-017.png"
    },
    {
      "name": "Doyle Yost And O Kon",
      "url": "./commercials/en-US/internet/doyle-yost-and-o-kon/1672240370/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-001.png"
    },
    {
      "name": "Beer Auer And Satterfield",
      "url": "./commercials/en-US/dairy/beer-auer-and-satterfield/1672762351832/commercial.mp3",
      "artist": "Dairy",
      "cover_art_url": "assets/img/krang/krang-radio-013.png"
    },
    {
      "name": "Bogan Hand",
      "url": "./commercials/en-US/arts-and-crafts/bogan-hand/1672240370/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-056.png"
    },
    {
      "name": "Ritchie Group",
      "url": "./commercials/en-US/political-organization/ritchie-group/1672240370/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-096.png"
    },
    {
      "name": "Botsford Dickens And Goyette",
      "url": "./commercials/en-US/music/botsford-dickens-and-goyette/1672240370/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-011.png"
    },
    {
      "name": "Borer Inc",
      "url": "./commercials/en-US/animation/borer-inc/1672760594177/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-066.png"
    },
    {
      "name": "Littel Kirlin",
      "url": "./commercials/en-US/semiconductors/littel-kirlin/1672760601888/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-001.png"
    },
    {
      "name": "Krajcik Boyer And Runte",
      "url": "./commercials/en-US/electrical-electronic-manufacturing/krajcik-boyer-and-runte/1672762036084/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-027.png"
    },
    {
      "name": "Labadie Mante",
      "url": "./commercials/en-US/entertainment/labadie-mante/1672760635644/commercial.mp3",
      "artist": "Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-042.png"
    },
    {
      "name": "Abbott Mosciski",
      "url": "./commercials/en-US/shipbuilding/abbott-mosciski/1672240370/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-048.png"
    },
    {
      "name": "Lehner Farrell",
      "url": "./commercials/en-US/human-resources/lehner-farrell/1672761373142/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-089.png"
    },
    {
      "name": "Bruen Llc",
      "url": "./commercials/en-US/civic-social-organization/bruen-llc/1672762236831/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-008.png"
    },
    {
      "name": "Rau Mitchell",
      "url": "./commercials/en-US/fund-raising/rau-mitchell/1672240370/commercial.mp3",
      "artist": "Fund Raising",
      "cover_art_url": "assets/img/krang/krang-radio-092.png"
    },
    {
      "name": "Wiza Swaniawski",
      "url": "./commercials/en-US/public-safety/wiza-swaniawski/1672240370/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-089.png"
    },
    {
      "name": "Hickle Llc",
      "url": "./commercials/en-US/medical-devices/hickle-llc/1672761965896/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-018.png"
    },
    {
      "name": "Rohan Monahan",
      "url": "./commercials/en-US/motion-pictures-and-film/rohan-monahan/1672760691950/commercial.mp3",
      "artist": "Motion Pictures And Film",
      "cover_art_url": "assets/img/krang/krang-radio-079.png"
    },
    {
      "name": "Cummerata Group",
      "url": "./commercials/en-US/semiconductors/cummerata-group/1672761198593/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-014.png"
    },
    {
      "name": "Zemlak And Sons",
      "url": "./commercials/en-US/music/zemlak-and-sons/1672240370/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-057.png"
    },
    {
      "name": "Kunze Huels",
      "url": "./commercials/en-US/translation-and-localization/kunze-huels/1672761892532/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-063.png"
    },
    {
      "name": "Douglas Mosciski And Hintz",
      "url": "./commercials/en-US/computer-network-security/douglas-mosciski-and-hintz/1672240370/commercial.mp3",
      "artist": "Computer Network Security",
      "cover_art_url": "assets/img/krang/krang-radio-011.png"
    },
    {
      "name": "Marks Mertz",
      "url": "./commercials/en-US/railroad-manufacture/marks-mertz/1672240370/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-070.png"
    },
    {
      "name": "Hackett Heaney And Schamberger",
      "url": "./commercials/en-US/medical-practice/hackett-heaney-and-schamberger/1672240370/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-037.png"
    },
    {
      "name": "Reinger Inc",
      "url": "./commercials/en-US/defense-space/reinger-inc/1672762290071/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-002.png"
    },
    {
      "name": "Bailey Marks And Miller",
      "url": "./commercials/en-US/shipbuilding/bailey-marks-and-miller/1672240370/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-009.png"
    },
    {
      "name": "Heidenreich Inc",
      "url": "./commercials/en-US/building-materials/heidenreich-inc/1672240370/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-060.png"
    },
    {
      "name": "Kshlerin And Sons",
      "url": "./commercials/en-US/legislative-office/kshlerin-and-sons/1672762406980/commercial.mp3",
      "artist": "Legislative Office",
      "cover_art_url": "assets/img/krang/krang-radio-049.png"
    },
    {
      "name": "Boyer Wisozk",
      "url": "./commercials/en-US/media-production/boyer-wisozk/1672760765139/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-074.png"
    },
    {
      "name": "Luettgen Group",
      "url": "./commercials/en-US/executive-office/luettgen-group/1672761432026/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-094.png"
    },
    {
      "name": "Aufderhar O Hara",
      "url": "./commercials/en-US/pharmaceuticals/aufderhar-o-hara/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-030.png"
    },
    {
      "name": "Ortiz Koepp",
      "url": "./commercials/en-US/plastics/ortiz-koepp/1672762067987/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-072.png"
    },
    {
      "name": "Funk And Sons",
      "url": "./commercials/en-US/railroad-manufacture/funk-and-sons/1672761514749/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-027.png"
    },
    {
      "name": "Leuschke Abshire",
      "url": "./commercials/en-US/museums-and-institutions/leuschke-abshire/1672240370/commercial.mp3",
      "artist": "Museums And Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-038.png"
    },
    {
      "name": "Erdman Llc",
      "url": "./commercials/en-US/publishing/erdman-llc/1672240370/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-072.png"
    },
    {
      "name": "Hodkiewicz Conroy",
      "url": "./commercials/en-US/chemicals/hodkiewicz-conroy/1672240370/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-019.png"
    },
    {
      "name": "Swaniawski Lockman And Kuvalis",
      "url": "./commercials/en-US/e-learning/swaniawski-lockman-and-kuvalis/1672761280945/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-021.png"
    },
    {
      "name": "Morissette Breitenberg",
      "url": "./commercials/en-US/consumer-goods/morissette-breitenberg/1672240370/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-054.png"
    },
    {
      "name": "Boehm Streich And Leuschke",
      "url": "./commercials/en-US/higher-education/boehm-streich-and-leuschke/1672760728423/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-072.png"
    },
    {
      "name": "Ullrich Schmitt",
      "url": "./commercials/en-US/import-and-export/ullrich-schmitt/1672761529508/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-039.png"
    },
    {
      "name": "Lehner Llc",
      "url": "./commercials/en-US/animation/lehner-llc/1672240370/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-035.png"
    },
    {
      "name": "D Amore Llc",
      "url": "./commercials/en-US/accounting/d-amore-llc/1672240370/commercial.mp3",
      "artist": "Accounting",
      "cover_art_url": "assets/img/krang/krang-radio-052.png"
    },
    {
      "name": "Schmidt Johns",
      "url": "./commercials/en-US/alternative-medicine/schmidt-johns/1672240370/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-019.png"
    },
    {
      "name": "Mayert Johnston",
      "url": "./commercials/en-US/public-relations-and-communications/mayert-johnston/1672761011694/commercial.mp3",
      "artist": "Public Relations And Communications",
      "cover_art_url": "assets/img/krang/krang-radio-044.png"
    },
    {
      "name": "Donnelly Ward And Parker",
      "url": "./commercials/en-US/music/donnelly-ward-and-parker/1672761247711/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-021.png"
    },
    {
      "name": "Dibbert Abbott",
      "url": "./commercials/en-US/apparel-fashion/dibbert-abbott/1672760876416/commercial.mp3",
      "artist": "Apparel Fashion",
      "cover_art_url": "assets/img/krang/krang-radio-055.png"
    },
    {
      "name": "Bins Gibson",
      "url": "./commercials/en-US/gambling-casinos/bins-gibson/1672240370/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-023.png"
    },
    {
      "name": "Stoltenberg Llc",
      "url": "./commercials/en-US/consumer-goods/stoltenberg-llc/1672762023794/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-033.png"
    },
    {
      "name": "Price Schowalter And Grimes",
      "url": "./commercials/en-US/computer-software/price-schowalter-and-grimes/1672240370/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-039.png"
    },
    {
      "name": "Hammes Graham And Heathcote",
      "url": "./commercials/en-US/textiles/hammes-graham-and-heathcote/1672240370/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-059.png"
    },
    {
      "name": "Wilderman Treutel",
      "url": "./commercials/en-US/packaging-and-containers/wilderman-treutel/1672240370/commercial.mp3",
      "artist": "Packaging And Containers",
      "cover_art_url": "assets/img/krang/krang-radio-013.png"
    },
    {
      "name": "Mclaughlin Haley And Wilderman",
      "url": "./commercials/en-US/information-services/mclaughlin-haley-and-wilderman/1672761840113/commercial.mp3",
      "artist": "Information Services",
      "cover_art_url": "assets/img/krang/krang-radio-076.png"
    },
    {
      "name": "Robel Wisozk",
      "url": "./commercials/en-US/translation-and-localization/robel-wisozk/1672240370/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-012.png"
    },
    {
      "name": "Green Lubowitz",
      "url": "./commercials/en-US/packaging-and-containers/green-lubowitz/1672761414503/commercial.mp3",
      "artist": "Packaging And Containers",
      "cover_art_url": "assets/img/krang/krang-radio-048.png"
    },
    {
      "name": "Bogan Spencer",
      "url": "./commercials/en-US/music/bogan-spencer/1672760968039/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-015.png"
    },
    {
      "name": "Romaguera Hettinger And Paucek",
      "url": "./commercials/en-US/environmental-services/romaguera-hettinger-and-paucek/1672761436382/commercial.mp3",
      "artist": "Environmental Services",
      "cover_art_url": "assets/img/krang/krang-radio-063.png"
    },
    {
      "name": "Keeling And Sons",
      "url": "./commercials/en-US/commercial-real-estate/keeling-and-sons/1672240370/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-056.png"
    },
    {
      "name": "Zieme Huel And Keeling",
      "url": "./commercials/en-US/program-development/zieme-huel-and-keeling/1672240370/commercial.mp3",
      "artist": "Program Development",
      "cover_art_url": "assets/img/krang/krang-radio-023.png"
    },
    {
      "name": "Koepp Herzog And Schmitt",
      "url": "./commercials/en-US/military/koepp-herzog-and-schmitt/1672240370/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-086.png"
    },
    {
      "name": "Kirlin Vonrueden",
      "url": "./commercials/en-US/printing/kirlin-vonrueden/1672761628094/commercial.mp3",
      "artist": "Printing",
      "cover_art_url": "assets/img/krang/krang-radio-005.png"
    },
    {
      "name": "O Connell Inc",
      "url": "./commercials/en-US/civic-social-organization/o-connell-inc/1672761504392/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-018.png"
    },
    {
      "name": "Hirthe And Sons",
      "url": "./commercials/en-US/civil-engineering/hirthe-and-sons/1672761050332/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-092.png"
    },
    {
      "name": "Kunze Spencer And Lehner",
      "url": "./commercials/en-US/religious-institutions/kunze-spencer-and-lehner/1672761678106/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-095.png"
    },
    {
      "name": "Conn Ebert And Ratke",
      "url": "./commercials/en-US/chemicals/conn-ebert-and-ratke/1672240370/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-059.png"
    },
    {
      "name": "Krajcik Auer And Kuphal",
      "url": "./commercials/en-US/wireless/krajcik-auer-and-kuphal/1672760924236/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-096.png"
    },
    {
      "name": "Lang Ratke",
      "url": "./commercials/en-US/paper-forest-products/lang-ratke/1672240370/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-092.png"
    },
    {
      "name": "Mcdermott And Sons",
      "url": "./commercials/en-US/performing-arts/mcdermott-and-sons/1672240370/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-085.png"
    },
    {
      "name": "Doyle Hickle And Mante",
      "url": "./commercials/en-US/logistics-and-supply-chain/doyle-hickle-and-mante/1672760986737/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-082.png"
    },
    {
      "name": "Jacobson And Sons",
      "url": "./commercials/en-US/broadcast-media/jacobson-and-sons/1672240370/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-077.png"
    },
    {
      "name": "Hagenes Hartmann And Frami",
      "url": "./commercials/en-US/government-administration/hagenes-hartmann-and-frami/1672762363412/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-037.png"
    },
    {
      "name": "Corwin Inc",
      "url": "./commercials/en-US/warehousing/corwin-inc/1672240370/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-035.png"
    },
    {
      "name": "Koch Powlowski And Pacocha",
      "url": "./commercials/en-US/computer-hardware/koch-powlowski-and-pacocha/1672761214985/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-086.png"
    },
    {
      "name": "Rolfson Bradtke And Bailey",
      "url": "./commercials/en-US/paper-forest-products/rolfson-bradtke-and-bailey/1672761765708/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-077.png"
    },
    {
      "name": "Lindgren Hayes",
      "url": "./commercials/en-US/entertainment/lindgren-hayes/1672761395289/commercial.mp3",
      "artist": "Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-055.png"
    },
    {
      "name": "Hamill And Sons",
      "url": "./commercials/en-US/package-freight-delivery/hamill-and-sons/1672240370/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-091.png"
    },
    {
      "name": "Bayer Franecki",
      "url": "./commercials/en-US/renewables-environment/bayer-franecki/1672762044116/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-025.png"
    },
    {
      "name": "Cruickshank Berge",
      "url": "./commercials/en-US/wholesale/cruickshank-berge/1672760940083/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-029.png"
    },
    {
      "name": "Waelchi Ankunding",
      "url": "./commercials/en-US/facilities-services/waelchi-ankunding/1672760770051/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-049.png"
    },
    {
      "name": "Jacobs Llc",
      "url": "./commercials/en-US/military/jacobs-llc/1672240370/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-012.png"
    },
    {
      "name": "Rogahn Lebsack",
      "url": "./commercials/en-US/aviation-aerospace/rogahn-lebsack/1672761240605/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-002.png"
    },
    {
      "name": "Thompson Waters And Boyer",
      "url": "./commercials/en-US/biotechnology/thompson-waters-and-boyer/1672761471285/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-037.png"
    },
    {
      "name": "Quigley Llc",
      "url": "./commercials/en-US/management-consulting/quigley-llc/1672760961319/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-009.png"
    },
    {
      "name": "Donnelly Rippin",
      "url": "./commercials/en-US/public-policy/donnelly-rippin/1672761043926/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-070.png"
    },
    {
      "name": "Macejkovic Barton And Hickle",
      "url": "./commercials/en-US/food-production/macejkovic-barton-and-hickle/1672761559708/commercial.mp3",
      "artist": "Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-014.png"
    },
    {
      "name": "Durgan And Sons",
      "url": "./commercials/en-US/maritime/durgan-and-sons/1672761658937/commercial.mp3",
      "artist": "Maritime",
      "cover_art_url": "assets/img/krang/krang-radio-080.png"
    },
    {
      "name": "Jacobson Klein",
      "url": "./commercials/en-US/marketing-and-advertising/jacobson-klein/1672240370/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-064.png"
    },
    {
      "name": "Wehner Hartmann And Wolf",
      "url": "./commercials/en-US/medical-practice/wehner-hartmann-and-wolf/1672761368475/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-024.png"
    },
    {
      "name": "Homenick Grimes And Roob",
      "url": "./commercials/en-US/consumer-goods/homenick-grimes-and-roob/1672762300111/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-091.png"
    },
    {
      "name": "Herzog Koepp And Swaniawski",
      "url": "./commercials/en-US/telecommunications/herzog-koepp-and-swaniawski/1672240370/commercial.mp3",
      "artist": "Telecommunications",
      "cover_art_url": "assets/img/krang/krang-radio-042.png"
    },
    {
      "name": "Swaniawski Inc",
      "url": "./commercials/en-US/entertainment/swaniawski-inc/1672240370/commercial.mp3",
      "artist": "Entertainment",
      "cover_art_url": "assets/img/krang/krang-radio-056.png"
    },
    {
      "name": "Kris Llc",
      "url": "./commercials/en-US/facilities-services/kris-llc/1672761426034/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-060.png"
    },
    {
      "name": "Nolan Maggio",
      "url": "./commercials/en-US/capital-markets/nolan-maggio/1672240370/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-021.png"
    },
    {
      "name": "Hackett Howe",
      "url": "./commercials/en-US/marketing-and-advertising/hackett-howe/1672240370/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-019.png"
    },
    {
      "name": "Wisoky D Amore And Schoen",
      "url": "./commercials/en-US/civil-engineering/wisoky-d-amore-and-schoen/1672761084540/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-098.png"
    },
    {
      "name": "Farrell Bartoletti",
      "url": "./commercials/en-US/investment-management/farrell-bartoletti/1672240370/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-058.png"
    },
    {
      "name": "Metz Wintheiser",
      "url": "./commercials/en-US/cosmetics/metz-wintheiser/1672240370/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-041.png"
    },
    {
      "name": "Schneider Gibson",
      "url": "./commercials/en-US/ranching/schneider-gibson/1672240370/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-043.png"
    },
    {
      "name": "O Connell Bednar And Streich",
      "url": "./commercials/en-US/higher-education/o-connell-bednar-and-streich/1672240370/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-069.png"
    },
    {
      "name": "Schuster Raynor",
      "url": "./commercials/en-US/animation/schuster-raynor/1672240370/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-020.png"
    },
    {
      "name": "Mcdermott Treutel",
      "url": "./commercials/en-US/airlines-aviation/mcdermott-treutel/1672240370/commercial.mp3",
      "artist": "Airlines Aviation",
      "cover_art_url": "assets/img/krang/krang-radio-070.png"
    },
    {
      "name": "Hermiston Predovic",
      "url": "./commercials/en-US/fine-art/hermiston-predovic/1672761775405/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-075.png"
    },
    {
      "name": "Bernier Kozey",
      "url": "./commercials/en-US/warehousing/bernier-kozey/1672240370/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-098.png"
    },
    {
      "name": "Hand Berge",
      "url": "./commercials/en-US/capital-markets/hand-berge/1672761119447/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-073.png"
    },
    {
      "name": "Gaylord Blanda",
      "url": "./commercials/en-US/philanthropy/gaylord-blanda/1672762377006/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-065.png"
    },
    {
      "name": "Nolan Bergnaum And Strosin",
      "url": "./commercials/en-US/internet/nolan-bergnaum-and-strosin/1672762383735/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-095.png"
    },
    {
      "name": "Russel Group",
      "url": "./commercials/en-US/public-policy/russel-group/1672240370/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-060.png"
    },
    {
      "name": "Schowalter Group",
      "url": "./commercials/en-US/wireless/schowalter-group/1672761099872/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-067.png"
    },
    {
      "name": "Leannon And Sons",
      "url": "./commercials/en-US/textiles/leannon-and-sons/1672761873991/commercial.mp3",
      "artist": "Textiles",
      "cover_art_url": "assets/img/krang/krang-radio-032.png"
    },
    {
      "name": "O Reilly Huels",
      "url": "./commercials/en-US/fishery/o-reilly-huels/1672761380153/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-026.png"
    },
    {
      "name": "Schiller Stiedemann",
      "url": "./commercials/en-US/packaging-and-containers/schiller-stiedemann/1672240370/commercial.mp3",
      "artist": "Packaging And Containers",
      "cover_art_url": "assets/img/krang/krang-radio-067.png"
    },
    {
      "name": "Schmidt Hoppe",
      "url": "./commercials/en-US/fine-art/schmidt-hoppe/1672240370/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-033.png"
    },
    {
      "name": "Schaefer Ondricka",
      "url": "./commercials/en-US/computer-hardware/schaefer-ondricka/1672761518346/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-045.png"
    },
    {
      "name": "Russel Inc",
      "url": "./commercials/en-US/food-beverages/russel-inc/1672240370/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-010.png"
    },
    {
      "name": "Oberbrunner And Sons",
      "url": "./commercials/en-US/program-development/oberbrunner-and-sons/1672240370/commercial.mp3",
      "artist": "Program Development",
      "cover_art_url": "assets/img/krang/krang-radio-029.png"
    },
    {
      "name": "Goldner Harber And Will",
      "url": "./commercials/en-US/fund-raising/goldner-harber-and-will/1672240370/commercial.mp3",
      "artist": "Fund Raising",
      "cover_art_url": "assets/img/krang/krang-radio-079.png"
    },
    {
      "name": "Leannon Koelpin",
      "url": "./commercials/en-US/nonprofit-organization-management/leannon-koelpin/1672761598256/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-038.png"
    },
    {
      "name": "Williamson Will",
      "url": "./commercials/en-US/aviation-aerospace/williamson-will/1672240370/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-051.png"
    },
    {
      "name": "Pagac Gaylord And Wehner",
      "url": "./commercials/en-US/individual-family-services/pagac-gaylord-and-wehner/1672762443094/commercial.mp3",
      "artist": "Individual Family Services",
      "cover_art_url": "assets/img/krang/krang-radio-097.png"
    },
    {
      "name": "Prosacco Bednar And Mclaughlin",
      "url": "./commercials/en-US/outsourcing-offshoring/prosacco-bednar-and-mclaughlin/1672762408806/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-025.png"
    },
    {
      "name": "Collins Zboncak And Lind",
      "url": "./commercials/en-US/retail/collins-zboncak-and-lind/1672240370/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-023.png"
    },
    {
      "name": "Mayert And Sons",
      "url": "./commercials/en-US/package-freight-delivery/mayert-and-sons/1672760848329/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-003.png"
    },
    {
      "name": "Bayer And Sons",
      "url": "./commercials/en-US/capital-markets/bayer-and-sons/1672761937622/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-017.png"
    },
    {
      "name": "Konopelski Group",
      "url": "./commercials/en-US/logistics-and-supply-chain/konopelski-group/1672760931353/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-070.png"
    },
    {
      "name": "Cassin Group",
      "url": "./commercials/en-US/cosmetics/cassin-group/1672240370/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-005.png"
    },
    {
      "name": "Smith Sanford",
      "url": "./commercials/en-US/outsourcing-offshoring/smith-sanford/1672240370/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-082.png"
    },
    {
      "name": "Sauer And Sons",
      "url": "./commercials/en-US/media-production/sauer-and-sons/1672240370/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-056.png"
    },
    {
      "name": "Medhurst Osinski And Kuhlman",
      "url": "./commercials/en-US/automotive/medhurst-osinski-and-kuhlman/1672240370/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-099.png"
    },
    {
      "name": "Graham Group",
      "url": "./commercials/en-US/think-tanks/graham-group/1672240370/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-041.png"
    },
    {
      "name": "Hoppe Llc",
      "url": "./commercials/en-US/computer-hardware/hoppe-llc/1672240370/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-010.png"
    },
    {
      "name": "Stehr Weber",
      "url": "./commercials/en-US/publishing/stehr-weber/1672240370/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-027.png"
    },
    {
      "name": "Denesik Koepp",
      "url": "./commercials/en-US/luxury-goods-jewelry/denesik-koepp/1672760747134/commercial.mp3",
      "artist": "Luxury Goods Jewelry",
      "cover_art_url": "assets/img/krang/krang-radio-003.png"
    },
    {
      "name": "Hoeger Ferry",
      "url": "./commercials/en-US/facilities-services/hoeger-ferry/1672761340360/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-019.png"
    },
    {
      "name": "Reichert Inc",
      "url": "./commercials/en-US/performing-arts/reichert-inc/1672240370/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-081.png"
    },
    {
      "name": "Ziemann Tremblay And Stiedemann",
      "url": "./commercials/en-US/computer-games/ziemann-tremblay-and-stiedemann/1672762222097/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-018.png"
    },
    {
      "name": "Willms Llc",
      "url": "./commercials/en-US/tobacco/willms-llc/1672240370/commercial.mp3",
      "artist": "Tobacco",
      "cover_art_url": "assets/img/krang/krang-radio-009.png"
    },
    {
      "name": "Weber Blanda",
      "url": "./commercials/en-US/biotechnology/weber-blanda/1672240370/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-067.png"
    },
    {
      "name": "Wolf Hills",
      "url": "./commercials/en-US/glass-ceramics-concrete/wolf-hills/1672761288060/commercial.mp3",
      "artist": "Glass Ceramics Concrete",
      "cover_art_url": "assets/img/krang/krang-radio-029.png"
    },
    {
      "name": "Wolf Nicolas And Stark",
      "url": "./commercials/en-US/mental-health-care/wolf-nicolas-and-stark/1672761541091/commercial.mp3",
      "artist": "Mental Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-018.png"
    },
    {
      "name": "Kuhic Langworth",
      "url": "./commercials/en-US/commercial-real-estate/kuhic-langworth/1672761819458/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-062.png"
    },
    {
      "name": "Rogahn Padberg",
      "url": "./commercials/en-US/information-services/rogahn-padberg/1672761644781/commercial.mp3",
      "artist": "Information Services",
      "cover_art_url": "assets/img/krang/krang-radio-061.png"
    },
    {
      "name": "Windler Kautzer",
      "url": "./commercials/en-US/alternative-dispute-resolution/windler-kautzer/1672240370/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-037.png"
    },
    {
      "name": "Morar Inc",
      "url": "./commercials/en-US/retail/morar-inc/1672762268786/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-071.png"
    },
    {
      "name": "Olson Kohler",
      "url": "./commercials/en-US/e-learning/olson-kohler/1672761777314/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-013.png"
    },
    {
      "name": "Grimes Johnston And Terry",
      "url": "./commercials/en-US/paper-forest-products/grimes-johnston-and-terry/1672762217891/commercial.mp3",
      "artist": "Paper Forest Products",
      "cover_art_url": "assets/img/krang/krang-radio-092.png"
    },
    {
      "name": "Rolfson Schamberger",
      "url": "./commercials/en-US/defense-space/rolfson-schamberger/1672761868711/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-046.png"
    },
    {
      "name": "Weber Bode And Haley",
      "url": "./commercials/en-US/executive-office/weber-bode-and-haley/1672761168127/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-053.png"
    },
    {
      "name": "Fadel Llc",
      "url": "./commercials/en-US/real-estate/fadel-llc/1672240370/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-007.png"
    },
    {
      "name": "Marks Mante And Balistreri",
      "url": "./commercials/en-US/consumer-electronics/marks-mante-and-balistreri/1672240370/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-060.png"
    },
    {
      "name": "Streich Hayes And Reilly",
      "url": "./commercials/en-US/alternative-dispute-resolution/streich-hayes-and-reilly/1672761704078/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-015.png"
    },
    {
      "name": "Lang Bechtelar",
      "url": "./commercials/en-US/oil-energy/lang-bechtelar/1672761498572/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-092.png"
    },
    {
      "name": "Bernier Beahan",
      "url": "./commercials/en-US/commercial-real-estate/bernier-beahan/1672760978068/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-055.png"
    },
    {
      "name": "Kreiger Miller",
      "url": "./commercials/en-US/telecommunications/kreiger-miller/1672240370/commercial.mp3",
      "artist": "Telecommunications",
      "cover_art_url": "assets/img/krang/krang-radio-099.png"
    },
    {
      "name": "Rice Considine",
      "url": "./commercials/en-US/online-media/rice-considine/1672240370/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-090.png"
    },
    {
      "name": "Nicolas Bednar And Windler",
      "url": "./commercials/en-US/media-production/nicolas-bednar-and-windler/1672760706018/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-019.png"
    },
    {
      "name": "Koepp Conroy",
      "url": "./commercials/en-US/warehousing/koepp-conroy/1672240370/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-028.png"
    },
    {
      "name": "Kutch Lebsack And Stiedemann",
      "url": "./commercials/en-US/nonprofit-organization-management/kutch-lebsack-and-stiedemann/1672760598031/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-062.png"
    },
    {
      "name": "Turcotte Wilkinson And Legros",
      "url": "./commercials/en-US/cosmetics/turcotte-wilkinson-and-legros/1672240370/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-048.png"
    },
    {
      "name": "Collier And Sons",
      "url": "./commercials/en-US/writing-and-editing/collier-and-sons/1672761032775/commercial.mp3",
      "artist": "Writing And Editing",
      "cover_art_url": "assets/img/krang/krang-radio-062.png"
    },
    {
      "name": "Roob Pfeffer",
      "url": "./commercials/en-US/broadcast-media/roob-pfeffer/1672762162301/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-029.png"
    },
    {
      "name": "Smitham And Sons",
      "url": "./commercials/en-US/retail/smitham-and-sons/1672761403717/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-089.png"
    },
    {
      "name": "Wilderman Schneider",
      "url": "./commercials/en-US/health-wellness-and-fitness/wilderman-schneider/1672761928543/commercial.mp3",
      "artist": "Health Wellness And Fitness",
      "cover_art_url": "assets/img/krang/krang-radio-071.png"
    },
    {
      "name": "Fay Douglas",
      "url": "./commercials/en-US/government-administration/fay-douglas/1672761690851/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-050.png"
    },
    {
      "name": "Kutch Grimes And Kuhlman",
      "url": "./commercials/en-US/graphic-design/kutch-grimes-and-kuhlman/1672761729382/commercial.mp3",
      "artist": "Graphic Design",
      "cover_art_url": "assets/img/krang/krang-radio-008.png"
    },
    {
      "name": "Parisian West And Langosh",
      "url": "./commercials/en-US/wine-and-spirits/parisian-west-and-langosh/1672240370/commercial.mp3",
      "artist": "Wine And Spirits",
      "cover_art_url": "assets/img/krang/krang-radio-070.png"
    },
    {
      "name": "Davis Llc",
      "url": "./commercials/en-US/religious-institutions/davis-llc/1672240370/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-075.png"
    },
    {
      "name": "Lockman Group",
      "url": "./commercials/en-US/religious-institutions/lockman-group/1672240370/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-057.png"
    },
    {
      "name": "Toy Inc",
      "url": "./commercials/en-US/nanotechnology/toy-inc/1672761491641/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-009.png"
    },
    {
      "name": "Schultz Llc",
      "url": "./commercials/en-US/public-policy/schultz-llc/1672761538262/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-036.png"
    },
    {
      "name": "Lueilwitz Inc",
      "url": "./commercials/en-US/chemicals/lueilwitz-inc/1672240370/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-001.png"
    },
    {
      "name": "Towne Hoppe And Keeling",
      "url": "./commercials/en-US/broadcast-media/towne-hoppe-and-keeling/1672761616957/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-033.png"
    },
    {
      "name": "Huels Muller",
      "url": "./commercials/en-US/market-research/huels-muller/1672761605008/commercial.mp3",
      "artist": "Market Research",
      "cover_art_url": "assets/img/krang/krang-radio-055.png"
    },
    {
      "name": "Dickens Towne",
      "url": "./commercials/en-US/pharmaceuticals/dickens-towne/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-006.png"
    },
    {
      "name": "Bartoletti Dubuque",
      "url": "./commercials/en-US/computer-software/bartoletti-dubuque/1672240370/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-031.png"
    },
    {
      "name": "Klocko Kub",
      "url": "./commercials/en-US/building-materials/klocko-kub/1672761970103/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-041.png"
    },
    {
      "name": "Kihn Prohaska And Nikolaus",
      "url": "./commercials/en-US/railroad-manufacture/kihn-prohaska-and-nikolaus/1672240370/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-004.png"
    },
    {
      "name": "Brekke Nicolas And Hoeger",
      "url": "./commercials/en-US/capital-markets/brekke-nicolas-and-hoeger/1672761942811/commercial.mp3",
      "artist": "Capital Markets",
      "cover_art_url": "assets/img/krang/krang-radio-095.png"
    },
    {
      "name": "Runolfsson Rath And Mosciski",
      "url": "./commercials/en-US/media-production/runolfsson-rath-and-mosciski/1672760736476/commercial.mp3",
      "artist": "Media Production",
      "cover_art_url": "assets/img/krang/krang-radio-013.png"
    },
    {
      "name": "Littel Macgyver",
      "url": "./commercials/en-US/program-development/littel-macgyver/1672761137047/commercial.mp3",
      "artist": "Program Development",
      "cover_art_url": "assets/img/krang/krang-radio-010.png"
    },
    {
      "name": "Gusikowski Llc",
      "url": "./commercials/en-US/civic-social-organization/gusikowski-llc/1672240370/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-059.png"
    },
    {
      "name": "Gerlach O Reilly",
      "url": "./commercials/en-US/market-research/gerlach-o-reilly/1672240370/commercial.mp3",
      "artist": "Market Research",
      "cover_art_url": "assets/img/krang/krang-radio-010.png"
    },
    {
      "name": "Hegmann Pagac And Koelpin",
      "url": "./commercials/en-US/furniture/hegmann-pagac-and-koelpin/1672240370/commercial.mp3",
      "artist": "Furniture",
      "cover_art_url": "assets/img/krang/krang-radio-014.png"
    },
    {
      "name": "Volkman Rosenbaum",
      "url": "./commercials/en-US/mining-metals/volkman-rosenbaum/1672760671738/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-041.png"
    },
    {
      "name": "Graham Llc",
      "url": "./commercials/en-US/photography/graham-llc/1672240370/commercial.mp3",
      "artist": "Photography",
      "cover_art_url": "assets/img/krang/krang-radio-038.png"
    },
    {
      "name": "Towne Group",
      "url": "./commercials/en-US/government-relations/towne-group/1672240370/commercial.mp3",
      "artist": "Government Relations",
      "cover_art_url": "assets/img/krang/krang-radio-080.png"
    },
    {
      "name": "Kshlerin And Sons",
      "url": "./commercials/en-US/education-management/kshlerin-and-sons/1672761269541/commercial.mp3",
      "artist": "Education Management",
      "cover_art_url": "assets/img/krang/krang-radio-036.png"
    },
    {
      "name": "Douglas And Sons",
      "url": "./commercials/en-US/think-tanks/douglas-and-sons/1672762158121/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-082.png"
    },
    {
      "name": "Konopelski Cassin And Nitzsche",
      "url": "./commercials/en-US/computer-network-security/konopelski-cassin-and-nitzsche/1672762418883/commercial.mp3",
      "artist": "Computer Network Security",
      "cover_art_url": "assets/img/krang/krang-radio-060.png"
    },
    {
      "name": "Hoppe Cronin And Cronin",
      "url": "./commercials/en-US/alternative-dispute-resolution/hoppe-cronin-and-cronin/1672760914692/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-002.png"
    },
    {
      "name": "Gorczany Turcotte And Kassulke",
      "url": "./commercials/en-US/hospital-health-care/gorczany-turcotte-and-kassulke/1672760887917/commercial.mp3",
      "artist": "Hospital Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-058.png"
    },
    {
      "name": "O Kon Group",
      "url": "./commercials/en-US/libraries/o-kon-group/1672761222069/commercial.mp3",
      "artist": "Libraries",
      "cover_art_url": "assets/img/krang/krang-radio-070.png"
    },
    {
      "name": "Funk Hyatt And Powlowski",
      "url": "./commercials/en-US/religious-institutions/funk-hyatt-and-powlowski/1672240370/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-068.png"
    },
    {
      "name": "O Conner Group",
      "url": "./commercials/en-US/building-materials/o-conner-group/1672761409251/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-075.png"
    },
    {
      "name": "Miller Schuster And Kunde",
      "url": "./commercials/en-US/arts-and-crafts/miller-schuster-and-kunde/1672760907270/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-055.png"
    },
    {
      "name": "Kihn Bechtelar And Rutherford",
      "url": "./commercials/en-US/consumer-electronics/kihn-bechtelar-and-rutherford/1672762319616/commercial.mp3",
      "artist": "Consumer Electronics",
      "cover_art_url": "assets/img/krang/krang-radio-009.png"
    },
    {
      "name": "Collins Larson",
      "url": "./commercials/en-US/public-safety/collins-larson/1672240370/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-019.png"
    },
    {
      "name": "Wilkinson Lockman And Shields",
      "url": "./commercials/en-US/sporting-goods/wilkinson-lockman-and-shields/1672761886400/commercial.mp3",
      "artist": "Sporting Goods",
      "cover_art_url": "assets/img/krang/krang-radio-028.png"
    },
    {
      "name": "Donnelly And Sons",
      "url": "./commercials/en-US/performing-arts/donnelly-and-sons/1672761821788/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-093.png"
    },
    {
      "name": "Mraz Group",
      "url": "./commercials/en-US/nanotechnology/mraz-group/1672240370/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-041.png"
    },
    {
      "name": "Borer Hessel And Bashirian",
      "url": "./commercials/en-US/alternative-dispute-resolution/borer-hessel-and-bashirian/1672761108284/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-085.png"
    },
    {
      "name": "Hessel And Sons",
      "url": "./commercials/en-US/investment-management/hessel-and-sons/1672761420983/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-034.png"
    },
    {
      "name": "Jacobi Klocko And Streich",
      "url": "./commercials/en-US/gambling-casinos/jacobi-klocko-and-streich/1672240370/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-047.png"
    },
    {
      "name": "Larkin Leuschke And Friesen",
      "url": "./commercials/en-US/automotive/larkin-leuschke-and-friesen/1672760823030/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-006.png"
    },
    {
      "name": "Grimes Prosacco And Kertzmann",
      "url": "./commercials/en-US/publishing/grimes-prosacco-and-kertzmann/1672240370/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-093.png"
    },
    {
      "name": "Abshire Vonrueden And Macejkovic",
      "url": "./commercials/en-US/cosmetics/abshire-vonrueden-and-macejkovic/1672761335567/commercial.mp3",
      "artist": "Cosmetics",
      "cover_art_url": "assets/img/krang/krang-radio-088.png"
    },
    {
      "name": "Bernier Group",
      "url": "./commercials/en-US/business-supplies-and-equipment/bernier-group/1672761172740/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-056.png"
    },
    {
      "name": "Pfannerstill Lueilwitz",
      "url": "./commercials/en-US/management-consulting/pfannerstill-lueilwitz/1672761267599/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-085.png"
    },
    {
      "name": "Terry And Sons",
      "url": "./commercials/en-US/professional-training-coaching/terry-and-sons/1672761225976/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-006.png"
    },
    {
      "name": "Bartoletti Group",
      "url": "./commercials/en-US/chemicals/bartoletti-group/1672760868520/commercial.mp3",
      "artist": "Chemicals",
      "cover_art_url": "assets/img/krang/krang-radio-016.png"
    },
    {
      "name": "Deckow Group",
      "url": "./commercials/en-US/executive-office/deckow-group/1672240370/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-065.png"
    },
    {
      "name": "Cummerata Spencer And Klein",
      "url": "./commercials/en-US/computer-software/cummerata-spencer-and-klein/1672760889227/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-067.png"
    },
    {
      "name": "Ankunding Marks",
      "url": "./commercials/en-US/government-administration/ankunding-marks/1672761128853/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-018.png"
    },
    {
      "name": "Ledner Mcglynn And Predovic",
      "url": "./commercials/en-US/public-policy/ledner-mcglynn-and-predovic/1672762182963/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-034.png"
    },
    {
      "name": "Waters Sauer And Reinger",
      "url": "./commercials/en-US/consumer-goods/waters-sauer-and-reinger/1672240370/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-014.png"
    },
    {
      "name": "Wyman Group",
      "url": "./commercials/en-US/food-production/wyman-group/1672240370/commercial.mp3",
      "artist": "Food Production",
      "cover_art_url": "assets/img/krang/krang-radio-065.png"
    },
    {
      "name": "Altenwerth And Sons",
      "url": "./commercials/en-US/pharmaceuticals/altenwerth-and-sons/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-055.png"
    },
    {
      "name": "Rempel Beer And Kilback",
      "url": "./commercials/en-US/computer-games/rempel-beer-and-kilback/1672240370/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-011.png"
    },
    {
      "name": "Friesen Runolfsson",
      "url": "./commercials/en-US/gambling-casinos/friesen-runolfsson/1672240370/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-032.png"
    },
    {
      "name": "Torphy Mertz",
      "url": "./commercials/en-US/logistics-and-supply-chain/torphy-mertz/1672240370/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-073.png"
    },
    {
      "name": "Hill Howe",
      "url": "./commercials/en-US/marketing-and-advertising/hill-howe/1672760697560/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-082.png"
    },
    {
      "name": "Powlowski Llc",
      "url": "./commercials/en-US/mining-metals/powlowski-llc/1672761894332/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-051.png"
    },
    {
      "name": "Sawayn Skiles And Jacobi",
      "url": "./commercials/en-US/think-tanks/sawayn-skiles-and-jacobi/1672240370/commercial.mp3",
      "artist": "Think Tanks",
      "cover_art_url": "assets/img/krang/krang-radio-004.png"
    },
    {
      "name": "Ruecker And Sons",
      "url": "./commercials/en-US/venture-capital-private-equity/ruecker-and-sons/1672761350556/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-089.png"
    },
    {
      "name": "Reinger Strosin",
      "url": "./commercials/en-US/architecture-planning/reinger-strosin/1672240370/commercial.mp3",
      "artist": "Architecture Planning",
      "cover_art_url": "assets/img/krang/krang-radio-024.png"
    },
    {
      "name": "Runolfsson Jast",
      "url": "./commercials/en-US/computer-games/runolfsson-jast/1672240370/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-045.png"
    },
    {
      "name": "Beahan Hahn And Reichel",
      "url": "./commercials/en-US/financial-services/beahan-hahn-and-reichel/1672240370/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-083.png"
    },
    {
      "name": "Graham Grimes",
      "url": "./commercials/en-US/gambling-casinos/graham-grimes/1672760590848/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-033.png"
    },
    {
      "name": "Moen Gleason",
      "url": "./commercials/en-US/religious-institutions/moen-gleason/1672240370/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-037.png"
    },
    {
      "name": "Kertzmann White And Hilll",
      "url": "./commercials/en-US/consumer-services/kertzmann-white-and-hilll/1672240370/commercial.mp3",
      "artist": "Consumer Services",
      "cover_art_url": "assets/img/krang/krang-radio-080.png"
    },
    {
      "name": "Hudson Group",
      "url": "./commercials/en-US/broadcast-media/hudson-group/1672760922270/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-016.png"
    },
    {
      "name": "Balistreri Llc",
      "url": "./commercials/en-US/human-resources/balistreri-llc/1672240370/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-064.png"
    },
    {
      "name": "Greenfelder Zemlak",
      "url": "./commercials/en-US/computer-networking/greenfelder-zemlak/1672240370/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-092.png"
    },
    {
      "name": "Morissette Rolfson",
      "url": "./commercials/en-US/ranching/morissette-rolfson/1672240370/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-077.png"
    },
    {
      "name": "Bins Hansen",
      "url": "./commercials/en-US/gambling-casinos/bins-hansen/1672240370/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-003.png"
    },
    {
      "name": "Wyman Reichel",
      "url": "./commercials/en-US/biotechnology/wyman-reichel/1672240370/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-051.png"
    },
    {
      "name": "Hermann Beier",
      "url": "./commercials/en-US/computer-hardware/hermann-beier/1672240370/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-081.png"
    },
    {
      "name": "Schowalter Gutmann",
      "url": "./commercials/en-US/executive-office/schowalter-gutmann/1672761748889/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-053.png"
    },
    {
      "name": "Crona Rosenbaum And Koepp",
      "url": "./commercials/en-US/farming/crona-rosenbaum-and-koepp/1672240370/commercial.mp3",
      "artist": "Farming",
      "cover_art_url": "assets/img/krang/krang-radio-012.png"
    },
    {
      "name": "Rosenbaum Llc",
      "url": "./commercials/en-US/professional-training-coaching/rosenbaum-llc/1672761833778/commercial.mp3",
      "artist": "Professional Training Coaching",
      "cover_art_url": "assets/img/krang/krang-radio-054.png"
    },
    {
      "name": "Dooley Konopelski And Larkin",
      "url": "./commercials/en-US/warehousing/dooley-konopelski-and-larkin/1672761752100/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-006.png"
    },
    {
      "name": "Bednar Hills",
      "url": "./commercials/en-US/dairy/bednar-hills/1672761149709/commercial.mp3",
      "artist": "Dairy",
      "cover_art_url": "assets/img/krang/krang-radio-015.png"
    },
    {
      "name": "Bruen Ziemann And Graham",
      "url": "./commercials/en-US/law-practice/bruen-ziemann-and-graham/1672761187892/commercial.mp3",
      "artist": "Law Practice",
      "cover_art_url": "assets/img/krang/krang-radio-004.png"
    },
    {
      "name": "Ankunding Okuneva",
      "url": "./commercials/en-US/graphic-design/ankunding-okuneva/1672760839256/commercial.mp3",
      "artist": "Graphic Design",
      "cover_art_url": "assets/img/krang/krang-radio-077.png"
    },
    {
      "name": "Mante Ruecker And Hodkiewicz",
      "url": "./commercials/en-US/arts-and-crafts/mante-ruecker-and-hodkiewicz/1672761952373/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-032.png"
    },
    {
      "name": "Blick Hilpert And Wisozk",
      "url": "./commercials/en-US/import-and-export/blick-hilpert-and-wisozk/1672760646864/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-087.png"
    },
    {
      "name": "Mcdermott Inc",
      "url": "./commercials/en-US/accounting/mcdermott-inc/1672760799333/commercial.mp3",
      "artist": "Accounting",
      "cover_art_url": "assets/img/krang/krang-radio-076.png"
    },
    {
      "name": "Mraz Denesik And Waters",
      "url": "./commercials/en-US/judiciary/mraz-denesik-and-waters/1672240370/commercial.mp3",
      "artist": "Judiciary",
      "cover_art_url": "assets/img/krang/krang-radio-048.png"
    },
    {
      "name": "Waters Beer And Ferry",
      "url": "./commercials/en-US/medical-devices/waters-beer-and-ferry/1672760983015/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-068.png"
    },
    {
      "name": "Witting Roob",
      "url": "./commercials/en-US/human-resources/witting-roob/1672240370/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-002.png"
    },
    {
      "name": "Pfannerstill Kertzmann And Hilpert",
      "url": "./commercials/en-US/insurance/pfannerstill-kertzmann-and-hilpert/1672240370/commercial.mp3",
      "artist": "Insurance",
      "cover_art_url": "assets/img/krang/krang-radio-084.png"
    },
    {
      "name": "Rosenbaum Group",
      "url": "./commercials/en-US/legal-services/rosenbaum-group/1672761391629/commercial.mp3",
      "artist": "Legal Services",
      "cover_art_url": "assets/img/krang/krang-radio-088.png"
    },
    {
      "name": "Crooks Inc",
      "url": "./commercials/en-US/business-supplies-and-equipment/crooks-inc/1672240370/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-022.png"
    },
    {
      "name": "Moore And Sons",
      "url": "./commercials/en-US/sports/moore-and-sons/1672240370/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-084.png"
    },
    {
      "name": "Frami Group",
      "url": "./commercials/en-US/machinery/frami-group/1672240370/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-021.png"
    },
    {
      "name": "Monahan Gleichner",
      "url": "./commercials/en-US/political-organization/monahan-gleichner/1672761669627/commercial.mp3",
      "artist": "Political Organization",
      "cover_art_url": "assets/img/krang/krang-radio-010.png"
    },
    {
      "name": "Macejkovic Erdman",
      "url": "./commercials/en-US/sports/macejkovic-erdman/1672760872357/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-067.png"
    },
    {
      "name": "Tremblay Schoen",
      "url": "./commercials/en-US/events-services/tremblay-schoen/1672240370/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-098.png"
    },
    {
      "name": "Emmerich Wolf And Blick",
      "url": "./commercials/en-US/plastics/emmerich-wolf-and-blick/1672761565695/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-065.png"
    },
    {
      "name": "Ankunding Mills",
      "url": "./commercials/en-US/leisure-travel-tourism/ankunding-mills/1672240370/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-034.png"
    },
    {
      "name": "Jaskolski O Reilly And Lowe",
      "url": "./commercials/en-US/airlines-aviation/jaskolski-o-reilly-and-lowe/1672761698959/commercial.mp3",
      "artist": "Airlines Aviation",
      "cover_art_url": "assets/img/krang/krang-radio-002.png"
    },
    {
      "name": "Schuster Quitzon",
      "url": "./commercials/en-US/semiconductors/schuster-quitzon/1672761611566/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-048.png"
    },
    {
      "name": "Fadel Kihn And Jones",
      "url": "./commercials/en-US/human-resources/fadel-kihn-and-jones/1672761325043/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-097.png"
    },
    {
      "name": "Cruickshank Jenkins",
      "url": "./commercials/en-US/shipbuilding/cruickshank-jenkins/1672240370/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-014.png"
    },
    {
      "name": "Runolfsson And Sons",
      "url": "./commercials/en-US/design/runolfsson-and-sons/1672240370/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-083.png"
    },
    {
      "name": "Larson Fadel",
      "url": "./commercials/en-US/executive-office/larson-fadel/1672762297099/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-059.png"
    },
    {
      "name": "Fisher Llc",
      "url": "./commercials/en-US/commercial-real-estate/fisher-llc/1672762211201/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-039.png"
    },
    {
      "name": "Sanford Raynor",
      "url": "./commercials/en-US/online-media/sanford-raynor/1672240370/commercial.mp3",
      "artist": "Online Media",
      "cover_art_url": "assets/img/krang/krang-radio-086.png"
    },
    {
      "name": "Mcdermott Inc",
      "url": "./commercials/en-US/wholesale/mcdermott-inc/1672240370/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-010.png"
    },
    {
      "name": "Langosh Johnston",
      "url": "./commercials/en-US/research/langosh-johnston/1672761265786/commercial.mp3",
      "artist": "Research",
      "cover_art_url": "assets/img/krang/krang-radio-036.png"
    },
    {
      "name": "Crist Collins And O Hara",
      "url": "./commercials/en-US/arts-and-crafts/crist-collins-and-o-hara/1672761055195/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-018.png"
    },
    {
      "name": "Marvin Monahan And Kessler",
      "url": "./commercials/en-US/publishing/marvin-monahan-and-kessler/1672761072290/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-055.png"
    },
    {
      "name": "White Carroll And Swaniawski",
      "url": "./commercials/en-US/wireless/white-carroll-and-swaniawski/1672760828211/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-017.png"
    },
    {
      "name": "Treutel Inc",
      "url": "./commercials/en-US/judiciary/treutel-inc/1672761692747/commercial.mp3",
      "artist": "Judiciary",
      "cover_art_url": "assets/img/krang/krang-radio-035.png"
    },
    {
      "name": "Jakubowski Llc",
      "url": "./commercials/en-US/oil-energy/jakubowski-llc/1672761113235/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-073.png"
    },
    {
      "name": "Morar Toy",
      "url": "./commercials/en-US/health-wellness-and-fitness/morar-toy/1672240370/commercial.mp3",
      "artist": "Health Wellness And Fitness",
      "cover_art_url": "assets/img/krang/krang-radio-027.png"
    },
    {
      "name": "Watsica Llc",
      "url": "./commercials/en-US/translation-and-localization/watsica-llc/1672240370/commercial.mp3",
      "artist": "Translation And Localization",
      "cover_art_url": "assets/img/krang/krang-radio-003.png"
    },
    {
      "name": "Schimmel Kilback And Ryan",
      "url": "./commercials/en-US/wine-and-spirits/schimmel-kilback-and-ryan/1672762014656/commercial.mp3",
      "artist": "Wine And Spirits",
      "cover_art_url": "assets/img/krang/krang-radio-056.png"
    },
    {
      "name": "Murray Hintz",
      "url": "./commercials/en-US/semiconductors/murray-hintz/1672240370/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-018.png"
    },
    {
      "name": "Kuhn Spinka And O Keefe",
      "url": "./commercials/en-US/staffing-and-recruiting/kuhn-spinka-and-o-keefe/1672240370/commercial.mp3",
      "artist": "Staffing And Recruiting",
      "cover_art_url": "assets/img/krang/krang-radio-005.png"
    },
    {
      "name": "Lubowitz Llc",
      "url": "./commercials/en-US/design/lubowitz-llc/1672240370/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-095.png"
    },
    {
      "name": "Feest Inc",
      "url": "./commercials/en-US/commercial-real-estate/feest-inc/1672240370/commercial.mp3",
      "artist": "Commercial Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-070.png"
    },
    {
      "name": "Dooley Schultz",
      "url": "./commercials/en-US/supermarkets/dooley-schultz/1672240370/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-012.png"
    },
    {
      "name": "Cummings Parisian And Swift",
      "url": "./commercials/en-US/supermarkets/cummings-parisian-and-swift/1672761153691/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-018.png"
    },
    {
      "name": "Emmerich Beatty",
      "url": "./commercials/en-US/pharmaceuticals/emmerich-beatty/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-030.png"
    },
    {
      "name": "Kozey And Sons",
      "url": "./commercials/en-US/hospitality/kozey-and-sons/1672240370/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-026.png"
    },
    {
      "name": "Kovacek Bergnaum",
      "url": "./commercials/en-US/telecommunications/kovacek-bergnaum/1672240370/commercial.mp3",
      "artist": "Telecommunications",
      "cover_art_url": "assets/img/krang/krang-radio-098.png"
    },
    {
      "name": "Grimes Inc",
      "url": "./commercials/en-US/broadcast-media/grimes-inc/1672240370/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-097.png"
    },
    {
      "name": "Renner Kessler And Mayert",
      "url": "./commercials/en-US/banking/renner-kessler-and-mayert/1672761363277/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-050.png"
    },
    {
      "name": "Feil Kulas And Ledner",
      "url": "./commercials/en-US/farming/feil-kulas-and-ledner/1672760796927/commercial.mp3",
      "artist": "Farming",
      "cover_art_url": "assets/img/krang/krang-radio-035.png"
    },
    {
      "name": "Buckridge Mayer And Donnelly",
      "url": "./commercials/en-US/military/buckridge-mayer-and-donnelly/1672762340056/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-087.png"
    },
    {
      "name": "Turcotte Roberts And Rolfson",
      "url": "./commercials/en-US/security-and-investigations/turcotte-roberts-and-rolfson/1672240370/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-031.png"
    },
    {
      "name": "Crooks Wisoky",
      "url": "./commercials/en-US/investment-management/crooks-wisoky/1672760969979/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-039.png"
    },
    {
      "name": "Tremblay Llc",
      "url": "./commercials/en-US/graphic-design/tremblay-llc/1672240370/commercial.mp3",
      "artist": "Graphic Design",
      "cover_art_url": "assets/img/krang/krang-radio-056.png"
    },
    {
      "name": "Koelpin Rogahn And Anderson",
      "url": "./commercials/en-US/civil-engineering/koelpin-rogahn-and-anderson/1672761586312/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-092.png"
    },
    {
      "name": "Gislason Zemlak",
      "url": "./commercials/en-US/human-resources/gislason-zemlak/1672240370/commercial.mp3",
      "artist": "Human Resources",
      "cover_art_url": "assets/img/krang/krang-radio-053.png"
    },
    {
      "name": "Lesch Romaguera And Senger",
      "url": "./commercials/en-US/consumer-services/lesch-romaguera-and-senger/1672240370/commercial.mp3",
      "artist": "Consumer Services",
      "cover_art_url": "assets/img/krang/krang-radio-048.png"
    },
    {
      "name": "Lueilwitz O Keefe",
      "url": "./commercials/en-US/libraries/lueilwitz-o-keefe/1672240370/commercial.mp3",
      "artist": "Libraries",
      "cover_art_url": "assets/img/krang/krang-radio-087.png"
    },
    {
      "name": "Feeney Inc",
      "url": "./commercials/en-US/facilities-services/feeney-inc/1672240370/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-059.png"
    },
    {
      "name": "Jacobson Yost",
      "url": "./commercials/en-US/medical-devices/jacobson-yost/1672240370/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-084.png"
    },
    {
      "name": "Glover Block And Johnson",
      "url": "./commercials/en-US/motion-pictures-and-film/glover-block-and-johnson/1672761843821/commercial.mp3",
      "artist": "Motion Pictures And Film",
      "cover_art_url": "assets/img/krang/krang-radio-068.png"
    },
    {
      "name": "Kertzmann Inc",
      "url": "./commercials/en-US/nanotechnology/kertzmann-inc/1672240370/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-001.png"
    },
    {
      "name": "Mckenzie Group",
      "url": "./commercials/en-US/construction/mckenzie-group/1672762405339/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-044.png"
    },
    {
      "name": "Goodwin Morissette",
      "url": "./commercials/en-US/medical-practice/goodwin-morissette/1672761918716/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-063.png"
    },
    {
      "name": "Barton Mcclure And Jacobson",
      "url": "./commercials/en-US/wholesale/barton-mcclure-and-jacobson/1672761987940/commercial.mp3",
      "artist": "Wholesale",
      "cover_art_url": "assets/img/krang/krang-radio-068.png"
    },
    {
      "name": "Muller Jerde",
      "url": "./commercials/en-US/government-relations/muller-jerde/1672762313971/commercial.mp3",
      "artist": "Government Relations",
      "cover_art_url": "assets/img/krang/krang-radio-084.png"
    },
    {
      "name": "Leffler Inc",
      "url": "./commercials/en-US/warehousing/leffler-inc/1672240370/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-003.png"
    },
    {
      "name": "Beatty Group",
      "url": "./commercials/en-US/fine-art/beatty-group/1672240370/commercial.mp3",
      "artist": "Fine Art",
      "cover_art_url": "assets/img/krang/krang-radio-033.png"
    },
    {
      "name": "Block And Sons",
      "url": "./commercials/en-US/renewables-environment/block-and-sons/1672240370/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-069.png"
    },
    {
      "name": "Kutch Schiller And Schoen",
      "url": "./commercials/en-US/renewables-environment/kutch-schiller-and-schoen/1672761710891/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-050.png"
    },
    {
      "name": "Johnson Langosh",
      "url": "./commercials/en-US/industrial-automation/johnson-langosh/1672760944070/commercial.mp3",
      "artist": "Industrial Automation",
      "cover_art_url": "assets/img/krang/krang-radio-044.png"
    },
    {
      "name": "Deckow Kessler",
      "url": "./commercials/en-US/public-safety/deckow-kessler/1672760667742/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-099.png"
    },
    {
      "name": "Bradtke Schimmel",
      "url": "./commercials/en-US/security-and-investigations/bradtke-schimmel/1672761836321/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-089.png"
    },
    {
      "name": "Sporer Monahan",
      "url": "./commercials/en-US/staffing-and-recruiting/sporer-monahan/1672240370/commercial.mp3",
      "artist": "Staffing And Recruiting",
      "cover_art_url": "assets/img/krang/krang-radio-010.png"
    },
    {
      "name": "Miller Schneider",
      "url": "./commercials/en-US/farming/miller-schneider/1672240370/commercial.mp3",
      "artist": "Farming",
      "cover_art_url": "assets/img/krang/krang-radio-027.png"
    },
    {
      "name": "Runte Emard And Fisher",
      "url": "./commercials/en-US/ranching/runte-emard-and-fisher/1672240370/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-079.png"
    },
    {
      "name": "Bruen Inc",
      "url": "./commercials/en-US/fishery/bruen-inc/1672761494213/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-036.png"
    },
    {
      "name": "Grimes Jacobs",
      "url": "./commercials/en-US/oil-energy/grimes-jacobs/1672761261107/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-087.png"
    },
    {
      "name": "Kuhlman Llc",
      "url": "./commercials/en-US/medical-practice/kuhlman-llc/1672762193820/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-054.png"
    },
    {
      "name": "Nienow Kutch And Shields",
      "url": "./commercials/en-US/internet/nienow-kutch-and-shields/1672240370/commercial.mp3",
      "artist": "Internet",
      "cover_art_url": "assets/img/krang/krang-radio-085.png"
    },
    {
      "name": "Wuckert Fahey And Lockman",
      "url": "./commercials/en-US/alternative-medicine/wuckert-fahey-and-lockman/1672240370/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-097.png"
    },
    {
      "name": "Gorczany Inc",
      "url": "./commercials/en-US/industrial-automation/gorczany-inc/1672240370/commercial.mp3",
      "artist": "Industrial Automation",
      "cover_art_url": "assets/img/krang/krang-radio-005.png"
    },
    {
      "name": "O Conner Nader And Glover",
      "url": "./commercials/en-US/banking/o-conner-nader-and-glover/1672761236011/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-076.png"
    },
    {
      "name": "Gorczany Keebler And Langosh",
      "url": "./commercials/en-US/package-freight-delivery/gorczany-keebler-and-langosh/1672761025768/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-054.png"
    },
    {
      "name": "Von Group",
      "url": "./commercials/en-US/luxury-goods-jewelry/von-group/1672762164766/commercial.mp3",
      "artist": "Luxury Goods Jewelry",
      "cover_art_url": "assets/img/krang/krang-radio-015.png"
    },
    {
      "name": "Jaskolski Group",
      "url": "./commercials/en-US/management-consulting/jaskolski-group/1672762220345/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-012.png"
    },
    {
      "name": "Kling Inc",
      "url": "./commercials/en-US/higher-education/kling-inc/1672240370/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-019.png"
    },
    {
      "name": "Johnson Emmerich And Schinner",
      "url": "./commercials/en-US/computer-networking/johnson-emmerich-and-schinner/1672762317196/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-083.png"
    },
    {
      "name": "Conroy Collins And West",
      "url": "./commercials/en-US/security-and-investigations/conroy-collins-and-west/1672240370/commercial.mp3",
      "artist": "Security And Investigations",
      "cover_art_url": "assets/img/krang/krang-radio-098.png"
    },
    {
      "name": "Homenick Gleason And Hansen",
      "url": "./commercials/en-US/maritime/homenick-gleason-and-hansen/1672762141805/commercial.mp3",
      "artist": "Maritime",
      "cover_art_url": "assets/img/krang/krang-radio-027.png"
    },
    {
      "name": "Skiles Luettgen And Walter",
      "url": "./commercials/en-US/individual-family-services/skiles-luettgen-and-walter/1672240370/commercial.mp3",
      "artist": "Individual Family Services",
      "cover_art_url": "assets/img/krang/krang-radio-016.png"
    },
    {
      "name": "Ziemann Armstrong",
      "url": "./commercials/en-US/tobacco/ziemann-armstrong/1672761830594/commercial.mp3",
      "artist": "Tobacco",
      "cover_art_url": "assets/img/krang/krang-radio-035.png"
    },
    {
      "name": "Buckridge Hoeger And Balistreri",
      "url": "./commercials/en-US/financial-services/buckridge-hoeger-and-balistreri/1672240370/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-015.png"
    },
    {
      "name": "Jones Reichel And Hartmann",
      "url": "./commercials/en-US/pharmaceuticals/jones-reichel-and-hartmann/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-070.png"
    },
    {
      "name": "Kris Schmeler And Mante",
      "url": "./commercials/en-US/defense-space/kris-schmeler-and-mante/1672240370/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-049.png"
    },
    {
      "name": "Maggio Llc",
      "url": "./commercials/en-US/legal-services/maggio-llc/1672761294760/commercial.mp3",
      "artist": "Legal Services",
      "cover_art_url": "assets/img/krang/krang-radio-036.png"
    },
    {
      "name": "Hoppe Morissette",
      "url": "./commercials/en-US/music/hoppe-morissette/1672761683235/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-016.png"
    },
    {
      "name": "Bergnaum Huel And Ernser",
      "url": "./commercials/en-US/education-management/bergnaum-huel-and-ernser/1672240370/commercial.mp3",
      "artist": "Education Management",
      "cover_art_url": "assets/img/krang/krang-radio-064.png"
    },
    {
      "name": "Schmitt Gibson",
      "url": "./commercials/en-US/arts-and-crafts/schmitt-gibson/1672760686159/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-038.png"
    },
    {
      "name": "Braun Dooley",
      "url": "./commercials/en-US/warehousing/braun-dooley/1672760718056/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-051.png"
    },
    {
      "name": "Jerde Schowalter And Altenwerth",
      "url": "./commercials/en-US/broadcast-media/jerde-schowalter-and-altenwerth/1672240370/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-009.png"
    },
    {
      "name": "Heaney Inc",
      "url": "./commercials/en-US/defense-space/heaney-inc/1672761636833/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-027.png"
    },
    {
      "name": "Feeney Altenwerth",
      "url": "./commercials/en-US/marketing-and-advertising/feeney-altenwerth/1672761046536/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-008.png"
    },
    {
      "name": "Johns Johnson",
      "url": "./commercials/en-US/civic-social-organization/johns-johnson/1672761166156/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-008.png"
    },
    {
      "name": "Hintz And Sons",
      "url": "./commercials/en-US/publishing/hintz-and-sons/1672761971751/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-024.png"
    },
    {
      "name": "Cole Fisher",
      "url": "./commercials/en-US/veterinary/cole-fisher/1672761040708/commercial.mp3",
      "artist": "Veterinary",
      "cover_art_url": "assets/img/krang/krang-radio-089.png"
    },
    {
      "name": "Sauer Mcglynn And Mosciski",
      "url": "./commercials/en-US/public-safety/sauer-mcglynn-and-mosciski/1672240370/commercial.mp3",
      "artist": "Public Safety",
      "cover_art_url": "assets/img/krang/krang-radio-008.png"
    },
    {
      "name": "Tromp Ledner And Lang",
      "url": "./commercials/en-US/arts-and-crafts/tromp-ledner-and-lang/1672240370/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-040.png"
    },
    {
      "name": "Oberbrunner Llc",
      "url": "./commercials/en-US/sports/oberbrunner-llc/1672240370/commercial.mp3",
      "artist": "Sports",
      "cover_art_url": "assets/img/krang/krang-radio-083.png"
    },
    {
      "name": "Hermann Kris",
      "url": "./commercials/en-US/railroad-manufacture/hermann-kris/1672761438940/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-047.png"
    },
    {
      "name": "Pfeffer Kuphal",
      "url": "./commercials/en-US/public-policy/pfeffer-kuphal/1672762381597/commercial.mp3",
      "artist": "Public Policy",
      "cover_art_url": "assets/img/krang/krang-radio-064.png"
    },
    {
      "name": "Cronin Walsh",
      "url": "./commercials/en-US/law-enforcement/cronin-walsh/1672762434077/commercial.mp3",
      "artist": "Law Enforcement",
      "cover_art_url": "assets/img/krang/krang-radio-082.png"
    },
    {
      "name": "Murray And Sons",
      "url": "./commercials/en-US/wireless/murray-and-sons/1672240370/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-035.png"
    },
    {
      "name": "Pacocha Smith And Hudson",
      "url": "./commercials/en-US/e-learning/pacocha-smith-and-hudson/1672760612523/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-043.png"
    },
    {
      "name": "Hane And Sons",
      "url": "./commercials/en-US/ranching/hane-and-sons/1672761772689/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-087.png"
    },
    {
      "name": "Lubowitz And Sons",
      "url": "./commercials/en-US/oil-energy/lubowitz-and-sons/1672761723657/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-052.png"
    },
    {
      "name": "Carroll Brown And Lowe",
      "url": "./commercials/en-US/building-materials/carroll-brown-and-lowe/1672761857480/commercial.mp3",
      "artist": "Building Materials",
      "cover_art_url": "assets/img/krang/krang-radio-092.png"
    },
    {
      "name": "Goyette Dach And Luettgen",
      "url": "./commercials/en-US/wireless/goyette-dach-and-luettgen/1672762298555/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-034.png"
    },
    {
      "name": "Zboncak And Sons",
      "url": "./commercials/en-US/semiconductors/zboncak-and-sons/1672240370/commercial.mp3",
      "artist": "Semiconductors",
      "cover_art_url": "assets/img/krang/krang-radio-078.png"
    },
    {
      "name": "Hoeger Group",
      "url": "./commercials/en-US/import-and-export/hoeger-group/1672240370/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-036.png"
    },
    {
      "name": "Mosciski Weimann",
      "url": "./commercials/en-US/animation/mosciski-weimann/1672240370/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-041.png"
    },
    {
      "name": "Mills Inc",
      "url": "./commercials/en-US/apparel-fashion/mills-inc/1672761569101/commercial.mp3",
      "artist": "Apparel Fashion",
      "cover_art_url": "assets/img/krang/krang-radio-057.png"
    },
    {
      "name": "Cummerata Schroeder",
      "url": "./commercials/en-US/computer-networking/cummerata-schroeder/1672240370/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-065.png"
    },
    {
      "name": "Rice Llc",
      "url": "./commercials/en-US/computer-games/rice-llc/1672240370/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-050.png"
    },
    {
      "name": "Cartwright Group",
      "url": "./commercials/en-US/civic-social-organization/cartwright-group/1672240370/commercial.mp3",
      "artist": "Civic Social Organization",
      "cover_art_url": "assets/img/krang/krang-radio-063.png"
    },
    {
      "name": "Maggio Group",
      "url": "./commercials/en-US/executive-office/maggio-group/1672240370/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-094.png"
    },
    {
      "name": "Haag Group",
      "url": "./commercials/en-US/railroad-manufacture/haag-group/1672240370/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-051.png"
    },
    {
      "name": "Walsh Ferry",
      "url": "./commercials/en-US/animation/walsh-ferry/1672760655286/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-040.png"
    },
    {
      "name": "Predovic And Sons",
      "url": "./commercials/en-US/motion-pictures-and-film/predovic-and-sons/1672761994096/commercial.mp3",
      "artist": "Motion Pictures And Film",
      "cover_art_url": "assets/img/krang/krang-radio-083.png"
    },
    {
      "name": "Crooks Llc",
      "url": "./commercials/en-US/individual-family-services/crooks-llc/1672240370/commercial.mp3",
      "artist": "Individual Family Services",
      "cover_art_url": "assets/img/krang/krang-radio-010.png"
    },
    {
      "name": "Walter Group",
      "url": "./commercials/en-US/performing-arts/walter-group/1672240370/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-010.png"
    },
    {
      "name": "Price And Sons",
      "url": "./commercials/en-US/architecture-planning/price-and-sons/1672761902611/commercial.mp3",
      "artist": "Architecture Planning",
      "cover_art_url": "assets/img/krang/krang-radio-050.png"
    },
    {
      "name": "Funk Llc",
      "url": "./commercials/en-US/ranching/funk-llc/1672760772342/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-056.png"
    },
    {
      "name": "Conn Tremblay And Luettgen",
      "url": "./commercials/en-US/arts-and-crafts/conn-tremblay-and-luettgen/1672761206424/commercial.mp3",
      "artist": "Arts And Crafts",
      "cover_art_url": "assets/img/krang/krang-radio-072.png"
    },
    {
      "name": "Murray Llc",
      "url": "./commercials/en-US/apparel-fashion/murray-llc/1672240370/commercial.mp3",
      "artist": "Apparel Fashion",
      "cover_art_url": "assets/img/krang/krang-radio-045.png"
    },
    {
      "name": "Larkin Thompson And Davis",
      "url": "./commercials/en-US/restaurants/larkin-thompson-and-davis/1672240370/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-032.png"
    },
    {
      "name": "Cartwright Inc",
      "url": "./commercials/en-US/logistics-and-supply-chain/cartwright-inc/1672240370/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-049.png"
    },
    {
      "name": "Klein Dickens And Schoen",
      "url": "./commercials/en-US/electrical-electronic-manufacturing/klein-dickens-and-schoen/1672760712963/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-013.png"
    },
    {
      "name": "Mcclure Konopelski And Jaskolski",
      "url": "./commercials/en-US/automotive/mcclure-konopelski-and-jaskolski/1672240370/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-027.png"
    },
    {
      "name": "O Kon Stanton And Williamson",
      "url": "./commercials/en-US/warehousing/o-kon-stanton-and-williamson/1672761642560/commercial.mp3",
      "artist": "Warehousing",
      "cover_art_url": "assets/img/krang/krang-radio-068.png"
    },
    {
      "name": "Mcglynn Inc",
      "url": "./commercials/en-US/nonprofit-organization-management/mcglynn-inc/1672761851400/commercial.mp3",
      "artist": "Nonprofit Organization Management",
      "cover_art_url": "assets/img/krang/krang-radio-067.png"
    },
    {
      "name": "Armstrong Feest",
      "url": "./commercials/en-US/import-and-export/armstrong-feest/1672761881481/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-052.png"
    },
    {
      "name": "Schuppe Hegmann And Blick",
      "url": "./commercials/en-US/banking/schuppe-hegmann-and-blick/1672761418819/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-017.png"
    },
    {
      "name": "Kuhlman Inc",
      "url": "./commercials/en-US/mining-metals/kuhlman-inc/1672761588289/commercial.mp3",
      "artist": "Mining Metals",
      "cover_art_url": "assets/img/krang/krang-radio-019.png"
    },
    {
      "name": "Wisoky And Sons",
      "url": "./commercials/en-US/construction/wisoky-and-sons/1672760904230/commercial.mp3",
      "artist": "Construction",
      "cover_art_url": "assets/img/krang/krang-radio-032.png"
    },
    {
      "name": "Wunsch Bruen And Mitchell",
      "url": "./commercials/en-US/alternative-dispute-resolution/wunsch-bruen-and-mitchell/1672761932577/commercial.mp3",
      "artist": "Alternative Dispute Resolution",
      "cover_art_url": "assets/img/krang/krang-radio-070.png"
    },
    {
      "name": "Green Inc",
      "url": "./commercials/en-US/venture-capital-private-equity/green-inc/1672762412283/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-006.png"
    },
    {
      "name": "Waters Group",
      "url": "./commercials/en-US/gambling-casinos/waters-group/1672761181966/commercial.mp3",
      "artist": "Gambling Casinos",
      "cover_art_url": "assets/img/krang/krang-radio-049.png"
    },
    {
      "name": "Reichert Inc",
      "url": "./commercials/en-US/financial-services/reichert-inc/1672240370/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-084.png"
    },
    {
      "name": "Lynch And Sons",
      "url": "./commercials/en-US/import-and-export/lynch-and-sons/1672240370/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-054.png"
    },
    {
      "name": "Flatley Donnelly",
      "url": "./commercials/en-US/facilities-services/flatley-donnelly/1672760990525/commercial.mp3",
      "artist": "Facilities Services",
      "cover_art_url": "assets/img/krang/krang-radio-006.png"
    },
    {
      "name": "Kuhlman Nader And Schumm",
      "url": "./commercials/en-US/venture-capital-private-equity/kuhlman-nader-and-schumm/1672761213187/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-057.png"
    },
    {
      "name": "Gulgowski Smith",
      "url": "./commercials/en-US/management-consulting/gulgowski-smith/1672240370/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-098.png"
    },
    {
      "name": "Koelpin Reinger",
      "url": "./commercials/en-US/philanthropy/koelpin-reinger/1672240370/commercial.mp3",
      "artist": "Philanthropy",
      "cover_art_url": "assets/img/krang/krang-radio-021.png"
    },
    {
      "name": "Kreiger Champlin And Aufderhar",
      "url": "./commercials/en-US/executive-office/kreiger-champlin-and-aufderhar/1672240370/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-011.png"
    },
    {
      "name": "Lockman And Sons",
      "url": "./commercials/en-US/veterinary/lockman-and-sons/1672240370/commercial.mp3",
      "artist": "Veterinary",
      "cover_art_url": "assets/img/krang/krang-radio-084.png"
    },
    {
      "name": "Marquardt Abernathy And Metz",
      "url": "./commercials/en-US/supermarkets/marquardt-abernathy-and-metz/1672761230755/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-006.png"
    },
    {
      "name": "Marks Wiza And Orn",
      "url": "./commercials/en-US/electrical-electronic-manufacturing/marks-wiza-and-orn/1672761245782/commercial.mp3",
      "artist": "Electrical Electronic Manufacturing",
      "cover_art_url": "assets/img/krang/krang-radio-053.png"
    },
    {
      "name": "Romaguera Inc",
      "url": "./commercials/en-US/fishery/romaguera-inc/1672762065606/commercial.mp3",
      "artist": "Fishery",
      "cover_art_url": "assets/img/krang/krang-radio-068.png"
    },
    {
      "name": "Hegmann Collins And Strosin",
      "url": "./commercials/en-US/utilities/hegmann-collins-and-strosin/1672761712777/commercial.mp3",
      "artist": "Utilities",
      "cover_art_url": "assets/img/krang/krang-radio-023.png"
    },
    {
      "name": "Hagenes Gorczany And Reichel",
      "url": "./commercials/en-US/machinery/hagenes-gorczany-and-reichel/1672240370/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-050.png"
    },
    {
      "name": "Gorczany Leannon",
      "url": "./commercials/en-US/medical-devices/gorczany-leannon/1672761879167/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-005.png"
    },
    {
      "name": "Reichel Bauch",
      "url": "./commercials/en-US/newspapers/reichel-bauch/1672760819005/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-092.png"
    },
    {
      "name": "Larkin Kassulke",
      "url": "./commercials/en-US/venture-capital-private-equity/larkin-kassulke/1672761923145/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-020.png"
    },
    {
      "name": "Kreiger Llc",
      "url": "./commercials/en-US/banking/kreiger-llc/1672240370/commercial.mp3",
      "artist": "Banking",
      "cover_art_url": "assets/img/krang/krang-radio-035.png"
    },
    {
      "name": "Bode Inc",
      "url": "./commercials/en-US/computer-network-security/bode-inc/1672760952029/commercial.mp3",
      "artist": "Computer Network Security",
      "cover_art_url": "assets/img/krang/krang-radio-049.png"
    },
    {
      "name": "Vandervort Group",
      "url": "./commercials/en-US/tobacco/vandervort-group/1672240370/commercial.mp3",
      "artist": "Tobacco",
      "cover_art_url": "assets/img/krang/krang-radio-082.png"
    },
    {
      "name": "Marquardt Hintz And Kassulke",
      "url": "./commercials/en-US/railroad-manufacture/marquardt-hintz-and-kassulke/1672761756031/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-079.png"
    },
    {
      "name": "Adams Feil",
      "url": "./commercials/en-US/consumer-goods/adams-feil/1672761554188/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-002.png"
    },
    {
      "name": "Turner Jaskolski",
      "url": "./commercials/en-US/information-services/turner-jaskolski/1672240370/commercial.mp3",
      "artist": "Information Services",
      "cover_art_url": "assets/img/krang/krang-radio-011.png"
    },
    {
      "name": "Lubowitz Gleichner",
      "url": "./commercials/en-US/management-consulting/lubowitz-gleichner/1672240370/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-031.png"
    },
    {
      "name": "Koch Wilkinson And Steuber",
      "url": "./commercials/en-US/broadcast-media/koch-wilkinson-and-steuber/1672240370/commercial.mp3",
      "artist": "Broadcast Media",
      "cover_art_url": "assets/img/krang/krang-radio-068.png"
    },
    {
      "name": "Dare Bailey",
      "url": "./commercials/en-US/newspapers/dare-bailey/1672762098227/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-092.png"
    },
    {
      "name": "Cummings Lindgren",
      "url": "./commercials/en-US/leisure-travel-tourism/cummings-lindgren/1672240370/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-049.png"
    },
    {
      "name": "Ryan Hauck",
      "url": "./commercials/en-US/performing-arts/ryan-hauck/1672240370/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-076.png"
    },
    {
      "name": "Keebler And Sons",
      "url": "./commercials/en-US/computer-hardware/keebler-and-sons/1672761563481/commercial.mp3",
      "artist": "Computer Hardware",
      "cover_art_url": "assets/img/krang/krang-radio-015.png"
    },
    {
      "name": "Mertz Mueller And Weber",
      "url": "./commercials/en-US/automotive/mertz-mueller-and-weber/1672240370/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-012.png"
    },
    {
      "name": "Schimmel Witting",
      "url": "./commercials/en-US/defense-space/schimmel-witting/1672240370/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-047.png"
    },
    {
      "name": "Ratke Group",
      "url": "./commercials/en-US/financial-services/ratke-group/1672761609534/commercial.mp3",
      "artist": "Financial Services",
      "cover_art_url": "assets/img/krang/krang-radio-088.png"
    },
    {
      "name": "Stark Powlowski And Kutch",
      "url": "./commercials/en-US/wine-and-spirits/stark-powlowski-and-kutch/1672761081056/commercial.mp3",
      "artist": "Wine And Spirits",
      "cover_art_url": "assets/img/krang/krang-radio-089.png"
    },
    {
      "name": "Franecki Runolfsson",
      "url": "./commercials/en-US/publishing/franecki-runolfsson/1672240370/commercial.mp3",
      "artist": "Publishing",
      "cover_art_url": "assets/img/krang/krang-radio-025.png"
    },
    {
      "name": "Kilback Group",
      "url": "./commercials/en-US/individual-family-services/kilback-group/1672761283357/commercial.mp3",
      "artist": "Individual Family Services",
      "cover_art_url": "assets/img/krang/krang-radio-009.png"
    },
    {
      "name": "Heaney And Sons",
      "url": "./commercials/en-US/market-research/heaney-and-sons/1672761621697/commercial.mp3",
      "artist": "Market Research",
      "cover_art_url": "assets/img/krang/krang-radio-041.png"
    },
    {
      "name": "Hermiston Wilkinson And Kessler",
      "url": "./commercials/en-US/executive-office/hermiston-wilkinson-and-kessler/1672760693468/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-088.png"
    },
    {
      "name": "Koelpin Group",
      "url": "./commercials/en-US/writing-and-editing/koelpin-group/1672761718433/commercial.mp3",
      "artist": "Writing And Editing",
      "cover_art_url": "assets/img/krang/krang-radio-059.png"
    },
    {
      "name": "Mills Lockman And Glover",
      "url": "./commercials/en-US/medical-devices/mills-lockman-and-glover/1672240370/commercial.mp3",
      "artist": "Medical Devices",
      "cover_art_url": "assets/img/krang/krang-radio-008.png"
    },
    {
      "name": "Weissnat Bernhard",
      "url": "./commercials/en-US/sporting-goods/weissnat-bernhard/1672760734702/commercial.mp3",
      "artist": "Sporting Goods",
      "cover_art_url": "assets/img/krang/krang-radio-022.png"
    },
    {
      "name": "Schimmel Hyatt And Olson",
      "url": "./commercials/en-US/writing-and-editing/schimmel-hyatt-and-olson/1672240370/commercial.mp3",
      "artist": "Writing And Editing",
      "cover_art_url": "assets/img/krang/krang-radio-073.png"
    },
    {
      "name": "Wyman Yundt And Dubuque",
      "url": "./commercials/en-US/photography/wyman-yundt-and-dubuque/1672760726813/commercial.mp3",
      "artist": "Photography",
      "cover_art_url": "assets/img/krang/krang-radio-037.png"
    },
    {
      "name": "Kulas Berge",
      "url": "./commercials/en-US/religious-institutions/kulas-berge/1672761854508/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-008.png"
    },
    {
      "name": "Fay And Sons",
      "url": "./commercials/en-US/import-and-export/fay-and-sons/1672240370/commercial.mp3",
      "artist": "Import And Export",
      "cover_art_url": "assets/img/krang/krang-radio-038.png"
    },
    {
      "name": "Lueilwitz Jerde And Kreiger",
      "url": "./commercials/en-US/medical-practice/lueilwitz-jerde-and-kreiger/1672761125969/commercial.mp3",
      "artist": "Medical Practice",
      "cover_art_url": "assets/img/krang/krang-radio-086.png"
    },
    {
      "name": "Zieme Hackett And O Hara",
      "url": "./commercials/en-US/libraries/zieme-hackett-and-o-hara/1672240370/commercial.mp3",
      "artist": "Libraries",
      "cover_art_url": "assets/img/krang/krang-radio-059.png"
    },
    {
      "name": "Jacobs And Sons",
      "url": "./commercials/en-US/research/jacobs-and-sons/1672240370/commercial.mp3",
      "artist": "Research",
      "cover_art_url": "assets/img/krang/krang-radio-057.png"
    },
    {
      "name": "Nolan Inc",
      "url": "./commercials/en-US/higher-education/nolan-inc/1672240370/commercial.mp3",
      "artist": "Higher Education",
      "cover_art_url": "assets/img/krang/krang-radio-031.png"
    },
    {
      "name": "Kozey Jaskolski",
      "url": "./commercials/en-US/restaurants/kozey-jaskolski/1672240370/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-031.png"
    },
    {
      "name": "Murazik Ortiz And Marvin",
      "url": "./commercials/en-US/real-estate/murazik-ortiz-and-marvin/1672761076457/commercial.mp3",
      "artist": "Real Estate",
      "cover_art_url": "assets/img/krang/krang-radio-076.png"
    },
    {
      "name": "Abbott Crooks",
      "url": "./commercials/en-US/consumer-goods/abbott-crooks/1672240370/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-032.png"
    },
    {
      "name": "Rodriguez Pagac And Schuppe",
      "url": "./commercials/en-US/hospitality/rodriguez-pagac-and-schuppe/1672762021143/commercial.mp3",
      "artist": "Hospitality",
      "cover_art_url": "assets/img/krang/krang-radio-079.png"
    },
    {
      "name": "Ward Paucek And Kris",
      "url": "./commercials/en-US/program-development/ward-paucek-and-kris/1672761249946/commercial.mp3",
      "artist": "Program Development",
      "cover_art_url": "assets/img/krang/krang-radio-035.png"
    },
    {
      "name": "Parisian Schowalter And Jones",
      "url": "./commercials/en-US/music/parisian-schowalter-and-jones/1672240370/commercial.mp3",
      "artist": "Music",
      "cover_art_url": "assets/img/krang/krang-radio-031.png"
    },
    {
      "name": "Jerde Kertzmann",
      "url": "./commercials/en-US/pharmaceuticals/jerde-kertzmann/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-080.png"
    },
    {
      "name": "Lakin O Connell",
      "url": "./commercials/en-US/religious-institutions/lakin-o-connell/1672762256744/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-053.png"
    },
    {
      "name": "Berge Llc",
      "url": "./commercials/en-US/judiciary/berge-llc/1672240370/commercial.mp3",
      "artist": "Judiciary",
      "cover_art_url": "assets/img/krang/krang-radio-046.png"
    },
    {
      "name": "Kohler Llc",
      "url": "./commercials/en-US/nanotechnology/kohler-llc/1672240370/commercial.mp3",
      "artist": "Nanotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-003.png"
    },
    {
      "name": "Connelly Inc",
      "url": "./commercials/en-US/renewables-environment/connelly-inc/1672761662930/commercial.mp3",
      "artist": "Renewables Environment",
      "cover_art_url": "assets/img/krang/krang-radio-089.png"
    },
    {
      "name": "Botsford Mraz And Morissette",
      "url": "./commercials/en-US/glass-ceramics-concrete/botsford-mraz-and-morissette/1672761177473/commercial.mp3",
      "artist": "Glass Ceramics Concrete",
      "cover_art_url": "assets/img/krang/krang-radio-094.png"
    },
    {
      "name": "Yundt Group",
      "url": "./commercials/en-US/venture-capital-private-equity/yundt-group/1672761078705/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-010.png"
    },
    {
      "name": "Reinger And Sons",
      "url": "./commercials/en-US/military/reinger-and-sons/1672240370/commercial.mp3",
      "artist": "Military",
      "cover_art_url": "assets/img/krang/krang-radio-082.png"
    },
    {
      "name": "Mueller Konopelski",
      "url": "./commercials/en-US/outsourcing-offshoring/mueller-konopelski/1672240370/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-056.png"
    },
    {
      "name": "Kemmer Streich",
      "url": "./commercials/en-US/defense-space/kemmer-streich/1672240370/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-012.png"
    },
    {
      "name": "Bernier Bergnaum And Smith",
      "url": "./commercials/en-US/ranching/bernier-bergnaum-and-smith/1672240370/commercial.mp3",
      "artist": "Ranching",
      "cover_art_url": "assets/img/krang/krang-radio-092.png"
    },
    {
      "name": "Hoeger Walter And Dicki",
      "url": "./commercials/en-US/machinery/hoeger-walter-and-dicki/1672762355856/commercial.mp3",
      "artist": "Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-012.png"
    },
    {
      "name": "Gislason Larkin And Labadie",
      "url": "./commercials/en-US/computer-games/gislason-larkin-and-labadie/1672240370/commercial.mp3",
      "artist": "Computer Games",
      "cover_art_url": "assets/img/krang/krang-radio-092.png"
    },
    {
      "name": "O Kon Murphy",
      "url": "./commercials/en-US/executive-office/o-kon-murphy/1672761258689/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-067.png"
    },
    {
      "name": "Funk Barton",
      "url": "./commercials/en-US/leisure-travel-tourism/funk-barton/1672240370/commercial.mp3",
      "artist": "Leisure Travel Tourism",
      "cover_art_url": "assets/img/krang/krang-radio-023.png"
    },
    {
      "name": "Paucek Feeney And Legros",
      "url": "./commercials/en-US/alternative-medicine/paucek-feeney-and-legros/1672240370/commercial.mp3",
      "artist": "Alternative Medicine",
      "cover_art_url": "assets/img/krang/krang-radio-032.png"
    },
    {
      "name": "Rempel Hermiston",
      "url": "./commercials/en-US/public-relations-and-communications/rempel-hermiston/1672240370/commercial.mp3",
      "artist": "Public Relations And Communications",
      "cover_art_url": "assets/img/krang/krang-radio-016.png"
    },
    {
      "name": "Rodriguez Llc",
      "url": "./commercials/en-US/automotive/rodriguez-llc/1672240370/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-043.png"
    },
    {
      "name": "Kautzer Baumbach And Schneider",
      "url": "./commercials/en-US/computer-networking/kautzer-baumbach-and-schneider/1672761170006/commercial.mp3",
      "artist": "Computer Networking",
      "cover_art_url": "assets/img/krang/krang-radio-080.png"
    },
    {
      "name": "Crona Leannon",
      "url": "./commercials/en-US/government-administration/crona-leannon/1672760732207/commercial.mp3",
      "artist": "Government Administration",
      "cover_art_url": "assets/img/krang/krang-radio-009.png"
    },
    {
      "name": "Koelpin Labadie And Mckenzie",
      "url": "./commercials/en-US/veterinary/koelpin-labadie-and-mckenzie/1672240370/commercial.mp3",
      "artist": "Veterinary",
      "cover_art_url": "assets/img/krang/krang-radio-088.png"
    },
    {
      "name": "Legros Bernhard And Mckenzie",
      "url": "./commercials/en-US/venture-capital-private-equity/legros-bernhard-and-mckenzie/1672760874480/commercial.mp3",
      "artist": "Venture Capital Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-038.png"
    },
    {
      "name": "Crist Cummerata",
      "url": "./commercials/en-US/restaurants/crist-cummerata/1672240370/commercial.mp3",
      "artist": "Restaurants",
      "cover_art_url": "assets/img/krang/krang-radio-048.png"
    },
    {
      "name": "Ankunding Hamill And Connelly",
      "url": "./commercials/en-US/executive-office/ankunding-hamill-and-connelly/1672760845027/commercial.mp3",
      "artist": "Executive Office",
      "cover_art_url": "assets/img/krang/krang-radio-051.png"
    },
    {
      "name": "Wilderman Kemmer And Smith",
      "url": "./commercials/en-US/consumer-goods/wilderman-kemmer-and-smith/1672760810438/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-048.png"
    },
    {
      "name": "Mitchell Pagac",
      "url": "./commercials/en-US/events-services/mitchell-pagac/1672240370/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-002.png"
    },
    {
      "name": "Greenfelder Monahan",
      "url": "./commercials/en-US/logistics-and-supply-chain/greenfelder-monahan/1672761361307/commercial.mp3",
      "artist": "Logistics And Supply Chain",
      "cover_art_url": "assets/img/krang/krang-radio-091.png"
    },
    {
      "name": "Swaniawski Llc",
      "url": "./commercials/en-US/newspapers/swaniawski-llc/1672760675809/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-048.png"
    },
    {
      "name": "Friesen Llc",
      "url": "./commercials/en-US/hospital-health-care/friesen-llc/1672762117613/commercial.mp3",
      "artist": "Hospital Health Care",
      "cover_art_url": "assets/img/krang/krang-radio-057.png"
    },
    {
      "name": "Balistreri Nitzsche And Bradtke",
      "url": "./commercials/en-US/biotechnology/balistreri-nitzsche-and-bradtke/1672240370/commercial.mp3",
      "artist": "Biotechnology",
      "cover_art_url": "assets/img/krang/krang-radio-052.png"
    },
    {
      "name": "Mertz Inc",
      "url": "./commercials/en-US/defense-space/mertz-inc/1672761794182/commercial.mp3",
      "artist": "Defense Space",
      "cover_art_url": "assets/img/krang/krang-radio-088.png"
    },
    {
      "name": "Morissette Parker And Rohan",
      "url": "./commercials/en-US/photography/morissette-parker-and-rohan/1672762423994/commercial.mp3",
      "artist": "Photography",
      "cover_art_url": "assets/img/krang/krang-radio-053.png"
    },
    {
      "name": "Botsford Bahringer",
      "url": "./commercials/en-US/civil-engineering/botsford-bahringer/1672760835651/commercial.mp3",
      "artist": "Civil Engineering",
      "cover_art_url": "assets/img/krang/krang-radio-010.png"
    },
    {
      "name": "Ryan Ward And Thiel",
      "url": "./commercials/en-US/events-services/ryan-ward-and-thiel/1672762040338/commercial.mp3",
      "artist": "Events Services",
      "cover_art_url": "assets/img/krang/krang-radio-005.png"
    },
    {
      "name": "Crist Llc",
      "url": "./commercials/en-US/marketing-and-advertising/crist-llc/1672761134512/commercial.mp3",
      "artist": "Marketing And Advertising",
      "cover_art_url": "assets/img/krang/krang-radio-076.png"
    },
    {
      "name": "Steuber Koelpin",
      "url": "./commercials/en-US/food-beverages/steuber-koelpin/1672761910951/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-001.png"
    },
    {
      "name": "Russel Inc",
      "url": "./commercials/en-US/consumer-goods/russel-inc/1672761193833/commercial.mp3",
      "artist": "Consumer Goods",
      "cover_art_url": "assets/img/krang/krang-radio-093.png"
    },
    {
      "name": "Mertz Group",
      "url": "./commercials/en-US/outsourcing-offshoring/mertz-group/1672762045499/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-038.png"
    },
    {
      "name": "Fay Stehr And Morar",
      "url": "./commercials/en-US/supermarkets/fay-stehr-and-morar/1672240370/commercial.mp3",
      "artist": "Supermarkets",
      "cover_art_url": "assets/img/krang/krang-radio-023.png"
    },
    {
      "name": "Collier Wilkinson And Roberts",
      "url": "./commercials/en-US/performing-arts/collier-wilkinson-and-roberts/1672760854903/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-040.png"
    },
    {
      "name": "Bashirian Kshlerin And Beatty",
      "url": "./commercials/en-US/package-freight-delivery/bashirian-kshlerin-and-beatty/1672761940866/commercial.mp3",
      "artist": "Package Freight Delivery",
      "cover_art_url": "assets/img/krang/krang-radio-071.png"
    },
    {
      "name": "Lakin Llc",
      "url": "./commercials/en-US/primary-secondary-education/lakin-llc/1672240370/commercial.mp3",
      "artist": "Primary Secondary Education",
      "cover_art_url": "assets/img/krang/krang-radio-035.png"
    },
    {
      "name": "Weber Vandervort",
      "url": "./commercials/en-US/retail/weber-vandervort/1672240370/commercial.mp3",
      "artist": "Retail",
      "cover_art_url": "assets/img/krang/krang-radio-095.png"
    },
    {
      "name": "Rau Group",
      "url": "./commercials/en-US/e-learning/rau-group/1672240370/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-001.png"
    },
    {
      "name": "Cummings Llc",
      "url": "./commercials/en-US/investment-management/cummings-llc/1672761062383/commercial.mp3",
      "artist": "Investment Management",
      "cover_art_url": "assets/img/krang/krang-radio-009.png"
    },
    {
      "name": "Maggio And Sons",
      "url": "./commercials/en-US/primary-secondary-education/maggio-and-sons/1672240370/commercial.mp3",
      "artist": "Primary Secondary Education",
      "cover_art_url": "assets/img/krang/krang-radio-025.png"
    },
    {
      "name": "Beier Deckow",
      "url": "./commercials/en-US/religious-institutions/beier-deckow/1672761516696/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-040.png"
    },
    {
      "name": "Hirthe Inc",
      "url": "./commercials/en-US/food-beverages/hirthe-inc/1672761444144/commercial.mp3",
      "artist": "Food Beverages",
      "cover_art_url": "assets/img/krang/krang-radio-013.png"
    },
    {
      "name": "Lebsack Terry",
      "url": "./commercials/en-US/investment-banking/lebsack-terry/1672761005986/commercial.mp3",
      "artist": "Investment Banking",
      "cover_art_url": "assets/img/krang/krang-radio-025.png"
    },
    {
      "name": "Franecki Group",
      "url": "./commercials/en-US/printing/franecki-group/1672240370/commercial.mp3",
      "artist": "Printing",
      "cover_art_url": "assets/img/krang/krang-radio-056.png"
    },
    {
      "name": "Smith And Sons",
      "url": "./commercials/en-US/shipbuilding/smith-and-sons/1672760642420/commercial.mp3",
      "artist": "Shipbuilding",
      "cover_art_url": "assets/img/krang/krang-radio-079.png"
    },
    {
      "name": "Wiza Llc",
      "url": "./commercials/en-US/law-practice/wiza-llc/1672240370/commercial.mp3",
      "artist": "Law Practice",
      "cover_art_url": "assets/img/krang/krang-radio-025.png"
    },
    {
      "name": "Strosin Inc",
      "url": "./commercials/en-US/computer-software/strosin-inc/1672761800935/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-060.png"
    },
    {
      "name": "Harber Carter And Funk",
      "url": "./commercials/en-US/management-consulting/harber-carter-and-funk/1672240370/commercial.mp3",
      "artist": "Management Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-052.png"
    },
    {
      "name": "Gulgowski Ryan And Krajcik",
      "url": "./commercials/en-US/information-technology-and-services/gulgowski-ryan-and-krajcik/1672240370/commercial.mp3",
      "artist": "Information Technology And Services",
      "cover_art_url": "assets/img/krang/krang-radio-045.png"
    },
    {
      "name": "Baumbach Llc",
      "url": "./commercials/en-US/animation/baumbach-llc/1672240370/commercial.mp3",
      "artist": "Animation",
      "cover_art_url": "assets/img/krang/krang-radio-050.png"
    },
    {
      "name": "Cartwright Graham And White",
      "url": "./commercials/en-US/performing-arts/cartwright-graham-and-white/1672240370/commercial.mp3",
      "artist": "Performing Arts",
      "cover_art_url": "assets/img/krang/krang-radio-066.png"
    },
    {
      "name": "Yundt Kuphal And Rolfson",
      "url": "./commercials/en-US/religious-institutions/yundt-kuphal-and-rolfson/1672761890057/commercial.mp3",
      "artist": "Religious Institutions",
      "cover_art_url": "assets/img/krang/krang-radio-046.png"
    },
    {
      "name": "Adams And Sons",
      "url": "./commercials/en-US/plastics/adams-and-sons/1672761457194/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-089.png"
    },
    {
      "name": "Ritchie Feeney",
      "url": "./commercials/en-US/computer-software/ritchie-feeney/1672760863154/commercial.mp3",
      "artist": "Computer Software",
      "cover_art_url": "assets/img/krang/krang-radio-074.png"
    },
    {
      "name": "Konopelski Bradtke And Bashirian",
      "url": "./commercials/en-US/pharmaceuticals/konopelski-bradtke-and-bashirian/1672240370/commercial.mp3",
      "artist": "Pharmaceuticals",
      "cover_art_url": "assets/img/krang/krang-radio-039.png"
    },
    {
      "name": "O Reilly Group",
      "url": "./commercials/en-US/oil-energy/o-reilly-group/1672761331060/commercial.mp3",
      "artist": "Oil Energy",
      "cover_art_url": "assets/img/krang/krang-radio-095.png"
    },
    {
      "name": "Larson Llc",
      "url": "./commercials/en-US/newspapers/larson-llc/1672762071909/commercial.mp3",
      "artist": "Newspapers",
      "cover_art_url": "assets/img/krang/krang-radio-079.png"
    },
    {
      "name": "Mckenzie Bradtke",
      "url": "./commercials/en-US/railroad-manufacture/mckenzie-bradtke/1672761244402/commercial.mp3",
      "artist": "Railroad Manufacture",
      "cover_art_url": "assets/img/krang/krang-radio-049.png"
    },
    {
      "name": "Emard Bogisich And Kiehn",
      "url": "./commercials/en-US/business-supplies-and-equipment/emard-bogisich-and-kiehn/1672240370/commercial.mp3",
      "artist": "Business Supplies And Equipment",
      "cover_art_url": "assets/img/krang/krang-radio-045.png"
    },
    {
      "name": "Boyer Rosenbaum",
      "url": "./commercials/en-US/recreational-facilities-and-services/boyer-rosenbaum/1672240370/commercial.mp3",
      "artist": "Recreational Facilities And Services",
      "cover_art_url": "assets/img/krang/krang-radio-015.png"
    },
    {
      "name": "Barrows Hauck",
      "url": "./commercials/en-US/design/barrows-hauck/1672760648514/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-083.png"
    },
    {
      "name": "Barrows Goyette",
      "url": "./commercials/en-US/plastics/barrows-goyette/1672762203301/commercial.mp3",
      "artist": "Plastics",
      "cover_art_url": "assets/img/krang/krang-radio-035.png"
    },
    {
      "name": "Lind Group",
      "url": "./commercials/en-US/aviation-aerospace/lind-group/1672761810727/commercial.mp3",
      "artist": "Aviation Aerospace",
      "cover_art_url": "assets/img/krang/krang-radio-011.png"
    }
  ]
});

