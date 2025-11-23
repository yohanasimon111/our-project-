// Youth Empowerment Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initYouthEmpowermentPage();
});

function initYouthEmpowermentPage() {
    // Skills training enrollment
    const enrollButtons = document.querySelectorAll('[data-program]');
    enrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const program = this.getAttribute('data-program');
            enrollInProgram(program);
        });
    });
    
    // Job applications
    const applyButtons = document.querySelectorAll('.apply-job');
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const job = this.getAttribute('data-job');
            applyForJob(job);
        });
    });
    
    // Internship information
    const internshipButtons = document.querySelectorAll('.learn-more-internship');
    internshipButtons.forEach(button => {
        button.addEventListener('click', function() {
            showInternshipDetails();
        });
    });
    
    // View all jobs
    const viewAllJobsBtn = document.querySelector('.view-all-jobs');
    if (viewAllJobsBtn) {
        viewAllJobsBtn.addEventListener('click', viewAllJobs);
    }
    
    // Career counseling
    const bookCounselingBtn = document.getElementById('book-counseling');
    if (bookCounselingBtn) {
        bookCounselingBtn.addEventListener('click', bookCareerCounseling);
    }
    
    const careerAssessmentBtn = document.getElementById('career-assessment');
    if (careerAssessmentBtn) {
        careerAssessmentBtn.addEventListener('click', takeCareerAssessment);
    }
    
    // Entrepreneurship
    const startBusinessBtn = document.getElementById('start-business');
    if (startBusinessBtn) {
        startBusinessBtn.addEventListener('click', startBusinessPlan);
    }
    
    const viewMarketplaceBtn = document.getElementById('view-marketplace');
    if (viewMarketplaceBtn) {
        viewMarketplaceBtn.addEventListener('click', viewMarketplace);
    }
    
    const addListingBtn = document.getElementById('add-listing');
    if (addListingBtn) {
        addListingBtn.addEventListener('click', addMarketplaceListing);
    }
    
    const learnMicrofinanceBtn = document.getElementById('learn-microfinance');
    if (learnMicrofinanceBtn) {
        learnMicrofinanceBtn.addEventListener('click', learnAboutMicrofinance);
    }
}

function enrollInProgram(program) {
    const programNames = {
        'digital-skills': 'Digital Skills Training',
        'vocational': 'Vocational Training Program',
        'business': 'Business Skills Program'
    };
    
    const modal = createEnrollmentForm(program, programNames[program]);
    document.body.appendChild(modal);
}

function applyForJob(job) {
    const jobTitles = {
        'health-worker': 'Community Health Worker',
        'teaching-assistant': 'Teaching Assistant'
    };
    
    const modal = createJobApplication(job, jobTitles[job]);
    document.body.appendChild(modal);
}

function showInternshipDetails() {
    const modal = createInternshipModal();
    document.body.appendChild(modal);
}

function viewAllJobs() {
    const modal = createJobBoard();
    document.body.appendChild(modal);
}

function bookCareerCounseling() {
    const modal = createCounselingBooking();
    document.body.appendChild(modal);
}

function takeCareerAssessment() {
    const modal = createCareerAssessment();
    document.body.appendChild(modal);
}

function startBusinessPlan() {
    const modal = createBusinessPlanWizard();
    document.body.appendChild(modal);
}

function viewMarketplace() {
    const modal = createMarketplace();
    document.body.appendChild(modal);
}

function addMarketplaceListing() {
    const modal = createListingForm();
    document.body.appendChild(modal);
}

function learnAboutMicrofinance() {
    const modal = createMicrofinanceInfo();
    document.body.appendChild(modal);
}

