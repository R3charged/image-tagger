import spacy

def extract_keywords(sentence):
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(sentence)
    tags = [tag for tag in doc.ents]
    print(tags)
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
        
    
get_keywords_from_sentence("""spaCy is an open-source software library for advanced natural language processing, 
        written in the programming languages Python and Cython. The library is published under the MIT license
        and its main developers are Matthew Honnibal and Ines Montani, the founders of the software company Explosion.""")
