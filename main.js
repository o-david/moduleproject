const material = [
    {
        moduleName: "Getting started",
        topics: [
            {
                topicName: "Introduction",
                lessons: [
                    {
                        lessonName: "Before We Begin",
                        resources: [
                            {
                                resourceName: "LPDF",
                                resourceLink: "https://www.google.com"
                            },
                            {
                                resourceName: "LZIP",
                                resourceLink: "https://www.google.com"
                            }
                        ]
                    },
                    {
                        lessonName: "How To use this course",
                        resources: [
                            {
                                resourceName: "Post PDF",
                                resourceLink: "https://www.google.com"
                            },
                            {
                                resourceName: "Post2 PDF",
                                resourceLink: "https://www.google.com"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        moduleName: "Check Fundamentals",
        topics: [
            {
                topicName: "M-get-started",
            },
            {
                topicName: "M-resources",
            }
        ]
    }
];
// Get the container element
const content = document.getElementById('content');

// Create the main unordered list
const mainUl = document.createElement('ul');
content.appendChild(mainUl);

// Iterate through the material array
material.forEach(module => {
    // Create and append module list item
    const moduleLi = document.createElement('li');
    moduleLi.textContent = `Module: ${module.moduleName}`;
    mainUl.appendChild(moduleLi);

    // Create sublist for topics
    const topicUl = document.createElement('ul');
    topicUl.classList.add('topic');
    moduleLi.appendChild(topicUl);

    // Check if topics exist and iterate through them
    if (module.topics) {
        module.topics.forEach(topic => {
            // Create and append topic list item
            const topicLi = document.createElement('li');
            topicLi.textContent = `Topic: ${topic.topicName}`;
            topicUl.appendChild(topicLi);

            // Create sublist for lessons
            const lessonUl = document.createElement('ul');
            lessonUl.classList.add('lesson');
            topicLi.appendChild(lessonUl);

            // Check if lessons exist and iterate through them
            if (topic.lessons) {
                topic.lessons.forEach(lesson => {
                    // Create and append lesson list item
                    const lessonLi = document.createElement('li');
                    lessonLi.textContent = `Lesson: ${lesson.lessonName}`;
                    lessonUl.appendChild(lessonLi);

                    // Create sublist for resources
                    const resourceUl = document.createElement('ul');
                    resourceUl.classList.add('resource');
                    lessonLi.appendChild(resourceUl);

                    // Check if resources exist and iterate through them
                    if (lesson.resources) {
                        lesson.resources.forEach(resource => {
                            // Create and append resource list item
                            const resourceLi = document.createElement('li');
                            resourceLi.innerHTML = `Resource: <a href="${resource.resourceLink}" target="_blank">${resource.resourceName}</a>`;
                            resourceUl.appendChild(resourceLi);
                        });
                    }
                });
            }
        });
    }
});
