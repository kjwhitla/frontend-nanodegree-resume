var data = "%data%";

//EDUCATION OBJECT & DISPLAY
var bio = {
    "name": "Keegan Whitla",
    "role": "independent UI/UX developer, specializing in web design",
    "contacts": {
        "phone": "248.935.0069",
        "phoneLink": "tel:2489350069",
        "email": "kjwhitla@gmail.com",
        "emailLink":"mailto:kjwhitla@gmail.com",
        "github": "kjwhitla",
        "githubLink":"https://github.com/kjwhitla",
        "twitter": "@MadeByKeegan",
        "twitterLink":"https://twitter.com/madebyKeegan",
        "location": "San Francisco, CA"
    },
    "welcomeMessage": "Eventually everything connects - people, ideas, objects. The quality of the connections is the key to quality per se. -Charles Eames",
    "skills": ["JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Angular", "Python", "Swift"],
    "biopic": "../images/keegan-whitla.png",
    "display": function () {

        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        
        $("#name-title").append(formattedName + formattedRole);

        var formattedPhoneLink = HTMLmobile.replace("#", bio.contacts.phoneLink);
        var formattedPhone = formattedPhoneLink.replace(data, bio.contacts.phone);
        
        var formattedEmailLink = HTMLemail.replace("#", bio.contacts.emailLink);
        var formattedEmail = formattedEmailLink.replace(data, bio.contacts.email);
        
        var formattedGithubLink = HTMLgithub.replace("#", bio.contacts.githubLink);
        var formattedGithub = formattedGithubLink.replace(data, bio.contacts.github);
        
        var formattedTwitterLink = HTMLtwitter.replace("#", bio.contacts.twitterLink);
        var formattedTwitter = formattedTwitterLink.replace(data, bio.contacts.twitter);
        
        var formattedLocationLink =HTMLlocation.replace("#","http://kjwhitla.github.io/#lets-connect");
        var formattedLocation = formattedLocationLink.replace(data, bio.contacts.location);
        
        $("#topContacts, #footerContacts").append(formattedPhone + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);

    
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        
        $("#header").append(formattedPic + formattedWelcomeMsg);
            if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var numSkills = 0; numSkills < bio.skills.length; numSkills++) {
                var skill = HTMLskills.replace("%data%", bio.skills[numSkills]);
                $("#skills").append(skill);
                
            }
            $("#header").append(HTMLskillsEnd);
        }   
        
    }
};

