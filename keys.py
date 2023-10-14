import spacy

def extract_keywords(sentence):
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(sentence)
    print(doc.ents)
    return doc.ents
    

extract_keywords("""spaCy is an open-source software library for advanced natural language processing, 
        written in the programming languages Python and Cython. The library is published under the MIT license
        and its main developers are Matthew Honnibal and Ines Montani, the founders of the software company Explosion.""")