// Modal creation functions
function createEnrollmentForm(program, programName) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Enroll in ${programName}</h2>
            <form id="enrollment-form">
                <div class="form-group">
                    <label for="enroll-name">Full Name</label>
                    <input type="text" id="enroll-name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="enroll-age">Age</label>
                    <input type="number" id="enroll-age" class="form-control" required min="16" max="35">
                </div>
                <div class="form-group">
                    <label for="enroll-education">Education Level</label>
                    <select id="enroll-education" class="form-control" required>
                        <option value="">Select education level</option>
                        <option value="primary">Primary School</option>
                        <option value="secondary">Secondary School</option>
                        <option value="higher">Higher Education</option>
                        <option value="none">No Formal Education</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="enroll-experience">Previous Experience (if any)</label>
                    <textarea id="enroll-experience" class="form-control" placeholder="Describe any relevant experience"></textarea>
                </div>
                <div class="form-group">
                    <label for="enroll-motivation">Why do you want to join this program?</label>
                    <textarea id="enroll-motivation" class="form-control" required></textarea>
                </div>
                <div class="program-details">
                    <h4>Program Details:</h4>
                    <p><strong>Duration:</strong> ${getProgramDuration(program)}</p>
                    <p><strong>Schedule:</strong> ${getProgramSchedule(program)}</p>
                    <p><strong>Location:</strong> Youth Center, Sector B</p>
                </div>
                <button type="submit" class="btn btn-primary">Submit Enrollment</button>
            </form>
        </div>
    `;
    
    setupModalClose(modal);
    
    const form = modal.querySelector('#enrollment-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification(`Enrollment submitted for ${programName}! We will contact you with next steps.`, 'success');
        modal.style.display = 'none';
    });
    
    return modal;
}

function createJobApplication(job, jobTitle) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Apply for ${jobTitle}</h2>
            <form id="job-application-form">
                <div class="form-group">
                    <label for="applicant-name">Full Name</label>
                    <input type="text" id="applicant-name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="applicant-contact">Contact Information</label>
                    <input type="text" id="applicant-contact" class="form-control" required placeholder="Phone number or email">
                </div>
                <div class="form-group">
                    <label for="applicant-education">Education</label>
                    <textarea id="applicant-education" class="form-control" required></textarea>
                </div>
                <div class="form-group">
                    <label for="applicant-experience">Work Experience</label>
                    <textarea id="applicant-experience" class="form-control" required></textarea>
                </div>
                <div class="form-group">
                    <label for="applicant-skills">Relevant Skills</label>
                    <textarea id="applicant-skills" class="form-control" required></textarea>
                </div>
                <div class="form-group">
                    <label for="applicant-availability">Availability</label>
                    <select id="applicant-availability" class="form-control" required>
                        <option value="">Select availability</option>
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                        <option value="flexible">Flexible</option>
                    </select>
                </div>
                <div class="job-details">
                    <h4>Job Requirements:</h4>
                    <p>${getJobRequirements(job)}</p>
                </div>
                <button type="submit" class="btn btn-primary">Submit Application</button>
            </form>
        </div>
    `;
    
    setupModalClose(modal);
    
    const form = modal.querySelector('#job-application-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification(`Application submitted for ${jobTitle}! We will contact you if selected for interview.`, 'success');
        modal.style.display = 'none';
    });
    
    return modal;
}

function createInternshipModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-modal">&times;</span>
            <h2>Internship Programs</h2>
            <div class="internship-details">
                <div class="internship-program">
                    <h4>NGO Administration Internship</h4>
                    <p><strong>Duration:</strong> 3 months</p>
                    <p><strong>Stipend:</strong> Provided</p>
                    <p><strong>Learning Outcomes:</strong></p>
                    <ul>
                        <li>Office management skills</li>
                        <li>Project coordination</li>
                        <li>Communication and reporting</li>
                        <li>NGO operations understanding</li>
                    </ul>
                    <button class="btn btn-primary apply-internship">Apply Now</button>
                </div>
                <div class="internship-program">
                    <h4>Community Development Internship</h4>
                    <p><strong>Duration:</strong> 4 months</p>
                    <p><strong>Stipend:</strong> Provided</p>
                    <p><strong>Learning Outcomes:</strong></p>
                    <ul>
                        <li>Community engagement</li>
                        <li>Project planning and implementation</li>
                        <li>Monitoring and evaluation</li>
                        <li>Stakeholder coordination</li>
                    </ul>
                    <button class="btn btn-primary apply-internship">Apply Now</button>
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    
    const applyBtns = modal.querySelectorAll('.apply-internship');
    applyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showNotification('Internship application form opened in new window.', 'info');
            // In real implementation, this would open the application form
        });
    });
    
    return modal;
}

