from PIL import Image
import keys
from clip_interrogator import Config, Interrogator

def image_to_prompt(image):
    ci = Interrogator(Config(clip_model_name="ViT-L-14/openai"))
    return ci.interrogate(image)

def image_to_tags(image):
    prompt = image_to_prompt(image)
    print(prompt)
    return keys.get_keywords_from_sentence(prompt)