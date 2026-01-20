// questions.js - Expanded Question Bank
const questionBank = {
    math: [
        {
            id: "MATH001",
            question: "If the price of sugar increases by 20%, by what percent should a family reduce its consumption so that the expenditure remains the same?",
            options: ["16.67%", "20%", "25%", "33.33%"],
            correct: 0,
            explanation: "If price increases by 20%, consumption should decrease by (20/120)×100 = 16.67% to keep expenditure same.",
            difficulty: "medium",
            topic: "percentage"
        },
        {
            id: "MATH002",
            question: "A train 100 meters long passes a pole in 10 seconds. What is its speed in km/hr?",
            options: ["36 km/hr", "40 km/hr", "45 km/hr", "50 km/hr"],
            correct: 0,
            explanation: "Speed = Distance/Time = 100m/10s = 10 m/s = 10 × 18/5 = 36 km/hr",
            difficulty: "easy",
            topic: "speed_distance_time"
        },
        {
            id: "MATH003",
            question: "The average of first 10 natural numbers is:",
            options: ["5", "5.5", "6", "6.5"],
            correct: 1,
            explanation: "Average = Sum of numbers / Count = (1+2+...+10)/10 = 55/10 = 5.5",
            difficulty: "easy",
            topic: "average"
        },
        {
            id: "MATH004",
            question: "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 4 times?",
            options: ["10 years", "15 years", "20 years", "25 years"],
            correct: 1,
            explanation: "If money doubles in 5 years, rate = 100/5 = 20%. To become 4 times, interest needed = 300%. Time = 300/20 = 15 years.",
            difficulty: "medium",
            topic: "simple_interest"
        },
        {
            id: "MATH005",
            question: "If a/b = 2/3 and b/c = 4/5, then what is a:c?",
            options: ["8:15", "15:8", "3:4", "4:3"],
            correct: 0,
            explanation: "a/b = 2/3, b/c = 4/5. Multiply: (a/b)×(b/c) = a/c = (2/3)×(4/5) = 8/15. So a:c = 8:15",
            difficulty: "medium",
            topic: "ratio_proportion"
        }
    ],
    
    reasoning: [
        {
            id: "REASON001",
            question: "If 'PENCIL' is coded as 'OCMBHK', how is 'PAPER' coded?",
            options: ["OZODQ", "OZODS", "OZQDS", "OZQDQ"],
            correct: 0,
            explanation: "Each letter moves one step backward: P→O, E→D, N→M, C→B, I→H, L→K. So PAPER → OZODQ",
            difficulty: "medium",
            topic: "coding_decoding"
        },
        {
            id: "REASON002",
            question: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
            options: ["Granddaughter", "Grandson", "Daughter", "Grandmother"],
            correct: 0,
            explanation: "A is daughter of C, C is daughter of D. So A is granddaughter of D.",
            difficulty: "medium",
            topic: "blood_relations"
        },
        {
            id: "REASON003",
            question: "Find the odd one out: 2, 5, 10, 17, 26, 37, 50, 64",
            options: ["17", "26", "37", "64"],
            correct: 3,
            explanation: "Pattern: n²+1 (1²+1=2, 2²+1=5, etc.). 8²+1=65, not 64.",
            difficulty: "easy",
            topic: "number_series"
        },
        {
            id: "REASON004",
            question: "If 'X + Y' means X is the father of Y, 'X × Y' means X is the sister of Y, which of the following means M is the uncle of N?",
            options: ["M + P × N", "M × P + N", "M + P + N", "None of these"],
            correct: 3,
            explanation: "With given symbols, uncle relation cannot be directly expressed.",
            difficulty: "hard",
            topic: "symbolic_operations"
        }
    ],
    
    english: [
        {
            id: "ENG001",
            question: "Choose the correct synonym of 'Benevolent':",
            options: ["Malevolent", "Kind", "Selfish", "Cruel"],
            correct: 1,
            explanation: "Benevolent means well-meaning and kindly, synonym is Kind.",
            difficulty: "easy",
            topic: "synonyms"
        },
        {
            id: "ENG002",
            question: "Identify the error: 'One of the students (A) / have not (B) / submitted their assignment. (C) / No error (D)'",
            options: ["A", "B", "C", "D"],
            correct: 1,
            explanation: "Should be 'has not' because 'one of' takes singular verb.",
            difficulty: "medium",
            topic: "error_detection"
        },
        {
            id: "ENG003",
            question: "Choose the correct passive voice: 'They are building a new bridge.'",
            options: [
                "A new bridge is being built by them.",
                "A new bridge is built by them.",
                "A new bridge was being built by them.",
                "A new bridge has been built by them."
            ],
            correct: 0,
            explanation: "Present continuous active becomes present continuous passive.",
            difficulty: "medium",
            topic: "voice"
        },
        {
            id: "ENG004",
            question: "Fill in the blank: 'She was _____ tired that she fell asleep immediately.'",
            options: ["so", "such", "very", "too"],
            correct: 0,
            explanation: "'So...that' is the correct correlative conjunction.",
            difficulty: "easy",
            topic: "conjunctions"
        }
    ]
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionBank;
}
