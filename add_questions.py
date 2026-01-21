# add_questions.py
import json

def add_question(subject_file, topic_name, question_data):
    """Add a question to a JSON file"""
    with open(subject_file, 'r') as f:
        data = json.load(f)
    
    # Find the topic
    for topic in data['topics']:
        if topic['topic_name'] == topic_name:
            topic['questions'].append(question_data)
            print(f"✓ Question added to {topic_name}")
            break
    
    with open(subject_file, 'w') as f:
        json.dump(data, f, indent=2)
    print(f"✓ Saved to {subject_file}")

# Example usage
if __name__ == "__main__":
    new_question = {
        "id": "QUANT_001_003",
        "question": "Find the LCM of 12, 18, and 24",
        "options": ["36", "48", "72", "96"],
        "correct_answer": "72",
        "explanation": "LCM = 2×2×2×3×3 = 72",
        "difficulty": "easy"
    }
    
    add_question('data/quant.json', 'Number System', new_question)
