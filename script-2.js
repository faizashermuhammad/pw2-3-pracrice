let videos = [
  {
    title: "Photoshop tutorial",
    lengthInMinutes: 70,
    category: "Education",
    uploadDate: new Date("07-22-2019"),
    tags: "design, digital, photoshop, creativity",
    features: ["Live", "360°", "HDR"],
    viewCount: 4700,
    rating: 4.3
  },
  {
    title: "Episode # 01 - The Best Comedy Show",
    lengthInMinutes: 19,
    category: "Entertainment",
    uploadDate: new Date("07-03-2019"),
    tags: "comedy, funny",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 145615,
    rating: 3.9
  },
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 6,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5
  },
  {
    title: "Create Your First HTML Page - Web Development",
    lengthInMinutes: 5,
    category: "Informative",
    uploadDate: new Date("4-29-2018"),
    tags: "Eid Special, receipe",
    features: ["Location", "VR180", "HDR"],
    viewCount: 186
  },
  {
    title: "Korma Receipe",
    lengthInMinutes: 12,
    category: "Informative",
    uploadDate: new Date("4-29-2018"),
    tags: "Eid Special, receipe",
    features: ["Location", "VR180", "HDR"],
    viewCount: 8708
  },
  {
    title: "kheer Receipe",
    lengthInMinutes: 4,
    category: "Informative",
    uploadDate: new Date("9-19-2018"),
    tags: "Eid Special, receipe",
    features: ["Location", "VR180", "HDR"],
    viewCount: 5690,
  },
  {
    title: "mutton karahi Receipe",
    lengthInMinutes: 18,
    category: "Informative",
    uploadDate: new Date("8-9-2017"),
    tags: "Eid Special, receipe",
    features: ["Location", "VR180", "HDR"],
    viewCount: 8760,
  },
  {
    title: "Achar Gosht Receipe",
    lengthInMinutes: 9,
    category: "Informative",
    uploadDate: new Date("10-3-2018"),
    tags: "Eid Special, receipe",
    features: ["Location", "VR180", "HDR"],
    viewCount: 5989.
  },


  {
    title: "Cake Receipe",
    lengthInMinutes: 22,
    category: "Informative",
    uploadDate: new Date("14-8-2018"),
    tags: "Eid Special, receipe",
    features: ["Location", "VR180", "HDR"],
    viewCount: 990708,
  },

  {
    title: "tikka Receipe",
    lengthInMinutes: 13,
    category: "Informative",
    uploadDate: new Date("10-12-2018"),
    tags: "Eid Special, receipe",
    features: ["Location", "VR180", "HDR"],
    viewCount: 45790,
  },

];

// for(let i = 0; i < videos.length; i++){
//     console.log("title" + videos[i].title);
//     console.log("lenght: " + videos[i].lengthInMinutes + "minutes" );
//     console.log("category" + videos[i].category);
//     console.log("uploadd on" + videos[0]. uploadDate);
//     console.log("views" + videos[0]. uviewCount);
//     console.log(" ");

// }
//Q2 Print titles of all short ( less than 3 minutes ) videos.
//  for(let i = 0; i < videos.length; i++) {
//    if(videos[i]. lengthInMinutes <= 9 ){
//      console.log("title: " + videos[i].title);
//       console.log(" ");
//    }
//  }
//Q3 Print titles of all long ( greater than 20 minutes ) videos.
// for(let i = 0; i <videos.length; i++){
//   if (videos[i].lengthInMinutes > 20 ){
//     console.log("Title: " + videos[i].title);
//   }
// }
//Q4 Print titles of all medium length videos.

// for (let i = 0; i < videos.length; i++) {
//   if (videos[i].lengthInMinutes >= 4 && videos[i].lengthInMinutes <= 20) {
//     console.log("Title: " + videos[i].title);
//     console.log("length:" + videos[i].lengthInMinutes + "minutes");
//     console.log(" ");
//   }
// }


//Q5 Print title of the longest video

// for(let i = 0 ; i < videos.length; i++){
//   if(videos[i]. lengthInMinutes > 25){
//     console.log("title:" + videos[i].title);
//     console.log("length:" + videos[0].lengthInMinutes + "minutes");
//     console.log(" ");
//   }
// }

//Q6 Print titles of all "Educational" videos

// for(let i = 0 ; i < videos.length; i++) {
//  if(videos[i].category.substr(0) =="Education"){
//    console.log("title:" +videos[i].title);
//    console.log("catogary:" + videos[0].category);
//    console.log(" ");
//  }
// }

//Q7 Print titles of all videos with tag "Javascript"

// for(let i = 0; i < videos.length; i++ ){
//   if(videos[i].tags.substr(0) == "Javascript")
//   {
//     console.log("title:" + videos[i].title);
//     console.log("tags:" + videos[i]. tags);
//     console.log(" ");
//   }
// }
//Q8 Print titles of all videos with HD feature.

// for(let i = 0; i < videos.length; i++){
//   if(videos[i].features.includes ("HD")){

//     console.log("title:" + videos[i].title);
//     console.log("features:" + videos[0].HD);
//     console.log(" ");
//   }
// }

//Q9 // Print titles of all videos uploaded today
//  for(let i = 0; i < videos.length; i++){
//  if(videos[i].uploadDate.getDate()===new Date().getDay()) {
//    //console.log('title: ${videos[i].title}');
//    console.log("title:" + videos[i].title);
//  }
// }
// console.log("title:" + videos[i].title);
//  }
//Q10 Print titles of all videos uploaded this week.

// for(let i = 0; i < videos.length; i++){
//   if(new Date().getDay()-7 <= videos[i].uploadDate.getDate() && new Date().getMonth());
//   console.log("title:" + videos[i].title);
//    }

//Q11 Print titles of all videos uploaded this month.
// for (let i = 0; i < videos.length; i++) {
//   if (videos[i].uploadDate.getMonth() === new Date().getMonth()) {
//     console.log("title:" + videos[i].title);
//     // console.log('title: ${videos[i].title}');
//   }
// }

//Q12 Print titles of all videos uploaded this year
//====incomplet
for(let i = 0; i < videos.length; i++){
  if(videos[i].uploadDate.getYear()===new Date().getYear){
    console.log("title:" + videos[i].title);
    
  }
}
