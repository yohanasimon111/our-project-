// Mental Wellness Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initMentalWellnessPage();
});

function initMentalWellnessPage() {
    // Crisis chat
    const crisisChatBtn = document.getElementById('crisis-chat');
    if (crisisChatBtn) {
        crisisChatBtn.addEventListener('click', startCrisisChat);
    }
    
    // Counseling request
    const counselingBtn = document.getElementById('request-counseling');
    if (counselingBtn) {
        counselingBtn.addEventListener('click', requestCounseling);
    }
    
    // Group sessions
    const viewGroupsBtn = document.getElementById('view-groups');
    if (viewGroupsBtn) {
        viewGroupsBtn.addEventListener('click', viewAllGroups);
    }
    
    // Emergency support
    const emergencySupportBtn = document.getElementById('emergency-support');
    if (emergencySupportBtn) {
        emergencySupportBtn.addEventListener('click', getEmergencySupport);
    }
    
    // Community support
    const findCommunityBtn = document.getElementById('find-community');
    if (findCommunityBtn) {
        findCommunityBtn.addEventListener('click', findCommunity);
    }
    
    const shareStoryBtn = document.getElementById('share-story');
    if (shareStoryBtn) {
        shareStoryBtn.addEventListener('click', shareStory);
    }
    
    // Wellness circles
    const circleTypeBtns = document.querySelectorAll('.circle-type');
    circleTypeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            joinWellnessCircle(type);
        });
    });
    
    // Peer listening
    const peerTalkBtn = document.getElementById('talk-to-peer');
    if (peerTalkBtn) {
        peerTalkBtn.addEventListener('click', talkToPeer);
    }
    
    // Coping tools
    const copingToolBtns = document.querySelectorAll('.coping-tool');
    copingToolBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tool = this.getAttribute('data-tool');
            showCopingTool(tool);
        });
    });
    
    // Activities
    const viewActivitiesBtn = document.getElementById('view-activities');
    if (viewActivitiesBtn) {
        viewActivitiesBtn.addEventListener('click', viewActivitiesSchedule);
    }
    
    // Educational resources
    const mentalHealthBtn = document.getElementById('mental-health-info');
    if (mentalHealthBtn) {
        mentalHealthBtn.addEventListener('click', showMentalHealthInfo);
    }
    
    const parentingBtn = document.getElementById('parenting-support');
    if (parentingBtn) {
        parentingBtn.addEventListener('click', showParentingResources);
    }
    
    const traumaBtn = document.getElementById('trauma-resources');
    if (traumaBtn) {
        traumaBtn.addEventListener('click', showTraumaResources);
    }
}

function startCrisisChat() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 400px;">
            <span class="close-modal">&times;</span>
            <h2>Crisis Support Chat</h2>
            <div class="crisis-chat">
                <div class="chat-messages" style="height: 200px; border: 1px solid #ddd; padding: 10px; margin-bottom: 15px; overflow-y: auto; background: #f9f9f9;">
                    <div class="message system">
                        <strong>Crisis Support:</strong> Hello, I'm here to help. What's going on that brought you to chat today?
                    </div>
                </div>
                <div class="chat-input">
                    <input type="text" class="form-control" placeholder="Type your message..." id="crisis-message">
                    <button class="btn btn-primary" id="send-crisis-message" style="margin-top: 10px;">Send</button>
                </div>
                <div class="crisis-resources" style="margin-top: 15px; padding: 10px; background: #fff3cd; border-radius: 4px;">
                    <p><strong>Remember:</strong> You're not alone. If you need immediate help, call +250 788 555 789</p>
                </div>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    
    const sendBtn = modal.querySelector('#send-crisis-message');
    const messageInput = modal.querySelector('#crisis-message');
    const chatMessages = modal.querySelector('.chat-messages');
    
    sendBtn.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message) {
            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'message user';
            userMessage.innerHTML = `<strong>You:</strong> ${message}`;
            userMessage.style.textAlign = 'right';
            userMessage.style.marginBottom = '10px';
            chatMessages.appendChild(userMessage);
            
            // Clear input
            messageInput.value = '';
            
            // Simulate response
            setTimeout(() => {
                const responses = [
                    "Thank you for sharing that with me. It sounds really difficult.",
                    "I'm here to listen. Can you tell me more about how you're feeling?",
                    "That sounds overwhelming. Have you been able to get any support?",
                    "I understand this is hard. Remember that your feelings are valid.",
                    "Would you like to talk about what might help you feel a bit better?"
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                
                const systemMessage = document.createElement('div');
                systemMessage.className = 'message system';
                systemMessage.innerHTML = `<strong>Crisis Support:</strong> ${randomResponse}`;
                systemMessage.style.marginBottom = '10px';
                chatMessages.appendChild(systemMessage);
                
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    });
    
    // Send on Enter key
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
    
    document.body.appendChild(modal);
}

function requestCounseling() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Request Counseling</h2>
            <form id="counseling-request-form">
                <div class="form-group">
                    <label for="counseling-name">Your Name (Optional)</label>
                    <input type="text" id="counseling-name" class="form-control">
                </div>
                <div class="form-group">
                    <label for="counseling-reason">What would you like to discuss?</label>
                    <select id="counseling-reason" class="form-control" required>
                        <option value="">Select reason</option>
                        <option value="trauma">Trauma or past experiences</option>
                        <option value="anxiety">Anxiety or stress</option>
                        <option value="depression">Sadness or depression</option>
                        <option value="relationships">Relationship issues</option>
                        <option value="parenting">Parenting challenges</option>
                        <option value="other">Other concerns</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="counseling-preferences">Preferences</label>
                    <div class="checkbox-group">
                        <label><input type="checkbox" name="preference" value="male"> Prefer male counselor</label>
                        <label><input type="checkbox" name="preference" value="female"> Prefer female counselor</label>
                        <label><input type="checkbox" name="preference" value="group"> Interested in group sessions</label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="counseling-language">Preferred Language</label>
                    <select id="counseling-language" class="form-control" required>
                        <option value="kinyarwanda">Kinyarwanda</option>
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="swahili">Swahili</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="counseling-availability">When are you available?</label>
                    <select id="counseling-availability" class="form-control" required>
                        <option value="">Select availability</option>
                        <option value="morning">Mornings (8 AM - 12 PM)</option>
                        <option value="afternoon">Afternoons (1 PM - 5 PM)</option>
                        <option value="evening">Evenings (5 PM - 7 PM)</option>
                    </select>
                </div>
                <div class="confidentiality-notice">
                    <p><strong>🔒 Confidential:</strong> All counseling sessions are private and confidential.</p>
                </div>
                <button type="submit" class="btn btn-primary">Submit Request</button>
            </form>
        </div>
    `;
    
    setupModalClose(modal);
    
    const form = modal.querySelector('#counseling-request-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Counseling request submitted! A counselor will contact you within 48 hours.', 'success');
        modal.style.display = 'none';
    });
    
    document.body.appendChild(modal);
}

function getEmergencySupport() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>Emergency Mental Health Support</h2>
            <div class="emergency-options">
                <div class="emergency-option">
                    <h4>🚨 Immediate Help</h4>
                    <p>If you're in crisis or having thoughts of harming yourself:</p>
                    <a href="tel:+250788555789" class="btn btn-emergency">Call Crisis Hotline Now</a>
                </div>
                <div class="emergency-option">
                    <h4>🏥 Urgent Care</h4>
                    <p>For immediate in-person support:</p>
                    <p><strong>Location:</strong> Mental Health Clinic, Sector A</p>
                    <p><strong>Hours:</strong> 24/7 for emergencies</p>
                    <button class="btn btn-primary get-directions">Get Directions</button>
                </div>
                <div class="emergency-option">
                    <h4>💬 Crisis Chat</h4>
                    <p>Immediate text-based support:</p>
                    <button class="btn btn-outline start-crisis-chat">Start Crisis Chat</button>
                </div>
            </div>
            <div class="safety-plan">
                <h4>Safety First:</h4>
                <ul>
                    <li>You are not alone</li>
                    <li>Your feelings are valid</li>
                    <li>Help is available</li>
                    <li>This difficult moment will pass</li>
                </ul>
            </div>
        </div>
    `;
    
    setupModalClose(modal);
    
    const crisisChatBtn = modal.querySelector('.start-crisis-chat');
    crisisChatBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        startCrisisChat();
    });
    
    const directionsBtn = modal.querySelector('.get-directions');
    directionsBtn.addEventListener('click', function() {
        showNotification('Directions to Mental Health Clinic sent to your device.', 'info');
    });
    
    document.body.appendChild(modal);
}

