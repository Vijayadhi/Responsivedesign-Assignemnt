const resume_data = {
    "personal_info":{
        "name":"Vigneshwaran J",
        "email":"venerablevignesh@gmail.com",
        "phone":6380661438,
        "website":"mastercodeaddict.me",
        "address":"697/1, Thirupathi venkateshwara nagar, Manaveli, Thiruvanthipuram, Cuddalore"
    },
    "education":{
        "degree":"Bachelor of Science in Infromation Technology",
        "CGP":7.9,
        "college":"Achariya Arts and Science college",
        "University": "Pondicherry University"
    },
    "experience":{
        "Full Stack Developer":"Bug Hunt Technologies",
        "experience_":"1 year",
        "Hardware Technician": "6 months",
        "ui&ux Designer": "6 monts"
    }
}


for(let i=0; i<resume_data.length; i++){
    console.log(i)
}

for(data in resume_data){
    console.log(resume_data[data]);
}


for (const section in resume_data) {
    console.log("======"+`${section.toLocaleUpperCase()}`+"======");
    const data = resume_data[section];
    for (const key in data) {
        console.log(`${key.toLocaleUpperCase()}: ${data[key]}`);
    }
}

for (const [header,content] of Object.entries(resume_data)) {
    console.log(`${header.toLocaleUpperCase()}: `,content)
    
}
// console.log(Object.entries(resume_data));

Object.entries(resume_data).forEach(([section, details]) => {
    console.log(section + ':');
    if (typeof details === 'object' && details !== null) {
        Object.entries(details).forEach(([key, value]) => {
            console.log(`  ${key}: ${value}`);
        });
    }
});