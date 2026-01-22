// assets/js/results.js
// Results page functionality

document.addEventListener('DOMContentLoaded', function() {
    initResultsPage();
});

function initResultsPage() {
    loadResults();
    initResultFilters();
    initShareButtons();
    initPrintButton();
    initNavigation();
}

function loadResults() {
    const results = utils.getLocalStorage('test_results') || [];
    const urlParams = utils.getUrlParams();
    const resultId = urlParams.id || urlParams.testId;
    
    if (resultId && results.length > 0) {
        // Load specific result
        const result = results.find(r => r.testId === resultId);
        if (result) {
            displayResult(result);
            return;
        }
    }
    
    // Load latest result
    if (results.length > 0) {
        displayResult(results[0]);
    } else {
        showNoResults();
    }
}

function displayResult(resultData) {
    const result = resultData.result;
    
    // Update score
    document.getElementById('scoreValue')?.textContent = `${result.score}/${result.maxScore}`;
    document.getElementById('scorePercentage')?.textContent = `${result.percentage.toFixed(1)}%`;
    
    // Update score circle
    const scoreCircle = document.getElementById('scoreCircle');
    if (scoreCircle) {
        scoreCircle.style.setProperty('--percentage', `${result.percentage}%`);
    }
    
    // Update stats
    updateStat('correctCount', result.correct);
    updateStat('incorrectCount', result.incorrect);
    updateStat('skippedCount', result.skipped);
    updateStat('accuracy', ((result.correct / (result.correct + result.incorrect)) * 100).toFixed(1) + '%');
    updateStat('timeTaken', utils.formatTime(result.timeTaken));
    updateStat('score', result.score);
    
    // Update test info
    document.getElementById('testTitle')?.textContent = resultData.testTitle;
    document.getElementById('testDate')?.textContent = new Date(resultData.date).toLocaleDateString();
    
    // Generate question review
    generateQuestionReview(resultData);
    
    // Generate section breakdown
    generateSectionBreakdown(resultData);
    
    // Update share URL
    updateShareUrl(resultData.testId);
}

function updateStat(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = value;
    }
}

function generateQuestionReview(resultData) {
    const container = document.getElementById('questionReview');
    if (!container) return;
    
    const questions = resultData.config?.questions || [];
    const result = resultData.result;
    
    container.innerHTML = '';
    
    questions.forEach((question, index) => {
        const userAnswer = result.answers[index];
        const isCorrect = userAnswer === question.correct;
        const isSkipped = userAnswer === undefined;
        
        const questionElement = document.createElement('div');
        questionElement.className = `review-item ${isCorrect ? 'correct' : isSkipped ? 'skipped' : 'incorrect'}`;
        
        questionElement.innerHTML = `
            <div class="review-header">
                <div class="review-question">Q${index + 1}: ${question.question.substring(0, 100)}...</div>
                <div class="review-status ${isCorrect ? 'correct' : isSkipped ? 'skipped' : 'incorrect'}">
                    ${isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Incorrect'}
                </div>
            </div>
            <div class="review-details" style="display: none;">
                <div class="question-full">${question.question}</div>
                <div class="options-review">
                    ${question.options.map((opt, optIndex) => `
                        <div class="option-review ${optIndex === question.correct ? 'correct-option' : ''} 
                                                    ${optIndex === userAnswer && optIndex !== question.correct ? 'user-answer' : ''}">
                            ${String.fromCharCode(65 + optIndex)}. ${opt}
                            ${optIndex === question.correct ? ' ✓' : ''}
                            ${optIndex === userAnswer && optIndex !== question.correct ? ' ✗' : ''}
                        </div>
                    `).join('')}
                </div>
                ${question.solution ? `
                    <div class="solution-review">
                        <h5>Solution:</h5>
                        <div>${question.solution}</div>
                    </div>
                ` : ''}
            </div>
            <button class="btn btn-sm btn-outline toggle-details">Show Details</button>
        `;
        
        container.appendChild(questionElement);
        
        // Add toggle functionality
        const toggleBtn = questionElement.querySelector('.toggle-details');
        const details = questionElement.querySelector('.review-details');
        
        toggleBtn.addEventListener('click', function() {
            if (details.style.display === 'none') {
                details.style.display = 'block';
                this.textContent = 'Hide Details';
            } else {
                details.style.display = 'none';
                this.textContent = 'Show Details';
            }
        });
    });
}