function createJobBoard() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <span class="close-modal">&times;</span>
            <h2>Job Opportunities</h2>
            <div class="job-filters">
                <input type="text" placeholder="Search jobs..." class="form-control" style="margin-bottom: 15px;">
                <select class="form-control" style="margin-bottom: 15px;">
                    <option>All Categories</option>
                    <option>Education</option>
                    <option>Healthcare</option>
                    <option>Administration</option>
                    <option>Skilled Labor</option>
                </select>
            </div>
            <div class="jobs-list">
                <div class="job-posting">
                    <h4>Community Health Worker</h4>
                    <p><strong>Organization:</strong> Health Center</p>
                    <p><strong>Location:</strong> Sector A</p>
                    <p><strong>Type:</strong> Full-time</p>
                    <p><strong>Posted:</strong> 2 days ago</p>
                    <button class="btn btn-sm btn-primary">Apply Now</button>
                </div>
                <div class="job-posting">
                    <h4>Teaching Assistant</h4>
                    <p><strong>Organization:</strong> Education Center</p>
                    <p><strong>Location:</strong> Sector B</p>
                    <p><strong>Type:</strong> Part-time</p>
                    <p><strong>Posted:</strong> 1 week ago</p>
                    <button class="btn btn-sm btn-primary">Apply Now</button>
                </div>
                <div class="job-posting">
                    <h4>Construction Assistant</h4>
                    <p><strong>Organization:</strong> Shelter Program</p>
                    <p><strong>Location:</strong> Various Sectors</p>
                    <p><strong>Type:</strong> Full-time</p>
                    <p><strong>Posted:</strong> 3 days ago</p>
                    <button class="btn btn-sm btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    return modal;
}

function createCounselingBooking() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Book Career Counseling Session</h2>
            <form id="counseling-booking-form">
                <div class="form-group">
                    <label for="counseling-name">Full Name</label>
                    <input type="text" id="counseling-name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="counseling-age">Age</label>
                    <input type="number" id="counseling-age" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="counseling-interests">Career Interests</label>
                    <textarea id="counseling-interests" class="form-control" required placeholder="What type of work are you interested in?"></textarea>
                </div>
                <div class="form-group">
                    <label for="counseling-questions">Specific Questions or Concerns</label>
                    <textarea id="counseling-questions" class="form-control" placeholder="What would you like to discuss with the counselor?"></textarea>
                </div>
                <div class="form-group">
                    <label for="counseling-preferred-time">Preferred Time</label>
                    <select id="counseling-preferred-time" class="form-control" required>
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                        <option value="evening">Evening (5 PM - 7 PM)</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Book Session</button>
            </form>
        </div>
    `;
    
    setupModalClose(modal);
    
    const form = modal.querySelector('#counseling-booking-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Career counseling session booked! You will receive confirmation within 24 hours.', 'success');
        modal.style.display = 'none';
    });
    
    return modal;
}

function createCareerAssessment() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-modal">&times;</span>
            <h2>Career Interest Assessment</h2>
            <div class="assessment-progress">
                <div class="progress-bar">
                    <div class="progress" style="width: 0%"></div>
                </div>
                <span>Question 1 of 5</span>
            </div>
            <div class="assessment-questions">
                <div class="question active">
                    <h4>What type of work environment do you prefer?</h4>
                    <div class="options">
                        <label><input type="radio" name="q1" value="office"> Office/Indoor work</label>
                        <label><input type="radio" name="q1" value="outdoor"> Outdoor/Physical work</label>
                        <label><input type="radio" name="q1" value="creative"> Creative/Artistic work</label>
                        <label><input type="radio" name="q1" value="helping"> Helping people directly</label>
                    </div>
                    <button class="btn btn-primary next-question">Next</button>
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    return modal;
}

function createBusinessPlanWizard() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-modal">&times;</span>
            <h2>Start Your Business Plan</h2>
            <div class="business-wizard">
                <div class="wizard-step active">
                    <h4>Business Idea</h4>
                    <div class="form-group">
                        <label>What type of business do you want to start?</label>
                        <select class="form-control" id="business-type">
                            <option value="">Select business type</option>
                            <option value="retail">Retail/Sales</option>
                            <option value="service">Service Business</option>
                            <option value="production">Production/Manufacturing</option>
                            <option value="food">Food Business</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Describe your business idea</label>
                        <textarea class="form-control" id="business-idea"></textarea>
                    </div>
                    <button class="btn btn-primary next-step">Next</button>
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    return modal;
}

function createMarketplace() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <span class="close-modal">&times;</span>
            <h2>Youth Marketplace</h2>
            <div class="marketplace-items">
                <div class="marketplace-item">
                    <h4>Handmade Baskets</h4>
                    <p><strong>Seller:</strong> Marie</p>
                    <p><strong>Price:</strong> 2,000 RWF</p>
                    <p>Beautiful traditional baskets made from local materials</p>
                    <button class="btn btn-sm btn-primary">Contact Seller</button>
                </div>
                <div class="marketplace-item">
                    <h4>Tailoring Services</h4>
                    <p><strong>Seller:</strong> Jean</p>
                    <p><strong>Price:</strong> Custom quotes</p>
                    <p>Custom clothing and alterations</p>
                    <button class="btn btn-sm btn-primary">Contact Seller</button>
                </div>
                <div class="marketplace-item">
                    <h4>Fresh Vegetables</h4>
                    <p><strong>Seller:</strong> Youth Garden Group</p>
                    <p><strong>Price:</strong> Varies by item</p>
                    <p>Fresh produce from our community garden</p>
                    <button class="btn btn-sm btn-primary">Contact Seller</button>
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    return modal;
}

function createListingForm() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Add Your Product/Service</h2>
            <form id="listing-form">
                <div class="form-group">
                    <label for="listing-title">Product/Service Name</label>
                    <input type="text" id="listing-title" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="listing-description">Description</label>
                    <textarea id="listing-description" class="form-control" required></textarea>
                </div>
                <div class="form-group">
                    <label for="listing-price">Price (RWF)</label>
                    <input type="number" id="listing-price" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="listing-category">Category</label>
                    <select id="listing-category" class="form-control" required>
                        <option value="">Select category</option>
                        <option value="crafts">Handicrafts</option>
                        <option value="food">Food Items</option>
                        <option value="services">Services</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="listing-contact">Contact Information</label>
                    <input type="text" id="listing-contact" class="form-control" required placeholder="How should buyers contact you?">
                </div>
                <button type="submit" class="btn btn-primary">Add Listing</button>
            </form>
        </div>
    `;
    
    setupModalClose(modal);
    
    const form = modal.querySelector('#listing-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Your listing has been added to the marketplace!', 'success');
        modal.style.display = 'none';
    });
    
    return modal;
}

