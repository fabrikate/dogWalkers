# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# User.create!([
#   {name:"Gabrielle Robuck", dog_owner:true, dog_walker:true, email:"Gabrielle@eDoggy.com", phoneNum:"2065551234", profileURL:"https://scontent-sea1-1.xx.fbcdn.net/hphotos-xlf1/v/t34.0-12/12387872_10201092914163144_1837436292_n.jpg?oh=f8bc545027eacada0f6724d6e8665534&oe=568E2A6B", streetAddress:"22 2nd Street West", zipCode:"98005", dogWalkerRating:1.3, doNotDisturb:false},
#   {name:"Phil Gerhardt", dog_owner:true, dog_walker:true, email:"phil@gerhardt.com", phoneNum:"2065551634", profileURL:"https://scontent-sea1-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/12004731_10204010220730452_2531153972044323337_n.jpg?oh=219544d37c117c75e89789df96484d60&oe=5715BE53", streetAddress:"240 Fawn Lane", zipCode:"98102", dogWalkerRating:1.5, doNotDisturb:false},
#   {name:"Marge In", dog_owner:true, dog_walker:true, email:"marge@in.com", phoneNum:"2065551233", profileURL:"https://pbs.twimg.com/profile_images/570630963555737600/09d-qHUt_400x400.jpeg", streetAddress:"163 Meadown Lane", zipCode:"98104", dogWalkerRating:3.0, doNotDisturb:false},
#   {name:"Luetta Bevers", dog_owner:true, dog_walker:true, email:"Luetta@Bevers.com", phoneNum:"2065557234", profileURL:"https://avatars2.githubusercontent.com/u/13226119?v=3&s=400", streetAddress:"362 Canterbury Road", zipCode:"98104", dogWalkerRating:2.0, doNotDisturb:false},
#   {name:"Chelsea Bolyard", dog_owner:true, dog_walker:true, email:"Chelsea@Bolyard.com", phoneNum:"2065551214", streetAddress:"35 Fawn Lane", profileURL:"https://scontent-sea1-1.xx.fbcdn.net/hphotos-xft1/t31.0-8/11406380_866303796776725_5208384118563652597_o.jpg", zipCode:"98112", dogWalkerRating:2.5, doNotDisturb:false},
#   {name:"Aaron Costales", dog_owner:true, dog_walker:true, email:"Aaron@Costales.com", phoneNum:"2065558234", profileURL:"http://animalfair.com/wp-content/uploads/2012/06/how-to-pose-like-a-hot-guy-with-a-cute-dog-1-16816-1337274632-3_big-330x220.jpg", streetAddress:"405 10th Street", zipCode:"98117", dogWalkerRating:3.7, doNotDisturb:false},
#   {name:"Mark Soria", dog_owner:true, dog_walker:true, email:"MarkSoria@gmail.com", phoneNum:"2065559234", profileURL:"http://cdn.goodmenproject.com/wp-content/uploads/2014/07/Benoit-and-Casey-feature.jpg", streetAddress:"223 7th St", zipCode:"98109", dogWalkerRating:1.8, doNotDisturb:false},
#   {name:"Tammy Philyaw", dog_owner:false, dog_walker:true, email:"TPhilyaw@gmail.com", phoneNum:"2065551134", profileURL:"https://pbs.twimg.com/profile_images/570630963555737600/09d-qHUt.jpeg", streetAddress:"155 Jones Street", zipCode:"98108", dogWalkerRating:4.2, doNotDisturb:false},
#   {name:"Laurel Lavin", dog_owner:false, dog_walker:true, email:"LLavin@gmail.com", phoneNum:"2065551734", profileURL:"https://pbs.twimg.com/profile_images/616029620312260608/TbsP2Ovj.jpg", streetAddress:"859 Grant Street", zipCode:"98101", dogWalkerRating:3.7, doNotDisturb:false},
#   {name:"Lorne Mike", dog_owner:false, dog_walker:true, email:"LorneMike@nbc.com", phoneNum:"2065551630", profileURL:"https://scontent-sea1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/10885369_10101649321139283_3732211248428843670_n.jpg?oh=cb3b056d85ec734be2d2ccdf0aaaf9b6&oe=570374EF", streetAddress:"395 6th Street W", zipCode:"98115", dogWalkerRating:2.9, doNotDisturb:false},
#   {name:"Felice Styers", dog_owner:false, dog_walker:true, email:"Felice@Styers.com", phoneNum:"2065551131", profileURL:"https://pbs.twimg.com/profile_images/2781482196/1ea88a19d69eaede67511f2348c0cd09_400x400.jpeg", streetAddress:"434 Lakeview Drive", zipCode:"98121", dogWalkerRating:4.8, doNotDisturb:false},
#   {name:"Rich Rodgers", dog_owner:false, dog_walker:true, email:"richRodgers@gmail.com", phoneNum:"2065551034", profileURL:"https://scontent-sea1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/s720x720/1517667_10101149072017533_978982832_n.jpg?oh=250dd38862f39a20c6d4c294ade7987e&oe=571811FB", streetAddress:"106 Brown Street", zipCode:"98108", dogWalkerRating:2.5, doNotDisturb:false},
#   {name:"Colette Newbrough", dog_owner:false, dog_walker:true, email:"ColetteNewbrough@gmail.com", phoneNum:"2065550234", profileURL:"https://scontent-sea1-1.xx.fbcdn.net/hphotos-xpl1/v/t1.0-9/10409527_10103593995790580_3864929361936859596_n.jpg?oh=703770bc2fa387baf384a865347ccd89&oe=56FE15EB", streetAddress:"709 Prospect Avenue", zipCode:"98115", dogWalkerRating:3.5, doNotDisturb:false},
#   {name:"Marshall Robb", dog_owner:false, dog_walker:true, email:"LizBalentine@gmail.com", phoneNum:"2065551230", profileURL:"https://pbs.twimg.com/profile_images/435878361735249920/y1-4jQna_400x400.png", streetAddress:"689 Highland Drive", zipCode:"98112", dogWalkerRating:3.75, doNotDisturb:false}
# ])
# Dog.create([
#   {user_id:2, name:"Barney", age:1 ,weight:8 ,aggression:2.75 ,confidence:1.5 ,pictureURL: "https://www.petfinder.com/wp-content/uploads/2012/11/dog-how-to-select-your-new-best-friend-thinkstock99062463.jpg"},
#   {user_id:3, name:"Lucy", age:3 ,weight:15 ,aggression:2.2 ,confidence:1.0 ,pictureURL: "http://www.funmayo.com/wp-content/uploads/2015/08/happy-dog-picture.jpg"},
#   {user_id:4, name:"Barkley", age:1 ,weight:45 ,aggression:1.0 ,confidence:3.0 ,pictureURL: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/10606153_544824325667597_6032073859725995213_n.jpg?oh=1346b6e55925d3ff1038267cfb096286&oe=5745A532"},
#   {user_id:5, name:"Lili", age:1 ,weight:8 ,aggression:2.5 ,confidence:3.75 ,pictureURL: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/10298882_10207202462522348_2897336094770023675_n.jpg?oh=3cecf8436fe2a45b1cd42b4cfc52737d&oe=570418A5"},
#   {user_id:6, name:"Mason", age:3 ,weight:25 ,aggression:2.0 ,confidence:3.0 ,pictureURL: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11081255_10101798093263753_8729565234566726670_n.jpg?oh=4f0f6f33b6112252a20e0610bafd0851&oe=571AA0DB"},
#   {user_id:7, name:"Alfi", age:1 ,weight:25 ,aggression:3.0 ,confidence:2.2 ,pictureURL: "http://www.imagesbuddy.com/images/121/2013/12/adorable-grey-dog-graphic.jpg"},
#   {user_id:8, name:"Fudge", age:5 ,weight:8 ,aggression:3.75 ,confidence:2.0 ,pictureURL: "http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/canaan-dog_01_lg.jpg"},
#   {user_id:9, name:"Ellie", age:1 ,weight:40 ,aggression:3.0 ,confidence:2.5 ,pictureURL: "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/thumbnail/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F75%2F5956a09ea011e0a2380050568d634f%2Ffile%2FChihuahua-Smooth-Coat-2-645mk062111.jpg"},
#   {user_id:10, name:"Tomba", age:5 ,weight:8 ,aggression:1.5 ,confidence:4.7 ,pictureURL: "http://www.bbb.org/blog/wp-content/uploads/2011/07/husky-dog.jpg"},
#   {user_id:11, name:"Bessie", age:11 ,weight:80 ,aggression:1.0 ,confidence:4.0 ,pictureURL: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-frc3/v/t1.0-9/484822_10101148824363833_1901102833_n.jpg?oh=41f59eab9378a587754cbec9192e74d9&oe=5716B452"},
#   ])