function generateSectionBreakdown(resultData) {
    const container = document.getElementById('sectionBreakdown');
    if (!container) return;
    
    // This would need section data from the test
    // For now, create a placeholder
    container.innerHTML = `
        <div class="section-item">
            <div class="section-name">
                <div class="section-icon quant"><i class="fas fa-calculator"></i></div>
                <span>Quantitative Aptitude</span>
            </div>
            <div class="section-score">15/25</div>
        </div>
        <div class="section-item">
            <div class="section-name">
                <div class="section-icon reasoning"><i class="fas fa-brain"></i></div>
                <span>Logical Reasoning</span>
            </div>
            <div class="section-score">18/25</div>
        </div>
    `;
}

function initResultFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter questions
            const filter = this.dataset.filter;
            filterQuestions(filter);
        });
    });
}

function filterQuestions(filter) {
    const questions = document.querySelectorAll('.review-item');
    
    questions.forEach(question => {
        switch(filter) {
            case 'all':
                question.style.display = 'flex';
                break;
            case 'correct':
                question.style.display = question.classList.contains('correct') ? 'flex' : 'none';
                break;
            case 'incorrect':
                question.style.display = question.classList.contains('incorrect') ? 'flex' : 'none';
                break;
            case 'skipped':
                question.style.display = question.classList.contains('skipped') ? 'flex' : 'none';
                break;
        }
    });
}

function initShareButtons() {
    // WhatsApp
    document.getElementById('shareWhatsApp')?.addEventListener('click', function() {
        const text = `I scored ${document.getElementById('scorePercentage')?.textContent} on MockVibe!`;
        const url = window.location.href;
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    });
    
    // Twitter
    document.getElementById('shareTwitter')?.addEventListener('click', function() {
        const text = `I scored ${document.getElementById('scorePercentage')?.textContent} on MockVibe!`;
        const url = window.location.href;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    });
    
    // Copy link
    document.getElementById('copyLink')?.addEventListener('click', function() {
        utils.copyToClipboard(window.location.href);
    });
}

function initPrintButton() {
    document.getElementById('printResults')?.addEventListener('click', function() {
        window.print();
    });
}

function initNavigation() {
    // Previous/Next result navigation
    const results = utils.getLocalStorage('test_results') || [];
    const currentIndex = 0; // Would need to track current result index
    
    document.getElementById('prevResult')?.addEventListener('click', function() {
        if (currentIndex < results.length - 1) {
            // Navigate to previous result
        }
    });
    
    document.getElementById('nextResult')?.addEventListener('click', function() {
        if (currentIndex > 0) {
            // Navigate to next result
        }
    });
}

function updateShareUrl(testId) {
    const shareUrl = `${window.location.origin}${window.location.pathname}?id=${testId}`;
    document.getElementById('resultUrl')?.value = shareUrl;
}

function showNoResults() {
    const container = document.querySelector('.results-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="no-results">
            <div class="no-results-icon">
                <i class="fas fa-chart-line"></i>
            </div>
            <h2>No Test Results Found</h2>
            <p>Take a test to see your results here.</p>
            <a href="test-portal.html" class="btn btn-primary">
                <i class="fas fa-play"></i> Take a Test
            </a>
        </div>
    `;
}

// Export analytics data
function exportResults(format = 'json') {
    const results = utils.getLocalStorage('test_results') || [];
    
    if (format === 'json') {
        const dataStr = JSON.stringify(results, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `mockvibe-results-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    } else if (format === 'csv') {
        // Convert to CSV
        const headers = ['Test', 'Date', 'Score', 'Percentage', 'Correct', 'Incorrect', 'Skipped', 'Time Taken'];
        const csvRows = [headers.join(',')];
        
        results.forEach(result => {
            const row = [
                `"${result.testTitle}"`,
                new Date(result.date).toLocaleDateString(),
                result.result.score,
                result.result.percentage.toFixed(1),
                result.result.correct,
                result.result.incorrect,
                result.result.skipped,
                utils.formatTime(result.result.timeTaken)
            ];
            csvRows.push(row.join(','));
        });
        
        const csvString = csvRows.join('\n');
        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', `mockvibe-results-${new Date().toISOString().split('T')[0]}.csv`);
        a.click();
    }
}