function createMicrofinanceInfo() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <span class="close-modal">&times;</span>
            <h2>Micro-finance Support</h2>
            <div class="microfinance-info">
                <h4>Available Loan Programs:</h4>
                <div class="loan-program">
                    <h5>Small Business Startup Loan</h5>
                    <p><strong>Amount:</strong> Up to 50,000 RWF</p>
                    <p><strong>Term:</strong> 6 months</p>
                    <p><strong>Interest:</strong> 5%</p>
                </div>
                <div class="loan-program">
                    <h5>Business Expansion Loan</h5>
                    <p><strong>Amount:</strong> Up to 100,000 RWF</p>
                    <p><strong>Term:</strong> 12 months</p>
                    <p><strong>Interest:</strong> 7%</p>
                </div>
                <div class="eligibility">
                    <h4>Eligibility Requirements:</h4>
                    <ul>
                        <li>Age 18-35 years</li>
                        <li>Resident of Mahama Camp</li>
                        <li>Completed business training</li>
                        <li>Viable business plan</li>
                    </ul>
                </div>
                <button class="btn btn-primary apply-loan">Apply for Loan</button>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    
    const applyBtn = modal.querySelector('.apply-loan');
    applyBtn.addEventListener('click', function() {
        showNotification('Loan application form will open in a new window.', 'info');
    });
    
    return modal;
}

// Helper functions
function getProgramDuration(program) {
    const durations = {
        'digital-skills': '6 weeks',
        'vocational': '3-6 months',
        'business': '8 weeks'
    };
    return durations[program] || 'Varies';
}

function getProgramSchedule(program) {
    const schedules = {
        'digital-skills': 'Monday-Wednesday-Friday, 2-4 PM',
        'vocational': 'Monday-Friday, 9 AM-12 PM',
        'business': 'Tuesday-Thursday, 3-5 PM'
    };
    return schedules[program] || 'To be scheduled';
}

function getJobRequirements(job) {
    const requirements = {
        'health-worker': 'Basic education, willingness to learn, good communication skills. Training will be provided.',
        'teaching-assistant': 'Secondary education completed, patience with children, basic literacy and numeracy skills.'
    };
    return requirements[job] || 'Requirements vary by position.';
}

function setupModalClose(modal) {
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}