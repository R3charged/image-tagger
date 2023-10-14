from PIL import Image
from clip_interrogator import Config, Interrogator

def image_to_prompt(image):
    ci = Interrogator(Config(clip_model_name="ViT-L-14/openai"))
    return ci.interrogate(image)