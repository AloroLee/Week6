let courses = [
    {
      CourseId: "PROG100",
      Title: "Introduction to HTML/CSS/Git",
      Location: "Classroom 7",
      StartDate: "09/08/22",
      Fee: "100.00",
    },
    {
      CourseId: "PROG200",
      Title: "Introduction to JavaScript",
      Location: "Classroom 9",
      StartDate: "11/22/22",
      Fee: "350.00",
    },
    {
      CourseId: "PROG300",
      Title: "Introduction to Java",
      Location: "Classroom 1",
      StartDate: "01/09/23",
      Fee: "50.00",
    },
    {
      CourseId: "PROG400",
      Title: "Introduction to SQL and Databases",
      Location: "Classroom 7",
      StartDate: "03/16/23",
      Fee: "50.00",
    },
    {
      CourseId: "PROJ500",
      Title: "Introduction to Angular",
      Location: "Classroom 1",
      StartDate: "04/25/23",
      Fee: "50.00",
    }
  ];
  
  // 1. When does the PROG200 course start?
  console.log(courses.find(c=>"PROG200" ===c.CourseId).StartDate);     
  //   let prog200Course = courses.find(course => course.CourseId === "PROG200");
  //   console.log("PROG200 Start Date:", prog200Course.StartDate);
  
  // 2. What is the title of the PROJ500 course?
  let proj500Course = courses.find(course => course.CourseId === "PROJ500");
  console.log(proj500Course.Title);
  
  // 3. What are the titles of the courses that cost $50 or less?
//   let affordableCourses = courses.filter(course => parseFloat(course.Fee) <= 50.00);
//   console.log(affordableCourses.map(course => course.Title));
  courses.filter(c => c.Location === "Classroom 1").forEach(c => console.log(c.Title));
  // 4. What classes meet in "Classroom 1"?
//   let classroom1Courses = courses.filter(course => course.Location === "Classroom 1");
//   console.log("Classes in Classroom 1:", classroom1Courses.map(course => course.Title));
let classroom1Courses = courses.filter(course => course.Location === "Classroom 1");
console.log("Classes in Classroom 1:");
classroom1Courses.forEach(course => console.log(course.Title));

// output of first |> second |> third function CHAINING
let matches = courses.filter(c => c.Location === "Classroom 1");
let titles = matches.map(c => c.Title);
titles.forEach(t => console.log(t));

// compromise
courses .filter(c => c.Location === "Classroom 1")
        .map(c => c.Title)
        .forEach(t => console.log(t));

//further
function print(text){
    console.log(text);
}

courses .filter(c => c.Location === "Classroom 1")
        .map(c => c.Title)
        .forEach(print);