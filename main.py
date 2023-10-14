from PIL import Image
from clip_interrogator import Config, Interrogator

print("hello world")
image = Image.open(image_path).convert('RGB')
ci = Interrogator(Config(clip_model_name="ViT-L-14/openai"))
print(ci.interrogate(image))