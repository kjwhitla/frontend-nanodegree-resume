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
        $("#name-title").append(formattedName);
        
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        $("#name-title").append(formattedRole);
        
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        var formattedPhoneLink = HTMLmobile.replace("#", bio.contacts.phoneLink);
        var formattedPhone = formattedPhoneLink.replace(data, bio.contacts.phone);
        $("#topContacts, #footerContacts").append(formattedPhone);
        
        var formattedEmailLink = HTMLemail.replace("#", bio.contacts.emailLink);
        var formattedEmail = formattedEmailLink.replace(data, bio.contacts.email);
        $("#topContacts, #footerContacts").append(formattedEmail);
        
        var formattedGithubLink = HTMLgithub.replace("#", bio.contacts.githubLink);
        var formattedGithub = formattedGithubLink.replace(data, bio.contacts.github);
        $("#topContacts, #footerContacts").append(formattedGithub);
        
        var formattedTwitterLink = HTMLtwitter.replace("#", bio.contacts.twitterLink);
        var formattedTwitter = formattedTwitterLink.replace(data, bio.contacts.twitter);
        $("#topContacts, #footerContacts").append(formattedTwitter);
        
        var formattedLocationLink =HTMLlocation.replace("#","http://kjwhitla.github.io/#lets-connect");
        var formattedLocation = formattedLocationLink.replace(data, bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedLocation);
    
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);

        if (bio.skills.length > 0) {

            $("#header").append(HTMLskillsStart);

            for (var numSkills = 0; numSkills < bio.skills.length; numSkills++) {
                var skill = HTMLskills.replace("%data%", bio.skills[numSkills]);
                $("#skills").append(skill);

            }
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
            "url": "#"
        },
        {
            "title": "Development Front End",
            "school": "TeamTreehouse",
            "dates": "2011-2017",
            "url": "#"
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
                $("#education").append(formattedSchoolDates );
                $("#education").append(formattedMajor);

            });
        }

        if (education.onlineCourses.length > 0) {

            $("#education").append(HTMLonlineClasses);
            education.onlineCourses.forEach(function (course) {
                
                var formattedCourseTitleLink = HTMLonlineURL.replace("#", course.url);
                var formattedCourseTitle = formattedCourseTitleLink.replace(data, course.title);
                
                var formattedCourseSchool = HTMLonlineSchool.replace(data, course.school);
                var formattedCourseDates = HTMLonlineDates.replace(data, course.dates);
                var URL = HTMLonlineURL.replace(data, course.url);

                $("#education").append(formattedCourseTitle + formattedCourseSchool);
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
            "description": "I am responsible for designing, building, and managing the digital presence and strategy of the IBM Research organization."
        },
        {
            "employer": "GTB (Team Detroit)",
            "title": "Global Implementation Analyst",
            "location": "Dearborn, MI",
            "dates": "Feb, 2014 - Feb, 2015",
            "url": "#",
            "description": "Global Implementation of Analytics for Tier 1 Ford web properties including Apps, multi-lingual websites, and Advertisements."
        }
    ],
    "display": function () {

        if (work.jobs.length > 0) {
               work.jobs.forEach(function(job){
                var employer = HTMLworkEmployer.replace(data, job.employer);
                var myEmployer = employer.replace("#",job.url);
                var myTitle = HTMLworkTitle.replace(data,job.title);
                var workDates = HTMLworkDates.replace(data,job.dates);
                var workLocation = HTMLworkLocation.replace(data,job.location);
                var workDescription = HTMLworkDescription.replace(data,job.description);
                
                $("#workExperience").append(HTMLworkStart);
                $("#workExperience").append(myEmployer + myTitle);
                $("#workExperience").append(workDates);
                $("#workExperience").append(workLocation);
                $("#workExperience").append(workDescription);

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
            "description": "HTML, CSS, JavaScript, WordPress.",
            "images": "../images/project-1.png"
        },
        {
            "title": "BraedenWhitla.com",
            "dates": "Jun, 2016 - present",
            "link": "#",
            "description": "HTML, CSS, jQuery, JavaScript, Bootstrap",
            "images": "../images/project-2.png"
        },
        {
            "title": "Lake Tahoe",
            "dates": "May, 2016",
            "link": "#",
            "description": "HTML, CSS, jQuery, JavaScript, Bootstrap",
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

                $("#projects").append(HTMLprojectStart);
                $("#projects").append(formattedProject);
                $("#projects").append(formattedProjectDates);
                $("#projects").append(formattedProjectDescription);
                $("#projects").append(formattedProjectImages);

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