//EDUCATION OBJECT & DISPLAY
var education = {

    "schools": [{
        "name": "Oakland University",
        "location": "Rochester Hills, MI",
        "degree": "Bachelor of Science",
        "majors": ["Management of Information Systems", "Applied Technology in Business"],
        "dates": "2010-2013",
        "url": "#"
    },
                {
        "name": "University of Tongji",
        "location": "Shanghai, China",
        "degree": "Study Abroad Program",
        "majors": ["International Relations"],
        "dates": "2011",
        "url": "#"
    }
    ],

    "onlineCourses": [

        {
            "title": "Front End Web Development ",
            "school": "Udacity",
            "dates": "April 2016 - April 2017",
            "url": "http://udacity.com"
        },
        {
            "title": "Development Front End",
            "school": "TeamTreehouse",
            "dates": "2011-2017",
            "url": "http://teamtreehouse.com"
        }
    ],
    "display": function () {

        if (education.schools.length > 0) {

            $("#education").append(HTMLschoolStart);
            
            education.schools.forEach(function (school) {
                
                var formattedSchoolLink = HTMLschoolName.replace("#", school.url);
                var formattedSchool = formattedSchoolLink.replace(data, school.name);
                var formattedSchoolDegree = HTMLschoolDegree.replace(data, school.degree);
                var formattedSchoolDates = HTMLschoolDates.replace(data, school.dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace(data, school.location);
                var formattedMajor = HTMLschoolMajor.replace(data, school.majors[0]);

                $("#education").append(formattedSchool + formattedSchoolDegree);
                $("#education").append(formattedSchoolLocation + formattedSchoolDates);
                $("#education").append(formattedMajor);
                
            });
        }

        if (education.onlineCourses.length > 0) {

            $("#education").append(HTMLonlineClasses);
            education.onlineCourses.forEach(function (course) {
                
                var formattedTitle = HTMLonlineTitle.replace(data, course.title);
                formattedTitle = formattedTitle.replace("#", course.url);
                formattedTitle = formattedTitle.replace("%onlineSchool%", course.school);
                
                var formattedCourseDates = HTMLonlineDates.replace(data, course.dates)
                
                $("#education").append(formattedTitle);
                $("#education").append(formattedCourseDates);
                
            });
        }
    }
};

var work = {

    "jobs": [{
            "employer": "IBM",
            "title": "Webmaster & Digital UX Strategist",
            "location": "San Francisco, CA",
            "dates": "Sep, 2015 - present",
            "url": "#",
            "description": "I am responsible for designing, building, and managing the digital presence and strategy of the IBM Analytics organization. Responsible for end-to-end digital strategy and execution for IBM Cognitive Solutions for risk, sales performance management, financial/operational performance management and industry Drive significant increases in visits and engaged visits to drive demand Data-driven, continuous user experience optimization to drive engagement (quantitative, A/B testing, heat map analysis, etc.) Data-driven, continuous search optimization (organic and paid) to drive traffic/generate demand."
        },
        {
            "employer": "GTB (Team Detroit)",
            "title": "Global Analytics Implementation Analyst",
            "location": "Dearborn, MI",
            "dates": "Feb, 2014 - Feb, 2015",
            "url": "#",
            "description": "Global Implementation of Analytics for Tier 1 Ford web properties including Apps, multi-lingual websites, and Advertisements. Implement Ford's Analytics Tags in DTM with proper DTM Mapping and creating Data Layers along with configuring tools / tags in the backend. Create custom javascript logic where DTM does not have easy options to implement ex: 3rd Party Media Tags."
        }
    ],
    "display": function () {

        if (work.jobs.length > 0) {
               work.jobs.forEach(function(job){
                var employer = HTMLworkEmployer.replace(data, job.employer);
                var workEmployer = employer.replace("#",job.url);
                var workTitle = HTMLworkTitle.replace(data,job.title);
                var workDates = HTMLworkDates.replace(data,job.dates);
                var workLocation = HTMLworkLocation.replace(data,job.location);
                var workDescription = HTMLworkDescription.replace(data,job.description);
                
                $("#workExperience").append(HTMLworkStart + workEmployer + workTitle + workLocation + workDates  + workDescription);

               });
        }
    }
};

var projects = {
    "proj": [
        {
            "title": "Beer Exchange Mobile App",
            "dates": "Feb, 2014 - in progress",
            "link": "#",
            "description": "HTML, CSS, JavaScript, WordPress - An interactive Andriod/iOS App allowing you to reserve beverage prices at your favorite bars and restaurants.",
            "images": "../images/project-1.png"
        },
        {
            "title": "BraedenWhitla.com",
            "dates": "Jun, 2016 - present",
            "link": "#",
            "description": "HTML, CSS, jQuery, JavaScript, Bootstrap - An artist's portfolio must shine, and this website was built to do just that, stay lightweight, show quality images, and share contact information.",
            "images": "../images/project-2.png"
        },
        {
            "title": "Lake Tahoe",
            "dates": "May, 2016",
            "link": "#",
            "description": "HTML, CSS, jQuery, JavaScript, Bootstrap - A templated design to showcase lake tahoe.",
            "images": "../images/project-3.png"
        }

    ],
    
    "display": function () {
        if (projects.proj.length > 0) {

            projects.proj.forEach(function (proj) {
                var formattedProjectlink = HTMLprojectURL.replace("#", proj.link);
                var formattedProject = HTMLprojectTitle.replace(data, proj.title);
               
                var formattedProjectDates = HTMLprojectDates.replace(data, proj.dates);
                var formattedProjectDescription = HTMLprojectDescription.replace(data, proj.description);
                var formattedProjectImages = HTMLprojectImage.replace(data, proj.images);

                $("#projects").append(HTMLprojectStart + formattedProject + formattedProjectDates + formattedProjectDescription + formattedProjectImages);

            });      
         }
    }
};


/* calling display() methods for above declared objects */
bio.display();
education.display();
work.display();
projects.display();

/* adding div for google map */
$("#mapDiv").append(googleMap);