function showCopingTool(tool) {
    const tools = {
        'breathing': {
            title: 'Breathing Exercise',
            content: `
                <h4>4-7-8 Breathing Technique:</h4>
                <ol>
                    <li>Breathe in through your nose for 4 seconds</li>
                    <li>Hold your breath for 7 seconds</li>
                    <li>Exhale slowly through your mouth for 8 seconds</li>
                    <li>Repeat 3-5 times</li>
                </ol>
                <div class="breathing-animation" style="text-align: center; margin: 20px 0;">
                    <div style="width: 100px; height: 100px; border: 3px solid #007BFF; border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; animation: breathe 8s infinite;">
                        <span style="font-size: 14px;">Breathe</span>
                    </div>
                </div>
                <style>
                    @keyframes breathe {
                        0% { transform: scale(0.8); }
                        25% { transform: scale(1.2); }
                        50% { transform: scale(1.2); }
                        75% { transform: scale(0.8); }
                        100% { transform: scale(0.8); }
                    }
                </style>
            `
        },
        'grounding': {
            title: 'Grounding Techniques',
            content: `
                <h4>5-4-3-2-1 Grounding:</h4>
                <p>When feeling overwhelmed, name:</p>
                <ol>
                    <li>5 things you can see</li>
                    <li>4 things you can touch</li>
                    <li>3 things you can hear</li>
                    <li>2 things you can smell</li>
                    <li>1 thing you can taste</li>
                </ol>
                <h4>Body Awareness:</h4>
                <p>Focus on physical sensations - feel your feet on the ground, notice your breathing, feel the air on your skin.</p>
            `
        },
        'mindfulness': {
            title: 'Mindfulness Practice',
            content: `
                <h4>Simple Mindfulness Exercise:</h4>
                <ol>
                    <li>Find a comfortable position</li>
                    <li>Close your eyes or soften your gaze</li>
                    <li>Notice your breath without changing it</li>
                    <li>When your mind wanders, gently return to your breath</li>
                    <li>Continue for 2-5 minutes</li>
                </ol>
                <h4>Mindful Observation:</h4>
                <p>Choose an object nearby and observe it with full attention for one minute. Notice its color, texture, shape, and details.</p>
            `
        }
    };
    
    const toolInfo = tools[tool];
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            <h2>${toolInfo.title}</h2>
            <div class="coping-tool-content">
                ${toolInfo.content}
            </div>
            <button class="btn btn-primary practice-tool">Practice Now</button>
        </div>
    `;
    
    setupModalClose(modal);
    
    const practiceBtn = modal.querySelector('.practice-tool');
    practiceBtn.addEventListener('click', function() {
        showNotification('Starting guided practice session...', 'info');
        // In a real implementation, this would start a guided exercise
    });
    
    document.body.appendChild(modal);
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