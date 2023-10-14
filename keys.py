import spacy

def extract_keywords(sentence):
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(sentence)
    tags = [tag for tag in doc.ents]
    return tags
    
def trim_and_hash(tags):
    for idx, tag in enumerate(tags):
        tag_str = tag.text
        tag_str = f"#{tag_str}"
        tag_str = tag_str.replace(" ", "")
        tags[idx] = tag_str
    return tags
        
        
def get_keywords_from_sentence(sentence):
    return trim_and_hash(extract_keywords(sentence))
