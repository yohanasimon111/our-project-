// Hunger Help Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initHungerHelpPage();
});

function initHungerHelpPage() {
    // Food request modal functionality
    const foodRequestModal = document.getElementById('food-request-modal');
    const openFoodFormBtn = document.getElementById('open-food-form');
    const closeBtn = document.querySelector('.close');
    const foodRequestForm = document.getElementById('food-request-form');
    
    if (openFoodFormBtn) {
        openFoodFormBtn.addEventListener('click', function() {
            foodRequestModal.style.display = 'block';
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            foodRequestModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === foodRequestModal) {
            foodRequestModal.style.display = 'none';
        }
    });
    
    // Food request form submission
    if (foodRequestForm) {
        foodRequestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const familySize = document.getElementById('family-size').value;
            const urgencyLevel = document.getElementById('urgency-level').value;
            const location = document.getElementById('location').value;
            
            // In a real application, this would send data to a server
            // For demonstration, we'll just show a success message
            showNotification(`Food request submitted for ${familySize} people in ${location}. We'll contact you soon.`, 'success');
            
            // Close modal and reset form
            foodRequestModal.style.display = 'none';
            foodRequestForm.reset();
        });
    }
    
    // Nutrition information buttons
    const nutritionButtons = [
        document.getElementById('show-nutrition-tips'),
        document.getElementById('show-child-nutrition'),
        document.getElementById('show-food-safety')
    ];
    
    nutritionButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', function() {
                const topic = this.id.replace('show-', '').replace('-', ' ');
                showNutritionInfo(topic);
            });
        }
    });
    
    // Initialize distribution map (simulated)
    initDistributionMap();
}

function showNutritionInfo(topic) {
    // In a real implementation, this would fetch and display detailed information
    // For now, we'll show a modal with sample content
    
    const nutritionInfo = {
        'nutrition tips': `
            <h3>Healthy Eating Tips</h3>
            <ul>
                <li>Eat a variety of foods when possible</li>
                <li>Include fruits and vegetables in your diet</li>
                <li>Drink plenty of clean water</li>
                <li>Practice proper food hygiene</li>
                <li>Breastfeed infants for the first 6 months</li>
            </ul>
        `,
        'child nutrition': `
            <h3>Child Nutrition Guidelines</h3>
            <ul>
                <li>Exclusive breastfeeding for first 6 months</li>
                <li>Introduce complementary foods at 6 months</li>
                <li>Ensure adequate protein and micronutrients</li>
                <li>Watch for signs of malnutrition</li>
                <li>Visit health clinics for growth monitoring</li>
            </ul>
        `,
        'food safety': `
            <h3>Food Safety Guidelines</h3>
            <ul>
                <li>Wash hands before handling food</li>
                <li>Keep raw and cooked foods separate</li>
                <li>Cook food thoroughly</li>
                <li>Store food at safe temperatures</li>
                <li>Use safe water for cooking and drinking</li>
            </ul>
        `
    };
    
    const content = nutritionInfo[topic] || '<p>Information not available.</p>';
    
    // Create and show modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="close-modal">&times;</span>
            ${content}
            <button class="btn btn-primary" style="margin-top: 20px;">Close</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    const closeButton = modal.querySelector('.btn');
    
    function closeModal() {
        document.body.removeChild(modal);
    }
    
    closeBtn.addEventListener('click', closeModal);
    closeButton.addEventListener('click', closeModal);
    
    // Close when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function initDistributionMap() {
    // In a real implementation, this would initialize an interactive map
    // For demonstration, we'll create a simple representation
    
    const mapContainer = document.getElementById('distribution-map');
    if (mapContainer) {
        mapContainer.innerHTML = `
            <div style="background-color: #e9ecef; padding: 20px; border-radius: 8px; text-align: center;">
                <h4>Food Distribution Points</h4>
                <div style="display: flex; justify-content: space-around; margin-top: 15px;">
                    <div>
                        <div style="width: 20px; height: 20px; background-color: #007BFF; border-radius: 50%; display: inline-block; margin-right: 8px;"></div>
                        <span>Sector A</span>
                    </div>
                    <div>
                        <div style="width: 20px; height: 20px; background-color: #4CAF50; border-radius: 50%; display: inline-block; margin-right: 8px;"></div>
                        <span>Sector B</span>
                    </div>
                    <div>
                        <div style="width: 20px; height: 20px; background-color: #FFD93D; border-radius: 50%; display: inline-block; margin-right: 8px;"></div>
                        <span>Sector C</span>
                    </div>
                </div>
                <p style="margin-top: 15px; font-size: 0.9rem;">Click on a location to see details</p>
            </div>
        `;
        
        // Add click functionality to distribution points
        const points = mapContainer.querySelectorAll('div > div');
        points.forEach(point => {
            point.style.cursor = 'pointer';
            point.addEventListener('click', function() {
                const sector = this.querySelector('span').textContent;
                showNotification(`Selected ${sector} distribution point. Open Monday, Wednesday, Friday from 9 AM to 12 PM.`, 'info');
            });
        });
    }
}

// Add modal styles if not already present
if (!document.querySelector('#modal-styles')) {
    const modalStyles = document.createElement('style');
    modalStyles.id = 'modal-styles';
    modalStyles.textContent = `
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.4);
        }
        
        .modal-content {
            background-color: #fefefe;
            margin: 5% auto;
            padding: 20px;
            border-radius: 8px;
            width: 80%;
            max-width: 600px;
            position: relative;
        }
        
        .close, .close-modal {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            line-height: 1;
        }
        
        .close:hover, .close-modal:hover {
            color: #000;
        }
    `;
    document.head.appendChild(modalStyles);
}